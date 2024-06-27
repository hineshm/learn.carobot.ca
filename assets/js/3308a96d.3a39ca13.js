"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1725],{23190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(74848),o=t(28453);const r={title:"MQ-2 Smoke Sensor",sidebar_position:1},i="How to use The MQ-2 Smoke Sensor",a={id:"smoke-sensor",title:"MQ-2 Smoke Sensor",description:"The MQ-2 Smoke Sensor is a very popular module for detecting smoke and to flammable gases like LPG, Butane, Propane, Methane, Alcohol, and hydrogen. It outputs different voltage accordingly to the smoke/gas level that exists in the atmosphere. The sensor outputs a voltage that is proportional to the concentration of smoke/gas. In other words, the greater the gas concentration, the greater the output voltage. The lower the gas concentration, the lower the output voltage.",source:"@site/guide/2377-smoke-sensor.md",sourceDirName:".",slug:"/smoke-sensor",permalink:"/guide/smoke-sensor",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/2377-smoke-sensor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"MQ-2 Smoke Sensor",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HC-SR501 Sensor",permalink:"/guide/ultrasonic-motion-detector"},next:{title:'0.56" DC 0-100V Panel Meter Digital Voltmeter',permalink:"/guide/digital-voltmeter"}},h={},l=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-use-the-mq-2-smoke-sensor",children:"How to use The MQ-2 Smoke Sensor"}),"\n",(0,s.jsx)(n.p,{children:"The MQ-2 Smoke Sensor is a very popular module for detecting smoke and to flammable gases like LPG, Butane, Propane, Methane, Alcohol, and hydrogen. It outputs different voltage accordingly to the smoke/gas level that exists in the atmosphere. The sensor outputs a voltage that is proportional to the concentration of smoke/gas. In other words, the greater the gas concentration, the greater the output voltage. The lower the gas concentration, the lower the output voltage."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(61396).A+"",width:"480",height:"320"})}),"\n",(0,s.jsx)(n.p,{children:"The smoke sensor has a built-in potentiometer that allows you to adjust the sensor sensitivity according to how accurate you want to detect gas. It has both digital and analog pins that can read with an analog input or a digital output that can be read with a digital input from an Arduino Board."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(65200).A+"",width:"480",height:"322"})}),"\n",(0,s.jsx)(n.p,{children:"In this article, we will talk about how to wire and set up the module for operation with an Arduino Board."}),"\n",(0,s.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,s.jsxs)(n.p,{children:["Most MQ-2 modules operate at 5V and gives out both analog and digital outputs. For this project, we will be using ",(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/2377",children:"MQ-2 Smoke Sensor"}),", the one we carry in our shop. This module consists of 4 pins: ",(0,s.jsx)(n.strong,{children:"VCC, A0, D0"})," and ",(0,s.jsx)(n.strong,{children:"GND"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/2377",children:"MQ-2 Smoke Sensor"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/223",children:"BreadBoard"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,s.jsx)(n.p,{children:"Connect the pins with male to male jumper wires"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(79019).A+"",width:"480",height:"468"})}),"\n",(0,s.jsxs)(n.p,{children:["MQ-2 ",(0,s.jsx)(n.strong,{children:"VCC"})," -- Arduino ",(0,s.jsx)(n.strong,{children:"5V"})," pin\r\nMQ-2 ",(0,s.jsx)(n.strong,{children:"A0"})," -- Arduino ",(0,s.jsx)(n.strong,{children:"A0"})," pin\r\nMQ-2 ",(0,s.jsx)(n.strong,{children:"D0"})," -- Arduino ",(0,s.jsx)(n.strong,{children:"D2"})," pin\r\nMQ-2 ",(0,s.jsx)(n.strong,{children:"GND"})," -- Arduino ",(0,s.jsx)(n.strong,{children:"GND"})," pin"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:t(4866).A+"",width:"480",height:"270"}),"\r\n",(0,s.jsx)(n.img,{src:t(50237).A+"",width:"480",height:"360"})]}),"\n",(0,s.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,s.jsx)(n.p,{children:"Before we set a threshold value, we need to know what the numbers are like before the sensor detects any smoke. Follow the following code for the testing. As you have found the threshold value by having smoke near the sensor, set that certain value as the threshold on the code. If you want to skip the steps, you can jump to the Full Code."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 1:"})," Define connection pin."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define sensor A0 \n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 2:"})," Create variables for storing the sensor's state and the threshold value that you have found from putting the sensor near the smoke. (the value might vary depending on your sensor)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int value = 0;\r\nint threshold = 100;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 3:"})," Set up serial communication between Arduino and MQ-2 sensor and set the sensor as an input."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"void setup(){\r\n  Serial.begin(9600);\r\n  pinMode(sensor, INPUT);\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 4:"})," Read sensor's state input"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"void loop(){\r\n  value = analogRead(sensor);\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 5:"}),' if the value is greater than the threshold value, serial monitor will display "smoke detected". Otherwise, it will display "all clear".']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'  if (value > threshold){\r\n    Serial.println("Smoke Detected...");\r\n  }\r\n  else{\r\n    Serial.println("All Clear..");\r\n  }\r\n  delay(1000);\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define sensor A0 \r\n\r\nint value = 0;\r\nint threshold = 100;\r\n\r\nvoid setup(){\r\n  Serial.begin(9600);\r\n  pinMode(sensor, INPUT);\r\n}\r\n\r\nvoid loop(){\r\n  value = analogRead(sensor);\r\n  // to find the threshold, comment the following block out\r\n  /* \r\n   *  Serial.println(value);\r\n   */\r\n  if (value > threshold){\r\n    Serial.println("Smoke Detected...");\r\n  }\r\n  else{\r\n    Serial.println("All Clear..");\r\n  }\r\n  delay(1000);\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.p,{children:"When there is smoke"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(29108).A+"",width:"132",height:"178"})}),"\n",(0,s.jsx)(n.p,{children:"When there is no smoke"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(50575).A+"",width:"91",height:"176"})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},61396:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2377_01-0cb1650d6df8996d4d634c31c6044300.jpg"},65200:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2377_01-f21570b0f28213252059f40ae7ce1019.png"},79019:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2377_02-f21d7e06ddf4f7d4932cf08d14cc5414.png"},4866:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2377_03-7a21272db9d625c0dd4f92cfb6df2605.png"},50237:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2377_04-88431d434399e5322cd93eaf53b4d0a2.png"},29108:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},50575:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);