const API="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

const ObtenerPokemon = (url) =>{
    return fetch(url)
    .then((response)=> response.json())
    .then((json)=>{
      llenarDatos(json.results),paginacion(json),console.log(json) 
    })
    //el error
    .catch((error)=>{
        console.log("Error" , error);
    });
    
}


const llenarDatos = (pokemon)=>{
    let html = "";
    pokemon.forEach((pk)=>{

        html += '<div class="col mt-5 prueba">'
        html += '<div class="card" style="width: 18rem;">';
        html += `<img class="card-img-top" src="" alt="${pk.name}">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pk.name}</h5>`
        html += `<p class="card-text"></p>`
        html += `<p class="card-text"></p>`
        html += '</div>'
        html += '</div>'
        html += '</div>'

      

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

ObtenerPokemon(API);