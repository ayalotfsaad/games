import { Details } from "./details.js";
import { Ui } from "./ui.js";



export class Games {

    constructor(){
      
        this.getApi("mmorpg");

        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
               document.querySelector(".menu .active").classList.remove("active");
               e.target.classList.add("active");
               this.getApi(e.target.dataset.category);
            });
         });
   
         this.ui = new Ui();
    }

    async getApi(category){
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
       method: "GET",
       headers: {
          "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          Accept: "application/json",
          "Content-Type": "application/json",
       },
    };

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
    const response = await api.json();
     console.log(response);
    this.ui.displayDataGame(response);
   //  this.startEvent();
    loading.classList.add("d-none");
 }


}