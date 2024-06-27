"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5317],{23853:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var n=i(74848),r=i(28453);const s={sidebar_position:22},o="The Serial Monitor",l={id:"UNO-R4-Starter-Kit/Serial-Monitor",title:"The Serial Monitor",description:"Shift registers are versatile components that allow you to control multiple outputs using only a few pins from your microcontroller. This is particularly useful when you need to control many LEDs but have limited I/O pins available on your Arduino.",source:"@site/docs/UNO-R4-Starter-Kit/Serial-Monitor.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Serial-Monitor",permalink:"/UNO-R4-Starter-Kit/Serial-Monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Serial-Monitor.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Shift Registers and LED",permalink:"/UNO-R4-Starter-Kit/Shift-Registers-and-LED"},next:{title:"Photocell",permalink:"/UNO-R4-Starter-Kit/Photocell"}},d={},a=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"74HC595 Shift Register Pins:",id:"74hc595-shift-register-pins",level:4},{value:"LEDs and Resistors:",id:"leds-and-resistors",level:4}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"the-serial-monitor",children:"The Serial Monitor"}),"\n",(0,n.jsx)(t.p,{children:"Shift registers are versatile components that allow you to control multiple outputs using only a few pins from your microcontroller. This is particularly useful when you need to control many LEDs but have limited I/O pins available on your Arduino."}),"\n",(0,n.jsx)(t.h2,{id:"materials",children:"Materials"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Component"}),(0,n.jsx)(t.th,{children:"Image"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Breadboard"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Jumper wires"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Arduino Uno R4 Minima"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"74HC595 Shift Register"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/74HC595.png",width:"190",height:"150"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"220 Ohm Resistors"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/resistors.webp",width:"150",height:"150"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LEDS (white, red, blue, or green)"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/LED.jpg",width:"150",height:"100"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"instructions",children:"Instructions"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Make the following connections using the breadboard and jumper wires."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"74hc595-shift-register-pins",children:"74HC595 Shift Register Pins:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Pin 11 (SRCLR): Connect to 5V (to keep the shift register clear)."}),"\n",(0,n.jsx)(t.li,{children:"Pin 12 (RCLK / Latch Pin): Connect to Arduino R4 pin 11."}),"\n",(0,n.jsx)(t.li,{children:"Pin 14 (SER / Data Pin): Connect to Arduino R4 pin 12."}),"\n",(0,n.jsx)(t.li,{children:"Pin 10 (SRCLK / Clock Pin): Connect to Arduino R4 pin 9."}),"\n",(0,n.jsx)(t.li,{children:"Pin 8 (GND): Connect to ground."}),"\n",(0,n.jsx)(t.li,{children:"Pin 16 (VCC): Connect to 5V."}),"\n",(0,n.jsx)(t.li,{children:"Pin 13 (OE): Connect to ground (to enable output)."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"leds-and-resistors",children:"LEDs and Resistors:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Connect the positive legs of the LEDs to the output pins Q0 to Q7 of the 74HC595."}),"\n",(0,n.jsx)(t.li,{children:"Connect the negative legs of the LEDs to ground through the current-limiting resistors."}),"\n"]}),"\n",(0,n.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/shift-registers-and-LEDs.png",width:"500",height:"480"}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Paste the following code into your main Arduino sketch:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"int latchPin = 11;\r\nint clockPin = 9;\r\nint dataPin = 12;\r\n\r\nbyte leds = 0;\r\n\r\nvoid updateShiftRegister()\r\n{\r\n   digitalWrite(latchPin, LOW);\r\n   shiftOut(dataPin, clockPin, LSBFIRST, leds);\r\n   digitalWrite(latchPin, HIGH);\r\n}\r\n\r\nvoid setup() \r\n{\r\n  pinMode(latchPin, OUTPUT);\r\n  pinMode(dataPin, OUTPUT);  \r\n  pinMode(clockPin, OUTPUT);\r\n  updateShiftRegister();\r\n  Serial.begin(9600);\r\n  while (! Serial); // Wait until Serial is ready - Leonardo\r\n  Serial.println(\"Enter LED Number 0 to 7 or 'x' to clear\");\r\n}\r\n\r\nvoid loop() \r\n{\r\n  if (Serial.available())\r\n  {\r\n    char ch = Serial.read();\r\n    if (ch >= '0' && ch <= '7')\r\n    {\r\n      int led = ch - '0';\r\n      bitSet(leds, led);\r\n      updateShiftRegister();\r\n      Serial.print(\"Turned on LED \");\r\n      Serial.println(led);\r\n    }\r\n    if (ch == 'x')\r\n    {\r\n      leds = 0;\r\n      updateShiftRegister();\r\n      Serial.println(\"Cleared\");\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Test! Very the inputs into your serial monitor and observe the light changes."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);