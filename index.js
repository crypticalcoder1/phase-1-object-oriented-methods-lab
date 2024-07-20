// Define the BoardMember constructor function
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
    
    // Method: veto
    this.veto = function() {
        return "No, I must disagree";
    };
    
    // Method: approve
    this.approve = function() {
        return "You can do that!";
    };
    
    // Method: doCharity
    this.doCharity = function() {
        return "I like to help people.";
    };
    
    // Method: releasePressStatement
    this.releasePressStatement = function() {
        return "You will see great things from Scuber.";
    };
    
    // Method: sayHi
    this.sayHi = function() {
        return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
    };
}

// Example usage:
const boardMember1 = new BoardMember("Alice", "California", "Finance");
const boardMember2 = new BoardMember("Bob", "New York", "Marketing");

// Test the methods
console.log(boardMember1.veto()); // Output: "No, I must disagree"
console.log(boardMember1.approve()); // Output: "You can do that!"
console.log(boardMember1.doCharity()); // Output: "I like to help people."
console.log(boardMember1.releasePressStatement()); // Output: "You will see great things from Scuber."
console.log(boardMember1.sayHi()); // Output: "Hi, my name is Alice. I am from California, and I was trained in Finance."
