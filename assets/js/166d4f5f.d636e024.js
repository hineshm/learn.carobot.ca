"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[1719],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>y});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function m(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),l=d(o),c=r,y=l["".concat(s,".").concat(c)]||l[c]||u[c]||a;return o?n.createElement(y,i(i({ref:t},p),{},{components:o})):n.createElement(y,i({ref:t},p))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=c;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[l]="string"==typeof e?e:r,i[1]=m;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},29908:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>m,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const a={title:"Programming",sidebar_position:3},i=void 0,m={unversionedId:"chassis-robot/programming",id:"chassis-robot/programming",title:"Programming",description:"Development Tools Needed",source:"@site/docs/2934-chassis-robot/programming.md",sourceDirName:"2934-chassis-robot",slug:"/chassis-robot/programming",permalink:"/chassis-robot/programming",draft:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/2934-chassis-robot/programming.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Programming",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Wiring",permalink:"/chassis-robot/wiring"},next:{title:"Chapter 1 - The Beginning",permalink:"/intro-to-C/c01-beginning"}},s={},d=[{value:"Development Tools Needed",id:"development-tools-needed",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},l="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"development-tools-needed"},"Development Tools Needed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,r.kt)("h2",{id:"programming"},"Programming"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Include the following libraries so we can communicate with the motors of the Chassis. Write out these variable which we will use later on in the program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#include <Wire.h>\n#include <Adafruit_MotorShield.h>\n\nint maxSpeed = 150;\nuint8_t i;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Create an object for each motor so that we have an object to reference to when communicating with the motors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// Create the motor shield object \nAdafruit_MotorShield AFMS = Adafruit_MotorShield(); \n\n// Create an object for each motor with a corresponding 1-4 in the \n// brackets to indicate which motor is which\nAdafruit_DCMotor *myMotor1 = AFMS.getMotor(1);\nAdafruit_DCMotor *myMotor2 = AFMS.getMotor(2);\nAdafruit_DCMotor *myMotor3 = AFMS.getMotor(3);\nAdafruit_DCMotor *myMotor4 = AFMS.getMotor(4);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," In the step up we will specify the speed and direction the motors of the chassis shall travel in\n",(0,r.kt)("strong",{parentName:"p"},"NOTE:")," the motors that will be the 'back' of the robot will have to set as moving backwards in order for the robot to travel forwards and vice versa to travel backwards."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n  Serial.begin(9600); // access to serial monitor\n  \n  AFMS.begin();  // create with the default frequency 1.6KHz\n  \n  // Set the speed to start, from 0 (off) to 255 (max speed)\n  // Front wheel\n  myMotor1->setSpeed(150);\n  myMotor1->run(FORWARD);\n\n  // Back wheel\n  myMotor2->setSpeed(150);\n  myMotor2->run(BACKWARD);\n\n  // Back wheel\n  myMotor3->setSpeed(150);\n  myMotor3->run(BACKWARD);\n\n  // Front wheel\n  myMotor4->setSpeed(150);\n  myMotor4->run(FORWARD);\n\n  // turn on motor\n  myMotor1->run(RELEASE);\n  myMotor2->run(RELEASE);\n  myMotor3->run(RELEASE);\n  myMotor4->run(RELEASE);\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Lets create functions for commands we want our robot to perform. Mess around with the value of 'i' in the for loops to change the degree the robot will turn."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"//MOVE FORWARDS\nvoid move_forward(){\n  //sets direction the motor should move\n  myMotor1->run(FORWARD);\n  myMotor2->run(BACKWARD);\n  myMotor3->run(BACKWARD);\n  myMotor4->run(FORWARD);\n  // runs motor at set speed\n  myMotor1->setSpeed(maxSpeed);  \n  myMotor2->setSpeed(maxSpeed);  \n  myMotor3->setSpeed(maxSpeed);  \n  myMotor4->setSpeed(maxSpeed);  \n  \n}\n\n//MOVE BACKWARDS\nvoid move_backward(){\n  //sets direction the motor should move\n  myMotor1->run(BACKWARD);\n  myMotor2->run(FORWARD);\n  myMotor3->run(FORWARD);\n  myMotor4->run(BACKWARD);\n  // runs motor at set speed\n  myMotor1->setSpeed(maxSpeed);  \n  myMotor2->setSpeed(maxSpeed);  \n  myMotor3->setSpeed(maxSpeed);  \n  myMotor4->setSpeed(maxSpeed);  \n}\n\n//TURN RIGHT\nvoid turn_right(){\n  myMotor1->run(BACKWARD);\n  myMotor2->run(FORWARD);\n  myMotor3->run(BACKWARD);\n  myMotor4->run(FORWARD);\n  // runs motor at set speed\n  for (i=0; i<maxSpeed; i++) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n  // runs motor at set speed\n  for (i=maxSpeed; i!=0; i--) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n}\n\n//TURN LEFT\nvoid turn_left(){\n  myMotor1->run(FORWARD);\n  myMotor2->run(BACKWARD);\n  myMotor3->run(FORWARD);\n  myMotor4->run(BACKWARD);\n  // runs motor at set speed\n  for (i=0; i<maxSpeed; i++) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n  // runs motor at set speed\n  for (i=maxSpeed; i!=0; i--) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5:")," Finally, we can now call our functions in the loop() method and have our robot move in a way we want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"/// the robot will move forwards for 10 seconds and them will turn to the right\n// then the robot will move backwards for 5 seconds and then turn to the left\nvoid loop(){\n  move_forward();\n  delay(10000);//will run forwards for 10 seconds\n  turn_right();\n  move_backward();\n  delay(5000); // will run backwards for 5 seconds\n  turn_left();\n}\n")),(0,r.kt)("h2",{id:"full-code"},"Full Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#include <Wire.h>\n#include <Adafruit_MotorShield.h>\n\nint maxSpeed = 150;\nuint8_t i;\n\n// Create the motor shield object \nAdafruit_MotorShield AFMS = Adafruit_MotorShield(); \n\n// Create an object for each motor with a corresponding 1-4 in the \n// brackets to indicate which motor is which\nAdafruit_DCMotor *myMotor1 = AFMS.getMotor(1);\nAdafruit_DCMotor *myMotor2 = AFMS.getMotor(2);\nAdafruit_DCMotor *myMotor3 = AFMS.getMotor(3);\nAdafruit_DCMotor *myMotor4 = AFMS.getMotor(4);\n\nvoid setup(){\n  Serial.begin(9600); // access to serial monitor\n  \n  AFMS.begin();  // create with the default frequency 1.6KHz\n  \n  // Set the speed to start, from 0 (off) to 255 (max speed)\n  // Front wheel\n  myMotor1->setSpeed(150);\n  myMotor1->run(FORWARD);\n\n  // Back wheel\n  myMotor2->setSpeed(150);\n  myMotor2->run(BACKWARD);\n\n  // Back wheel\n  myMotor3->setSpeed(150);\n  myMotor3->run(BACKWARD);\n\n  // Front wheel\n  myMotor4->setSpeed(150);\n  myMotor4->run(FORWARD);\n\n  // turn on motor\n  myMotor1->run(RELEASE);\n  myMotor2->run(RELEASE);\n  myMotor3->run(RELEASE);\n  myMotor4->run(RELEASE);\n}\n\n//MOVE FORWARDS\nvoid move_forward(){\n  //sets direction the motor should move\n  myMotor1->run(FORWARD);\n  myMotor2->run(BACKWARD);\n  myMotor3->run(BACKWARD);\n  myMotor4->run(FORWARD);\n  // runs motor at set speed\n  myMotor1->setSpeed(maxSpeed);  \n  myMotor2->setSpeed(maxSpeed);  \n  myMotor3->setSpeed(maxSpeed);  \n  myMotor4->setSpeed(maxSpeed);  \n  \n}\n\n//MOVE BACKWARDS\nvoid move_backward(){\n  //sets direction the motor should move\n  myMotor1->run(BACKWARD);\n  myMotor2->run(FORWARD);\n  myMotor3->run(FORWARD);\n  myMotor4->run(BACKWARD);\n  // runs motor at set speed\n  myMotor1->setSpeed(maxSpeed);  \n  myMotor2->setSpeed(maxSpeed);  \n  myMotor3->setSpeed(maxSpeed);  \n  myMotor4->setSpeed(maxSpeed);  \n}\n\n//TURN RIGHT\nvoid turn_right(){\n  myMotor1->run(BACKWARD);\n  myMotor2->run(FORWARD);\n  myMotor3->run(BACKWARD);\n  myMotor4->run(FORWARD);\n  // runs motor at set speed\n  for (i=0; i<maxSpeed; i++) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n  // runs motor at set speed\n  for (i=maxSpeed; i!=0; i--) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n}\n\n//TURN LEFT\nvoid turn_left(){\n  myMotor1->run(FORWARD);\n  myMotor2->run(BACKWARD);\n  myMotor3->run(FORWARD);\n  myMotor4->run(BACKWARD);\n  // runs motor at set speed\n  for (i=0; i<maxSpeed; i++) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n  // runs motor at set speed\n  for (i=maxSpeed; i!=0; i--) {\n    myMotor1->setSpeed(i);  \n    myMotor2->setSpeed(i);  \n    myMotor3->setSpeed(i);  \n    myMotor4->setSpeed(i);  \n    delay(10);\n  }\n}\n\n\n// the robot will move forwards for 10 seconds and them will turn to the right\n// then the robot will move backwards for 5 seconds and then turn to the left\nvoid loop(){\n  move_forward();\n  delay(10000);//will run forwards for 10 seconds\n  turn_right();\n  move_backward();\n  delay(5000); // will run backwards for 5 seconds\n  turn_left();\n}\n")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Now that you have the basic functions needed to move your robot, you can try on your own to modify the code to make the robot move in different ways."))}u.isMDXComponent=!0}}]);