let mindLista = []

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('mind').addEventListener('click', async () => {
        mindLista = adatMegjelenites.result 
        adatMegjelenites(mindLista)
    })

    document.getElementById('abc').addEventListener('click', async () => {
        mindLista = adatMegjelenites.result 
        mindLista.sort(function(a, b){ 
            var nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
            if (nameA < nameB) 
             return -1;
            if (nameA > nameB)
             return 1;
            return 0; 
           });
           adatMegjelenites(mindLista)
    })

    document.getElementById('legdragabb').addEventListener('click', async () => {
        mindLista = adatMegjelenites.result 
        mindLista.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        adatMegjelenites(mindLista)
    })
})

async function adatMegjelenites(termeklista){
    let response = await fetch('products.json')
    let result = await response.json()

    termeklista.textContent = ''

    for (let p of result.products) {
        let li = document.createElement('li')
        li.textContent = p.id + ". " + p.title + " - " + p.description 
            + " - Price: " + p.price + " - Discount: " + p.discountPercentage 
            + "% - Rating: " + p.rating + " - Stock: " + p.stock + " - Brand: " + p.brand
            + " - Category: " + p.category;
        document.getElementById("termekLista").appendChild(li);
    }
}