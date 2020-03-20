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
    .then(async (list) => {
        for (i = 0; i < 10; i++) { //i<list.length
            console.log("Repo:" + list[i].name)
            const issuesUrl = list[i].issues_url.split("{")[0]
            const issues = fetch(issuesUrl);
            issues
                .then((res) => {
                    const list2 = res.json();
                    //console.log(list2)
                    for (j = 0; j < list2.length; j++) {
                        console.log("issues:" + list2[i].title)
                    }
                })
                
        }
    })
