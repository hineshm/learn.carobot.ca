"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[4477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Sharp Infrared Medium-Range Proximity Sensor (Analog 10-80cm)",sidebar_position:30},i=void 0,s={unversionedId:"product_guide/Medium-Range-Proximity-Sensor",id:"product_guide/Medium-Range-Proximity-Sensor",title:"Sharp Infrared Medium-Range Proximity Sensor (Analog 10-80cm)",description:"The sharp infrared distance proximity sensor is a sensor for distance measurements. This sensor is typically used for measuring larger ranges(approximately 10 \u2013 80 cm(4\u2033 to 31\u2033)), although it is quite accurate.",source:"@site/guide/product_guide/0349-Medium-Range-Proximity-Sensor.md",sourceDirName:"product_guide",slug:"/product_guide/Medium-Range-Proximity-Sensor",permalink:"/guide/product_guide/Medium-Range-Proximity-Sensor",draft:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/product_guide/0349-Medium-Range-Proximity-Sensor.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Sharp Infrared Medium-Range Proximity Sensor (Analog 10-80cm)",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"How to the Use the NeoPixel Compatible WS2812 5050 RGB LED (8 LED 32mm Ring)",permalink:"/guide/product_guide/2737-8LED-32mmRing-NeoPixel"},next:{title:"How to the Use the NeoPixel Compatible WS2812 5050 RGB LED (7 LED 24mm Disc)",permalink:"/guide/product_guide/2739-7LED-24mmDisc-NeoPixel"}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The sharp infrared distance proximity sensor is a sensor for distance measurements. This sensor is typically used for measuring larger ranges(approximately 10 \u2013 80 cm(4\u2033 to 31\u2033)), although it is quite accurate. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(14100).Z,width:"300",height:"300"})),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The component uses a specific light sensor to detect a light wavelength in the Infrared (IR) wave spectrum. The intensity of the light is received when an object is close to the sensor. The light bounces off the object and into the light sensor, which results in a change to the intensity."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(67589).Z,width:"300",height:"87"})," ",(0,a.kt)("img",{src:n(32053).Z,width:"300",height:"288"})),(0,a.kt)("h2",{id:"wiring"},"Wiring"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Red Wire"),": connected to 5V"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Black Wire"),": connected to ground "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Yellow Wire"),": connect to an analog pin")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(14932).Z,width:"225",height:"300"})," "),(0,a.kt)("h2",{id:"parts"},"Parts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/349"},"Sharp Infrared Long-Range Proximity Sensor (Analog 20-150cm)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/223"},"BreadBoard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/1765"},"10 k\u2126 resistor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,a.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect the Voltage and Ground Wires to the breadboard"),(0,a.kt)("li",{parentName:"ul"},"Connect the component wire (yellow wire) to an analog pin"),(0,a.kt)("li",{parentName:"ul"},"Follow the code provided"),(0,a.kt)("li",{parentName:"ul"},"Under the Tools folder select you board and pick the port you are using to upload the code onto the Arduino"),(0,a.kt)("li",{parentName:"ul"},"Watch the change in data from the Serial Monitor found under the Tools tab")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(98289).Z,width:"225",height:"300"})),(0,a.kt)("h2",{id:"programming"},"Programming"),(0,a.kt)("p",null,"The following code demonstrates how the short proximity sensor works and measures the distance when the sensor is moved\ntowards or away from an object, within the range of 10-80cm. If you want to skip the steps, you can jump to the Full Code. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Create variables for the sensors pin and a variable to store the data that is collected "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int sensor = A0; //sensor pin connection\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Set up serial communication, set the ",(0,a.kt)("strong",{parentName:"p"},"sensor")," pin as an ",(0,a.kt)("strong",{parentName:"p"},"INPUT"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {\n Serial.begin(9600); // start the serial port\n pinMode(sensor, INPUT); //setting the pin to the Arduino\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Read the data from the ",(0,a.kt)("strong",{parentName:"p"},"sensor"),", and convert the data into a volts measurement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void loop() {\n\n //5V\n float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Now convert the volts measurement into distance, a measurement we understand.\n",(0,a.kt)("strong",{parentName:"p"},"This calculation is found in the datasheet gragh of the component and can be found ",(0,a.kt)("a",{parentName:"strong",href:"https://cdn.shopify.com/s/files/1/0015/7571/4865/files/datasheet_gp2y0a02yk_e.pdf?292"},"here!"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int distance = 13*pow(volts, -1); // worked out from datasheet graph\n delay(1000); // slow down serial port \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," Finally use the distance we calculated and display ONLY when the distance is less than or equal to its max limit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"if (distance >= 10 && distance <= 80){\n   Serial.println(distance);   // prints the distance\n }\n}\n")),(0,a.kt)("h2",{id:"full-code"},"Full Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int sensor = A0; //sensor pin connection\n\nvoid setup() {\n Serial.begin(9600); //start the serial port\n pinMode(sensor, INPUT); //setting the pin to the Arduino\n}\n\nvoid loop() {\n\n //5V\n float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)\n int distance = 13*pow(volts, -1); // worked out from datasheet graph\n delay(1000); // slow down serial port \n \n if (distance >= 10 && distance <= 80){\n   Serial.println(distance);   // prints the distance\n }\n}\n")),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Serial Monitor will display distance that is measure from the proximity sensor, only if the distance measure is greater than or equal to 10 and less than or equal to the max limit which is 80cm for this exact component."))}u.isMDXComponent=!0},14100:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/0349(1)-070cbaa32b2a0e8b8676d7df272e57a3.jpg"},32053:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/0350(3)-f9f4810ca8d35c298a2417aca19a07d6.jpg"},14932:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1124(5)-9c0cb387b51f5aab3e2a51f4c19bc860.jpg"},98289:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1124(6)-aab5a2052036c8ae7d09bf0e27b62dfc.jpg"},67589:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1758(2)-f3ab35be04300df6290c0124105187f7.jpg"}}]);