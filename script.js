const levels = [
 {name:"Commercial Software", icon:"💳", hint:"Programs that you must pay for or license to use.", difficulty:"EASY", visual:"🛒", questions:[
  {q:"What does Commercial Software mean?",opts:["Software that you must pay to use","Software that is always free","Software with no copyright","Software that is only used for games"],a:0,why:"Commercial Software requires payment or a license."},
  {q:"Which is an example of commercial software?",opts:["Microsoft Office","A public-domain program","Any free application","None of the above"],a:0,why:"Microsoft Office is a common example of commercial software."},
  {q:"A company buys a license to use a program. What type is it?",opts:["Freeware","Commercial Software","Public Domain","Shareware"],a:1,why:"Buying a license is associated with commercial software."},
  {q:"What happens if you use commercial software without paying?",opts:["It is illegal copyright infringement","Nothing, it is allowed","It automatically becomes freeware","It converts to shareware"],a:0,why:"Using commercial software without authorization or payment violates copyright laws."},
  {q:"Who owns the copyright in commercial software?",opts:["The developer or company","The general public","The user who downloads it","Nobody"],a:0,why:"The copyright remains with the publisher or developer who created it."},
  {q:"Which model is commonly used to sell commercial software today?",opts:["Monthly or annual subscriptions","Free unlimited distribution","Open source sharing","Public domain donation"],a:0,why:"Many commercial programs now use subscription models (SaaS)."}
 ]},
 {name:"Shareware", icon:"⏳", hint:"You can try it for free and pay to unlock the full version.", difficulty:"MEDIUM", visual:"🧪", questions:[
  {q:"What is the main feature of Shareware?",opts:["You can try it for free, but some features require payment","It is always public domain","You cannot try it before paying","It is always free with no limits"],a:0,why:"Shareware lets you try a program, but payment may be required for the full version."},
  {q:"Which phrase helps you remember Shareware?",opts:["Pay before using it","Try before you buy","Always free of copyright","Free for everyone"],a:1,why:"The idea is to try the program before deciding whether to buy it."},
  {q:"An app works for a limited time and then asks you to buy it. What is it?",opts:["Freeware","Public Domain","Shareware","Only Commercial Software"],a:2,why:"A trial version that asks for payment later is Shareware."},
  {q:"What usually happens when a shareware trial period ends?",opts:["Some features get locked or it stops working until purchased","The program becomes public domain","It automatically upgrades to full freeware","It gets deleted from the internet"],a:0,why:"Shareware trial periods restrict features or usage until a paid license key is entered."},
  {q:"Why do developers distribute programs as shareware?",opts:["To let users test the software before buying","To give away their work completely for free","To transfer copyright to the public","To prevent anyone from using it"],a:0,why:"Shareware acts as a try-before-you-buy marketing strategy."},
  {q:"Which restriction is commonly found in shareware?",opts:["Time limits or feature limitations","Complete source code access","No installation allowed","Mandatory open-source licensing"],a:0,why:"Shareware often restricts advanced tools, trial duration, or output watermark."}
 ]},
 {name:"Freeware", icon:"🎁", hint:"Software that you can use for free.", difficulty:"HARD", visual:"🆓", questions:[
  {q:"What does Freeware mean?",opts:["Software that is free to use","Software that you rent","Software that only works for one week","Software that must always be modified"],a:0,why:"Freeware can be used without paying."},
  {q:"According to the study chart, which is an example of Freeware?",opts:["Google Chrome","Paid Microsoft Office","A commercial license","A paid trial program"],a:0,why:"Google Chrome is the example used in the study chart."},
  {q:"What is the main difference between Shareware and Freeware?",opts:["There is no difference","Shareware is usually a trial; Freeware is free to use","Freeware always costs money","Shareware is not software"],a:1,why:"Shareware may have trial limits; Freeware is offered for free."},
  {q:"Can you sell or modify the source code of freeware without permission?",opts:["No, the developer retains the copyright","Yes, freeware has no owner","Yes, freeware is public domain","No, but only because it is illegal to install"],a:0,why:"Freeware is free to use, but the creator still retains full copyright and control."},
  {q:"Does freeware require you to enter a credit card after 30 days?",opts:["No, it remains free for full use","Yes, it always turns into commercial software","Yes, if you use it daily","No, but it deletes your files"],a:0,why:"Unlike shareware, freeware does not expire or force payment after a trial period."},
  {q:"Which of the following is a key feature of freeware?",opts:["Fully functional without payment","Requires buying a license key","Allows modifying source code freely","Expires after 7 days"],a:0,why:"Freeware is fully functional and free of charge for the user."}
 ]},
 {name:"Public Domain", icon:"🌍", hint:"Software that can be shared and modified without copyright restrictions.", difficulty:"EXPERT", visual:"🌐", questions:[
  {q:"Which description best explains Public Domain?",opts:["Software anyone can use, modify, and distribute without copyright restrictions","Software that only one company can buy","Software that can be tried for 7 days","Software that always requires a subscription"],a:0,why:"Public Domain refers to software without copyright restrictions."},
  {q:"Which example appears in the study chart?",opts:["WinRAR","SQLite","Microsoft Office","Google Chrome"],a:1,why:"SQLite was the example included for Public Domain in the chart."},
  {q:"A person can share and modify a program without copyright restrictions. What type is it?",opts:["Commercial Software","Shareware","Freeware","Public Domain"],a:3,why:"The ability to use, modify, and distribute without copyright restrictions describes Public Domain."},
  {q:"What happens to the copyright of a public domain software?",opts:["It has expired, been waived, or never existed","It is owned by Microsoft","It is protected for 100 years","It is split equally among all users"],a:0,why:"Public Domain software has no active copyright restrictions."},
  {q:"Can a developer take public domain code and use it in a commercial project?",opts:["Yes, because there are no copyright restrictions","No, it is strictly forbidden","Only if they pay a fine","Only with written authorization from the government"],a:0,why:"Public domain material can be used, modified, and built upon by anyone for any purpose."},
  {q:"What makes Public Domain different from Freeware?",opts:["Public domain has no copyright, while freeware is copyrighted","Freeware allows modifying source code","Public domain costs money","There is no difference"],a:0,why:"Freeware is copyrighted software offered for free, whereas Public Domain has no copyright restrictions at all."}
 ]}
];

