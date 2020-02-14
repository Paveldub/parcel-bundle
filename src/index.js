// import { bro } from './bro'
// import './styles/main.scss'
const fs = require('fs')

fs.readFile('src/files/input.txt', 'utf8', function(err, data) {
    console.log(data);
});
