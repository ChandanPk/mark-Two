///WeakOne MarkTwo

const readlineSync = require('readline-sync');

console.log(" --> Let's take a quizzz! <-- \n\n");

var score = 0;
var userName = readlineSync.question("Please enter your name: ");

console.log("\nEnter your answer with ('a', 'b', 'c', or 'd' and hit enter)\n\n");

const cheerUp = ["  Great! keep going", "  woaw! doing well", "  right, keep moving", "  cheers! move on to next", "  Your doing great!"]

const randomCheer = ()=> {
  return cheerUp[Math.round(Math.random() * 4)];
}

function ask(question){
  return readlineSync.question(question);
} 

const questions = [

  {question: "1. Who is the called the powerhouse in wwe?\n (a)Roman Reings\n (b)Brock Lesnar \n (c)Big Show\n (d)Triple H\n ", answer:"a"},

  {question: "2. Dean Ambrose was also known as?\n (a)Lunitic fringe\n (b)Unstable\n (c)Violence\n (d)All of the above\n ", answer:"d"},

  {question: "3. Finisher move of Seth Rollings in 2021?\n (a)Pedigiri\n (b)Curb stomp\n (c)sphere\n (d)none of the above \n", answer:"b"},

  {question: "4. Who is the CEO of WWE industry?\n (a)Shane McMahon\n (b)Vince McMahon\n (c)Stephanie McMahon\n (d)Triple H\n ", answer:"b"},

  {question: "5. The team of Dean Ambrose, Roman Reings, Seth Rollings is called\n (a)The hybros\n (b)The Evolution\n (c)The S.H.I.E.D\n (d)The New Day\n ", answer:"c"},

  {question: "6. Winner of MITB(Money in the Bank) in 2016?\n (a)Seth Rollings\n (b)Barin corbin\n (c)Dean Ambrose\n (d)james ellsworth\n ", answer:"c"},

  {question: "7. What was WWE company called before? \n (a)AEW\n (b)WWF\n (c)ROH\n (d)NJPW\n ", answer:"b"},

  {question: "8. The winner of John Cena vs Undertaker in Wrestlemania(34)?\n (a)Undertaker\n (b)John Cena\n (c)Draw\n (d)match disqualified\n ", answer:"a"},

  {question: "9. Which one of these superstars have never won the IC championship?\n (a)Shelton Benjamin\n (b)Rey mysterio\n (c)Big E\n (d)Dean ambrose \n", answer:"c"},

  {question: "10. Wrestlings are ?\n (a)Fake\n (b)pre-fixed\n (c)100% Real action\n (d)Unsolved Mystory\n", answer:"d"}

]


for(var i=0; i < questions.length; i++){
  let userAnswer = ask(questions[i].question);

  if (userAnswer.toLowerCase() === questions[i].answer){
    score++

     if (score === 3){
    console.log("\n  Hurrayy! You crossed level Zero by scoring 2+ points");
     }else if (score === 5){
        console.log("  Yo! You crossed level two by scoring 4+ points\n");
     }else if (score === 8){
        console.log("  wow! You entered in the Final chapter of the quizz by scoring 7+ points\n");
     }
    console.log(randomCheer())
  }else{
    console.log("  opps!, it's ok try the rest")
  }
  console.log(`  Current Score: ${score}\n`)
}

console.log(`  Hey ${userName}, you Scored ${score} otta 10.`)
