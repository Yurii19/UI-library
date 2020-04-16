
function DataTable(config, usersData) {
  const tableParent = document.getElementById(config.parent);
  tableParent.innerHTML = '';
  const tableCap = document.createElement('div');
  tableCap.classList.add('table-search');
  const tableName = document.createElement('span');
  tableName.innerText = 'Users';
  tableName.classList.add('table-name');
  let tableHead = document.createElement('thead');
  tableHead.classList.add('table-header');
  const tableBody = document.createElement('tbody');
  tableBody.classList.add('table-body');
  let thr = document.createElement('tr');
  thr.className = 'tr';
  let btnAddUser = document.createElement('button');
  btnAddUser.classList.add('btn-add');
  btnAddUser.setAttribute('id', 'addUser');
  btnAddUser.innerHTML = 'добавить';

  const searchInput = document.createElement('input');
  searchInput.classList.add('input-search');
  searchInput.placeholder = 'search';
  searchInput.setAttribute('type', 'text');
  searchInput.id = 'tabSearch';

  tableParent.append(tableCap);
  tableParent.append(tableHead);
  tableParent.append(tableBody);
  tableCap.append(tableName);
  tableName.append(btnAddUser);
  if (config1.search) {
    tableCap.append(searchInput);
  };

  tableHead.append(thr);

  function renderTable(lConfig, lData) {
    thr.innerHTML = '';
    lConfig.columns.forEach(element => { //draw table head
      let thd = document.createElement('td');
      thd.className = element.type === 'number' ? 'align-right' : 'td';
      thd.innerText = element.title;
      thr.append(thd);

      if (element.sortable) {
        let arrow = document.createElement('i');
        const sortButton = document.createElement('button');
        sortButton.classList.add('b-sort');
        arrow.classList.add('fas');
        if (element.value === sortState.getSortedColumn()) {
          arrow.classList.add(sortState.sortButtonsIcons[sortState.getCounter()]);
        } else {
          arrow.classList.add('fa-sort');
        }
        sortButton.setAttribute('data-mark', element.value);
        arrow.setAttribute('data-mark', element.value);
        sortButton.append(arrow);
        thd.append(sortButton);
      }
    });

    let seqNum = 1;
    tableBody.innerHTML = '';
    lData.forEach(element => {
      let btnRemove = document.createElement('button');
      btnRemove.classList.add('btn-actions');
      btnRemove.classList.add('btn-remove');
      btnRemove.innerHTML = 'удалить';
      btnRemove.setAttribute('data-id', element.id);
      let btnEdit = document.createElement('button');
      btnEdit.classList.add('btn-actions');
      btnEdit.innerHTML = '~';
      let tbr = document.createElement('tr');
      tbr.className = 'tr';
      lConfig.columns.forEach((tableColumn) => {
        const key = tableColumn.value;
        let tbd = document.createElement('td');
        tbd.className = tableColumn.type === 'number' && key != 'id' ? 'align-right' : 'td';
        if (key === '_index') {
          tbd.innerText = seqNum;
        } else if (key === 'birthday') {
          tbd.innerText = getDate(element['birthday']);
        } else if (key === 'actions') {
          tbd.append(btnRemove);
          tbd.append(btnEdit);
          // tbd.classList.add('btn-actions');
        } else (tbd.innerText = element[key]);
        tbr.append(tbd);
      })
      seqNum++;
      tableBody.append(tbr);
    });
  }

  searchInput.addEventListener('input', (ev) => {
    let inData = [];
    let querry = ev.target.value;
    if (!config.search.fields) { //default search if fields does not exist
      if (querry === '') {
        inData = users.slice();
      } else {
        data.forEach(element => {
          for (const key in element) {
            if (element[key].toString().includes(querry)) {
              inData.push(element);
              break;
            }
          }
        })
      }
    }

    if (config.search.fields) {
      if (querry === '') {
        inData = users.slice();
      } else {
        selectedFields = [];
        const searchFields = config.search.fields;
        const searchFilters = config.search.filters;

        for (let i = 0; i < searchFields.length; i++) {
          const userField = searchFields[i];
          for (let j = 0; j < usersData.length; j++) {
            const userObj = usersData[j];
            for (let k = 0; k < searchFilters.length; k++) {
              const theFilter = searchFilters[k];
              if (theFilter(userObj[userField]).includes(theFilter(querry))) {
                console.log(theFilter);
                if (inData.includes(userObj)) {
                  break;
                } else {
                  inData.push(userObj);
                }
              }
            }
          }
        }
      }
    }

    dynamicData = inData.slice();
    renderTable(config, inData);
  });

  document.getElementById('usersTable').addEventListener('click', (ev) => {
    if (ev.target.parentNode.classList.contains('b-sort')) {

      let sortMark = ev.target.dataset.mark;
      if (sortState.getSortedColumn() != sortMark) {
        sortState.resetCounter();
        sortState.setCounter();
      } else {
        sortState.setCounter();
      }
      sortState.setSortedColumn(sortMark);
      sortData(dynamicData, sortState);
      renderTable(config, dynamicData);
    }
  });

  document.getElementById('usersTable').addEventListener('click', (ev) => {
    if (ev.target.classList.contains('btn-actions')) {

      let userId = ev.target.dataset.id;
      const user = dynamicData.find(el => el.id === userId);
      const message = 'Are you really want remove the user ' + user.name + ' ' + user.surname + ' ?';
      let delTriger = confirm(message);
      if (delTriger) {
        const reqUrl = config1.apiUrl + '/' + userId;
        let res = fetch(reqUrl, {
          method: 'DELETE',
        }).then(() => {
          fetch(config1.apiUrl)
            .then((responce) => {
              return responce.json();
            })
            .then((data) => { dynamicData = data.slice(); renderTable(config, dynamicData); });
        });
      }
    }
  });

  renderTable(config, usersData);
}

