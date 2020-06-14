export const users = [
  { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
  { id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
  { id: 30052, name: 'Сид', surname: 'Меер', age: 10 },
  { id: 30053, name: 'Себастиан', surname: 'Персон', age: 13 },
  { id: 30054, name: 'Ричард', surname: 'Гериот', age: 14 },
  { id: 30055, name: 'Рич', surname: 'Кларк', age: 9 },
];

export const slides = [
  'https://loremflickr.com/320/240',
  'https://loremflickr.com/320/240/brazil,rio',
  'https://loremflickr.com/g/320/240/paris,girl/all',
];

export const columns = [
  { title: '№', editable: false, value: '_index', getValue() {return this.value; } },
  { title: 'Имя', value: 'name', getValue() {return this.value; } },
  { title: 'Фамилия', value: 'surname',  sortable: true, getValue() {return this.value; } },
  { title: 'Возраст', value: 'age', type: 'number', sortable: true, getValue() {return this.value; } },
  { title: 'Действия', value: 'actions', editable: false, getValue() { return this.value; } },
];

export const search = {
  fields: ['name', 'surname'],
  filters: [
    (v: any) => v.toLowerCase(),
  ],
};

