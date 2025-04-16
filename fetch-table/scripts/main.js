import { getAll } from './db.js';

const table = document.querySelector('table.table');

const generateTable = (tableData = []) => {
    const keys = Object.keys(tableData[0]);

    // Make table header.
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    keys.forEach( k => {
        const th = document.createElement('th');
        th.innerText = k;
        tr.appendChild(th);
    });
    const th = document.createElement('th');
    th.innerText = 'actions';
    tr.appendChild(th);

    // Tbody
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    tableData.forEach( row => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        keys.forEach( k => {
            const td = document.createElement('td');
            td.innerText = row[k];
            tr.appendChild(td);
        });
    });

};

getAll().then(
    data => generateTable(data)
);