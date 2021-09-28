// class is plan for cerating objects
class BMI {
    //new constructor will initialise data in class, constructor takes arguments
    constructor(height, weight) {
        //this. creates local instances
        this.height = height;
        this.weight = weight;
    }

    //this method will return individuals bmi using formula below
    calculateBMI() {
        
        //formula given
        let bmi = this.weight / (this.height ** 2);

        //returns bmi
        return bmi;

    }
}

//inovking class
let MyBmi = new BMI(4, 180);
let calculatedBMI = MyBmi.calculateBMI();

//outputting to console
console.log(calculatedBMI);