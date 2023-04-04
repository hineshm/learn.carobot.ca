"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[6160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},A="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),A=s(r),p=i,g=A["".concat(l,".").concat(p)]||A[p]||d[p]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[A]="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const o={title:"ACS712 Current Sensor Module Learn Guide",sidebar_position:21},a=void 0,u={unversionedId:"product_guide/current-sensor-module",id:"product_guide/current-sensor-module",title:"ACS712 Current Sensor Module Learn Guide",description:"The ACS712 Current Sensor module is a very popular module for measuring the current applied in the circuit due to its capabilities and its price.",source:"@site/guide/product_guide/1923-current-sensor-module.md",sourceDirName:"product_guide",slug:"/product_guide/current-sensor-module",permalink:"/guide/product_guide/current-sensor-module",draft:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/product_guide/1923-current-sensor-module.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"ACS712 Current Sensor Module Learn Guide",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"HC-020K Encoder Module Guide",permalink:"/guide/product_guide/encoder-module"},next:{title:"SW-420 Vibration Sensor Guide",permalink:"/guide/product_guide/vibration-sensor-module"}},l={},s=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code:",id:"full-code",level:2},{value:"Serial Monitor Output:",id:"serial-monitor-output",level:2}],c={toc:s},A="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(A,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ACS712 Current Sensor module is a very popular module for measuring the current applied in the circuit due to its capabilities and its price. "),(0,i.kt)("p",null,"In this article, we will talk about how to wire and set up the module for operation with an Arduino Board. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(30514).Z,width:"480",height:"320"})),(0,i.kt)("h2",{id:"wiring"},"Wiring"),(0,i.kt)("p",null,"Most ACS712 modules operate at 5V and produce an analog voltage output proportional to the measured current. For this project, we use a power supply (giving output voltage from 0 to 5V), and a resistor to generate current from 0 to 5 A. There are a few versions of the ACS712 Module in the market, but for this article, we will be using ",(0,i.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/1923"},"ACS712 Current Sensor Module"),", the one we carry in our shop. "),(0,i.kt)("h2",{id:"parts"},"Parts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/1923"},"ACS712 Current Sensor Module")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/2091"},"Power Supply")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/908"},"LED lightbulb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/223"},"Breadboard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,i.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,i.kt)("p",null,"Connect the pins with male to male jumper wires "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ACS712 ",(0,i.kt)("strong",{parentName:"li"},"GND")," -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"GND")," Pin"),(0,i.kt)("li",{parentName:"ul"},"ACS712 ",(0,i.kt)("strong",{parentName:"li"},"VCC")," (5V) -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"5V")," Pin"),(0,i.kt)("li",{parentName:"ul"},"ACS712 ",(0,i.kt)("strong",{parentName:"li"},"VC")," -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"A0")," Pin"),(0,i.kt)("li",{parentName:"ul"},"ACS712 ",(0,i.kt)("strong",{parentName:"li"},"IP-")," -- Power Supply ",(0,i.kt)("strong",{parentName:"li"},"GND")," "),(0,i.kt)("li",{parentName:"ul"},"ACS712 ",(0,i.kt)("strong",{parentName:"li"},"IP+")," -- resistor -- power supply ",(0,i.kt)("strong",{parentName:"li"},"VCC"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(36806).Z,width:"480",height:"256"}),"\n",(0,i.kt)("img",{src:r(34258).Z,width:"480",height:"270"}),"\n",(0,i.kt)("img",{src:r(34156).Z,width:"480",height:"278"})),(0,i.kt)("h2",{id:"programming"},"Programming"),(0,i.kt)("p",null,"Here is the code that will show you the output current in the Serial Monitor. We have set a couple variables in the code. Sensitivity is set to 0.185 according to the module's data sheet. It is based on how sensitive the sensor is to detect current."),(0,i.kt)("p",null,"In the code, there is a small calculation for measuring the current. First, we assume the VCC from Arduino is giving out 5V to the current sensor module, when there is no current flowing through the terminals, the output voltage of the current sensor is 2.5V. This means you would need to subtract 2.5V from the voltage measured at the analog pin. "),(0,i.kt)("p",null,"Now, in order to calculate the current, divide the value with the sensitivity of the sensor (185mV/A for this sensor). "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"float current = (sensor_read - 2500)/sensitivity; \n//calculate for the current value\n")),(0,i.kt)("h2",{id:"full-code"},"Full Code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#define VIN A0\nfloat sensitivity = 185;\n\nvoid setup() {\n  Serial.begin(9600);\n  Serial.println("ACS712 Current Sensor");\n}\n\nvoid loop() {\n  float reading = analogRead(A0);\n  float sensor_read = (reading/1024.0)* 5000; \n// read the sensor output  \n  float current = abs(((sensor_read - 2500)/sensitivity)); \n//calculate for the current value\n  Serial.print("Current: ");\n  Serial.print(current); // print with 3 decimal places\n  Serial.println("A");\n  delay(200); // wait for 2ms for the next calculation\n}\n')),(0,i.kt)("h2",{id:"serial-monitor-output"},"Serial Monitor Output:"),(0,i.kt)("p",null,'When there is no current passing through in the circuit. Serial Monitor will output "0.00A". '),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(57460).Z,width:"174",height:"110"})),(0,i.kt)("p",null,"When there is current passing through the circuit. It will calculate the current of the load. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(94401).Z,width:"160",height:"175"})))}d.isMDXComponent=!0},30514:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1923_01-5e60ba4dfbc41e347d63eae7b1e1f7b3.jpg"},36806:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1923_01-d03a4ab1077bdd86edae5a244e7a1ba4.png"},34258:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1923_02-df792581c6eddf0349232300cb0908e7.jpg"},34156:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1923_02-398970ed8a4667cc79ecf76465cdc48e.png"},57460:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},94401:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);