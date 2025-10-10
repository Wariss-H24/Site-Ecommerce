const fs = require('fs');
const dataDB = './db.json';

const readDB = () => JSON.parse(fs.readFileSync(dataDB, 'utf8'));
const writeDB = (data) => fs.writeFileSync(dataDB, JSON.stringify(data, null, 2));

module.exports = { readDB, writeDB };