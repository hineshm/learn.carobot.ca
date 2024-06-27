"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3105],{31498:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(74848),t=i(28453);const s={title:"Introduction to C With Arduino",sidebar_position:1},a="C Programming With Arduino for Beginners",o={id:"intro-to-C/c01-beginning",title:"Introduction to C With Arduino",description:"Let\u2019s start with a small and fun exercise to introduce ourselves to C programming and Arduino. Follow the diagram below to assemble your circuit.",source:"@site/docs/intro-to-C/c01-beginning.md",sourceDirName:"intro-to-C",slug:"/intro-to-C/c01-beginning",permalink:"/intro-to-C/c01-beginning",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/intro-to-C/c01-beginning.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction to C With Arduino",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Beginner Tutorial to KiCAD",permalink:"/kicad/kicad-basic"},next:{title:"Variable Types",permalink:"/intro-to-C/c02-types"}},l={},d=[{value:"Chapter 1: Variables and Constants",id:"chapter-1-variables-and-constants",level:2},{value:"Declaring a Variable",id:"declaring-a-variable",level:2},{value:"Declaring a Constant",id:"declaring-a-constant",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"c-programming-with-arduino-for-beginners",children:"C Programming With Arduino for Beginners"}),"\n",(0,r.jsxs)(n.p,{children:["Let\u2019s start with a small and fun exercise to introduce ourselves to C programming and Arduino. ",(0,r.jsx)(n.strong,{children:"Follow the diagram below to assemble your circuit."})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(90588).A+"",width:"687",height:"732"})}),"\n",(0,r.jsx)(n.p,{children:"Once the circuit is assembled, copy the code below into the sketch. Then compile the sketch, click the \u201c\u2714\u201c, and upload, click the \u201c\u2192\u201d at the top right corner."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"void setup()\r\n{\r\n  pinMode(11, OUTPUT);\r\n}\r\n\r\nvoid loop()\r\n{\r\n  digitalWrite(11, HIGH);\r\n  delay(1000);\r\n  digitalWrite(11, LOW);\r\n  delay(1000);\r\n}\n"})}),"\n",(0,r.jsx)(n.h1,{id:"code-explained",children:"Code Explained:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"void setup(){ //The code written in the setup() function will only be executed once\r\n\r\n      pinMode(11, OUTPUT); //Tells the Arduino whether you want pin 11 to be an input or output\r\n}\r\n\r\nvoid loop(){ //The code written in the loop() function will be written until the power runs out\r\n\r\n      digitalWrite(11, HIGH); //<--Since we are using pin 11 as an output, you can choose whether you want it HIGH=ON or LOW=OFF\r\n      delay(1000); //<--This tells the Arduino and LED to do nothing and wait for 1000 milliseconds(1 second)\r\n\r\n      digitalWrite(11, LOW);\r\n      delay(1000);\r\n}\n"})}),"\n",(0,r.jsx)(n.h1,{id:"your-turn",children:"Your Turn"}),"\n",(0,r.jsxs)(n.p,{children:["Try changing the code so that it will create a blinking pattern, also known as morse code. Search up on Google how to write your name in morse code and change the code so that the LED will spell out your name.\r\n",(0,r.jsx)(n.em,{children:"(HINT: change the number in delay().)"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"(Eg: Cat in morse code is: \u30fc \u2022 \u30fc \u2022 \u2022 \u30fc \u30fc)"})}),"\n",(0,r.jsx)(n.p,{children:"A circle, \u201c \u2022 \u201d would mean the light will be on for a short time (1-2 seconds) whereas the lines \u201c \u30fc \u201c would be on for a longer time (4-5 seconds)."}),"\n",(0,r.jsx)(n.h2,{id:"chapter-1-variables-and-constants",children:"Chapter 1: Variables and Constants"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"What is a Variable?"})}),"\n",(0,r.jsxs)(n.p,{children:["A data item whose value ",(0,r.jsx)(n.strong,{children:"can"})," be changed throughout the program."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Imagine when you are moving there would be many boxes with different things in them. These boxes are labelled so that it is easier to find things. Variables are similar, they are labelled boxes that store important values."}),"\n",(0,r.jsx)(n.li,{children:"The value of a variable can be changed at any time by typing the variable again."}),"\n",(0,r.jsx)(n.li,{children:"Assigning a name to a variable makes it easier to read and track the memory location of data."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(95671).A+"",width:"221",height:"298"})}),"\n",(0,r.jsx)(n.h1,{id:"rules-for-naming-variables",children:"Rules for naming variables:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Variable names can ",(0,r.jsx)(n.strong,{children:"only"})," contain letters (uppercase and lowercase), numbers and underscores. No special characters."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"first character"})," of your variable should be a letter or an underscore. Try not to start with an underscore as some c built-in variables start with an underscore."]}),"\n",(0,r.jsxs)(n.li,{children:["The variable name should typically be ",(0,r.jsx)(n.strong,{children:"between 1-31 characters"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(5678).A+"",width:"173",height:"145"})}),"\n",(0,r.jsxs)(n.p,{children:["These are examples of some words that ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"cannot"})})," be used as variable names as they are special words used in C programming."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:i(88769).A+"",width:"326",height:"158"}),"\r\n",(0,r.jsx)(n.img,{src:i(16056).A+"",width:"316",height:"239"})]}),"\n",(0,r.jsx)(n.h2,{id:"declaring-a-variable",children:"Declaring a Variable"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To declare a variable:"})}),"\n",(0,r.jsx)(n.p,{children:"int            myAge    =    16"}),"\n",(0,r.jsx)(n.p,{children:"\u2191               \u2191            \u2191"}),"\n",(0,r.jsx)(n.p,{children:"Variable type   Variable name    Value\r\nVariable types will be discussed in the next lesson. For the following exercise use int and only use whole numbers like 1, 2, 89 and 24."}),"\n",(0,r.jsx)(n.h1,{id:"constant",children:"Constant"}),"\n",(0,r.jsxs)(n.p,{children:["A data item whose value ",(0,r.jsx)(n.em,{children:"cannot be modified or changed once defined"}),". Constant can be thought of as a closed box, once you put an object in it cannot be changed. Their value remains constant throughout the entire program. The keyword \u2018const\u2019 is used to make a value constant."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"(Eg: const double age = 4)"})}),"\n",(0,r.jsx)(n.h2,{id:"declaring-a-constant",children:"Declaring a Constant"}),"\n",(0,r.jsx)(n.p,{children:"Similar to declaring a variable, add \u201cconst\u201d in front."}),"\n",(0,r.jsx)(n.p,{children:"const                 int                 myAge         =         5"}),"\n",(0,r.jsx)(n.p,{children:"\u2191                    \u2191                    \u2191                     \u2191"}),"\n",(0,r.jsx)(n.p,{children:"const keyword        Variable type        Variable name             Value"}),"\n",(0,r.jsx)(n.h1,{id:"quick-check",children:"QUICK CHECK"}),"\n",(0,r.jsx)(n.p,{children:"Try to identify whether or not these variable names are acceptable:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"1522Age"}),"\n",(0,r.jsx)(n.li,{children:"c, programming"}),"\n",(0,r.jsx)(n.li,{children:"my#$age"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Number 2 and 3 are wrong as they have special characters like #, $ and a white space \u201c \u201c."})}),"\n",(0,r.jsx)(n.p,{children:"To review what you learned answer the following questions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["What is the difference between a ",(0,r.jsx)(n.strong,{children:"variable"})," and a ",(0,r.jsx)(n.strong,{children:"constant"}),"?"]}),"\n",(0,r.jsxs)(n.li,{children:["What are the rules for naming a ",(0,r.jsx)(n.strong,{children:"variable"}),"?"]}),"\n",(0,r.jsxs)(n.li,{children:["How do you declare a ",(0,r.jsx)(n.strong,{children:"variable"}),"?"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s try declaring a variable using the serial monitor."}),"\n",(0,r.jsxs)(n.p,{children:["Open up your Arduino Software IDE. Visit arduino.cc/guide if you need help downloading it.\r\n",(0,r.jsx)(n.strong,{children:"(adding \u201c//\u201d in front of a sentence tells the Arduino that the following sentence is a comment, where it is used to write down notes)"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int myAge = 16;\r\nvoid setup(){\r\n      Serial.begin(9600); //this allows the Arduino to send commands through the USB connection.\r\n      //9600 is called the "baud rate" which is how fast the data is being sent\r\n      Serial.println(myAge); //this prints the value of myAge in the serial monitor\r\n}\r\nvoid loop(){\r\n      //leave this section empty for now. Once you are done compiling and verifying your code\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The code above should print out"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"16\n"})}),"\n",(0,r.jsx)(n.p,{children:"To redefine a variable, write int myAge = (new value) at the beginning of void setup."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int myAge = 16;\r\nvoid setup(){\r\n      int myAge = 21;\r\n      Serial.begin(9600);\r\n      Serial.println(myAge);\r\n}\r\nvoid loop(){\r\n\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The output shown in the serial monitor will be the new value, 21."}),"\n",(0,r.jsx)(n.h1,{id:"your-turn-1",children:"!!YOUR TURN!!"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Try adding multiple variables to see what the output will be."}),"\n",(0,r.jsx)(n.li,{children:"What would happen if you add Serial.println() in the void loop () section?"}),"\n",(0,r.jsxs)(n.li,{children:["Try adding ",(0,r.jsx)(n.strong,{children:"const"})," in front of your variable. What do you notice when you try to redefine the variable?"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},90588:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/guide1_01-787c8e53eb376c15993c031ccd86ec27.png"},95671:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/guide1_02-cf1ecc6d615059e8125f7a2f03abc869.png"},5678:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/guide1_03-093c290bc4c0cc8e991729a5cc9e4236.png"},88769:(e,n,i)=>{i.d(n,{A:()=>r});const r="data:image/png;base64,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"},16056:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/guide1_05-eab6d25d203be5ee4a196462875681a6.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(96540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);