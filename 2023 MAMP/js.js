


// let key = "1c970389ed12487bbd8759941955dea4"
 let key ="9e6e82d694914ba58d7df9a86bbf70f6" //OG
// let key = "418d21cfee3d4e95ba01057ef44927ed"
// let url = "https://newsapi.pagano.io/"
let url = "https://newsapi.org/v2/"
let urlHead = url + "top-headlines?" + "country=it" + "&category=Business" + "&apiKey=" + key
let urlSpo = url + "top-headlines?" + "country=it" + "&category=Sports" + "&apiKey=" + key
let ricercaUtente = url + "everything?q="
let q






//CHECK CURRENT THEME
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

 let defTheme = localStorage.getItem("theme")


if (localStorage.length === 0){
    console.log("vuotoooo")

    //PRECEDENZA A MEDIA QUERY
    if(prefersDarkScheme === true){
        console.log("il tema è scuro")
        document.documentElement.setAttribute("data-theme", "dark")
        defTheme = "dark"
    } else{
        console.log("il tema è chiaro")
        document.documentElement.setAttribute("data-theme", "light")
        defTheme = "light"
    };
} else {
    //PRECEDENZA A LOCALSTORAGE
    document.documentElement.setAttribute("data-theme", defTheme);
}



let circles = document.querySelectorAll(".circle");
let moons = document.querySelectorAll(".fa-moon-o");
let suns = document.querySelectorAll(".fa-sun-o");
let toggles = document.querySelectorAll(".dark-toggle");


if(defTheme === "dark"){
    //toggle sta su luna
    circles.forEach(element => element.classList.add("check-checked","dark-circle"));
    moons.forEach(element => element.classList.add("moon-light"));
    suns.forEach(element => element.classList.add("sun-dark"));
    toggles.forEach(element => element.classList.add("darkbg"));


} else {
    // toggle sta su sole
    circles.forEach(element => element.classList.remove("check-checked","dark-circle"));
    moons.forEach(element => element.classList.remove("moon-light"));
    suns.forEach(element => element.classList.remove("sun-dark"));
    toggles.forEach(element => element.classList.remove("darkbg"));
    

}

//toggle
function toggleTheme(){
    let curTheme = localStorage.getItem("theme") || defTheme;
    let targTheme = "light";
    let circles = document.querySelectorAll(".circle");
    let moons = document.querySelectorAll(".fa-moon-o");
    let suns = document.querySelectorAll(".fa-sun-o");
    let toggles = document.querySelectorAll(".dark-toggle");

    if(curTheme === targTheme){
        targTheme = "dark"
        circles.forEach(element => element.classList.add("check-checked","dark-circle"));
        moons.forEach(element => element.classList.add("moon-light"));
        suns.forEach(element => element.classList.add("sun-dark"));
        toggles.forEach(element => element.classList.add("darkbg"));



    } else{
        targTheme = "light"
        circles.forEach(element => element.classList.remove("check-checked","dark-circle"));
        moons.forEach(element => element.classList.remove("moon-light"));
        suns.forEach(element => element.classList.remove("sun-dark"));
        toggles.forEach(element => element.classList.remove("darkbg"));

    }

    localStorage.setItem("theme", targTheme);
    document.documentElement.setAttribute("data-theme", targTheme);
}



//TOGGLE THEME





//MOBILE SEARCHBAR

let mSearch = document.querySelector(".search");
function mobileSearch(){
    console.log("aperta");
    //NASCONDI LOGO E MENU
   let navReplace = document.querySelectorAll(".logo, .menu-label");
   navReplace.forEach(element => element.classList.add("move-aside"));

   //SHOW BARRA DI RICERCA
   document.querySelector(".search").classList.add("mobile-search-open");
   document.querySelector("#mobSearchBar").classList.remove("move-aside");
   document.querySelector(".close-icon").classList.remove("move-aside");

   //FILTERS 
   document.querySelector(".card").classList.toggle("margin-top");
   document.querySelector(".mob-filter-container").classList.toggle("move-aside");

   //FOCUS BARRA DI RICERCA
   document.getElementById("mobSearchBar").focus();

   //NASCONDI ICONA "APRI RICERCA"
   document.querySelector(".search > i").classList.add("move-aside");

    //MOSTRA ICONA RICERCA MOBILE
    document.querySelector(".search-hidden").classList.remove("move-aside");
};

