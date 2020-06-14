<template>
  <div class="user-table">
    <div class="table-search">
      <div class="title-wrap">
        <span class="table-name">{{ tableName }}</span>
        <MyButton :color="'bg-success'" :size="'btn-small'" @click="showModal({})">
          <template>add</template>
        </MyButton>
      </div>

      <Modal :title="'Add new row'" @okclose="updateMethod" @close="closeModalReset">
        <template #default>
          <label v-for="col in editableFields" :key="col.title" class="add-input">
            {{col.title}}
            <input
              v-model="answers[col.getValue()]"
              :type="setInputType(col)"
              :class="{'empty-input': answers[col.getValue()] === '' && failedSend }"
              class="slot-input"
              @input="setInputStyle"
            />
          </label>
        </template>
        <template #trigger>
          <span ref="triggerElement" />
        </template>
      </Modal>

      <input
        v-if="search"
        v-model="searchRequest"
        @input="usersArr"
        class="input-search"
        placeholder="search"
        type="text"
      />
    </div>

    <thead class="table-header">
      <tr class="tr">
        <th v-for="col in columns" :key="col.title" v-bind:class="deckClass(col)">
          {{col.title}}
          <button v-if="col.sortable" class="b-sort" @click="clickHandle(col.value)">
            <i v-if="sortClickCounter===0 || currentSortedField != col.value" class="fas fa-sort"></i>
            <i
              v-if="sortClickCounter===1 && currentSortedField === col.value"
              class="fas fa-sort-down"
            ></i>
            <i
              v-if="sortClickCounter===2 && currentSortedField === col.value"
              class="fas fa-sort-up"
            ></i>
          </button>
        </th>
      </tr>
    </thead>
    <tbody class="table-body">
      <tr v-for="(user, index) in usersSet" :key="user.id" class="tr">
        <td v-for="col in columns" :key="col.title" v-bind:class="deckClass(col)">
          {{getDeckValue(user, col, index)}}
          <div class="controls" v-if="col.value === 'actions'">
            <MyButton :color="'bg-error'" :size="'btn-small'" @click="removeTableRow(user)">
              <template>delete</template>
            </MyButton>
            <MyButton :color="'bg-warning'" :size="'btn-small'" @click="showModal(user)">
              <template>edit</template>
            </MyButton>
          </div>
        </td>
      </tr>
    </tbody>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyButton from '@/components/MyButton.vue';
