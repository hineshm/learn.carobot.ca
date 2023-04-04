"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[1139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={title:"Infrared Sensor Module (TCRT5000) with Adjustable Reference Guide",sidebar_position:18},a=void 0,l={unversionedId:"product_guide/infrared-sensor-module-with-adjustable-reference",id:"product_guide/infrared-sensor-module-with-adjustable-reference",title:"Infrared Sensor Module (TCRT5000) with Adjustable Reference Guide",description:"The Infrared Sensor Module (TCRT5000) with Adjustable Reference is a Line Tracking Module. It is an infrared distance module most used for robot applications like a line following robot car, product line decoder and much more. This module can adjust the sensitivity distance from 2cm to 40cm by twisting the potentiometer clockwise and anti-clockwise.",source:"@site/guide/product_guide/2082-infrared-sensor-module-with-adjustable-reference.md",sourceDirName:"product_guide",slug:"/product_guide/infrared-sensor-module-with-adjustable-reference",permalink:"/guide/product_guide/infrared-sensor-module-with-adjustable-reference",draft:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/product_guide/2082-infrared-sensor-module-with-adjustable-reference.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Infrared Sensor Module (TCRT5000) with Adjustable Reference Guide",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"DSO138 Oscilloscope Kit Guide",permalink:"/guide/product_guide/oscilloscope-kit"},next:{title:"Rotary Encoder Module Guide",permalink:"/guide/product_guide/rotary-encoder-module"}},d={},u=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}],s={toc:u},p="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Infrared Sensor Module (TCRT5000) with Adjustable Reference is a Line Tracking Module. It is an infrared distance module most used for robot applications like a line following robot car, product line decoder and much more. This module can adjust the sensitivity distance from 2cm to 40cm by twisting the potentiometer clockwise and anti-clockwise. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(59507).Z,width:"340",height:"295"})),(0,i.kt)("p",null,"This article will talk about the pinout and wiring of the module operating with an Arduino Board. At the end of the tutorial, you will learn how to build a line decoder to detect objects."),(0,i.kt)("h2",{id:"wiring"},"Wiring"),(0,i.kt)("p",null,"The infrared module operates at 3V to 5V DC and produces a digital output. There are two different types of infrared modules in the market where one can produce analog output and the other cannot. We will be using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/2082"},"Infrared Sensor Module (TCRT5000)")," with Adjustable Reference (the one with no analog output), the one we carry in our shop. "),(0,i.kt)("p",null,"The module consists of 3 output pins that connect the TCRT5000 module to a microcontroller, like Arduino. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GND:")," Ground pin to connect the tracking sensor to the ground with the microcontroller"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"VCC:")," Power pin for 3.3V to 5V operation voltage with the microcontroller "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"S:")," Digital output pin based on a predefined threshold through the potentiometer and the operation voltage of the microcontroller. ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4062).Z,width:"480",height:"137"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"potentiometer")," defines a threshold for the digital output pin. "),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"LED")," is to indicate the status of the digital pin."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"multiple resistors")," are to prevent the LED from too high voltages and to operates as voltage dividers. "),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"LM393 dual comparator")," is used to compare the signal created by the IR receiver with the redefined value through the potentiometer and to control the LED status that indicates the status of the digital output. "),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"TCRT5000 reflective IR sensor")," has two parts: the blue LED is an emission of the infrared radiation, the black part is an infrared receiver, and the daylight is blocked with the black surface."),(0,i.kt)("h2",{id:"parts"},"Parts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/2082"},"Infrared Sensor Module (TCRT5000) with Adjustable Reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,i.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,i.kt)("p",null,"Connect all the pins with female to male jumper wires"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(78873).Z,width:"480",height:"351"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Infrared Sensor Module G -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"GND")," pin "),(0,i.kt)("li",{parentName:"ul"},"Infrared Sensor Module V+ --  Arduino ",(0,i.kt)("strong",{parentName:"li"},"5V")," pin "),(0,i.kt)("li",{parentName:"ul"},"Infrared Sensor Module S -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"D7")," pin ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(80683).Z,width:"480",height:"328"}),"\n",(0,i.kt)("img",{src:n(3655).Z,width:"480",height:"354"})),(0,i.kt)("h2",{id:"programming"},"Programming"),(0,i.kt)("p",null,"We want to turn on the internal LED on Arduino Uno when the sensor module detects something in front of it. "),(0,i.kt)("p",null,"If you want to skip the steps, you can jump to the Full Code. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Define the connection pin and internal LED."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#define digital_pin 7 \n#define internal_LED 13\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Set up the sensor module digital output pin as input and the internal LED as output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n  pinMode(digital_pin, INPUT);\n  pinMode(internal_LED, OUTPUT);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Read digital output from sensor module's digital pin. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void loop(){\n  if (digitalRead(digital_pin) == HIGH){\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," If the output is HIGH (when it receives light/detects white colour), the internal LED will be turned off. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"}," // read digital state of the sensor module \n    digitalWrite(internal_LED, LOW); // turn off led\n  }\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5:")," If the output is LOW (when it does not receive any light/ detects black colour), the internal LED will be turned on. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"else{\n    digitalWrite(internal_LED, HIGH); // turn on the led \n  }\n}\n")),(0,i.kt)("h2",{id:"full-code"},"Full Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#define digital_pin 7 \n#define internal_LED 13\n\nvoid setup(){\n  pinMode(digital_pin, INPUT);\n  pinMode(internal_LED, OUTPUT);\n}\n\nvoid loop(){\n  if (digitalRead(digital_pin) == HIGH){ \n    // read digital state of the sensor module \n    digitalWrite(internal_LED, LOW); // turn off led\n  }\n  else{\n    digitalWrite(internal_LED, HIGH); // turn on the led \n  }\n}\n")),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"Next to the GND pin, the internal LED light will be turning on or off depending if the sensor detects the colour or light. I am covering the sensor to demonstrate its output. Please use a black-coloured piece of paper to cover it or with an object. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(10623).Z,width:"400",height:"278"})))}c.isMDXComponent=!0},10623:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2082_01-565a3e58089ef4ed74ecc47bd97a7667.gif"},59507:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2082_01-ce8b7ae850a9d6c24175ce67f08a3fb6.png"},4062:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2082_02-8d8149b24437dd666f8683fbb09c52ed.png"},78873:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2082_03-00b3f0dce81e56d52eafe5dee464ed94.png"},80683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2082_04-fe1633cee91a475142162af784885bb8.png"},3655:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2082_05-1857d2e7e4c8882e1493b3bcb9a7f137.png"}}]);