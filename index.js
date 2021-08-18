// Mock api's here


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data));