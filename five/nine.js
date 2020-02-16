// https://api.github.com/orgs/paypal
// https://api.github.com/orgs/google

//     Get repos list
//     Get members list
//     Each repo open issues

const fetch = require('node-fetch');

const dataUrl = 'https://api.github.com/orgs/paypal';

// GET request
const employees = fetch(dataUrl);

//Repos
employees
    .then((res) => res.json())
    .then((list) => { return (list.repos_url) })
    .then((repos_url) => {
        const data = fetch(repos_url);
        return data

    })
    .then((res) => res.json())
    .then((list) => {
        console.log("All Repos:");
        for (i = 0; i < list.length; i++) {
            console.log(list[i].name)
        }
    })
