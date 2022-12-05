import * as csv from 'csvtojson'

export const convertCsvToJson = async (path: any) => {
    console.log(path);
    return await csv({ flatKeys: true }).fromFile(path);
}

export const convertJsonToCsv = async (json: any, file: any) => {
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: file,
        header: [
            { id: 'email', title: 'Email' },
            { id: 'name', title: 'Name' },
            { id: 'profile_score', title: 'Profile Score' },
            { id: 'ratings_score', title: 'Ratings Score' },
            { id: 'search_score', title: 'Search Score' },
        ]
    });
    csvWriter
        .writeRecords(json)
        .then(() => console.log('The CSV file was written successfully'));
}