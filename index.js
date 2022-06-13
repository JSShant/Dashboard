const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu__btn");
const closeBtn = document.querySelector("#close__btn")


menuBtn.addEventListener("click", ()=> {
    sideMenu.style.display = "block"
})

closeBtn.addEventListener("click", ()=>{
    sideMenu.style.display = "none";
})

orders.forEach(order => {
    const tr = document.createElement("tr");
    const  trContent =  `
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td>${order.shipping}</td>
                            <td>Details</td>
                            `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
    
})