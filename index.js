///WeakOne MarkTwo

const readlineSync = require('readline-sync');

console.log(" --> Let's take a quizzz! <-- \n\n\n");

var score = 0;
var userName = readlineSync.question("Please enter your name: ");

console.log("\nEnter your answer with ('a', 'b', 'c', or 'd' and hit enter)\n\n");

const cheerUp = ["Great! keep going", "wow doing well", "right, keep moving", "cheers! move on to next", "Your doing great!"]

var randomCheer = cheerUp[Math.round(Math.random() * 4)]; 


function ask(question){
  return readlineSync.question(question);
} 

const questions = [

  {question: "1. You're 3rd place right now in a race. What place are you in when you pass the person in 2nd place?\n (a)1st\n (b)2nd \n (c)3rd\n (d)None of the above.\n ", answer:"a"},

  {question: "2. How many months have 28 days?\n (a)2\n (b)1\n (c)All of them\n (d)Depends if leap year or not\n ", answer:"c"},

  {question: "3. What is the color of Donald Duck’s bowtie?\n (a)Red\n (b)Yellow\n (c)Blue\n (d)White \n", answer:"a"},

  {question: "4. Which animal does not appear in the Chinese zodiac?\n (a)Dragon\n (b)Rabit\n (c)Dog\n (d)Hummingbird\n ", answer:"d"},

  {question: "5. Which planet is the hottest?\n (a)venus\n (b)Saturn\n (c)Mercury\n (d)Mars)?\n ", answer:"a"},

  {question: "6. In which city can you find the Liberty Bell?\n (a)Washington, D.C\n (b)Boston\n (c)Philadelphia\n (d)Manhattan\n ", answer:"c"},

  {question: "7. What is the rarest blood type?\n (a)O\n (b)A\n (c)B\n (d)AB-Negative\n ", answer:"d"},

  {question: "8. Areh o saambha kitne aadmi theh?\n (a)Doh sarkaar\n (b)nahi teen\n (c)nahi-nahi chaar sardaar\n (d)shayad ek bhi nahi sardaar\n ", answer:"a"},

  {question: "9. How many bones are there in the human body?\n (a)205\n (b)201\n (c)209\n (d)206 \n", answer:"d"},

  {question: "10. Fe is the chemical symbol for…?\n (a)Zinc\n (b)Hydrogen\n (c)Fluorine\n (d)Iron \n", answer:"d"}


]


for(var i=0; i < questions.length; i++){
  let userAnswer = ask(questions[i].question);

  if (userAnswer.toLowerCase() === questions[i].answer){
    console.log(randomCheer + "\n")
    score++

     if (score === 3){
    console.log("Hurrayy! You crossed level Zero by scoring 2+ points \n");
     }else if (score === 5){
        console.log("Yo! You crossed level two by scoring 4+ points\n");
     }else if (score === 8){
        console.log("wow! You entered in the Final chapter of the quizz by scoring 7+ points\n");
     }

  }else{
    console.log("opps!, it's ok try the rest\n")
  }
}

console.log(`Hey ${userName} you Scored ${score} otta 10.`)
