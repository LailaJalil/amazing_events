details= document.getElementById("containerDetails")

async function unEvento(){
    try {
        let id=location.search.slice(4)
        console.log(id);
        let answer = await fetch( `https://mind-hub.up.railway.app/amazing/${id} `)
        let data = await answer.json()
        console.log(data)
        let event= data.event
        console.log(data)
        cardCreator(event)
        
    }

    catch (error) {

        console.log(error)
    }
}

unEvento()












// cardCreator(filtrado[0])






function cardCreator (array){
if (array.assistance === undefined){
        array.assistance = array.estimate + " est."}

  
    
    details.innerHTML += `
        
    <article class=" details_card card row g-0 d-flex flex-row">
    <div class="col-md-6">
        <img src="${array.image}" class=" rounded-start" alt="${array.name}">
    </div>
    <div class="col-md-6 card-body d-flex flex-column justify-content-between align-items-start gap-4">
        <h5 class="card-title fw-bold text-uppercase">${array.name}</h5>
        <p class="card-text ">${array.date}</p>
        <p class="card-text ">${array.description}</p>
        <table class="text-center table-hover">
            <tr>
                <th>Category:</th>
                <td class="ps-5"> ${array.category}</td>
            </tr>
            <tr>
                <th>Place:</th>
                <td class="ps-5">${array.place}</td>
            </tr>
            <tr>
                <th>Capacity:</th>
                <td class="ps-5">${array.capacity}</td>
            </tr>
            <tr>
                <th>Assistance:</th>
                <td class="ps-5">${array.assistance}</td>
            </tr>
            <tr>
                <th>Price:</th>
                <td class="ps-5">${array.price}</td>
            </tr>
        </table>
        <a href="#" class="btn fw-bold align-self-center">Buy</a>
    </div>
</article>


`
}
