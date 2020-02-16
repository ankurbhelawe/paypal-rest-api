const fetch = require('node-fetch');

const dataUrl  = 'http://dummy.restapiexample.com/api/v1/employees';

// GET request
const employees = fetch(dataUrl);

employees
  .then((res) => res.json())
  .then((list) => console.log(list))
  .catch((err) => console.log(err))
  .finally(() => console.log('done'))