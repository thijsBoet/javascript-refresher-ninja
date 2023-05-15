// Object literal
let userOne = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    login() {
        console.log(`${this.name} logged in`);
    },
    logout() {
        console.log(`${this.name} logged out`);
    }
};

console.log(userOne.name, userOne.email);
userOne.login();
userOne.logout();

// DRY - Don't Repeat Yourself
// Would be better to use a class to create multiple users otherwise you would have to copy and paste the object literal and change the values
class User {
    constructor(email, name) {
        this.name = name
        this.email = email
        this.score = 0
    }
    login() {
        console.log(`${this.name} logged in`);
        return this
    }
    logout() {
        console.log(`${this.name} logged out`);
        return this
    }
    increaseScore() {
        this.score++
        console.log(`${this.name} has a score of ${this.score}`);
        return this
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.name != user.name
        })
    }
}

const userTwo = new User('mario@nintendo.co.jp', 'Mario');
const userThree = new Admin('luigi@nintendo.co.jp', 'Luigi');
// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

// Can chain methods together
userTwo.increaseScore().increaseScore().increaseScore().logout();

let users = [userOne, userTwo, userThree];
userThree.deleteUser(userTwo);
console.log(users);
