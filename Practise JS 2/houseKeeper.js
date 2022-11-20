// Challenge: add a method to the housekeeper constructor function, and the method is called "clean"
//so we can get the housekeeper to perform the clean function. And we will do it in a simplified way
//so that our method all that it does is sends an alert that says "cleaning in progress". So add that to the
//constructor function, create a new housekeeper from that constructor function and call the cleaning method from 
//that constructor function 


function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name; 
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress...");
    }
}


// now we create a new housekeeper object and assign a housekeeper to clean 
let houseKeeper1 = new HouseKeeper(12, "Jame", ["lobby", "bedroom"]);


//if you enter the code below you get the alert "cleaning in progress"
houseKeeper1.clean();
