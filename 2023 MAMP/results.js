let risultati = JSON.parse(localStorage.getItem("risultati"));

console.log(risultati);





// CREA LISTA RISULTATI 

// for (let i = 0; i < risultati.length; i++){
//    singoloRisultato = document.createElement("li");



//    document.querySelector("#app1").appendChild(listaRisultati);

// };

// singoloRisultato.appendChild(document.createTextNode("{{title}}"));
// singoloRisultato.setAttribute("v-for","item in risultati")
// listaRisultati.appendChild(singoloRisultato);


// listaRisultati.appendChild(document.createElement(singoloRisultato[i]));





new Vue({
    el: "#app1",
    // data(){
    //     return{
    //         title: risultati[0].title,
    //         risultati,
            
    //     }
        
    // },

    methods: {
        guarda(){
            console.log("ci siamo");
        }
    },

    mounted() {

       

    },
    

    
});



    


    





