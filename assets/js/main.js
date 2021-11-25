


class Hero {
    constructor() {
        this.selectDropDownRenta;
        this.selectDropDownRentaItems;

        this.selectDropDownVenta;
        this.selectDropDownVentaItems;

        this.selectDropDownLenguage;
        this.selectDropDownLenguageItems;

        
        this.init();
    }

    init() {

        this.selectDropDownRenta            = document.getElementById("#sdb-renta");
        this.selectDropDownRentaItems       = document.getElementById("#sdb-renta-items");

        this.selectDropDownVenta            = document.getElementById("#sdb-venta");
        this.selectDropDownVentaItems       = document.getElementById("#sdb-venta-items");

        this.selectDropDownLenguage         = document.getElementById("#sdb-lng");
        this.selectDropDownLenguageItems    = document.getElementById("#sdb-lng-items");


        this.addListeners();
    }

    createElements() {

    }

    addListeners() {

        document.body.addEventListener('click', (event) => {
            if (
                event.target == this.selectDropDownRentaItems 
                || 
                event.target == this.selectDropDownVentaItems
                ||
                event.target == this.selectDropDownLenguageItems
                )

                return;

            this.selectDropDownRentaItems.classList.add("renta-items-off");
            this.selectDropDownVentaItems.classList.add("venta-items-off");
            this.selectDropDownLenguageItems.classList.add("lng-items-off");



        }, true);

        this.selectDropDownRenta.addEventListener("click", (event) => {
            event.preventDefault();
            this.selectDropDownRentaItems.classList.remove("renta-items-off");
        });

        this.selectDropDownVenta.addEventListener("click", (event) => {
            event.preventDefault();
            this.selectDropDownVentaItems.classList.remove("venta-items-off");
        });

        this.selectDropDownLenguage.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("ok");
            this.selectDropDownLenguageItems.classList.remove("lng-items-off");
        });

    }



}

const hero = new Hero();


