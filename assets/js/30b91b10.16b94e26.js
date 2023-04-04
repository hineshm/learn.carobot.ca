"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[5033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Humidity and Temperature Sensor (DHT11) Guide",sidebar_position:9},o=void 0,s={unversionedId:"product_guide/humidity-and-temperature-sensor",id:"product_guide/humidity-and-temperature-sensor",title:"Humidity and Temperature Sensor (DHT11) Guide",description:"The DHT11 is a basic, low- humidity and temperature sensor. It makes it really easy to add humidity and temperature data to your electronics projects. It is used for remote weather stations, home environmental control systems, and farm or garden monitoring systems.",source:"@site/guide/product_guide/1754-humidity-and-temperature-sensor.md",sourceDirName:"product_guide",slug:"/product_guide/humidity-and-temperature-sensor",permalink:"/guide/product_guide/humidity-and-temperature-sensor",draft:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/product_guide/1754-humidity-and-temperature-sensor.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Humidity and Temperature Sensor (DHT11) Guide",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"How to use a HC-SR501 Sensor",permalink:"/guide/product_guide/ultrasonic-motion-detector"},next:{title:"Soil Moisture Sensor Module (Capacitive) Guide",permalink:"/guide/product_guide/soil-poisture-sensor-capacitive"}},p={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Connect the sensor with Arduino Uno",id:"connect-the-sensor-with-arduino-uno",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}],u={toc:l},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The DHT11 is a basic, low- humidity and temperature sensor. It makes it really easy to add humidity and temperature data to your electronics projects. It is used for remote weather stations, home environmental control systems, and farm or garden monitoring systems. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3371).Z,width:"480",height:"320"})),(0,a.kt)("p",null,"In this article, we will be talking about the set up and operating the sensor with an Arduino Board. "),(0,a.kt)("p",null,"The DHT11 sensor has some range and accurate for collecting data: "),(0,a.kt)("p",null,"If you want to know more, check out this ",(0,a.kt)("a",{parentName:"p",href:"https://cdn.shopify.com/s/files/1/0015/7571/4865/files/DHT11-Technical-Data-Sheet.pdf"},"DHT11 data sheet"),". "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Humidity Range: 20-90% RH"),(0,a.kt)("li",{parentName:"ul"},"Humidity Accuracy: \xb15% RH"),(0,a.kt)("li",{parentName:"ul"},"Temperature Range: 0-50 \xb0C"),(0,a.kt)("li",{parentName:"ul"},"Temperature Accuracy: \xb12% \xb0C"),(0,a.kt)("li",{parentName:"ul"},"Operating Voltage: 3V to 5.5V")),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The DHT11 detects water vapour by measuring the electrical resistance between two electrodes, while it measures temperature with a surface-mounted NTC temperature sensor (thermistor) built into the unit. "),(0,a.kt)("p",null,"It uses just one signal wire to transmit data to the Arduino. Power comes from separate 5V and ground wires. A 10K ohm pull-up resistor is needed between the signal line and 5V line to make sure the signal level stays high by default. "),(0,a.kt)("p",null,"There are two different versions of the DHT11 in the market. One type has four pins, and the other has three pins and is mounted to a small PCB. The PCB-mounted version is nice because it includes a surface-mounted 10K ohm pull-up resistor for the signal line. However, we will be using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/1754"},"DHT11 sensor"),", the one we carry in our shop for this project."),(0,a.kt)("h2",{id:"parts"},"Parts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/1754"},"DHT11 sensor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/918"},"10K ohms resistor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,a.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58363).Z,width:"166",height:"337"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Connect 5V and signal pin with a 10K resistor.")),(0,a.kt)("p",null,"10K resistor"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(20956).Z,width:"353",height:"66"})),(0,a.kt)("p",null,"Assembled"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(36316).Z,width:"480",height:"338"})),(0,a.kt)("p",null,"Then, connect the male to male jumper wires onto the breadboard. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(43895).Z,width:"480",height:"338"})),(0,a.kt)("h2",{id:"connect-the-sensor-with-arduino-uno"},"Connect the sensor with Arduino Uno"),(0,a.kt)("p",null,"DTH11 ",(0,a.kt)("strong",{parentName:"p"},"VCC")," (leftmost pin) -- Arduino ",(0,a.kt)("strong",{parentName:"p"},"5V")," pin\nDTH11 ",(0,a.kt)("strong",{parentName:"p"},"Signal")," (second leftmost pin) -- Arduino ",(0,a.kt)("strong",{parentName:"p"},"D7")," pin\nDTH11 ",(0,a.kt)("strong",{parentName:"p"},"Ground"),"(rightmost pin) -- Arduino ",(0,a.kt)("strong",{parentName:"p"},"GND")," pin "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(98879).Z,width:"480",height:"271"}),"\n",(0,a.kt)("img",{src:n(44683).Z,width:"480",height:"340"})),(0,a.kt)("h2",{id:"programming"},"Programming"),(0,a.kt)("p",null,"The following code demonstrates how the DTH11 sensor works and collects the data. IT will get the humidity and temperature readings from the sensor. If you want to skip all the steps, you can jump to the Full Code."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Download the DHTLib library."),(0,a.kt)("p",null,"After downloading the ZIP file, open Arduino and go to ",(0,a.kt)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(59941).Z,width:"480",height:"138"})),(0,a.kt)("p",null,'A pop-up window will appear. Click on the " "file and click on ',(0,a.kt)("strong",{parentName:"p"},"Choose")," on the right bottom corner."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(49671).Z,width:"480",height:"402"})),(0,a.kt)("p",null,"As the window has closed, go to ",(0,a.kt)("strong",{parentName:"p"},"Sketch > Include Library > Contributed libraries"),". There you will see the library has been added to your Arduino. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(88763).Z,width:"413",height:"480"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Include the library in the code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <dht.h>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Define the sensor connection pin to Arduino Uno "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"dht DHT;\n#define sensor 7\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Set up serial communication between Arduino Uno and DHT11 sensor. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n  Serial.begin(9600);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," Get reading from the sensor. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'void loop(){\n  int reader = DHT.read11(sensor);\nStep 6: Print out the data the sensor has collected onto the Serial Monitor every one second. \n\nSerial.print("Temperature = ");\n  Serial.println(DHT.temperature);\n  Serial.print("Humidity = ");\n  Serial.println(DHT.humidity);\n  delay(1000);\n}\n')),(0,a.kt)("h2",{id:"full-code"},"Full Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <dht.h>\n\ndht DHT;\n\n#define sensor 7\n\nvoid setup(){\n  Serial.begin(9600);\n}\n\nvoid loop(){\n  int reader = DHT.read11(sensor);\n  Serial.print("Temperature = ");\n  Serial.println(DHT.temperature);\n  Serial.print("Humidity = ");\n  Serial.println(DHT.humidity);\n  delay(1000);\n}\n')),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"You should see the humidity and temperature readings displayed at one second intervals."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87509).Z,width:"146",height:"65"})))}c.isMDXComponent=!0},3371:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1754_01-7c4cf7b8f472ba99b753589643ecb9fa.jpg"},58363:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1754_01-c4cfd8db1e2b3e3d1279dafe468efbf3.png"},20956:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},36316:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1754_03-b950e2b651e6041423adad69af03af73.png"},43895:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1754_04-9a29bc42bca70312d68580fd81450cdf.png"},98879:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1754_05-67c92ba23b8322e9ec99d171ad2fd99a.png"},44683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1754_06-d21faa35a90871845a516bbfde2328f7.png"},59941:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1754_07-528cf5421cc130a84386dc4df8c9f2e6.png"},49671:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1754_08-194f9133fa4c726ad3b20c0f5ab329c1.png"},88763:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1754_09-e139fa7945cd366fbd3267f8218931de.png"},87509:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);