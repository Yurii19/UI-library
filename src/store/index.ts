import Vue from 'vue';
import Vuex from 'vuex';
import { loadUsersData } from '../service/dataTableAPI';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    tables: {},
    users: {},
  },
  mutations: {
    initTable(state, data) {
      Vue.set(state.tables, data.tableName, data.initialState);
    },

    increment(state) {
      state.counter++;
    },

    updateRemoteUser(state, data) {
      state.tables[data.key] = data.items.slice();
    },

    addLocalTableRow(state, data) {
      state.tables[data.key].push(data.row);
    },

    updateLocalTableRow(state, data) {
      state.tables[data.key].splice(data.row.id, 1, data.row);
    },

    refreshLocalIdes(state, config) {
      state.tables[config.key].forEach((el, iterator) => {
        el.id = iterator;
      });
    },

    removeLocalRow(state, config) {
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
  modules: {
  },
  getters: {
    getUsers: (state) => state.users,
    getTables: (state) => state.tables,
  },
});
