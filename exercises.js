/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
function max(x,y){
    if (x > y){
        console.log(x, ' is the largest');
    }
    else if (y > x){
        console.log(y, ' is the largest');
    }
    else {
        console.log('numbers are the same')
    }
    //...
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    if (a > b && a > c){
        console.log('a is the largest');
    }
    else if (b > a && b > c){
        console.log('b is the largest');
    }
    else if (a === b && a > c){
        console.log('a and b are both the largest');
    }
    else if (a === c && a > b){
        console.log('a and c are both the largest');
    }
    else if (b == c && c > a){
        console.log('b and c are both the largest');
    }
    else {
        console.log('c is the largest');
    }
    //...
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(inputChar){
    if (inputChar === 'a' || inputChar === 'e' || inputChar === 'i' || inputChar === 'o' || inputChar === 'u'){
        console.log(true);
    }
    else if(inputChar === 'y'){
        console.log('both');
    }
    else {
        console.log(false);
    }
    //...
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(inputText){
    var outputText = "";

    for(i=0; i<inputText.length; i++){ 
       
        var tempText =inputText.charAt(i);
        
        if (tempText === 'a' || tempText === 'e' || tempText === 'i' || tempText === 'o' || tempText === 'u' || tempText === ' '){
            outputText += tempText;
        } //end brace for if statement
        else {
            outputText = outputText + tempText +'o'+ tempText;
        } // end brace for else statement
    }// end brace for for loop
    console.log(outputText);
}  // end brace for function

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
    var a = 0;
function sum(numToSum){
    numToSum.forEach(function(numbersAdd){
    a += numbersAdd;
    });

    console.log(a);
}
    
    var a = 1;
function multiply(numToMult){
    numToMult.forEach(function(numbersMult){

    a *= numbersMult;
    });

    console.log(a);
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(textInput){
    var userInput = '';
    for (var i = textInput.length - 1; i >=0; i--)
        userInput += textInput[i];
    return userInput;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
    var curLong = '';
    var wordLength = '';
function findLongestWord(words){
    words.forEach(function(wordList){
         wordLength = wordList.length;
        if (wordLength > curLong){
            curLong = wordLength;
        }
    });
    console.log(curLong);
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
 var wordLongerThan = [];
 var wordArray = '';
function filterLongWords(words, i){
    for (var a = 0; a < words.length; a++){
        console.log(a)
        if (words[a].length > i){
            wordLongerThan.push(words[a]);
        }//if close brace
    } //for loop close brace
    console.log(wordLongerThan);
}// function close brace

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
//Represent the frequency listing as a Javascript object. Try it with something 
//like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
    var aCounter = 0;
    var bCounter = 0;
    var cCounter = 0;
    var tempText = '';

function charFreq(stringInput){
    for(var i=0; i < stringInput.length; i++){ 
        tempText = stringInput.charAt(i);

        if(tempText === 'a'){
            aCounter++;  
        }
        else if(tempText === 'b'){
            bCounter++;  
        }
        else if(tempText === 'c'){
            cCounter++;  
        }   
}//for loop close brace
console.log("the number of times 'a' is in the word: ", aCounter);
console.log("the number of times 'b' is in the word: ", bCounter);
console.log("the number of times 'c' is in the word: ", cCounter);

var myObject = {a:aCounter, b:bCounter, c:cCounter};

console.log(myObject);
    
}//function close brace




















