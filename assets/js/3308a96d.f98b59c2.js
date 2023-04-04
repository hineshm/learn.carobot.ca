"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=h(n),d=a,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:a,s[1]=i;for(var h=2;h<r;h++)s[h]=n[h];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var o=n(87462),a=(n(67294),n(3905));const r={title:"MQ-2 Smoke Sensor",sidebar_position:1},s="How to use The MQ-2 Smoke Sensor",i={unversionedId:"smoke-sensor",id:"smoke-sensor",title:"MQ-2 Smoke Sensor",description:"The MQ-2 Smoke Sensor is a very popular module for detecting smoke and to flammable gases like LPG, Butane, Propane, Methane, Alcohol, and hydrogen. It outputs different voltage accordingly to the smoke/gas level that exists in the atmosphere. The sensor outputs a voltage that is proportional to the concentration of smoke/gas. In other words, the greater the gas concentration, the greater the output voltage. The lower the gas concentration, the lower the output voltage.",source:"@site/guide/2377-smoke-sensor.md",sourceDirName:".",slug:"/smoke-sensor",permalink:"/guide/smoke-sensor",draft:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/2377-smoke-sensor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"MQ-2 Smoke Sensor",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HC-SR501 Sensor",permalink:"/guide/ultrasonic-motion-detector"},next:{title:'0.56" DC 0-100V Panel Meter Digital Voltmeter',permalink:"/guide/digital-voltmeter"}},l={},h=[{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}],p={toc:h},g="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-the-mq-2-smoke-sensor"},"How to use The MQ-2 Smoke Sensor"),(0,a.kt)("p",null,"The MQ-2 Smoke Sensor is a very popular module for detecting smoke and to flammable gases like LPG, Butane, Propane, Methane, Alcohol, and hydrogen. It outputs different voltage accordingly to the smoke/gas level that exists in the atmosphere. The sensor outputs a voltage that is proportional to the concentration of smoke/gas. In other words, the greater the gas concentration, the greater the output voltage. The lower the gas concentration, the lower the output voltage. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(26930).Z,width:"480",height:"320"})),(0,a.kt)("p",null,"The smoke sensor has a built-in potentiometer that allows you to adjust the sensor sensitivity according to how accurate you want to detect gas. It has both digital and analog pins that can read with an analog input or a digital output that can be read with a digital input from an Arduino Board. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(21320).Z,width:"480",height:"322"})),(0,a.kt)("p",null,"In this article, we will talk about how to wire and set up the module for operation with an Arduino Board.  "),(0,a.kt)("h2",{id:"wiring"},"Wiring"),(0,a.kt)("p",null,"Most MQ-2 modules operate at 5V and gives out both analog and digital outputs. For this project, we will be using ",(0,a.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/2377"},"MQ-2 Smoke Sensor"),", the one we carry in our shop. This module consists of 4 pins: ",(0,a.kt)("strong",{parentName:"p"},"VCC, A0, D0")," and ",(0,a.kt)("strong",{parentName:"p"},"GND"),"."),(0,a.kt)("h2",{id:"parts"},"Parts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/2377"},"MQ-2 Smoke Sensor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/223"},"BreadBoard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,a.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,a.kt)("p",null,"Connect the pins with male to male jumper wires "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(79236).Z,width:"480",height:"468"})),(0,a.kt)("p",null,"MQ-2 ",(0,a.kt)("strong",{parentName:"p"},"VCC")," -- Arduino ",(0,a.kt)("strong",{parentName:"p"},"5V")," pin\nMQ-2 ",(0,a.kt)("strong",{parentName:"p"},"A0")," -- Arduino ",(0,a.kt)("strong",{parentName:"p"},"A0")," pin\nMQ-2 ",(0,a.kt)("strong",{parentName:"p"},"D0")," -- Arduino ",(0,a.kt)("strong",{parentName:"p"},"D2")," pin\nMQ-2 ",(0,a.kt)("strong",{parentName:"p"},"GND")," -- Arduino ",(0,a.kt)("strong",{parentName:"p"},"GND")," pin"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(302).Z,width:"480",height:"270"}),"\n",(0,a.kt)("img",{src:n(37577).Z,width:"480",height:"360"})),(0,a.kt)("h2",{id:"programming"},"Programming"),(0,a.kt)("p",null,"Before we set a threshold value, we need to know what the numbers are like before the sensor detects any smoke. Follow the following code for the testing. As you have found the threshold value by having smoke near the sensor, set that certain value as the threshold on the code. If you want to skip the steps, you can jump to the Full Code. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Define connection pin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#define sensor A0 \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Create variables for storing the sensor's state and the threshold value that you have found from putting the sensor near the smoke. (the value might vary depending on your sensor) "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int value = 0;\nint threshold = 100;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Set up serial communication between Arduino and MQ-2 sensor and set the sensor as an input. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n  Serial.begin(9600);\n  pinMode(sensor, INPUT);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Read sensor's state input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void loop(){\n  value = analogRead(sensor);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:"),' if the value is greater than the threshold value, serial monitor will display "smoke detected". Otherwise, it will display "all clear". '),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'  if (value > threshold){\n    Serial.println("Smoke Detected...");\n  }\n  else{\n    Serial.println("All Clear..");\n  }\n  delay(1000);\n}\n')),(0,a.kt)("h2",{id:"full-code"},"Full Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#define sensor A0 \n\nint value = 0;\nint threshold = 100;\n\nvoid setup(){\n  Serial.begin(9600);\n  pinMode(sensor, INPUT);\n}\n\nvoid loop(){\n  value = analogRead(sensor);\n  // to find the threshold, comment the following block out\n  /* \n   *  Serial.println(value);\n   */\n  if (value > threshold){\n    Serial.println("Smoke Detected...");\n  }\n  else{\n    Serial.println("All Clear..");\n  }\n  delay(1000);\n}\n')),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"When there is smoke"),(0,a.kt)("p",null," ",(0,a.kt)("img",{src:n(36507).Z,width:"132",height:"178"})),(0,a.kt)("p",null,"When there is no smoke "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(54031).Z,width:"91",height:"176"})))}u.isMDXComponent=!0},26930:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2377_01-0cb1650d6df8996d4d634c31c6044300.jpg"},21320:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2377_01-f21570b0f28213252059f40ae7ce1019.png"},79236:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2377_02-f21d7e06ddf4f7d4932cf08d14cc5414.png"},302:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2377_03-7a21272db9d625c0dd4f92cfb6df2605.png"},37577:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2377_04-88431d434399e5322cd93eaf53b4d0a2.png"},36507:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACyCAYAAACDZ2cXAAABC2lDQ1BpY2MAABiVY2BgXJGTnFvMJMDAkJtXUhTk7qQQERmlwH6HgZFBkoGZQZPBMjG5uMAxIMCHASf4do2BEURf1gWZxUAa4ExJLU5mYGD4wMDAEJ9cUFTCwMAIsounvKQAxI5gYGAQKYqIjGJgYMwBsdMh7AYQOwnCngJWExLkzMDAyMPAwOCQjsROQmJD7QIB1mSj5ExkhySXFpVBmVIMDAynGU8yJ7NO4sjm/iZgLxoobaL4UXOCkYT1JDfWwPLYt9kFVaydG2fVrMncX3v58EuD//9LUitKQJqdnQ0YQGGIHjYIsfxFDAwWXxkYmCcgxJJmMjBsb2VgkLiFEFNZwMDA38LAsO08APD9TdvF8UZ0AAAACXBIWXMAAAsSAAALEgHS3X78AAAJLElEQVR42u3aa0jTfR8G8GsnZ5YzFA9RmelSoQNmWEpCRNIBxE5U812Biq8sokAMgkioLDoiKUSGBgUNfZGQVDpMO6Fkps5KnQPJoMMUja1a+n1ePPez5/675/ZQc48vrutVbf5//h3X9vvq76MSEQHD/BU1XwKGhWCmX4i3b9+ipaUFIyMjf7y42WyGzWbjqzxFamtrYbVa58bNyF+pra2VxMREiYmJkbi4OFmyZIn8aZYvXy5VVVXiq3R3dwsA0el0EhERIbt375a6urppX3/mzBl59eqV+DK+WDMlJUUuXrwocyFqABgbG0NBQQFMJhP6+/vR29uL/v7+OfdO+s/8297ejs7OTmzduhV79uxBa2vrtK4vLy/3+TtxNtb8v28ZGo0GbrcbVqsVY2NjAACtVgsAKCwsRFlZGdLS0pCRkYH6+nosWrQI586dAwC0tbUhPT0dBoMBq1evRk1Nzf/8RoODg9i8eTOOHTsGAHC5XMjPz8fixYsRExODioqKGd14eHg48vPzsWHDBty7d2/SNfv7+9HQ0ACXy4Wuri40NDSgoaEBQ0NDU96LiODy5ctISEhASEgIUlNTUVNT80drjo+P48KFC0hPT0d0dDTa29vn1LtOREQqKytFo9HIxo0bpaury/MRYjKZxGAwyNGjRwWAxMXFSV5enqSmporD4ZDQ0FDJysqSpqYmOXLkiKhUKmlpaVFsGQMDA2I0GiUjI0OcTqdn3ZUrV4rFYpGzZ8+KRqORnp6eST/OrFarABCr1ep5LCcnR3bt2jXpmtevX5ekpCTR6XQSHR0tSUlJkpSUJC9evJjyXkpKSkSv10tlZaV0d3fLzZs35eHDh3+05okTJ8RgMEhhYaE0NTXJihUr5syWgb//59GjR2I0GkWn08mNGzc8P9imTZtERCQ4OFhOnz4tFotF4uPjpby8XFQqlXz69MmzxrJlyyQ3N9dTiOLiYomNjZVt27aJy+USEZEvX74IALly5YrY7Xax2WwSEhIiZWVlMy5EQUGBpKenT2vNmJgYuX37tmLNqa4LCwuTU6dO/eM9zXTNoaEhUalUcu3atTk5Q2j//mmRkZGBjo4O5OXlIScnB6tWrQIAZGVlAQB0Oh0OHDiAjx8/ej6KjUYjwsPDPWukpaUp5o/z589jdHQUDx48QGBgIADg9evXAICrV6+itLQUABAZGQm32z3jT7jBwUEYjcbfXnOy6xwOB75+/Yrk5OQZ3dNka7a2tkJEPK/pXIt24gOBgYG4desW6urqYLFY/j1oqP/722lAQIDn31FRUbDb7fj27RsWLFgAAOjs7MTatWs9X1NSUoKKigrs3LkTzc3NCAsLQ3x8PACguroaa9as+e2bdzqdeP78OQ4fPjytNQMCAuByuRSPTXVdREQEnjx5gszMTJ+sWV1dDbVajYULFwIA3rx5g46ODmRnZ8+doXJ4eBhmsxkOh8Pzt4iRkRFs37590ouzsrKgVqtRXFyMkZERVFVVobOzE/v27fN8TVBQEO7fv4/x8XFkZmbC6XRi6dKlSElJwfHjxzE6Oorh4WHcuXMHT58+ndZN9/X1wWw2w2QyQUSQm5s7rTUTExPx+PFjiAhsNhvevXs35XX79+9HRUUFGhsbMTY2hp6eHnR1df32mlu2bIFGo0FpaSksFgv27t3r9fPZbDbs2LHD84b0xXMzGirtdrvMmzdP1Gq1Z4Y4dOiQiIhkZ2fLpUuXREQkNDRU7Ha7NDY2SkJCgoiI3L17VwwGg6jVatFqtXLy5EnPfhQbG+vZX/v6+iQyMlIyMzNFROTDhw+SnJwsOp1O9Hq9rFu3Turr66f1dwgAEhUVJSaTSZ49e+Z5fqo1m5ubJTQ0VObPny9arVYqKyunvM7tdsvBgwclKChIVCqV6PV6KS0t/aM1i4qKRK/XS3BwsJSXl8v69esVM4TZbBYAUlRU5PUa/O5zMx4qnU6nvHz5UhobG2VgYGBGi7jdbunt7fX8BjGTDA4OyvDwsE8Ho8nW/PXrl7x//14cDseMrvvx44f09PSI2+32yZqfP3+W79+//+PP0NbWJj9//vTpc9OJiqedDA+3GBaCYSEYFoLxeSHoIfwfegh6CHoIH5UXoIeY/S2DHoIewmvLoIegh6CHoIegh5gYeghl6CHoIbyHSnoIegjFUEkPQQ9BD0EPQQ/B8HCLYSEYFoJhIRg/FYIewv+hh6CHoIfwUXkBeojZ3zLoIeghvLYMegh6CHoIegh6iImhh1CGHoIewnuopIegh1AMlfQQ9BD0EPQQ9BAMD7cYFoJhIRgWgvFTIegh/B96CHoIeggflRegh5j9LYMegh7Ca8ugh6CHoIegh6CHmBh6CGXoIeghvIdKegh6CMVQSQ9BD0EPQQ9BD8HwcIthIRgWgmEhGD8Vgh7C/6GHoIegh/BReQF6iNnfMugh6CG8tgx6CHoIegh6CHqIiaGHUIYegh7Ce6ikh6CHUAyV9BD0EPQQ9BD0EAwPtxgWgmEhGBaC8VMh6CH8H3oIegh6CB+VF6CHmP0tgx6CHsJry6CHoIegh6CHoIeYGHoIZegh6CG8h0p6CHoIxVBJD0EPQQ9BD0EPwfBwi2EhGBaCYSEYPxWCHsL/oYegh6CH8FF5AXqI2d8y6CHoIby2DHoIegh6CHoIeoiJoYdQhh6CHsJ7qKSHoIdQDJX0EPQQ9BD0EPQQDA+3GBaCYSEYFoLxUyHoIfwfegh6CHoIH5UXoIeY/S2DHoIewmvLoIegh6CHoIegh5gYeghl6CHoIbyHSnoIegjFUEkPQQ9BD0EPQQ/B8HCLYSEYFoJhIRg/FYIewv+hh6CHoIfwUXkBeojZ3zLoIeghvLYMegh6CHoIegh6iImhh1CGHoIewnuopIegh1AMlfQQ9BD0EPQQ9BAMD7cYFoJhIRgWgvFTIegh/B96CHoIeggflRegh5j9LYMegh7Ca8ugh6CHoIegh6CHmBh6CGXoIeghvIdKegh6CMVQSQ9BD0EPQQ9BD8HwcIthIRgWgmEhGD8Vgh7C/6GHoIegh/BReQF6iNnfMugh6CG8tgx6CHoIegh6CHqIiaGHUIYegh7Ce6ikh6CHUAyV9BD0EPQQ9BD0EAwPtxgWgmEhGJ/95fpfhAEsa/qMcLAAAAAASUVORK5CYII="},54031:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);