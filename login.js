const data="https://jsonplaceholder.typicode.com/todos";
const login = document.getElementById('log');
var result;
login.addEventListener('click', () => {
    result = window.fetch("https://jsonplaceholder.typicode.com/todos");
    result.then(onfullfill,onrejection).then((prmsobj) =>console.log(data)).then()
})