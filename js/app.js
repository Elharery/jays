let pro = document.getElementById("product");
let boxes  = document.getElementById("boxes");

fetch("https://elharery.github.io/jays-api/products.json")
.then(res => {
    if (!res.ok) throw new Error("Failed to fetch, Please Call The Supporetr");
    return res.json();
})
.then(data => {
    for(let i = 0; i < data.length; i++){
        boxes.innerHTML += `<div class="box">
        <div class="img">
                <img src="${data[i].image}" alt="Fetching Photo Error">
                    </div><div class="ft-b">
                    <span>${data[i].price} LE</span>
                <button>Details</button>
            </div>
        </div>`;
    }
})
.catch(err => console.error(err));
// 
//     document.querySelectorAll("p").forEach((e , l)=>{
//         e.onclick = ()=>{
//                 fetch("http://127.0.0.1:5500/js/data/products.json")
// .then(res => {
//     if (!res.ok) throw new Error("Failed to fetch");
//     return res.json();
// })
// .then(data => {
//             for(let k = 0; k < data.length; k++){
//         if(l + 1 == data[k].id){
//             console.log(data[k].name)
//         }
//         }
// })
// .catch(err => console.error(err));
//         }
//     })