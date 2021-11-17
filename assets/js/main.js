


// class Hero {
//     constructor() {
        
//         this.selectRent = false;

//         this.sdwRentaLabel;
//         this.rentaSelect;
//         this.heroBG;
//         this.sdwRenta;
//         this.init();
//     }

//     init() {
//         this.sdwRentaLabel = document.getElementById("#sdw-renta-lb").getBoundingClientRect();
//         this.rentaSelect = document.getElementById("#rentaMore");
//         this.heroBG =  document.getElementsByClassName("hero bg");

//         this.createElements();
//         this.addListeners();
//     }

//     createElements(){
//         this.sdwRenta = document.createElement('div');
//         this.sdwRenta.classList.add("sdw-renta");
//     }


//     addListeners() {

//         this.rentaSelect.addEventListener("click", (event) => {
//             event.preventDefault();

//             this.heroBG[0].appendChild(this.sdwRenta);

//             this.selectRent = true;
            
//             console.log("click ")
//         });

//     }



// }

// const hero = new Hero();


