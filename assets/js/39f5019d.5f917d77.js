"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[2307],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,h=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4534:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"How to use a HC-SR501 Sensor",sidebar_position:8},s=void 0,p={unversionedId:"product_guide/ultrasonic-motion-detector",id:"product_guide/ultrasonic-motion-detector",title:"How to use a HC-SR501 Sensor",description:"HC-SR501 is based on infrared technology, an automatic control module with high sensitivity and ultra-low-voltage operating mode, making it highly reliable to use. It is widely used in various auto-sensing electrical equipment, like battery-powered automatic controlled products.",source:"@site/guide/product_guide/2327-ultrasonic-motion-detector.md",sourceDirName:"product_guide",slug:"/product_guide/ultrasonic-motion-detector",permalink:"/guide/product_guide/ultrasonic-motion-detector",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/guide/product_guide/2327-ultrasonic-motion-detector.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to use a HC-SR501 Sensor",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"How to use a Photodiode Module",permalink:"/guide/product_guide/photodiode-sensor-module"},next:{title:"Humidity and Temperature Sensor (DHT11) Guide",permalink:"/guide/product_guide/humidity-and-temperature-sensor"}},u=[{value:"Wiring",id:"wiring",children:[],level:2},{value:"Parts",id:"parts",children:[],level:2},{value:"Wiring Guide",id:"wiring-guide",children:[],level:2},{value:"Programming",id:"programming",children:[],level:2},{value:"Full Code",id:"full-code",children:[],level:2},{value:"Output",id:"output",children:[],level:2}],c={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"HC-SR501 is based on infrared technology, an automatic control module with high sensitivity and ultra-low-voltage operating mode, making it highly reliable to use. It is widely used in various auto-sensing electrical equipment, like battery-powered automatic controlled products."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4355).Z,width:"480",height:"362"})),(0,i.kt)("h2",{id:"wiring"},"Wiring"),(0,i.kt)("p",null,"The HC-SR501 sensor operates at 5V to 20V, and the digital output pin gives out a HIGH or LOW signal depending on if the sensor detects any motions. Thus, the sensor can be used without connecting to a microcontroller and just by a power supply and a load. For instance, it can be connected to the power supply and a lightbulb. Then, when it detects motion within its range (less than 120 degrees, within 7m), the digital output pin will be triggered and send a HIGH signal that gives power to the lightbulb to turn on. "),(0,i.kt)("p",null,"There are a few types of similar motion sensors in the market where the main difference is they have a smaller detection range and do not have a potentiometer to adjust the sensitivity and time delay compared to the one we will be using, the HC-SR501 sensor, the one we carry in our shop."),(0,i.kt)("p",null,"Under the white plastic shield, you will see the actual infrared sensor. The white plastic shield is used to reflect the motion from all around, making the sensor much more sensitive."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4653).Z,width:"480",height:"354"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The infrared sensor under the white plastic shield. ")),(0,i.kt)("p",null,"This module consists of 3 pins that allow it to connect to power supply, load or even a microcontroller easily, like an Arduino. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GND:")," Ground pin to connect the sensor to the ground with the microcontroller or power supply"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"VCC:")," Power pin for 5V to 20V operation voltage with the microcontroller or power supply"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OUT:")," Digital output pin based on a predefined threshold through the potentiometer and the operation voltage of the microcontroller or power supply.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Back side of the module")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7957).Z,width:"480",height:"341"})),(0,i.kt)("h2",{id:"parts"},"Parts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/2327"},"HC-SR501 sensor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,i.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,i.kt)("p",null,"Connect the pins with female to male jumper wires"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4388).Z,width:"480",height:"279"})),(0,i.kt)("p",null,"HC-SR501 sensor ",(0,i.kt)("strong",{parentName:"p"},"GND")," pin -- Arduino ",(0,i.kt)("strong",{parentName:"p"},"GND")," pin\nHC-SR501 sensor ",(0,i.kt)("strong",{parentName:"p"},"VCC")," pin -- Arduino ",(0,i.kt)("strong",{parentName:"p"},"5V")," pin\nHC-SR501 sensor ",(0,i.kt)("strong",{parentName:"p"},"OUT")," pin -- Arduino ",(0,i.kt)("strong",{parentName:"p"},"D2")," pin "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9203).Z,width:"480",height:"208"})),(0,i.kt)("h2",{id:"programming"},"Programming"),(0,i.kt)("p",null,"In the following code, we will read out the sensor. Next, the code will read the sensor's state (HIGH or LOW) and print a message to the Serial Monitor. The code can also be used to control simple relays to turn a bigger light on or off. "),(0,i.kt)("p",null,"If you want to skip the steps, you can jump to the Full Code."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Define the connection pin. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#define sensor 2\n")),(0,i.kt)("p",null,"Step 2: Create a variable to store the sensor's state. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int state = 0;\n")),(0,i.kt)("p",null,"Step 3: Set up serial communication between Arduino and the sensor and set the sensor as input. This way, the sensor can send signal to Arduino and Arduino will send out messages accordingly. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {\n  Serial.begin(9600);// setup Serial Monitor to display information\n  pinMode(sensor, INPUT);// Input from sensor\n}\n")),(0,i.kt)("p",null,"Step 4: Read the state of the sensor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void loop() {\n  state =digitalRead(sensor);\n")),(0,i.kt)("p",null,'Step 5: If the sensor is triggered, print out "Motion detected". Otherwise, print "==nothing moves".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'  if(state){\n    Serial.println("Motion detected");\n  }\n  else{\n     Serial.println("===nothing moves");\n  }\n')),(0,i.kt)("p",null,"Step 6: Stop for half a second.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"  delay(500);\n\n}\n")),(0,i.kt)("h2",{id:"full-code"},"Full Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#define sensor 2\n\nint state = 0;\n\nvoid setup() {\n  Serial.begin(9600);// setup Serial Monitor to display information\n  pinMode(sensor, INPUT);// Input from sensor\n}\n\nvoid loop() {\n  state =digitalRead(sensor);\n  if(state){\n    Serial.println("Motion detected");\n  }\n  else{\n     Serial.println("===nothing moves");\n  }\n  delay(500);\n\n}\n')),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"It will print out a message according to its state whether if it detects anything within the range. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9167).Z,width:"133",height:"194"})))}d.isMDXComponent=!0},4355:function(e,t,n){t.Z=n.p+"assets/images/2327_01-707eeac05e5d3f7a97fab3e4e9cc9c4b.jpg"},4653:function(e,t,n){t.Z=n.p+"assets/images/2327_01-dc2fa0a274a17a1a05a8e30dd3c7433c.png"},7957:function(e,t,n){t.Z=n.p+"assets/images/2327_02-97b2e7fb6c35686dfac7d625df730d28.jpg"},4388:function(e,t,n){t.Z=n.p+"assets/images/2327_02-5139283d188236e62be16495a7503e1f.png"},9203:function(e,t,n){t.Z=n.p+"assets/images/2327_03-4fca20ec5b736c5337de092cc90adb5c.png"},9167:function(e,t){t.Z="data:image/png;base64,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"}}]);