import Modal from '@/components/Modal.vue';
// import LocalUser from '../types/localUser';
export default Vue.extend({
  components: {
    MyButton,
    Modal,
  },
  name: 'DataTable',
  props: {
    items: Array, // array of users
    columns: Array, // config of columns
    search: Object,
    tableName: String,
    apiUrl: String,
  },

  data() {
    return {
      sortClickCounter: 0,
      flag: false,
      currentSortedField: '',
      searchRequest: '',
      modalContent: 'Hello world',
      answers: {},
      currentRow: {},
      localItems: null,
      failedSend: false,
    };
  },
  created() {
    this.$store.commit('initTable', {
      tableName: this.tableName,
      initialState: this.items,
    });
    if (this.apiUrl) {
      this.$store.dispatch('getUsers', {
        url: this.apiUrl,
        key: this.tableName,
      });
    } else {
      this.$store.commit('refreshLocalIdes', { key: this.tableName });
    }
  },

  methods: {
    setInputType(configColumn: any) {
      if (configColumn.getValue() === 'birthday') {
        return 'date';
      } else if (configColumn['type' as keyof object]) {
        return configColumn['type' as keyof object];
      } else {
        return 'text';
      }
    },

    addLocalRow() {
      const newRow = this.makeNewLocalRow();
      const curentRowIsEmpty = this.checkObjectIsEmpty(this.currentRow);
      if (curentRowIsEmpty) {
        this.$store.commit('addLocalTableRow', {
          key: this.tableName,
          row: newRow,
        });
        this.$store.commit('refreshLocalIdes', this.tableName);
      } else {
        this.$store.commit('updateLocalTableRow', {
          key: this.tableName,
          row: newRow,
        });
      }
    },

    makeNewLocalRow() {
      const newRow: any = Object.assign({}, this.currentRow);
      this.columns.forEach((el: any) => {
        const key = el.getValue();
        if (el.editable !== false) {
          if (key === 'age') {
            const stringDateBorn = this.answers['age' as keyof object];
            newRow[key] = this.calculateAge(stringDateBorn);
          } else {
            newRow[key] = this.answers[key as keyof object];
          }
        } else {
          newRow[key] = '';
        }
      });
      const curentRowIsEmpty = this.checkObjectIsEmpty(this.currentRow);
      if (curentRowIsEmpty) {
        const l = this.$store.state.tables[this.tableName].length;
        newRow.id = l;
      }

      return newRow;
    },

    calculateAge(dataString: any) {
      const birthYear = new Date(dataString).getFullYear();
      return new Date().getFullYear() - birthYear;
    },

    showModal(targetRow: object) {
      this.currentRow = Object.assign({}, targetRow);
      if (!this.failedSend) {
        this.answers = {};
        this.editableFields.forEach((element: any) => {
          const key = element.getValue();
          const value = this.currentRow[key as keyof object]
            ? this.currentRow[key as keyof object]
            : '';
          this.$set(this.answers, key, value);
        });
      }

      const temp = this.$refs.triggerElement as HTMLElement;
      if (temp) {
        temp.click();
      }
    },
    closeModalReset() {
      this.failedSend = false;
    },
    refreshData() {
      this.$store.dispatch('getUsers');
    },

    removeTableRow(row: object) {
      const confirmRemove = confirm(
        `Do you really want remove ${row['name' as keyof object]}`,
      );
      if (confirmRemove && this.apiUrl) {
        this.$store.dispatch('removeUser', {
          itemId: row['id' as keyof object],
          url: this.apiUrl,
          key: this.tableName,
        });
      } else {
        this.$store.commit('removeLocalRow', {
          key: this.tableName,
          itemId: row['id' as keyof object],
        });
        this.$store.commit('refreshLocalIdes', { key: this.tableName });
      }
    },

    updateMethod() {
      if (!this.validateInputs()) {
        this.failedSend = true;
        this.showModal(this.currentRow);
      } else if (this.validateInputs()) {
        const config = this.createRemoteConfig();
        const curentRowIsEmpty = this.checkObjectIsEmpty(this.currentRow);
        if (this.apiUrl) {
          if (!curentRowIsEmpty) {
            const sendUser = this.$store.dispatch('editUser', config);
          } else {
            const sendUser = this.$store.dispatch('addUser', config);
          }
        } else {
          this.addLocalRow();
        }
        this.failedSend = false;
      }
    },

    createRemoteConfig() {
      const newRow = Object.assign({}, this.currentRow); // new row for add to database
      Object.keys(this.answers).forEach((element) => {
        const key = element as keyof object;
        newRow[key] = this.answers[key];
      });
      return { row: newRow, url: this.apiUrl, key: this.tableName };
    },

    checkObjectIsEmpty(anObject: any) {
      for (const key in anObject) {
        if (key) {
          return false;
        }
      }
      return true;
    },

    validateInputs() {
      let res = true;
      Object.keys(this.answers).forEach((element) => {
        const key = element as keyof object;
        if (this.answers[key] === '') {
          res = false;
        }
      });
      return res;
    },

    setInputStyle(event: any) {
      event.target.classList.remove('empty-input');
    },

    usersArr() {
      let res: any = [];
      if (this.searchRequest === '') {
        res = this.items.slice();
      }
      for (const itemUser of this.items) {
        const theUser: any = itemUser;
        for (const itemField of this.search.fields) {
          const specifiedFields = itemField;
          for (const itemFilter of this.search.filters) {
            const theFilter = itemFilter;
            if (
              theFilter(theUser[specifiedFields]).includes(
                theFilter(this.searchRequest),
              )
            ) {
              if (res.includes(theUser)) {
                break;
              } else {
                res.push(theUser);
              }
            }
          }
        }
      }
      this.localItems = res.slice();
    },
    clickHandle(sortedField: string) {
      if (this.currentSortedField !== sortedField) {
        this.currentSortedField = sortedField;
        this.sortClickCounter = 0;
      }
      this.sortClickCounter++;
      if (this.sortClickCounter === 3) {
        this.sortClickCounter -= 3;
      }
      this.sortData(sortedField);
    },
    sortData(sortedField: any) {
      switch (this.sortClickCounter) {
        case 1:
          this.items.sort((a: any, b: any) => {
            return a[sortedField] > b[sortedField] ? 1 : -1;
          });
          break;
        case 2:
          this.items.sort((a: any, b: any) => {
            return a[sortedField] < b[sortedField] ? 1 : -1;
          });
          break;
        case 0:
          this.items.sort((a: any, b: any) => {
            return a.id > b.id ? 1 : -1;
          });
          break;
      }
    },
    getDeckValue(anObject: object, col: any, id: number) {
      const x: string = col.title;
      switch (x) {
        case '№':
          return id + 1;
          break;
        case 'Возраст':
          if (typeof col.value === 'function') {
            return col.value(anObject);
          } else {
            return anObject[col.value as keyof object];
          }

        default:
          return anObject[col.value as keyof object];
          break;
      }
    },
    deckClass(collElement: any) {
      if (collElement.value === '_index') {
        return 'users-order';
      } else if (collElement.type === 'number') {
        return 'align-right';
      } else {
        return 'td';
      }
    },
  },
  computed: {
    usersSet() {
      if (this.localItems) {
        return this.$data.localItems;
      } else {
        return this.items;
      }
    },

    tdWidth() {
      return 800 / this.columns.length;
    },

    editableFields() {
      return this.columns.filter((el: any) => el.editable !== false);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.empty-input {
  box-shadow: inset 0 0 10px 0px rgba(255, 0, 0, 0.4);
}

.add-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
}
.title-wrap {
  display: inline-flex;
  align-items: center;
}
.controls {
  display: flex;
  padding: 2px;
}
.page-header {
  font-family: "Courier New", Courier, monospace;
}
.user-table {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: monospace;
  background-color: rgba(206, 214, 224, 0.8);
}
.table-header {
  font-weight: 600;
}
.table-body {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.table-search {
  padding: 10px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: space-between;
}
.table-name {
  margin-right: 10px;
  font-size: 1.1em;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.7);
}
.input-search {
  margin: 0;
  background-color: rgba(0, 0, 0, 0.05);
  border-style: none;
  padding: 3px 0 3px 5px;
  height: 20px;
}
.tr {
  display: flex;
  padding: 5px 0px 5px 0px;
  border-bottom: 1px solid rgba(0, 0, 255, 0.2);
  width: 100%;
}
td:last-child,
th:last-child {
  width: 50%;
  margin-right: 5px;
}
.td {
  text-align: left;
  width: 180px;
  padding: 0 7px 0 7px;
  word-wrap: break-word;
}

.align-right {
  .td;
  width: 100px;
  text-align: right;
}
.fas {
  cursor: pointer;
  user-select: none;
  display: flex;
}
.b-sort {
  margin-left: 7px;
  padding: 0;
  border-style: none;
}

.users-order {
  .td;
  width: 40px;
}

@media (max-width: 600px) {
  .td {
    display: inline-block;
    text-align: left;
    width: 10%;
    padding: 0 7px 0 7px;
    word-wrap: break-word;
  }

  .align-right {
    .td;
    text-align: right;
  }

  .user-table {
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
  }

  .users-order {
    width: 15px;
  }
}
</style>
