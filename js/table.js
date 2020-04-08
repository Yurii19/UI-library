// alert('hello');

function DataTable(config, data) {
  const tableParent = document.getElementById(config.parent);
  tableParent.innerHTML = '';
  let tableHeader = document.createElement('thead');
  tableHeader.classList.add('table-header');
  const tableBody = document.createElement('tbody');
  let thr = document.createElement('tr');
  thr.className = 'tr';
  tableParent.append(tableHeader);
  tableParent.append(tableBody);
  tableHeader.append(thr);

  config1.columns.forEach(element => {
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
  data.forEach(element => {
    let tbr = document.createElement('tr');
    tbr.className = 'tr';
    for (const key in element) {
      let tbd = document.createElement('td');
      tbd.className = typeof (element[key]) === 'number' && key != 'id' ? 'align-right' : 'td';
      tbd.innerText = key === 'id' ? seqNum : element[key];
      tbr.append(tbd);
    }
    seqNum++;

    tableBody.append(tbr);
  });

}

const config1 = {
  defaultSort: { field: 'id', type: 'ascending' },
  parent: 'usersTable',
  columns: [
    { title: '№', value: '_index' },
    { title: 'Имя', value: 'name' },
    { title: 'Фамилия', value: 'surname', sortable: true },
    { title: 'Возраст', value: 'age', type: 'number', sortable: true },
  ]
};

const users = [
  { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
  { id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
  { id: 30052, name: 'Сид', surname: 'Меер', age: 10 },
  { id: 30053, name: 'Себастиан', surname: 'Персон', age: 13 },
  { id: 30054, name: 'Ричард', surname: 'Гериот', age: 14 },
];

let sortState = {
  setCounter: function () {
    this.sortCounter++;
    if (this.sortCounter == 3) {this.sortCounter -= 3 };
  },
  getCounter: function() {
    return this.sortCounter;
  },
  getSortedColumn: function() {
    return this.sortedColumn;
  },
  setSortedColumn: function(theColumn) {
    return this.sortedColumn = theColumn;
  },
  sortButtonsIcons: ['fa-sort','fa-sort-down', 'fa-sort-up'],
  sortedColumns: ['default','surname','age'],
  sortedColumn: 'default',
  sortCounter: 0,
  //localSortState: 'fa-sort' 
};


let surnameFlag = 0;
let ageFlag = 0;
DataTable(config1, users);

document.getElementById('usersTable').addEventListener('click', (ev) => {
  if (ev.target.parentNode.classList.contains('b-sort')) {
    sortMark = ev.target.dataset.mark;
    sortCount = sortState.sortCounter;
   // sortState.sortValue = sortMark;
    sortState.setCounter();
    sortState.setSortedColumn(sortMark);
    renderTable(users, sortMark, sortCount);
    DataTable(config1, users);
  }
})

function renderTable(arr, sortFactor, sortVersion) {
  switch (sortVersion) {
    case 0:
      arr.sort((a, b) => { return a[sortFactor] > b[sortFactor] ? 1 : -1; });
      break;
    case 1:
      arr.sort((a, b) => { return a[sortFactor] < b[sortFactor] ? 1 : -1; });
      break;
    case 2:
      arr.sort((a, b) => { return a.id > b.id ? 1 : -1; });
      break;

    default:
      break;
  }
}
