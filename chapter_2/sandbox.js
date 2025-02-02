
// function askMe() {
//     let answer = prompt('Are you sure?');
//     if (answer.toLowerCase() === 'yes') {
//         alert('I knew it!');
//     } else if (answer.toLowerCase() === 'no') {
//         alert('why?');
//     }
// }

// let multiplication = 10 * 2;
// alert("This is the result of a multiplication: " + multiplication);

// document.write("Thank you alert window" + "<br>"); // this will print in the browser
// document.write("I learned a lot with your help " + "<br>");

// let programmingLanguage = "Javascript";
// document.write("I like to learn " + programmingLanguage);
// document.write("<br>");
// document.write("document.write command makes it easier to practice");

// for (let i = 1; i < 10; i++) {
//     document.write(i);
//     document.write("<br>");
// }

// let pet = {
//     petName: "Nebuchadnezzar III",
//     petSpecies: "cat",
//     eats: "cat food",
//     guardianName: "William",
//     hoursOfSleep: "18 hours per day"
// }

// document.write(pet.petName + "<br>");
// document.write(pet.petSpecies + "<br>");
// document.write(pet.eats + "<br>");
// document.write(pet.guardianName + "<br>");
// document.write(pet.hoursOfSleep + "<br>");
function switchTo(backgroundColor) {
    if (backgroundColor === 'blue') {
        document.body.style.backgroundColor = 'blue';
    }
    else if (backgroundColor === 'yellow') {
        document.body.style.backgroundColor = 'yellow';
    }
    else if (backgroundColor === 'red') {
        document.body.style.backgroundColor = 'red';
    }
}