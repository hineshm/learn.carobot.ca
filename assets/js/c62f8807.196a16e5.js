"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[7776],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,h=m["".concat(u,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Chapter 8 - Data Conversion",sidebar_position:8},i=void 0,o={unversionedId:"intro-to-C/c08-data-conversions",id:"intro-to-C/c08-data-conversions",title:"Chapter 8 - Data Conversion",description:"Learning Goals",source:"@site/docs/intro-to-C/c08-data-conversions.md",sourceDirName:"intro-to-C",slug:"/intro-to-C/c08-data-conversions",permalink:"/intro-to-C/c08-data-conversions",draft:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/intro-to-C/c08-data-conversions.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Chapter 8 - Data Conversion",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Chapter 7 - Functions",permalink:"/intro-to-C/c07-functions"},next:{title:"Intro to Folder Kicad",permalink:"/kicad/"}},u={},d=[{value:"Learning Goals",id:"learning-goals",level:2},{value:"What is Data Conversion?",id:"what-is-data-conversion",level:2},{value:"Application Of Data Conversion/ Why Data Conversion Is Useful",id:"application-of-data-conversion-why-data-conversion-is-useful",level:2},{value:"Understand What Binary is?",id:"understand-what-binary-is",level:2},{value:"Understand What Hexadecimal is?",id:"understand-what-hexadecimal-is",level:2},{value:"Decimal to Binary:",id:"decimal-to-binary",level:2},{value:"Decimal to Hexadecimal:",id:"decimal-to-hexadecimal",level:2},{value:"Hexadecimal to Binary:",id:"hexadecimal-to-binary",level:2},{value:"Example Activity",id:"example-activity",level:2},{value:"Your Turn!",id:"your-turn",level:2}],s={toc:d},m="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"learning-goals"},"Learning Goals"),(0,r.kt)("p",null,"By the end of this tutorial, you should be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand how Binary number work"),(0,r.kt)("li",{parentName:"ul"},"Understand how Hexadecimal numbers work"),(0,r.kt)("li",{parentName:"ul"},"Convert Decimal numbers to Binary number"),(0,r.kt)("li",{parentName:"ul"},"Convert Decimal numbers to Hexadecimal number"),(0,r.kt)("li",{parentName:"ul"},"Convert Hexadecimal numbers to Binary number"),(0,r.kt)("li",{parentName:"ul"},"Understand the applications of data conversions")),(0,r.kt)("h2",{id:"what-is-data-conversion"},"What is Data Conversion?"),(0,r.kt)("p",null,"Data conversion is changing one format of receiving/storing data into another format. These formats are usually in decimal numbers, binary numbers, and or hexadecimal numbers. "),(0,r.kt)("h2",{id:"application-of-data-conversion-why-data-conversion-is-useful"},"Application Of Data Conversion/ Why Data Conversion Is Useful"),(0,r.kt)("p",null,"Data conversion is used for reasons that not all specific files and formats can access and read all data types. As a solution data can be converted into different formats to allow a wider range of softwares to enter and use the data. This idea permits great flexibility and grants the user to use data as you\u2019d like."),(0,r.kt)("h2",{id:"understand-what-binary-is"},"Understand What Binary is?"),(0,r.kt)("p",null,"Binary numbers are numbers that are expressed in the digits \u20181\u2019 and \u20180\u2019. The number of 1\u2019s and 0\u2019s represent an increase to the original base 2",(0,r.kt)("sup",null,"0"),". Looking at the chart below the base of each binary position increases by a power of 1 from the previous, and all with a base of 2. The word binary means two which indicates why the base of each binary number is 2. Each binary position can only be used once or never, hence the reasoning behind \u20181\u2019 and \u20180\u2019. \u20181\u2019 meaning the number is used and \u20180\u2019 meaning the number is not used."),(0,r.kt)("p",null,"*",(0,r.kt)("strong",{parentName:"p"},"*NOTE:**")," The binary bases continue past 2",(0,r.kt)("sup",null,"7"),". You can continue increasing the power to be able to hold a larger decimal value!"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"128"),(0,r.kt)("th",{parentName:"tr",align:null},"64"),(0,r.kt)("th",{parentName:"tr",align:null},"32"),(0,r.kt)("th",{parentName:"tr",align:null},"16"),(0,r.kt)("th",{parentName:"tr",align:null},"8"),(0,r.kt)("th",{parentName:"tr",align:null},"4"),(0,r.kt)("th",{parentName:"tr",align:null},"2"),(0,r.kt)("th",{parentName:"tr",align:null},"1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2",(0,r.kt)("sup",null,"7")),(0,r.kt)("td",{parentName:"tr",align:null},"2",(0,r.kt)("sup",null,"6")),(0,r.kt)("td",{parentName:"tr",align:null},"2",(0,r.kt)("sup",null,"5")),(0,r.kt)("td",{parentName:"tr",align:null},"2",(0,r.kt)("sup",null,"4")),(0,r.kt)("td",{parentName:"tr",align:null},"2",(0,r.kt)("sup",null,"3")),(0,r.kt)("td",{parentName:"tr",align:null},"2",(0,r.kt)("sup",null,"2")),(0,r.kt)("td",{parentName:"tr",align:null},"2",(0,r.kt)("sup",null,"1")),(0,r.kt)("td",{parentName:"tr",align:null},"2",(0,r.kt)("sup",null,"0"))))),(0,r.kt)("p",null,"*",(0,r.kt)("strong",{parentName:"p"},"*NOTE**")," Can only be represented by a one or zero meaning a number can only be used once. You can add the corresponding decimal values together to receive the total decimal number."),(0,r.kt)("h2",{id:"understand-what-hexadecimal-is"},"Understand What Hexadecimal is?"),(0,r.kt)("p",null,"Hexadecimal numbers are numbers that are expressed in the digits 0 to 9 and letter A to F. The numbers are representative of themselves and the values that we know they stand for. The letters on the other hand are assigned numbers, 10 to 15 in the order of A to F. Looking at the chart below we can see the side by side assigning of the decimal representation of each hexadecimal number. Hexadecimal numbers can be used over and over just like decimal numbers and unlike binary numbers. The word \u2018hexa\u2019 means six, and the word \u2018decimal\u2019 means ten. Ten and six together makes 16, which are the total number of digits in hexadecimal base values. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"F"),(0,r.kt)("th",{parentName:"tr",align:null},"E"),(0,r.kt)("th",{parentName:"tr",align:null},"D"),(0,r.kt)("th",{parentName:"tr",align:null},"C"),(0,r.kt)("th",{parentName:"tr",align:null},"B"),(0,r.kt)("th",{parentName:"tr",align:null},"A"),(0,r.kt)("th",{parentName:"tr",align:null},"9"),(0,r.kt)("th",{parentName:"tr",align:null},"8"),(0,r.kt)("th",{parentName:"tr",align:null},"7"),(0,r.kt)("th",{parentName:"tr",align:null},"6"),(0,r.kt)("th",{parentName:"tr",align:null},"5"),(0,r.kt)("th",{parentName:"tr",align:null},"4"),(0,r.kt)("th",{parentName:"tr",align:null},"3"),(0,r.kt)("th",{parentName:"tr",align:null},"2"),(0,r.kt)("th",{parentName:"tr",align:null},"1"),(0,r.kt)("th",{parentName:"tr",align:null},"0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("p",null,"*",(0,r.kt)("strong",{parentName:"p"},"*NOTE**")," Each number or letter represents a decimal number. You can use each digit multiple times and you are to use add their corresponding decimal values to get the total decimal number."),(0,r.kt)("h2",{id:"decimal-to-binary"},"Decimal to Binary:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Divide the number by 2 ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The remainder is the binary number 0 or 1"),(0,r.kt)("li",{parentName:"ul"},"Next take the quotient and divide that by 2 as well and record its remainder"),(0,r.kt)("li",{parentName:"ul"},"Keep doing this till the quotient is 0"))),(0,r.kt)("li",{parentName:"ol"},"The remainders should be placed in order from the ",(0,r.kt)("strong",{parentName:"li"},"last")," remainder to the ",(0,r.kt)("strong",{parentName:"li"},"first")," to get your binary output")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Decimal Number / 2"),(0,r.kt)("th",{parentName:"tr",align:null},"Quotient"),(0,r.kt)("th",{parentName:"tr",align:null},"Remainder"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13/2"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6/2"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3/2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1/2"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"Therefore the binary equivilant of 13 is 1101."),(0,r.kt)("h2",{id:"decimal-to-hexadecimal"},"Decimal to Hexadecimal:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Divide the number by 16 ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The remainder is the binary number 0-F"),(0,r.kt)("li",{parentName:"ul"},"Next take the quotient and divide that by 16 as well and record its remainder"),(0,r.kt)("li",{parentName:"ul"},"Keep doing this till the quotient is 0"))),(0,r.kt)("li",{parentName:"ol"},"The remainders should be placed in order from the last remainder to the first to get your binary output")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Decimal Number / 2"),(0,r.kt)("th",{parentName:"tr",align:null},"Quotient"),(0,r.kt)("th",{parentName:"tr",align:null},"Deciaml Remainder"),(0,r.kt)("th",{parentName:"tr",align:null},"Hexadecimal Remainder"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7562/2"),(0,r.kt)("td",{parentName:"tr",align:null},"472"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"472/2"),(0,r.kt)("td",{parentName:"tr",align:null},"29"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"29/2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"D")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1/2"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"Therefore the Hexadecimal equivilant of 7562 is 1D8A."),(0,r.kt)("h2",{id:"hexadecimal-to-binary"},"Hexadecimal to Binary:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Convert the number back into decimal by simply adding. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If binary add the base numbers 2^x (x being the base number)"),(0,r.kt)("li",{parentName:"ul"},"If hexadecimal add the numbers as usual and add the number which the letters represent."))),(0,r.kt)("li",{parentName:"ol"},"Once the conversion is into decimal convert into the format of choice from the examples above.")),(0,r.kt)("h2",{id:"example-activity"},"Example Activity"),(0,r.kt)("p",null,"In this example we will explore how different values in hexadecimal can display various colours on an RGB LED!!\n",(0,r.kt)("img",{src:a(19352).Z,width:"300",height:"165"})),(0,r.kt)("p",null,"In the code we will need to initialize a pin for each leg of the LED. Now to be able to change and see the different colour you can make, edit the values in analogWrite(red,0x79); , analogWrite(green,0x2A); , and analogWrite(blue,0xDB); . Keep the 0x as that indicates that the input is in hexadecimal. The limitations range from 00 to FF, so you have quite the range to explore with different values. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"const int red = 6;  // name the output pins controlling the RGB\nconst int blue = 5;\nconst int green = 3;\n\nvoid setup()\n{\n  pinMode (red, OUTPUT);\n  pinMode (blue, OUTPUT);\n  pinMode (green, OUTPUT);\n}\n\nvoid loop()\n{\n  //write the pin with the hexadecimal value\n\n  // HERE!!! change the values for all three of these lines of \n  // code can see how the colour changes with different values!!\n  analogWrite(red,0x17);\n  analogWrite(green,0x4D);\n  analogWrite(blue,0xEA);\n\n}\n")),(0,r.kt)("h2",{id:"your-turn"},"Your Turn!"),(0,r.kt)("p",null,"Try creating a program that uses 4 LED's to count in binary from 0 - 15!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pratice taking decimal numbers and converting them into binary values "),(0,r.kt)("li",{parentName:"ul"},"To make it harder create this program but with RGB LED's and ask a user for input of what colour the LED's should count in binary with")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Free spirit!!"))," Try messing around with the program above and see how many cool colours you can create using Hexadecimal numbers."))}p.isMDXComponent=!0},19352:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rgbExample-046ec97ef72b2d45df31ec462f5ee25c.jpg"}}]);