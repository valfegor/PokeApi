const API="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
let datos ="";

const ObtenerPokemon = (url,datos) =>{
    return fetch(url)
    .then((response)=> response.json())
    .then((json)=>{
       
        datos = json.results[0].url;
       
      llenarDatos(json.results,datos),paginacion(json),console.log()
     

      
     
    })
    //el error
    .catch((error)=>{
        console.log("Error" , error);
    });
    
}


const llenarDatos = (pokemon,datos)=>{
    let html = "";

    
    pokemon.forEach((pk)=>{

        html += `<div class="col mt-5 prueba"> <div class="card" style="width: 18rem;"> <img class="card-img-top" src="" alt="${pk.name}"> <div class="card-body"> <h5 class="card-title">${pk.name}</h5> <p class="card-text">${datos}</p> <p class="card-text"></p> </div> </div> </div>`
      

      

    });

    document.getElementById("datos_personajes").innerHTML = html;
    
}

const paginacion = (boton)=>{
    
    let prevDisabled = "";
    let nextDisabled = "";
    (boton.previous==null)?prevDisabled="disabled":prevDisabled="";
    (boton.next==null)?nextDisabled="disabled":nextDisabled="";
    let html = `<li class="page-item" ${prevDisabled} ><a class="page-link" onclick="ObtenerPokemon('${boton.previous}')">previus</a></li> <li class="page-item" ${nextDisabled} ><a class="page-link" onclick="ObtenerPokemon('${boton.next}')">Next</a></li>`;
    document.getElementById("paginacion").innerHTML=html;
}

ObtenerPokemon(API,datos);