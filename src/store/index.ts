import Vue from 'vue';
import Vuex from 'vuex';
import { loadUsersData } from '../service/dataTableAPI';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tables: {},
  },
  mutations: {
    initTable(state, data) {
      Vue.set(state.tables, data.tableName, data.initialState);
    },

    updateRemoteUser(state: any, data) {
      state.tables[data.key] = data.items.slice();
    },

    addLocalTableRow(state: any, data) {
      state.tables[data.key].push(data.row);
    },

    updateLocalTableRow(state: any, data) {
      state.tables[data.key].splice(data.row.id, 1, data.row);
    },

    refreshLocalIdes(state: any, data) {
      state.tables[data.key].forEach((el: any, iterator: number) => {
        el.id = iterator;
      });
    },

    removeLocalRow(state: any, config) {
      state.tables[config.key].splice(config.itemId, 1);
    },
  },

  actions: {
    addUser(context, config) {
      fetch(config.url, {
        method: 'POST',
        body: JSON.stringify(config.row),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        const users = loadUsersData(config.url);
        users.then((data) => {
           context.commit('updateRemoteUser', { items: data, key: config.key});
           });
      });
    },

    editUser(context, config) {
      fetch(config.url + '/' + config.row.id, {
        method: 'PUT',
        body: JSON.stringify(config.row),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        const users = loadUsersData(config.url);
        users.then((data) => {
          context.commit('updateRemoteUser', { items: data, key: config.key});
        }).catch((error) => { alert(error); });
      });
    },

    async getUsers(context, config) {
      const users = loadUsersData(config.url);
      users.then((data) => { context.commit('updateRemoteUser', {items: data, key: config.key}); }).
      catch((error) => { alert(error); });
    },

    removeUser(context, config) {
      fetch(`${config.url}/${config.itemId}`, {
        method: 'DELETE',
      }).then(() => {
        const users = loadUsersData(config.url);
        users.then((data) => { context.commit('updateRemoteUser',  {items: data, key: config.key}); })
        .catch((error) => { alert(error); });
      });
    },
  },
  getters: {
    getTables: (state) => state.tables,
  },
  plugins: [createPersistedState()],
});
