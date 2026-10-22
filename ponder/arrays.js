// Adding first list
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");


// Converting letter grades
const letterGrades = ["A", "B", "c"];
function convert(grade) {
    grade = grade.toUpperCase();
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
const gpaPoints = letterGrades.map(convert);
console.log(gpaPoints);

const gpaTotal = gpaPoints.reduce(function(sum, grade) {return (sum + grade)});
const gpaMean = gpaTotal / gpaPoints.length;
console.log(gpaTotal, gpaMean);


// Filtering words
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const wordsFiltered = words.filter((word) => {return word.length < 6});
console.log(wordsFiltered);