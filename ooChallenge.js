class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return 'Beep.'
    }

    toString(){
        return `The vehicle is a ${make} ${model} from ${year}.`
    }
}

class Car extends Vehicle {
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 2
    }

    revEngine(){
        return 'VROOM!'
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity
        this.vehicles = []
    }

    add(newVehicle){
        this.newVehicle = newVehicle
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full!"
        }
        if(newVehicle instanceof Vehicle){
            this.vehicles.push(newVehicle);
            return 'Vehicle added!'
        }
        else{
            throw 'Only vehicles are allowed in here!'
        }
    }
}