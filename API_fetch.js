const myAPI = 'https://iskarr.github.io/austindonovan.github.io/api/business.json'

fetch(myAPI)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);
})
