import Axios from 'axios';

const baseURL = 'https://localhost:44337';

const getAllCandy = () => new Promise((resolve, reject) => {
    Axios.get(`${baseURL}/candy`).then((result) => {
        var candy = result.data;
        resolve(candy)
    }).catch((err) => {
        reject(console.error('Ya done goofed!', err));
    });
});

const addCandy = userCandy => Axios.post(`${baseURL}/candy`, userCandy);

export default  { 
                    getAllCandy,
                    addCandy
                }
