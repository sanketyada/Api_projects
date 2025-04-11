// let myPromise = new Promise((respone,reject)=>{
//     let num = Math.floor(Math.random()*10)+1;
//     if(num >4){
//         respone("Data Fetched Successfully");
//     }
//     else{
//         reject("Error Failed")
//     }
// })
// myPromise.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log("Error:",err)
// })





// function fact(){
//     return fetch('https://catfact.ninja/fact')
//     .then((data)=>{
//         return data.json()
//     })
//     .then((res)=>{
//         data=res.fact
//         console.log(data)
//     })
//     .catch((err)=>{
//         return ("Error:",err)
//     })
// }
// // fact().then(console.log);
// console.log(fact())

async function catfact(){
    let data = await fetch('https://catfact.ninja/fact')
    let parseData = await data.json()
    return parseData.fact
}
let button = document.querySelector("button")
let p =document.querySelector('p')
button.addEventListener('click',async ()=>{
    let data = await catfact()
    p.innerText=data
})