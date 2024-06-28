"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7562],{88837:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(74848),o=i(28453);const s={title:"SW-18015P Motion Vibration Sensor Module",sidebar_position:1},r="How to use The SW-18015P Motion Vibration Sensor Module",a={id:"motion-vibration-sensor-module",title:"SW-18015P Motion Vibration Sensor Module",description:"The SW-18015P Motion Vibration Sensor Module is a small spring inside the metal casing. As the sensor vibrates or moves, the spring will make contact with the metal casing and conduct through the sensor. This module is an easy sensor to use with an Arduino Board. One of the benefits is that you can access both analogue and digital signals.",source:"@site/guide/1750-motion-vibration-sensor-module.md",sourceDirName:".",slug:"/motion-vibration-sensor-module",permalink:"/guide/motion-vibration-sensor-module",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/1750-motion-vibration-sensor-module.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"SW-18015P Motion Vibration Sensor Module",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Photocell Module",permalink:"/guide/photocell-module"},next:{title:"Flame Sensor",permalink:"/guide/flame-sensor"}},l={},d=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code:",id:"full-code",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-use-the-sw-18015p-motion-vibration-sensor-module",children:"How to use The SW-18015P Motion Vibration Sensor Module"}),"\n",(0,t.jsx)(n.p,{children:"The SW-18015P Motion Vibration Sensor Module is a small spring inside the metal casing. As the sensor vibrates or moves, the spring will make contact with the metal casing and conduct through the sensor. This module is an easy sensor to use with an Arduino Board. One of the benefits is that you can access both analogue and digital signals."}),"\n",(0,t.jsx)(n.p,{children:"In this article, we'll talk about how to wire and set up the module for operation with an Arduino Board."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(30561).A+"",width:"294",height:"245"})}),"\n",(0,t.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,t.jsx)(n.p,{children:"This module can work from 3.3V to 5V. In this project, we will use 5V to power the module. This module is output Logic Low in the resting state (when triggered). It will output Logic High when the module is not triggered."}),"\n",(0,t.jsxs)(n.p,{children:["There are several types of vibration sensors available in the market which can detect the vibration by sensing acceleration or velocity and could provide an excellent result. However, some of them are too expensive. But, there are a few dedicated and cheap sensors that are able to detect vibrations only, like SW-18015P, which we are going to use with Arduino Uno. We will work with the ",(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/1750",children:"SW-18015P Motion Vibration Sensor Module"}),", the one we carry in our shop."]}),"\n",(0,t.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/1750",children:"SW-18015P Motion Vibration Sensor Module"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,t.jsx)(n.p,{children:"Connect the pins with Male to Female Jumper Wires."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["SW-18015P ",(0,t.jsx)(n.strong,{children:"GND"})," (middle pin)\u2014 Arduino ",(0,t.jsx)(n.strong,{children:"GND"})," Pin"]}),"\n",(0,t.jsxs)(n.li,{children:["SW-18015P ",(0,t.jsx)(n.strong,{children:"VCC"})," (5V) \u2014 Arduino ",(0,t.jsx)(n.strong,{children:"5V"})]}),"\n",(0,t.jsxs)(n.li,{children:["SW-18015P ",(0,t.jsx)(n.strong,{children:"OUT"})," \u2014 Arduino** Pin 3**"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:i(16330).A+"",width:"480",height:"401"}),"\n",(0,t.jsx)(n.img,{src:i(55187).A+"",width:"480",height:"344"})]}),"\n",(0,t.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,t.jsx)(n.p,{children:"The following code is to demonstrate how the vibration sensor works. The Serial Monitor will tell us the state of the sensor when it is triggered (detected a vibration) and when it is not (did not detect a vibration). If you want to skip the steps and jump to the Full Code."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1:"})," We will need to define the Arduino A5 pin we just connected with the vibration sensor module."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define vibration A5 // define the vibration sensor interface \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2:"})," We need a variable to store the value that is receiving from the sensor."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int value; // get value from sensor \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3:"})," We will set up the module as an input so that Arduino knows where to receive the signals. From the code below, we also set a serial communication between the Arduino board and the vibration sensor.  This way allows the vibration sensor to send the signals to the Serial Monitor."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"void setup() {\n  Serial.begin(9600);\n  pinMode(vibration, INPUT);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 4:"}),' We need to get the signal from the vibration sensor and store it into the variable "value" we have just initialized.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"value = digitalRead(vibration); \n// get value from vibration sensor \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 5:"}),' As we have the value now, Arduino will send us a message about whether the sensor detects a vibration. If the value is Logic HIGH, Arduino will send us a message " detected" which means the sensor has detected a vibration. Otherwise, Arduino will send us "not detected" as the sensor did not detect a vibration.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'if (value == HIGH){ \n// when the sensor detects a signal, serial monitor will say "detected"\n    Serial.print("detected"); \n  }\n  else{ // if not, serial monitor will say "not detected" \n    Serial.print("Not detected");\n  }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"full-code",children:"Full Code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define led 13 // define LED interface\n#define vibration A5 // define the vibration sensor interface \nint value; // get value from sensor \n\nvoid setup() {\n  pinMode(led, OUTPUT);\n  pinMode(vibration, INPUT);\n  Serial.begin(9600);\n\n}\n\nvoid loop() {\n  value = digitalRead(vibration); // get value from vibration sensor \n  if (value == HIGH){ \n// when the sensor detects a signal, serial monitor will say "detected"\n    Serial.println("detected"); \n  }\n  else{ // if not, serial monitor will say "not detected"\n    Serial.println("not detected");\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Serial Monitor Output: This is an example of what it will show when the sensor detects a vibration or not."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(316).A+"",width:"480",height:"278"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},30561:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1750_01-28de18357bb8491dc8c84dad2846d50a.png"},16330:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1750_02-61c94e9cfa3bed3f7b3ea87024a861cd.png"},55187:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1750_03-349649b275c297704e99581cec22cb89.png"},316:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1750_04-2c222719f0ab0149de640de4622f055d.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);