const API="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
let datos ="";

const ObtenerPokemon = (url) =>{
    return fetch(url)
    .then((response)=> response.json())
    .then((json)=>{
      pokeData(json.results),paginacion(json),console.log()
     

      
     
    })
    //el error
    .catch((error)=>{
        console.log("Error" , error);
    });
    
}

//otro fetch.

const pokeData = (pokemon) =>{
    let html = "";
    document.getElementById("datos_personajes").innerHTML="";
    pokemon.forEach((pk)=>{
        const URL = pk.url;
        return fetch(URL)
         .then((response)=>response.json())
         .then((json)=>{
            llenarDatos(json,html);
         })
         .catch((error)=>{
            console.log("Error" , error);
        });

        
    });
}

//dibujar las cards
const llenarDatos = (pokemon,html)=>{
    

    
    console.log(pokemon)

        html += `<div class="col mt-5 prueba"> <div class="card" style="width: 18rem;"> <img class="card-img-top" src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}"> <div class="card-body"> <h5 class="card-title">${pokemon.name}</h5> <p class="card-text">${datos}</p> <p class="card-text"></p> </div> </div> </div>`
      

      

    

    document.getElementById("datos_personajes").innerHTML += html;
    
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