const $=id=>document.getElementById(id);
let levelIndex=0, questionIndex=0, score=0, lives=3, correct=0, answered=false;
function show(id){["welcome","game","result"].forEach(x=>$(x).classList.toggle("hidden",x!==id))}
function start(){levelIndex=0;questionIndex=0;score=0;lives=3;correct=0;updateStats();show("game");render()}
function updateStats(){$("score").textContent=score;$("lives").textContent="❤️".repeat(lives)||"0"}
function render(){
 const level=levels[levelIndex], item=level.questions[questionIndex];answered=false;
 $("levelLabel").textContent=`LEVEL ${levelIndex+1} OF 4`;
 $("questionLabel").textContent=`QUESTION ${questionIndex+1} OF 6`;
 $("progressBar").style.width=`${((levelIndex*6+questionIndex+1)/24)*100}%`;
 $("levelArt").innerHTML=`<img src="assets/${["commercial.svg","shareware.svg","freeware.svg","public-domain.svg"][levelIndex]}" alt="${level.name} illustration">`;
 $("categoryTitle").textContent=level.name;$("levelHint").textContent=level.hint;$("difficulty").textContent=level.difficulty;
 $("roundTag").textContent=`ROUND ${levelIndex+1}`;$("pointsTag").textContent=`+${100+levelIndex*50} POINTS`;
 $("questionText").textContent=item.q;$("visual").innerHTML=`<span style="font-size:52px">${level.visual}</span><span>THINK AND CHOOSE YOUR ANSWER</span>`;
 $("feedback").textContent="";$("feedback").className="feedback";$("nextBtn").classList.add("hidden");
 $("answers").innerHTML="";
 item.opts.forEach((opt,i)=>{const b=document.createElement("button");b.className="answer";b.textContent=String.fromCharCode(65+i)+". "+opt;b.onclick=()=>choose(i);$("answers").appendChild(b)});
}
function choose(i){
 if(answered)return;answered=true;
 const level=levels[levelIndex],item=level.questions[questionIndex],buttons=[...$("answers").children];
 buttons.forEach((b,n)=>{b.disabled=true;if(n===item.a)b.classList.add("correct");else if(n===i)b.classList.add("wrong")});
 if(i===item.a){score+=100+levelIndex*50;correct++;$("feedback").textContent="Correct! "+item.why;$("feedback").className="feedback good"}
 else{lives--;$("feedback").textContent="Not quite. "+item.why;$("feedback").className="feedback bad"}
 updateStats();$("nextBtn").classList.remove("hidden");
 $("nextBtn").textContent=(levelIndex===3&&questionIndex===5)?"See Results →":"Continue →";
}
function next(){
 if(!answered)return;
 if(lives===0){finish();return}
 questionIndex++;
 if(questionIndex>=6){levelIndex++;questionIndex=0}
 if(levelIndex>=4){finish();return}
 render();
}
function finish(){
 show("result");$("finalScore").textContent=score;$("correctCount").textContent=`${correct}/24`;
 const passed=correct>=18&&lives>0;
 $("resultIcon").textContent=passed?"🏆":correct>=12?"🎖️":"💪";
 $("resultTitle").textContent=passed?"You're a Software Expert!":correct>=12?"Good Effort!":"Keep Practicing!";
 $("resultText").textContent= lives===0?`You ran out of lives. You got ${correct} correct answers. Try again!`:`You answered ${correct} out of 24 questions correctly and earned ${score} points. ${passed?"You completed every level!":"Play again to improve your score."}`;
}
$("startBtn").onclick=start;$("nextBtn").onclick=next;$("restartBtn").onclick=start;
