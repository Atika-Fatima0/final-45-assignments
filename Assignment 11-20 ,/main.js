"use strict";
// question 11
//Arryy
//Defines an array of names
Object.defineProperty(exports, "__esModule", { value: true });
var names = ["Atika", "Ayesha", "Hamza", "Nimra", "Azaan"];
//Loop
//For each
//For of loop
// loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//For each
names.forEach(function (friend) {
    console.log(friend);
});
//For of loop 
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
//question 12
//loop
for (var i = 0; i < names.length; i++) {
    console.log("Hello, ".concat(names[i], "! how are you today?"));
}
//For each
names.forEach(function (friend) {
    console.log("Hi, ".concat(friend, "! how are you today?"));
});
//For of loop 
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var friendName = names_2[_a];
    console.log("Dear, ".concat(friendName, "! how are you today?"));
}
//question 13
var transportationMode = ["Car", "Motorcycle", "Bicycle", "Bus"];
//loop
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would to own a ".concat(transportationMode[i]));
}
//for each
transportationMode.forEach(function (mode) {
    console.log("I would like to own a ".concat(mode));
});
//question 14
//define an Array of guest
var guestList = ["Atika Fatima", "Hamza Aleem", "Ayesha Allauddin"];
//Invite each guest for dinner
//for each
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner"));
});
//map()
//Invite guest
var invitation = guestList.map(function (guest) { return "Dear ".concat(guest, ", you are cordially invited to dinner"); });
console.log(invitation);
//for each
invitation.forEach(function (invitations) {
    console.log(invitations);
});
//question 15
var guestLists = ["Atika Fatima", "Hamza Aleem", "Ayesha Allauddin"];
//printing the name who cant make dinner
var unableAttend = guestLists.splice(2.1)[0];
console.log("".concat(unableAttend, " not invited for dinner"));
//push
guestLists.push("Nimra Hareem");
//print a massege
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited"));
});
//question 16
console.log("Great news! we found a bigger table");
//unshift
guestLists.unshift("bob");
//splice
guestLists.splice(Math.floor(guestLists.length / 2), 0, "Anaya");
//push()
guestLists.push("hanzala");
console.log(guestLists);
//for each
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you all are cordially invited to dinner"));
});
//question 17
//print massege
console.log("Unfortunately! the new dinner table wont arrive so we can invite only two guest");
guestLists.unshift("alice");
//print massege updted list
console.log("updated list of guest", guestLists);
//remove guest from the list
while (guestLists.length > 2) {
    var removeGuest = guestLists.pop();
    if (removeGuest !== undefined) {
        console.log("Sorry ".concat(removeGuest, ", we cant invite you"));
    }
}
//print a messege to each of the two people still on your list. Letting them now they are still inited
//for each
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you both are invited for the dinner"));
});
// remove two name from the list
//splice
guestLists.splice(0, guestList.length);
//print updated empty list
console.log("Updated list of guest:", guestLists);
//question 18
//printing my fvt city 
var placeToVisit = ["Paris", "Italy", "China", "New york", "Kashmir"];
//print in orignal order
console.log("Orignal order:", placeToVisit);
//print array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", placeToVisit.slice().sort());
//array is still in orignal order by printingn it.
console.log("Orignal order:", placeToVisit);
// array in reverse alphabetical order without changing the order of the orignl list
console.log("Reverse order:", placeToVisit.slice().sort().reverse());
//array is still in its orignal order by printing it again
console.log("Orignal order:", placeToVisit);
//reverse the order of your list. print yhe array to show that its order has changed.
console.log("Reverse order changed");
placeToVisit.reverse();
console.log(placeToVisit);
//reverse the order of list again. print the list to show its back to its orignal order
console.log("Orignal order:", placeToVisit.sort());
console.log(placeToVisit);
//sort to change array so its stored in reverse alphabetical order .print the array to show that its order has been changed
console.log("Reverse alphabetical order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);
//question 19
//print massege
console.log("Unfortunately! the new dinner table wont arrive so we can invite only two guest");
guestLists.unshift("alice ,bob");
//print massege updted list
console.log("updated list of guest", guestLists);
//remove guest from the list
while (guestLists.length > 2) {
    var removeGuest = guestLists.pop();
    if (removeGuest !== undefined) {
        console.log("Sorry ".concat(removeGuest, ", we cant invite you"));
    }
}
//print a messege to each of the two people still on your list. Letting them now they are still inited
//for each
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you both are invited for the dinner"));
});
// remove two name from the list
//splice
guestLists.splice(0, guestList.length);
//print updated empty list
console.log("Updated list of guest:", guestLists);
//question 20
var countries = ["Usa", "Canada", "France", "Germany", "Japan"];
//print list of country
console.log("List of countries", countries.forEach(function (country) {
    console.log(country);
}));
