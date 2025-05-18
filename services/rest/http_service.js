const http = require('http');


class HttpService {

    constructor() {

    }

    getRandomNumber(){
        http.get('http://www.randomnumberapi.com/api/v1.0/random', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                console.log(data);
            });
        }).on('error', (err) => {
            console.log('Error: ' + err.message);
        });
    }
}