//CHIUDI MOBILE SEARCHBAR
function closeMobileSearch(){
    console.log("chiusa");


     let navReplace = document.querySelectorAll(".logo, .menu-label");
     navReplace.forEach(element => element.classList.remove("move-aside"));

     document.querySelector(".search").classList.remove("mobile-search-open");
     document.querySelector("#mobSearchBar").classList.add("move-aside");
     document.querySelector(".close-icon").classList.add("move-aside");

    //FILTERS 
    document.querySelector(".card").classList.toggle("margin-top");
    document.querySelector(".mob-filter-container").classList.toggle("move-aside");

     //CLEAR SEARCH INPUT
     let cercaValue = document.querySelector("#mobSearchBar");
     cercaValue.value = null;

     //MOSTRA ICONA "APRI RICERCA"
     document.querySelector(".search > i").classList.remove("move-aside");

     //NASCONDI ICONA RICERCA MOBILE
     document.querySelector(".search-hidden").classList.add("move-aside");

};

 




// NO RISULTATI
function error() {

    //NASCONDI SPORT / READ MORE / BUSINESS / SHOW RESULTS

    let homeList = document.querySelectorAll(".card, .desk-card-1, .multi-photo, .multi-text, .desk-card-2, .multi-photo-2, .multi-text-2, .readMore, .show-results");
    homeList.forEach(element => element.classList.add("move-aside"));

    //SHOW "NESSUN RISULTATO"
    let topic = document.querySelector("#error");
    topic.classList.remove("move-aside");

    //HIDE LISTA RISULTATI
    document.querySelector(".lista-risultati").classList.add("move-aside");

};





