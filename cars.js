// class is plan for cerating objects
class vehicle{
    //new constructor will initialise data in class, constructor takes arguments
    constructor(make, model, year, color){
        //this. creates local instances
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;

    }

    //this method logs to screen
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    }

}

//cars class that inherits from vehicles
class Cars extends vehicle {
    //constructor takes 5 arguments
    constructor(make, model, year, color, doors){
        //super invokes constructor on parent class
        super(make, model, year, color);
        this.doors = doors;
    }

    //method
    Information(){
        //super invokes constructor on parent class
        super.Information();
        //output number of doors
        console.log(`Doors: ${this.doors}`);
    }
}

//passing arguments
let myCar = new Cars('VW', 'Golf R', 2019, 'Lapiz Blue', 2);
myCar.Information();


