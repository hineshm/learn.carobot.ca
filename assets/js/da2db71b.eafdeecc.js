"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[171],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5124:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"HC-020K Encoder Module Guide",sidebar_position:20},p=void 0,u={unversionedId:"product_guide/encoder-module",id:"product_guide/encoder-module",title:"HC-020K Encoder Module Guide",description:"This HC-020K encoder is very useful to sense the motor\u2019s position and velocity. It can be connected to any microcontroller via the 3-pin header.",source:"@site/guide/product_guide/1921-encoder-module.md",sourceDirName:"product_guide",slug:"/product_guide/encoder-module",permalink:"/guide/product_guide/encoder-module",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/guide/product_guide/1921-encoder-module.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"HC-020K Encoder Module Guide",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Rotary Encoder Module Guide",permalink:"/guide/product_guide/rotary-encoder-module"},next:{title:"ACS712 Current Sensor Module Learn Guide",permalink:"/guide/product_guide/current-sensor-module"}},c=[{value:"Wiring",id:"wiring",children:[],level:2},{value:"Parts",id:"parts",children:[],level:2},{value:"Wiring Guide",id:"wiring-guide",children:[],level:2},{value:"Programming",id:"programming",children:[],level:2},{value:"Step 4 code:",id:"step-4-code",children:[],level:2},{value:"Full Code:",id:"full-code",children:[],level:2},{value:"Serial Monitor Output",id:"serial-monitor-output",children:[],level:2}],s={toc:c};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This HC-020K encoder is very useful to sense the motor\u2019s position and velocity. It can be connected to any microcontroller via the 3-pin header."),(0,i.kt)("p",null,"In this article, we'll talk  about how to wire and set up the module for operation with an Arduino Board. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8355).Z,width:"296",height:"298"})),(0,i.kt)("h2",{id:"wiring"},"Wiring"),(0,i.kt)("p",null,"Most HC-020K modules operate with 5V and produce a digital output within the range of 0V to 5V. It will provide a 5V output when the beam is blocked, and a 0V output when the beam is unblocked. Arduino can read the pulse train to determine how far the motor has travelled at what velocity. For this article, we'll be using ",(0,i.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/1921"},"HC-020K Encoder Module"),", the one we carry in our shop. "),(0,i.kt)("h2",{id:"parts"},"Parts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/1921"},"HC-020K Encoder Module")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/2013"},"Plastic Gear Motor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/223"},"Breadboard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,i.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,i.kt)("p",null,"Connect the wires with male to male jumper wires. "),(0,i.kt)("p",null,"Noted that the encoder comes with 3 female to female jumper wires to connect the pins. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HC-020K Encoder ",(0,i.kt)("strong",{parentName:"li"},"VCC")," (5V) -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"5V")," pin"),(0,i.kt)("li",{parentName:"ul"},"HC-020K Encoder ",(0,i.kt)("strong",{parentName:"li"},"GND")," -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"GND")," pin "),(0,i.kt)("li",{parentName:"ul"},"HC-020K Encoder ",(0,i.kt)("strong",{parentName:"li"},"OUT")," -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"D2")," pin "),(0,i.kt)("li",{parentName:"ul"},"Gear Motor Terminal 1 -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"5V")," pin "),(0,i.kt)("li",{parentName:"ul"},"Gear Motor Terminal 2 -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"GND")," pin")),(0,i.kt)("p",null,"After completing the connection, connect Arduino Uno to a power supply with a USB cable. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Connect the module's wires with a male to female jumper wires"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(731).Z,width:"365",height:"387"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Connect the other side of the male to male wires to Arduino pins. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4690).Z,width:"480",height:"297"})),(0,i.kt)("p",null,"We used a breadboard to connect the pins because the encoder and the gear motor share the 5V from Arduino. We put male to male jumper wires from Arduino GND pin and 5V pin to the breadboard's negative and positive rail. Then, connect the encoder's GND pin and VCC pin onto the negative and positive rail respectively."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8871).Z,width:"480",height:"322"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Connect the gear motor to the Arduino by connecting the wires to negative and positive rail on the breadboard respectively (in this case, the black jumper wire is the negative, and the red wire is the positive)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3988).Z,width:"480",height:"277"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Placing the slotted disc onto the gear motor.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9946).Z,width:"480",height:"297"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Connect the slotted disc onto the plastic gear motor. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9336).Z,width:"480",height:"310"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Connect the wheel to the plastic gear motor. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4143).Z,width:"480",height:"382"}),"\n",(0,i.kt)("img",{src:n(4210).Z,width:"480",height:"331"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Place the module onto the slotted disc, where the disc should be in between the two plastic on the module. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full assemble:")," It should look like this where the slotted disc is placed in between the module gap. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8946).Z,width:"360",height:"480"})),(0,i.kt)("h2",{id:"programming"},"Programming"),(0,i.kt)("p",null,"The slotted disc is mounted to the plastic gear motor and placed within the space of the encoder circuit board. The optical beam sensor will detect the missing slots of the disc and generates a pulse train. From the code in Arduino, it will be able to detect the rpm for the plastic gear motor and display it on the Serial Monitor. If you want to skip the steps, you can jump to the Full Code."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," We will need to define the pin on Arduino Code by variable. From the code below, we defined the encoder to pin 2 as where we previously connected it to Arduino Uno. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#define encoder 2\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," We need 4 variables to store the rpm, number of pulses occurred,  time duration and the pulse per turn for the calculation of rpm. In the code, pulse_per_turn is set to 20, that is referred to the number of slots in the slotted disc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"unsigned int rpm;\nvolatile byte pulses;\nunsigned long TIME;\nunsigned int pulse_per_turn = 20; \n//depends on the number of slots on the slotted disc\n")),(0,i.kt)("p",null,"We will set the other variables to 0 in the setup method so they will be a signed value. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n  //reset all to 0\n  rpm = 0;\n  pulses = 0;\n  TIME = 0;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," We will set up the encoder as an input and a serial communication between Arduino Uno and the encoder to send and receive data to each other. We use the encoder pin (pin 2) where the IR detector is connected, to trigger on the variable, CHANGE which it will change the state from HIGH to LOW. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"Serial.begin(9600);\n  pinMode(encoder, INPUT);// setting up encoder pin as input\n  //triggering count function everytime the encoder turns from HIGH to LOW\n  attachInterrupt(digitalPinToInterrupt(encoder), count, FALLING);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," We will update the rpm calculation every 0.1 second by this line of code, "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"if (millis() - TIME >= 100){ // updating every 0.1 second\n")),(0,i.kt)("p",null,"then we will stop the trigger and calculate for rpm. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"//calcuate for rpm \n    rpm = (60 *100 / pulse_per_turn)/ (millis() - TIME) * pulses;\n")),(0,i.kt)("p",null,"After calculating for the rpm, we will reset the pulses, time and turn on the trigger, and print out the output result. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'TIME = millis();\n    pulses = 0;\n    //print output \n    Serial.print("RPM: ");\n    Serial.println(rpm);\n    //trigger count function everytime the encoder turns from HIGH to LOW\n    attachInterrupt(digitalPinToInterrupt(encoder), count, FALLING);\n')),(0,i.kt)("h2",{id:"step-4-code"},"Step 4 code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'void loop(){\n  if (millis() - TIME >= 100){ // updating every 0.1 second\n    detachInterrupt(digitalPinToInterrupt(encoder)); // turn off trigger\n    //calcuate for rpm \n    rpm = (60 *100 / pulses_per_turn)/ (millis() - TIME) * pulses;\n    TIME = millis();\n    pulses = 0;\n    //print output \n    Serial.print("RPM: ");\n    Serial.println(rpm);\n    //trigger count function everytime the encoder turns from HIGH to LOW\n    attachInterrupt(digitalPinToInterrupt(encoder), count, FALLING);\n  }\n}\n')),(0,i.kt)("h2",{id:"full-code"},"Full Code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#define encoder 2\n\nunsigned int rpm;\nvolatile byte pulses;\nunsigned long TIME;\nunsigned int pulse_per_turn = 20; \n//depends on the number of slots on the slotted disc\n\nvoid count(){\n  // counting the number of pulses for calculation of rpm\n  pulses++;\n}\nvoid setup(){\n  //reset all to 0\n  rpm = 0;\n  pulses = 0;\n  TIME = 0;\n\n  Serial.begin(9600);\n  pinMode(encoder, INPUT);// setting up encoder pin as input\n  //triggering count function everytime the encoder turns from HIGH to LOW\n  attachInterrupt(digitalPinToInterrupt(encoder), count, FALLING);\n}\n\nvoid loop(){\n  if (millis() - TIME >= 100){ // updating every 0.1 second\n    detachInterrupt(digitalPinToInterrupt(encoder)); // turn off trigger\n    //calcuate for rpm \n    rpm = (60 *100 / pulse_per_turn)/ (millis() - TIME) * pulses;\n    TIME = millis();\n    pulses = 0;\n    //print output \n    Serial.print("RPM: ");\n    Serial.println(rpm);\n    //trigger count function everytime the encoder turns from HIGH to LOW\n    attachInterrupt(digitalPinToInterrupt(encoder), count, FALLING);\n  }\n}\n')),(0,i.kt)("h2",{id:"serial-monitor-output"},"Serial Monitor Output"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2131).Z,width:"360",height:"480"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8265).Z,width:"99",height:"257"})))}d.isMDXComponent=!0},8946:function(e,t,n){t.Z=n.p+"assets/images/1921_01-92dddc34733b5be5b57c45a51fa318c3.gif"},8355:function(e,t,n){t.Z=n.p+"assets/images/1921_01-eb1491ff964dcf8e9435817036f4d9b8.png"},2131:function(e,t,n){t.Z=n.p+"assets/images/1921_02-231b5fc2870586eaaab56beb91ffed38.gif"},731:function(e,t,n){t.Z=n.p+"assets/images/1921_02-e68af1c76d144fa5a64698852d0e01f1.png"},4690:function(e,t,n){t.Z=n.p+"assets/images/1921_03-79366a92a308d9ff89daecb167ae6e0e.png"},8871:function(e,t,n){t.Z=n.p+"assets/images/1921_04-665df4663126e17302838d610c2e1631.png"},3988:function(e,t,n){t.Z=n.p+"assets/images/1921_05-682ba8faaa0a27c6ec7649cfe2ab06ba.png"},9946:function(e,t,n){t.Z=n.p+"assets/images/1921_06-0aba0ffc4f36480c4c3b59ab1b252dd5.png"},9336:function(e,t,n){t.Z=n.p+"assets/images/1921_07-4494b990732ab773ed008d9ca8071002.png"},4143:function(e,t,n){t.Z=n.p+"assets/images/1921_08-aeb74ae2c3b1d1018e325dc2848e0a79.png"},4210:function(e,t,n){t.Z=n.p+"assets/images/1921_09-651963735e920148f338c5a2354710ab.png"},8265:function(e,t){t.Z="data:image/png;base64,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"}}]);