let vm = {
    el: "#app",
    data: {
        headlines: "",
        title: "",
        urlToImage: "",
        description: "",
        sportHeadlines: [],
        search: null,
        results: "sdfasdf",
        risultatiUtente:[],
        articoli:[],
        link: "",
        currentTheme: "",
        url: "",



    },
    

    methods: {


        avviaRicercaMob: function () {
            let QUERY = document.getElementById("mobSearchBar")
            let q = this
            let qResults;

            let endpoint = ricercaUtente + QUERY.value + "&apiKey=" + key

            console.log(endpoint);

            axios.get(endpoint).then(function (rQuery) {

                if (rQuery.data.articles.length > 0) {

                    q.results = rQuery.data.articles;

                    vm.data.articoli = q.results;

                    //SHOW BUSINESS SECTION IF HIDDEN
                    let d1 = document.querySelector(".card");

                    if (d1.classList.contains("move-aside")){
                        d1.classList.remove("move-aside")
                        
                    };

                    //NASCONDI EVENTUALE NO RESULTS
                    document.querySelector("#error").classList.add("move-aside");
                


                    //NASCONDI TOPIC
                    let topic = document.querySelector(".card-topic");
                    topic.classList.add("move-aside");  


                    //NASCONDI SPORT / READ MORE
                    const sportBlock = document.querySelectorAll(".desk-card-2, .multi-photo-2, .multi-text-2, .readMore");
                    sportBlock.forEach(element => element.classList.add("move-aside"));
                    
                    document.querySelector(".card-sport").classList.add("move-aside");

                    document.querySelector(".show-results").classList.remove("move-aside");

                    //ADD "X"
                    document.querySelector(".desk-topic-pol h2").classList.remove("nox");

                    //HIDE LISTA RISULTATI
                     document.querySelector(".lista-risultati").classList.add("move-aside");

                     //CAMBIA IN "RISULTATI RICERCA"
                    let topicDesk = document.querySelector(".desk-topic-pol h2");
                    document.querySelector(".desk-topic-pol").classList.add("topic-to-search");
                    topicDesk.textContent = `risultati per "${QUERY.value}"`;


                } else error();

            });
        },
     

        avviaRicerca: function () {
            let QUERY = document.getElementById("searchBar")
            let q = this
            let qResults;

            let endpoint = ricercaUtente + QUERY.value + "&apiKey=" + key

            console.log(endpoint);

            axios.get(endpoint).then(function (rQuery) {

                if (rQuery.data.articles.length > 0) {

                    q.results = rQuery.data.articles;


                    //  localStorage.setItem("risultati", JSON.stringify(q.results));
                    // qResults = localStorage.getItem(JSON.parse("risultati"));


                    //  qResults = JSON.parse(localStorage.getItem("risultati"));
                    //  console.log(qResults);
                    // window.open("results.html", "_self");
                    // document.querySelector(".card-container").classList.add("move-aside");
                    // document.querySelector(".nav-wrap").classList.toggle("nav-recentered");  

                    //  q.risultatiUtente = qResults;

                    vm.data.articoli = q.results;

                    //SHOW BUSINESS SECTION IF HIDDEN
                    let d1 = document.querySelector(".desk-card-1");
                    let d2 = document.querySelector(".multi-photo");
                    let d3 = document.querySelector(".multi-text");

                    if (d1.classList.contains("move-aside")){
                        d1.classList.remove("move-aside")
                        d2.classList.remove("move-aside")
                        d3.classList.remove("move-aside")
                        
                    };

                    //NASCONDI EVENTUALE NO RESULTS
                    document.querySelector("#error").classList.add("move-aside");
                


                    //CAMBIA IN "RISULTATI RICERCA"
                    let topic = document.querySelector(".desk-topic-pol h2");
                    document.querySelector(".desk-topic-pol").classList.add("topic-to-search");
                    topic.textContent = `risultati per "${QUERY.value}"`

                    //NASCONDI SPORT / READ MORE
                    const sportBlock = document.querySelectorAll(".desk-card-2, .multi-photo-2, .multi-text-2, .readMore");
                    sportBlock.forEach(element => element.classList.add("move-aside"));

                    document.querySelector(".card-sport").classList.add("move-aside");

                    document.querySelector(".show-results").classList.remove("move-aside");

                    //ADD "X"
                    document.querySelector(".desk-topic-pol h2").classList.remove("nox");

                    //HIDE LISTA RISULTATI
                     document.querySelector(".lista-risultati").classList.add("move-aside");


                } else error();

            });
        },

        chiudiRicerca:function(){

                    //CLEAR SEARCH INPUT
                    let cercaValue = document.querySelector("#searchBar");
                    cercaValue.value = null;

                    //CAMBIA IN "RISULTATI RICERCA"
                    let topic = document.querySelector(".desk-topic-pol h2");
                    document.querySelector(".desk-topic-pol").classList.remove("topic-to-search");
                    topic.textContent= `business`

                     //REMOVE "X"
                    document.querySelector(".desk-topic-pol h2").classList.add("nox");
        
                     //RISULTATI DEFAULT
                     axios.get(urlHead).then(function (r) {
                     vm.data.articoli = r.data.articles;
                     });
        
                     let Shl = this;
                     axios.get(urlSpo).then(function (rSpo) {
                     Shl.sportHeadlines = rSpo.data.articles;
                     })
        
                     //SHOW SPORT SECTION / READ MORE 
                     const sportBlock = document.querySelectorAll(".desk-card-2, .multi-photo-2, .multi-text-2, .readMore");
                     sportBlock.forEach(element => element.classList.remove("move-aside"));

                     document.querySelector(".show-results").classList.add("move-aside");

                     //HIDE LISTA RISULTATI
                     document.querySelector(".lista-risultati").classList.add("move-aside");
                 },

        showResults: function(){
            document.querySelector(".lista-risultati").classList.remove("move-aside");
        },
 

        chiudiRicercaMob: function () {



        },



    },
    
    mounted: function () {
        
        axios.get(urlHead).then(function (r) {
            vm.data.articoli = r.data.articles;
        });

        let Shl = this;
        axios.get(urlSpo).then(function (rSpo) {
            Shl.sportHeadlines = rSpo.data.articles;
        });



    },

    filters:{
        trunc: function(str, num){
            if (str.length > num){
              return str.slice(0, num) + "..."
            } else return str
          }
    }, 



};





let app = new Vue(vm);
