<template>
  <div class="user-table">
    <div class="table-search">
      <span class="table-name">
        {{ tableName }}
        <!-- <button class="btn btn-add" data-method="POST">добавить</button> -->
      </span>
      <input
        v-model="searchRequest"
        @input="usersArr"
        class="input-search"
        placeholder="search"
        type="text"
      />
    </div>
    <thead class="table-header">
      <tr class="tr">
        <td v-for="col in columns" :key="col.title" v-bind:class="deckClass(col)">
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
        </td>
      </tr>
    </thead>
    <tbody class="table-body">
      <tr v-for="(user, index) in usersSet" :key="user.id" class="tr">
        <td
          v-for="col in columns"
          :key="col.title"
          v-bind:class="deckClass(col)"
        >{{getDeckValue(user, col.value, index)}}</td>
      </tr>
    </tbody>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'DataTable',
  props: {
    items: Array, // array of users
    columns: Array, // config of columns
    search: Object,
    tableName: String,
  },
  updated() {
    // alert("updated");
  },
  data() {
    return {
      sortClickCounter: 0,
      usersSet: this.items,
      currentSortedField: '',
      searchRequest: '',
    };
  },

  methods: {
    usersArr() {
      const res: any = [];
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
      this.usersSet = res.slice();
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
          this.usersSet.sort((a: any, b: any) => {
            return a[sortedField] > b[sortedField] ? 1 : -1;
          });
          break;
        case 2:
          this.usersSet.sort((a: any, b: any) => {
            return a[sortedField] < b[sortedField] ? 1 : -1;
          });
          break;
        case 0:
          this.usersSet.sort((a: any, b: any) => {
            return a.id > b.id ? 1 : -1;
          });
          break;
      }
    },
    getDeckValue(anObject: object, key: keyof object, id: number) {
      if (key === '_index') {
        return id + 1;
      } else {
        return anObject[key];
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
    tdWidth() {
      return 800 / this.columns.length;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page-header {
  font-family: "Courier New", Courier, monospace;
}
.user-table {
  width: 100%;
  font-size: 1.3em;
  display: flex;
  flex-direction: column;
  font-family: monospace;
  background-color: rgba(206, 214, 224, .8);
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
  font-size: 1.2em;
  font-weight: 600;
}
.input-search {
  margin: 0;
  background-color: rgba(0, 0, 0, 0.05);
  border-style: none;
  padding-left: 5px;
}
.tr {
  display: flex;
  padding: 5px 0px 5px 0px;
  border-bottom: 1px solid rgba(0, 0, 255, 0.2);
  width: 100%;
}
td:last-child {
  width: 50%;
  margin-right: 5px;
}
.td {
  text-align: left;
  width: 180px;
  padding: 0 7px 0 7px;
  word-wrap: break-word;
}
.table-body * {
  font-size: 0.9em;
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
.btn-edit {
  font-family: "consolas";
  margin-right: 4px;
  background-color: rgba(255, 255, 0, 0.5);
}
.btn-add {
  margin-left: 10px;
  background-color: rgba(255, 255, 255, 0.6);
}
.btn-remove {
  background-color: rgba(255, 0, 0, 0.3);
}
.btn {
  border-radius: 3px;
  border-style: none;
  outline: none;
  box-shadow: 0 0 3px 1px #818181;
  cursor: pointer;
  padding: 4px;
  &:active {
    box-shadow: inset 0 0 3px 1px rgba(129, 129, 129, 1);
  }
}
.users-order {
  .td;
  width: 40px;
}

@media (max-width: 600px) {
  .td {
    display: inline-block;
    text-align: left;
    width: 100px;
    padding: 0 7px 0 7px;
    word-wrap: break-word;
  }

  .align-right {
    .td;
    width: 20%;
    text-align: right;
  }

  .user-table {
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
  }
  .btn-edit,
  .btn-remove {
    font-size: 0.8em;
    padding-top: 0;
    padding-bottom: 0;
  }

  .users-order {
    width: 15px;
  }
}
</style>
