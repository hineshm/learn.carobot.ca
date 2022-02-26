"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[571],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(c,".").concat(h)]||p[h]||s[h]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9905:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"TinkerKit LCD - Tutorial 04 - LCD Local (No Arduino)",sidebar_position:5,slug:"tinkerkit-lcd-tutorial-04-lcd-local-no-arduino"},c=void 0,u={unversionedId:"tinkerkit/tinkerkit-lcd-4",id:"tinkerkit/tinkerkit-lcd-4",title:"TinkerKit LCD - Tutorial 04 - LCD Local (No Arduino)",description:"The TinkerKit LCD module can also be used by itself, without Arduino or TinkerKit! shield. That\u2019s because it mounts the same microcontroller as the Arduino Leonardo; thanks to its micro-usb connector, it can be plugged straight into your computer and programmed from the software just like a regular Arduino Leonardo.",source:"@site/docs/tinkerkit/tinkerkit-lcd-4.md",sourceDirName:"tinkerkit",slug:"/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino",permalink:"/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/docs/tinkerkit/tinkerkit-lcd-4.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"TinkerKit LCD - Tutorial 04 - LCD Local (No Arduino)",sidebar_position:5,slug:"tinkerkit-lcd-tutorial-04-lcd-local-no-arduino"},sidebar:"tutorialSidebar",previous:{title:"TinkerKit LCD - Tutorial 03 - LCD Serial",permalink:"/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial"},next:{title:"TinkerKit LCD - Tutorial 05 - Arduino & 2 Wires",permalink:"/tinkerkit/tinkerkit-lcd-tutorial-05-arduino-2-wires"}},d=[{value:"Verify Requirement",id:"verify-requirement",children:[],level:2},{value:"Connect the TinkerKit LCD directly with USB",id:"connect-the-tinkerkit-lcd-directly-with-usb",children:[],level:2},{value:"Read Input and More Code",id:"read-input-and-more-code",children:[],level:2}],s={toc:d};function p(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/1654"},"TinkerKit LCD module")," can also be used by itself, ",(0,i.kt)("strong",{parentName:"p"},"without Arduino")," or TinkerKit! shield. That\u2019s because it mounts the same microcontroller as the Arduino Leonardo; thanks to its micro-usb connector, it can be plugged straight into your computer and programmed from the software just like a regular Arduino Leonardo."),(0,i.kt)("h2",{id:"verify-requirement"},"Verify Requirement"),(0,i.kt)("p",null,"If you didn\u2019t do it already, download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carobot/TKLCD-Library"},"TKLCD library"),". Once downloaded, place TKLCD in the libraries folder inside your sketchbook."),(0,i.kt)("p",null,"How to install the library:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"unzip the downloaded file"),(0,i.kt)("li",{parentName:"ol"},"move the TKLCD folder inside the \u201clibraries\u201d folder, usually located in ",(0,i.kt)("strong",{parentName:"li"},"Documents\\Arduino\\libraries")," (if it\u2019s not there, just create it)"),(0,i.kt)("li",{parentName:"ol"},"close the Arduino software, if it\u2019s open, then relaunch it"),(0,i.kt)("li",{parentName:"ol"},"to verify the installation, open the software and from the top menu click on sketch->import library. You should be able to see the TKLCD element in the list")),(0,i.kt)("h2",{id:"connect-the-tinkerkit-lcd-directly-with-usb"},"Connect the TinkerKit LCD directly with USB"),(0,i.kt)("p",null,"In this tutorial we\u2019re not using the serial port, for this reason we don\u2019t have to upload the firmware. Let\u2019s begin by connecting the LCD module with a ",(0,i.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/1488"},"micro USB cable"),", then open the Arduino software. In top menu, under Tools->Board select Arduino Leonardo."),(0,i.kt)("p",null,"First of all we have to include all the libraries required by the LCD module: ",(0,i.kt)("strong",{parentName:"p"},"TKLCD, LiquidCrystal")," and ",(0,i.kt)("strong",{parentName:"p"},"Wire"),". The last two don\u2019t need to be downloaded, they\u2019re included in the Arduino software and are selectable just like the other libraries from ",(0,i.kt)("strong",{parentName:"p"},"Sketch->Import Library"),"."),(0,i.kt)("p",null,"Now we have to create a LCD object in the globals, like every other module. There are two different classes for the TinkerKit! module, we have to declare it as ",(0,i.kt)("strong",{parentName:"p"},"TKLCD_Serial")," or ",(0,i.kt)("strong",{parentName:"p"},"TKLCD_Local")," according if we are using it via serial or via USB."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"TKLCD_Local lcd = TKLCD_Local();\n")),(0,i.kt)("p",null,"Then we have to initialize it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"setup()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"lcd.begin();\n")),(0,i.kt)("p",null,"Let\u2019s start by writing something on our LCD screen: inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"setup()")," write"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'lcd.print("Hello World!");\n')),(0,i.kt)("p",null,"Now load it into the module, you should see this on the LCD:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(8201).Z,width:"294",height:"294"})),(0,i.kt)("p",null,"Every time that we want to print something new on the screen, we have to \u201crefresh\u201d it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"clear()")," function. To write \u201cHello World!\u201d but with the two words alternating every second on the screen, we have to type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'lcd.clear();\nlcd.print("Hello");\ndelay(1000);\n \nlcd.clear();\nlcd.print("World!");\ndelay(1000);\n')),(0,i.kt)("p",null,'Load it into the module and you should see "Hello" and "World" fleshing.'),(0,i.kt)("h2",{id:"read-input-and-more-code"},"Read Input and More Code"),(0,i.kt)("p",null,"Now let\u2019s use it to read the value of an input. Connect a thermistor to one of the connectors, then we\u2019ll use the LCD screen to read its values. Don\u2019t forget to include the normal TinkerKit! Library if you\u2019re using modules other than the LCD. The name of the LCD ports are slightly different from the TinkerKit! shield; here the inputs have the prefix A and the outputs D. In our example we\u2019re connecting the thermistor to the A1 port."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"TKThermistor therm(A1);\n")),(0,i.kt)("p",null,"Our loop function is now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'//read the temperature sensor\nint temp = ldr.celsius();\n \n//print the values on the lcd\nlcd.clear();\nlcd.print("Temp: ")\nlcd.print(temp);\ndelay(20);\n')),(0,i.kt)("p",null,"Now take a look at all the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carobot/TKLCD-Library/tree/master/TKLCD/examples"},"examples")," included in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carobot/TKLCD-Library"},"TKLCD library")," to discover more functions."))}p.isMDXComponent=!0},8201:function(e,t,r){t.Z=r.p+"assets/images/lcd-thumb-294x294-3478beafbfb8a1949612ba7771d02049.jpg"}}]);