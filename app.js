const axios = require('axios');
const { printTable } = require('console-table-printer');

const data = {
    data: 'O Hi this a test Car River Deer Car Bear and'
};

axios.post('https://cloudlabserver.herokuapp.com/getWordLengthFrequency', data)
    .then((res) => {
        // Get data from response
        var dataArray = res.data.split(" ");

        // Create a table
        const resultTable = [];

        // Populate the table with values
        for (let i = 0; i < dataArray.length - 1; i++) {
          resultTable.push({ wordlength: i + 1, wordcount: dataArray[i]})
        }

        // Print table
        printTable(resultTable);

    }).catch((err) => {
        console.error(err);
    });
