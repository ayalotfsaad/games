import { Ui } from "./ui.js";

export class Details{
    constructor(id){
        this.ui = new Ui();

        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
         });
   
         this.getDetails(id);
    }

      getDetails(id) {

        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

         fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
         .then((response) => response.json())
        .then((response) => this.ui.displayDetails(response))
        .catch((err) => console.error(err))
        .finally(() => {
           loading.classList.add("d-none");
        });
    }
    
   startEvent() {
    document.querySelectorAll(".card").forEach((item) => {
       item.addEventListener("click", () => {
          const id = item.dataset.id;
          this.showDetails(id);
       });
    });
 }

 showDetails(id) {
    const details = new Details(id);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
 }


}
