// alert('hello');

function DataTable(config, data) {
  const tableParent = document.getElementById(config.parent);
  let tableHeader = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  let thr = document.createElement('tr');
  thr.className = 'tr';
  tableParent.append(tableHeader);
  tableParent.append(tableBody);
  tableHeader.append(thr);

  config1.columns.forEach(element => {
    let thd = document.createElement('thead');
    let arrow = document.createElement('i');
    //arrow.className = 'fas';
    arrow.className = 'fas fa-sort';
    thd.className = element.type === 'number' ? 'align-right':'td';
    thd.innerText = element.title;
    thr.append(thd);//<i class="fas fa-sort"></i>
    thd.append(arrow);

  });
  let seqNum = 1;
  data.forEach(element => {
    let tbr = document.createElement('tr');
    tbr.className = 'tr';
    for (const key in element) {
     let tbd = document.createElement('td');
     tbd.className = typeof(element[key]) === 'number' && key!= 'id' ? 'align-right':'td';
     tbd.innerText = key === 'id' ? seqNum : element[key];
     tbr.append(tbd);
    }
    seqNum++;
    tableBody.append(tbr);
  });

}

const config1 = {
  parent: 'usersTable',
  columns: [
    { title: '№', value: '_index' },
    { title: 'Имя', value: 'name' },
    { title: 'Фамилия', value: 'surname' },
    { title: 'Возраст', value: 'age', type: 'number' },
  ]
};

const users = [
  { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
  { id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
];

DataTable(config1, users);
