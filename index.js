// fetch data from API

const button=document.getElementById('fetchData')
const container=document.getElementById('container')

console.log(button)
async function fetchData(){
    const serverData= await fetch('https://fakestoreapi.com/products')
    const jsondata= await serverData.json()
    console.log(jsondata)
    container.innerHTML= JSON.stringify(`${jsondata}`)
}
button.addEventListener('click', fetchData)