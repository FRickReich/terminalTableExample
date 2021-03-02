const Table = require('./table');

const table = new Table();

const columns =
[
    {
        key: 'id',
        title: '#',
        width: 10
    },
    {
        key: 'name',
        title: 'Name',
        width: 25
    },
    {
        key: 'group',
        title: 'Group',
        width: 15
    },
    {
        key: 'role',
        title: 'Role',
        width: 50
    }
]
const rows =
[
    {
        id: 1,
        name: 'Thingy 1',
        group: 'this',
        role: 'Admin'
    },
    {
        id: 2,
        name: 'Thingy 2',
        group: 'other',
        role: 'Admin'
    },
    {
        id: 3,
        name: 'Thingy 3',
        group: 'this',
        role: 'Moderator'
    }
];

table.setTitle("Unsere Tabelle");
table.setColumns(columns);
table.setRows(rows);
table.setWidth(70);

// console.log(table);

table.showTable();
