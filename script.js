const arr = [1,2,3,1,4,5,1,1,1,1,4,5,3,3,5,56,6,7,7,5,3,2,5,6,7,7,7,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const tar = prompt("Please type in the number between 1-40");
let answerArr = [];
let uniqueArr = arr.filter((item, i, ar) => ar.indexOf(item) === i);
uniqueArr.sort();

function findSum(target, numArr) {
    for(item of numArr) {
        for(item2 of numArr) {
            if(item === target - item2) {
                answerArr.push([item, item2]);
            }
        }
    }
}

function listAnswers(arr) {
    console.log("Possible combinations:")
    for(item of arr) {
        console.log(item);
    }
}

console.log(uniqueArr);
findSum(tar,uniqueArr);
console.log("Target number: ", tar);
console.log(listAnswers(answerArr));