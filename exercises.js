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

function sum(){
    //...
}

function multiply(){
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}