
let events = data.events

let container2= document.getElementById("container-card-2")
let fechaMayor= filtroFechaMayor(events, data.currentDate)





for (let events of fechaMayor){
     crearCard(events, container2)

 }
 
 
 
 
 //FUNCTION

function filtroFechaMayor(array, currentDate){
     let update=[]
     for(let i=0; i<array.length; i++){
          if (currentDate < array[i].date){ 
          update.push(array[i])
          }
     }

     return update
}
 function crearCard(evento, elemento){
     elemento.innerHTML += `
     
     <article class=" card rounded-4 p-0 pb-5 " style="width: 18rem;" id="card">
     <img src="${evento.image}" alt="${evento.name}" class="rounded-top"  />
         <div class="card-body pb-0 mb-0">
     <h5 class="card-title">${evento.name}</h5>
     <p class="card-text">${evento.date}</p>
     <p class="card-text">${evento.description}</p>
     <div class="d-flex flex-row justify-content-between pt-3">
                         <p class="fw-bold">Price $ ${evento.price}</p>
                         <a href="#" class="btn">More info</a>
                    </div>
         </div>
  </article>
  
     
     `
 }
