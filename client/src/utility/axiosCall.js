import axios from 'axios';

const headers = {
    'content-type':'application/json',
    'x-rapidapi-host':'example.com',
    'x-rapidapi-key': process.env.RAPIDAPI_KEY
}

const instance = axios.create({
    baseURL: 'https://api.instagram.com',
    headers: headers,
});

export default {
    getData: () =>
    instance({
        'method':'GET',
        'url':'/query',
        'params': {
            'search':'parameter',
        },
    }),
    postData: () =>
    instance({
        'method': 'POST',
        'url':'/api',
        'data': {
            'item1':'data1',
            'item2':'item2'
        }
    })
}