const config1 = {
  apiUrl: 'https://5e938231c7393c0016de48e6.mockapi.io/api/ps5/users',
  defaultSort: { field: 'id', type: 'ascending' },
  parent: 'usersTable',
  columns: [
    { title: '№', value: '_index' },
    { title: 'Имя', value: 'name' },
    { title: 'Фамилия', value: 'surname' },
    { title: 'Возраст', value: 'birthday', type: 'number' },
    { title: 'Действия', value: 'actions' }
  ],
  search: {
    fields: ['name', 'surname'],
    filters: [
      v => v.toLowerCase(),
    ]
  }
};

const users = [
  { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
  { id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
  { id: 30052, name: 'Сид', surname: 'Меер', age: 10 },
  { id: 30053, name: 'Себастиан', surname: 'Персон', age: 13 },
  { id: 30054, name: 'Ричард', surname: 'Гериот', age: 14 },
];

let dynamicData = [];

fetch(config1.apiUrl)
  .then((responce) => {
    return responce.json();
  })
  .then((data) => { dynamicData = data.slice(); DataTable(config1, dynamicData); });

function getDate(dstr) {
  const birthYear = new Date(dstr).getFullYear();
  return new Date().getFullYear() - birthYear;
}

let sortState = {
  setCounter: function () {
    this.sortCounter++;
    if (this.sortCounter == 3) { this.sortCounter -= 3 };
  },
  resetCounter: function () {
    this.sortCounter = 0;
  },
  getCounter: function () {
    return this.sortCounter;
  },
  getSortedColumn: function () {
    return this.sortedColumn;
  },
  setSortedColumn: function (theColumn) {
    return this.sortedColumn = theColumn;
  },
  sortButtonsIcons: ['fa-sort', 'fa-sort-down', 'fa-sort-up'],
  sortedColumns: ['default', 'surname', 'age'],
  sortedColumn: 'default',
  sortCounter: 0,
};

function sortData(inpData, State) {
  switch (State.getCounter()) {
    case 1:
      inpData.sort((a, b) => { return a[State.getSortedColumn()] > b[State.getSortedColumn()] ? 1 : -1; });
      break;
    case 2:
      inpData.sort((a, b) => { return a[State.getSortedColumn()] < b[State.getSortedColumn()] ? 1 : -1; });
      break;
    case 0:
      inpData.sort((a, b) => { return a.id > b.id ? 1 : -1; });
      break;
  }
}