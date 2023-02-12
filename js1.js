


let key = "1c970389ed12487bbd8759941955dea4"
// let key ="9e6e82d694914ba58d7df9a86bbf70f6" OG
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





let vm = {
    el: "#app",
    data: {
        headlines: "",
        title: "",
        urlToImage: "",
        description: "",
        sportHeadlines: [],
        search: null,
        results: "",
        risultatiUtente:[],
        articoli:[],
        link: "",
        currentTheme: "",
        url: "",



    },
    

    methods: {


        



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