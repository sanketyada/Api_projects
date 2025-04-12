// async function Caller(){
//     let response = await fetch('https://dog.ceo/api/breeds/image/random')
//     let data = await response.json()
//     console.log(data.message)
// }
// Caller()

let url='https://dog.ceo/api/breeds/image/random'

function randomImage(){
return fetch(url)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    return data.message;
})
.catch((err)=>{
    return ("Error",err);
})
}


let btn = document.querySelector("button")
let div = document.querySelector("#box")
btn.addEventListener('click',async()=>{
    let image = await randomImage()
    let img=document.createElement('img')
    img.setAttribute('src',`${image}`)
    div.appendChild(img)
    console.log(img)
})