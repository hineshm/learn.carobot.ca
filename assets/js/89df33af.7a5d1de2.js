"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8535],{12414:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=s(74848),t=s(28453);const o={title:"Flex Sensor 2.2",sidebar_position:1},r="How to use The Flex Sensor",a={id:"flex-sensor",title:"Flex Sensor 2.2",description:"The flex sensor is a variable resistor that can bend. The resistance increases as you bend the component to a smaller angle. This component can be used to measure how much someone is bending their fingers or when a door is opened through this technology.",source:"@site/guide/2290-flex-sensor.md",sourceDirName:".",slug:"/flex-sensor",permalink:"/guide/flex-sensor",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/2290-flex-sensor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Flex Sensor 2.2",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Photodiode Module",permalink:"/guide/photodiode-sensor-module"},next:{title:"HC-SR501 Sensor",permalink:"/guide/ultrasonic-motion-detector"}},d={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-use-the-flex-sensor",children:"How to use The Flex Sensor"}),"\n",(0,i.jsx)(n.p,{children:"The flex sensor is a variable resistor that can bend. The resistance increases as you bend the component to a smaller angle. This component can be used to measure how much someone is bending their fingers or when a door is opened through this technology."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(87661).A+"",width:"300",height:"300"})}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,i.jsx)(n.p,{children:"One side of the sensor is created with polymer ink which is a conductive material. When the sensor is straight and not bent the resistance is around 30\u2126. When you begin to bend the flex sensor away from the ink side the resistance increases to 50-70\u2126."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:s(76772).A+"",width:"300",height:"177"})," ",(0,i.jsx)(n.img,{src:s(25348).A+"",width:"300",height:"175"})]}),"\n",(0,i.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,i.jsx)(n.p,{children:"The sensor is not polarized meaning you can wire the component however you like."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pin 1: connected to Arduino pin A0 and is Grounded"}),"\n",(0,i.jsx)(n.li,{children:"Pin 2: connected to voltage from the Arduino (5V)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(16078).A+"",width:"300",height:"221"})}),"\n",(0,i.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/2290",children:'Flex Sensor (2.2")'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/223",children:"BreadBoard"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1765",children:"10 k\u2126 resistor"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connect the 5V and GND pins to the breadboard"}),"\n",(0,i.jsx)(n.li,{children:"Connect a 10 k\u2126 resistor to one of the Flex sensor pins"}),"\n",(0,i.jsx)(n.li,{children:"Connect the same Flex sensor pin to an Analog pin on the Arduino Uno"}),"\n",(0,i.jsx)(n.li,{children:"Connect the other end of the resistor to ground"}),"\n",(0,i.jsx)(n.li,{children:"Connect the other Flex sensor pin to voltage"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:s(13257).A+"",width:"300",height:"181"}),"\n",(0,i.jsx)(n.img,{src:s(81104).A+"",width:"225",height:"300"})]}),"\n",(0,i.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,i.jsx)(n.p,{children:"The following code demonstrates how the Flex sensor works and measures the resistance when it is bent. If you want to skip the steps, you can jump to the Full Code."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 1:"})," Create variables for the sensors pin and a variable to store the data that is collected"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"int flex = A0;\nint data = 0;\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 2:"})," Set up serial communication, set the ",(0,i.jsx)(n.strong,{children:"flex"})," pin as an ",(0,i.jsx)(n.strong,{children:"OUTPUT"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"void setup() {\n Serial.begin(9600);\n pinMode(flex, INPUT);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step 3:"})," Read the data from the ",(0,i.jsx)(n.strong,{children:"flex"})," pin and print it out to the serial monitor"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"void loop() {\n data = analogRead(flex);\n Serial.println(data);\n\n delay(100); // one second delay\n\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"int flex = A0;\nint data = 0;\n\n\nvoid setup() {\n Serial.begin(9600);\n pinMode(flex, INPUT);\n\n}\n\nvoid loop() {\n data = analogRead(flex);\n Serial.println(data);\n\n delay(100); // one second delay\n\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,i.jsx)(n.p,{children:"The following code will result with the servo motor moving the number of degrees that is measured from the rotation\nof the potentiometer."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},87661:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2290(1)-71f2d8d5194c9b80b494f26a5494a9be.jpg"},76772:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2290(2)-248e5e80531eb6c86bfa9f20da737215.jpg"},25348:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2290(3)-4278a1688bab11460e30617fc7e3e60b.jpg"},16078:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2290(4)-164554b86dc2cdcf3c1041718105511b.jpg"},13257:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2290(5)-cd6ade924bdb67946ae58ebab555ca61.jpg"},81104:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2290(6)-aeb9ffea2ddc2d8c3213d25c41cc2e60.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);