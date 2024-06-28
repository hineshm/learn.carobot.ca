"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4330],{95348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>s,toc:()=>a});var i=t(74848),r=t(28453);const d={sidebar_position:20},o="Thermometer",s={id:"UNO-R4-Starter-Kit/Thermometer",title:"Thermometer",description:"Whether you're new to electronics or a seasoned maker, this project is a great way to dive into the world of Arduino and sensor interfacing. By the end of this tutorial, you will have a fully functional digital thermometer that displays real-time temperature and humidity readings on an LCD screen.",source:"@site/docs/UNO-R4-Starter-Kit/Thermometer.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/Thermometer",permalink:"/UNO-R4-Starter-Kit/Thermometer",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/Thermometer.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"LCD 1602 Module",permalink:"/UNO-R4-Starter-Kit/LCD-1602-Module"},next:{title:"Shift Registers and LED",permalink:"/UNO-R4-Starter-Kit/Shift-Registers-and-LED"}},l={},a=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4},{value:"LCD1602 to Arduino R4 Minima",id:"lcd1602-to-arduino-r4-minima",level:5},{value:"DHT11 Sensor",id:"dht11-sensor",level:5}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"thermometer",children:"Thermometer"}),"\n",(0,i.jsx)(n.p,{children:"Whether you're new to electronics or a seasoned maker, this project is a great way to dive into the world of Arduino and sensor interfacing. By the end of this tutorial, you will have a fully functional digital thermometer that displays real-time temperature and humidity readings on an LCD screen."}),"\n",(0,i.jsx)(n.h2,{id:"materials",children:"Materials"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Component"}),(0,i.jsx)(n.th,{children:"Image"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Breadboard"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Jumper wires"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Arduino Uno R4 Minima"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LCD 1602 Module"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/LCD1602.webp",width:"200",height:"200"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DHT11 Temperature and Humidity Sensor"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/DHT11-Sensor.jpg",width:"190",height:"190"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Make the following connections using the breadboard and jumper wires."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"connections",children:"Connections"}),"\n",(0,i.jsx)(n.h5,{id:"lcd1602-to-arduino-r4-minima",children:"LCD1602 to Arduino R4 Minima"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"RS (Register Select) pin to Arduino digital pin 7"}),"\n",(0,i.jsx)(n.li,{children:"E (Enable) pin to Arduino digital pin 8"}),"\n",(0,i.jsx)(n.li,{children:"D4 pin to Arduino digital pin 9"}),"\n",(0,i.jsx)(n.li,{children:"D5 pin to Arduino digital pin 10"}),"\n",(0,i.jsx)(n.li,{children:"D6 pin to Arduino digital pin 11"}),"\n",(0,i.jsx)(n.li,{children:"D7 pin to Arduino digital pin 12"}),"\n",(0,i.jsx)(n.li,{children:"GND to GND"}),"\n",(0,i.jsx)(n.li,{children:"VDD to 5V"}),"\n",(0,i.jsx)(n.li,{children:"VO to the middle pin of a 10k potentiometer (the other two pins of the potentiometer to 5V and GND)"}),"\n",(0,i.jsx)(n.li,{children:"BLA to 5V"}),"\n",(0,i.jsx)(n.li,{children:"BLK to GND"}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"dht11-sensor",children:"DHT11 Sensor"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Signal to pin 2"}),"\n",(0,i.jsx)(n.li,{children:"Vcc to 5V"}),"\n",(0,i.jsx)(n.li,{children:"Gnd to GND"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/Thermometer.png",width:"600",height:"600"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Download the "LiquidCrystal" and "DHT" libraries from the Library Manager on the Arduino IDE.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Paste the following code into your main Arduino sketch:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <LiquidCrystal.h>\n#include <DHT.h>\n\n// Initialize the LCD library with the numbers of the interface pins\nLiquidCrystal lcd(7, 8, 9, 10, 11, 12);\n\n// Define the pin for the DHT11 sensor\n#define DHTPIN 2\n\n// Define the type of DHT sensor\n#define DHTTYPE DHT11\n\n// Initialize the DHT sensor\nDHT dht(DHTPIN, DHTTYPE);\n\nvoid setup() {\n  // Start the LCD\n  lcd.begin(16, 2);\n  lcd.print("DHT11 Sensor");\n  \n  // Start the serial communication\n  Serial.begin(9600);\n  \n  // Start the DHT sensor\n  dht.begin();\n  \n  delay(2000); // Wait 2 seconds before starting loop\n}\n\nvoid loop() {\n  // Read humidity and temperature\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  float f = dht.readTemperature(true);\n\n  // Check if any reads failed and exit early (to try again).\n  if (isnan(h) || isnan(t) || isnan(f)) {\n    Serial.println("Failed to read from DHT sensor!");\n    lcd.setCursor(0, 0);\n    lcd.print("Sensor Error   ");\n    return;\n  }\n\n  // Compute heat index in Fahrenheit (the default)\n  float hif = dht.computeHeatIndex(f, h);\n  // Compute heat index in Celsius\n  float hic = dht.computeHeatIndex(t, h, false);\n\n  // Print values to serial monitor\n  Serial.print("Humidity: ");\n  Serial.print(h);\n  Serial.print(" %\\t");\n  Serial.print("Temperature: ");\n  Serial.print(t);\n  Serial.print(" *C ");\n  Serial.print(f);\n  Serial.print(" *F\\t");\n  Serial.print("Heat index: ");\n  Serial.print(hic);\n  Serial.print(" *C ");\n  Serial.print(hif);\n  Serial.println(" *F");\n\n  // Print values to LCD\n  lcd.setCursor(0, 0);\n  lcd.print("Temp: ");\n  lcd.print(t);\n  lcd.print(" C");\n\n  lcd.setCursor(0, 1);\n  lcd.print("Humidity: ");\n  lcd.print(h);\n  lcd.print(" %");\n\n  delay(2000); // Delay 2 seconds before the next reading\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Connect your Arduino to your laptop using a USB-C cable and upload the code to the arduino."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run! Observe the temperature and humidity on the display."}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const r={},d=i.createContext(r);function o(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);