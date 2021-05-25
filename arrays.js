function sumNumbers(){
    let array = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
    let sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
        console.log(sum);
    }


function maxOfTwoNumbers(){
        let number1 = parseInt(prompt("Enter the first number:"));
        let number2 = parseInt(prompt("Enter the second number:"));
        if(number1 == number2){
            console.log(number1 + "is equal to" + number2);
        }else if(number1 > number2){
            console.log(number1 + "is larger than" + number2);
        }else{
            console.log(number1 + "is shorter than" + number2);
        }
    }
    

function findLongestWord(...strs) {
        return strs.reduce((c, v) => c.length > v.length ? c : v);
      }
      console.log(findLongestWord('mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'));

function averageNumbers(array){
        let num = 0;
        array.forEach(num =>{
            sum += num;
        });
        return sum / array.length;
}


function averageWordLength(){
        let words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
        arrayLength = words.length;
        joined  = words.join('');
        result = joined.length / words.length;
}


let array = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(array){
    let total = array.reduce((acc, c) => acc + c, 0);
    return total / array.length;
}
    let average = vag(array);
    console.log(average);



function uniquifyArray( ){
    const words = ['crab','poison','contagious','simple','bring','sharp','playground','poison', 'communion',
     'simple','bring' ];
     const uniqueWords = [];
     words.forEach(function(words){
         if(uniqueWords.indexOf(words) === -1){
             uniqueWords.push(words);
         }
     });
     return uniqueWords;
    }


    const words = ['machine', 'matter','subset','trouble','starting','matter','eating','matter','truth',
    'disobedience','matter'];

function howManyTimes(){
    let counts={};
    for(let i = 0; i < words.length; i++){
        if(counts[words[i]]){
            counts[words[i]] += 1;
        }else{
            counts[words[i]] = 1;
        }
    }
    for(let prop in counts){
        if(counts[prop] >= 2){
            console.log(prop + "counted" + counts[prop] + "times");
        }
    }
    console.log(counts);
}
howManyTimes();

    