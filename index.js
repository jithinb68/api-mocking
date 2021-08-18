// Mock api's here

const axios = require("axios");

axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    console.log(response.data);
})

axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    console.log(response.data);
})

axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
    console.log(response.data);
})

axios.get('https://jsonplaceholder.typicode.com/albums').then((response) => {
    console.log(response.data);
})

axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
    console.log(response.data);
})