"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1192],{14690:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(74848),s=i(28453);const a={title:"Functions",sidebar_position:7},r="How to Use Functions in C",o={id:"intro-to-C/c07-functions",title:"Functions",description:"Learning Goals",source:"@site/docs/intro-to-C/c07-functions.md",sourceDirName:"intro-to-C",slug:"/intro-to-C/c07-functions",permalink:"/intro-to-C/c07-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/intro-to-C/c07-functions.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Functions",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/intro-to-C/c06-arrays"},next:{title:"Data Conversion",permalink:"/intro-to-C/c08-data-conversions"}},l={},c=[{value:"Learning Goals",id:"learning-goals",level:2},{value:"What is a Function?",id:"what-is-a-function",level:2},{value:"Application Of A Function/Why A Function Is Useful",id:"application-of-a-functionwhy-a-function-is-useful",level:2},{value:"Initialize A Function:",id:"initialize-a-function",level:2},{value:"Functions With Parameter",id:"functions-with-parameter",level:2},{value:"Example Activity",id:"example-activity",level:2},{value:"Your Turn!",id:"your-turn",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"how-to-use-functions-in-c",children:"How to Use Functions in C"}),"\n",(0,t.jsx)(e.h2,{id:"learning-goals",children:"Learning Goals"}),"\n",(0,t.jsx)(e.p,{children:"By the end of this tutorial, you should be able to:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Understand what a function is"}),"\n",(0,t.jsx)(e.li,{children:"Initialize a function"}),"\n",(0,t.jsx)(e.li,{children:"Create a reusable and modular function"}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Send values to a function through a parameter"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"what-is-a-function",children:"What is a Function?"}),"\n",(0,t.jsx)(e.p,{children:"A function is a piece of code that you can name, which then can be called multiple times throughout your program without having to re-write the code stated in the function. Functions are also used to allow access to other objects of a class to access and set data. In Arduino\u2019s case we can use functions to save time and prevent repetition of code."}),"\n",(0,t.jsx)(e.h2,{id:"application-of-a-functionwhy-a-function-is-useful",children:"Application Of A Function/Why A Function Is Useful"}),"\n",(0,t.jsx)(e.p,{children:"Functions are useful overall as they make your code look clean, are more efficient in terms of saving time programming redundant code, and are very powerful!"}),"\n",(0,t.jsx)(e.h2,{id:"initialize-a-function",children:"Initialize A Function:"}),"\n",(0,t.jsxs)(e.p,{children:["Functions have a ",(0,t.jsx)(e.strong,{children:"return type"})," such as int, String, boolean, char, Integer, or can have no return type which is just void. A return type indicates that the result of the function will be with the same type as the return type."]}),"\n",(0,t.jsxs)(e.p,{children:["Functions are indicated a ",(0,t.jsx)(e.strong,{children:"return type"}),", a ",(0,t.jsx)(e.strong,{children:"name"})," (your choice in camel case), round brackets for the ",(0,t.jsx)(e.strong,{children:"parameter"})," (can store variables or can be empty), surrounded with curly brackets with code in between them."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Initialize a Function"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"void countdownTen(){\n    for(int i = 10; i >= 0; i\u2013){\n        System.out.println(i);\n    }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Call a Function"}),"\nWhen calling a function you would just call its name and enter values that need to go into the parameter. In this example the function we created did not take any parameters so we just keep the brackets empty."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"countdownTen();\n"})}),"\n",(0,t.jsx)(e.p,{children:"The countdownTen function that we initialized above will be called and will perform the code that is written in the function. In this example the function will ALWAYS countdown from ten as this is the intended purpose of the function created."}),"\n",(0,t.jsx)(e.h2,{id:"functions-with-parameter",children:"Functions With Parameter"}),"\n",(0,t.jsx)(e.p,{children:"A function with a parameter is when you can send data through variable into the function. For example, if you want to recieve data of the number of times to turn an LED on and off you want to hold that data somewhere. The parameter is the perfect place to do that."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Initialize a Function WITH Parameter"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"void flash(int numFlash){\n    for(int i = 0; i < numFlash; i++){\n        digitalWrite(13,HIGH);\n        delay(1000);\n        digitalWrite(13,LOW);\n        delay(1000);\n    }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.strong,{children:"Note:"})})," You can have a function with multiple varibles in the parameter."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"EX: void apple(int quantity, String name, double weight)"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Call a Function WITH Parameter"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"flash(5);\n"})}),"\n",(0,t.jsx)(e.p,{children:"Since we have passed the number 5 in the paramter the function will use the value 5 for where ever numFlash is called. Keep in mind that this value is now stored only for the call of this function, and will be erased once the function has done its job. You will never be able to access this variable outside of the function since this varible is only initialized within the perimeter of the function."}),"\n",(0,t.jsx)(e.h2,{id:"example-activity",children:"Example Activity"}),"\n",(0,t.jsx)(e.p,{children:"In this example we will create a program that displays numbers 0-9 on a seven segment display."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:i(10867).A+"",width:"300",height:"209"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Step 1:"})," Create an array for the LED's (the different lines on the seven segment). As well create an array that holds the value of which lights should be one for each number."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'int LED_PIN[]={11,10,7,8,9,12,13};\n\n//0,1,2,3,4,5,6,7,8,9\n//LEDs that should be on for to display each number\nChar *DIGIT[]={"1111110","0110000","1101101","1111001","0110011","1011011","1011111","1110000","1111111","1111011"};\n\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Step 2:"})," Initialize the pins in the 'setup' loop."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"void setup() {\n  //sets up leds in pins 7-13\n  for(int i=7; i<=13; i++) {\n    pinMode(i, OUTPUT);\n  }  \n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Step 3:"})," Lets create a clear function!"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"This function will turn off all the LED's so we can print on a new number"}),"\n",(0,t.jsx)(e.li,{children:"This function will be a return type of void since we are not returning anything"}),"\n",(0,t.jsx)(e.li,{children:"We need not values either so the parameters will just be empty"}),"\n",(0,t.jsxs)(e.li,{children:["For the command of the function we can loop through all the LED's and turn them off using ",(0,t.jsx)(e.strong,{children:"digitalWrite(pin#, LOW);"})]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"//turns off all the leds that were originally on\nvoid clearAll() { \n  for(int i=0; i<7; i++) {\n    digitalWrite(LED_PIN[i], LOW);\n  } \n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Step 4:"})," Lets create another function!!"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"In this function we will be recieving an int from the parameter of the number to display"}),"\n",(0,t.jsx)(e.li,{children:"The return type is void as there is nothing to return"}),"\n",(0,t.jsxs)(e.li,{children:["Using the array we created in the begining that holds all the values of which LEDs to turn on(",(0,t.jsx)(e.strong,{children:"DIGIT"}),"), we can take that value and store it in a newly created varible(",(0,t.jsx)(e.strong,{children:"str"}),")"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"NOTE:"})," this newly created varible can only be accessed from inside this function when it is running ONLY. Once the function has done its job everything is erased."]}),"\n",(0,t.jsxs)(e.li,{children:["Next we will loop through ",(0,t.jsx)(e.strong,{children:"str"})," and turn on or off the LED's based on whether the corresponding value is 1 or 0"]}),"\n",(0,t.jsx)(e.li,{children:"This process will loop through 7 times due to the 7 LED's that are on the seven segment"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"void displayDigit(int digit) {\n  char* str = DIGIT[digit];\n  for(int i=0; i<7; i++) {\n    if(str[i]=='1'){\n      digitalWrite(LED_PIN[i], HIGH);\n    } else {\n      digitalWrite(LED_PIN[i], LOW);\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Step 5:"})," Now that we have all the tools we need, lets put it together!! Since we are displaying the digits 0 though 9 we can use a for loop for that. Inside we can call our displayDigit() function and pass though i in the parameter. Add a delay for 1 second, clear the seven segment, and finally delay for 200 milliseconds. And you are done!!"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"//displays numbers 0-9 between 1 second intervals\nvoid loop() {\n  for(int i=0; i<=9; i++) {\n  \tdisplayDigit(i);\n    delay(1000);\n    clearAll();\n    delay(200);\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Full Code"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'//7 segment displays numbers 0 through 9\n\nint LED_PIN[]={11,10,7,8,9,12,13};\n\n//0,1,2,3,4,5,6,7,8,9\n//LEDs that should be on for to display each number\nChar *DIGIT[]={"1111110","0110000","1101101","1111001","0110011","1011011","1011111","1110000","1111111","1111011"};\n\n\nvoid setup() {\n  //sets up leds in pins 7-13\n  for(int i=7; i<=13; i++) {\n    pinMode(i, OUTPUT);\n  }  \n}\n\n//turns off all the leds that were originally on\nvoid clearAll() {\n  for(int i=0; i<7; i++) {\n    digitalWrite(LED_PIN[i], LOW);\n  } \n}\n\n//displays specified digit on LED screen\nvoid displayDigit(int digit) {\n  char* str = DIGIT[digit];\n  for(int i=0; i<7; i++){\n    if(str[i]==\'1\') {\n      digitalWrite(LED_PIN[i], HIGH);\n    } else {\n      digitalWrite(LED_PIN[i], LOW);\n    }\n  }\n}\n\n//displays numbers 0-9 between 1 second intervals\nvoid loop() {\n  for(int i=0; i<=9; i++) {\n  \tdisplayDigit(i);\n    delay(1000);\n    clearAll();\n    delay(200);\n  }\n}\n\n'})}),"\n",(0,t.jsx)(e.h2,{id:"your-turn",children:"Your Turn!"}),"\n",(0,t.jsx)(e.p,{children:"Try following the example code to get a feel for creating and using function, both with and without paramters!!"}),"\n",(0,t.jsx)(e.p,{children:"On your own try:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Create an SOS signal on an LED","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Create a function that takes a paramter for the number of times the LED should flash and for how long"}),"\n",(0,t.jsx)(e.li,{children:"Use that function to signal 3 short flashes, then 3 long, and finally 3 short again"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"NOTE:"})," You can call the function more than once!"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"OR Change a previous project of yours and see if you can simplify the code by adding functions!"}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},10867:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/sevenSegmentExample-4aa3632989d41d9981907f4bcced854c.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);