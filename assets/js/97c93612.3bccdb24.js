"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[6916],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5417:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Chapter 5 - Constructs",sidebar_position:5},p=void 0,s={unversionedId:"intro-to-C/c05-constructs",id:"intro-to-C/c05-constructs",title:"Chapter 5 - Constructs",description:"A construct is a line of code that performs a specific task under a specific condition, this may include if, if/else, elseif statements, while, for loops and many more.",source:"@site/docs/intro-to-C/c05-constructs.md",sourceDirName:"intro-to-C",slug:"/intro-to-C/c05-constructs",permalink:"/intro-to-C/c05-constructs",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/docs/intro-to-C/c05-constructs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Chapter 5 - Constructs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Chapter 4 - Programming Operator",permalink:"/intro-to-C/c04-operator"},next:{title:"Intro to Folder Kicad",permalink:"/kicad/"}},c=[{value:"Conditional Statements",id:"conditional-statements",children:[{value:"If Statement",id:"if-statement",children:[{value:"Examples",id:"examples",children:[],level:4}],level:3},{value:"If/Else Statement",id:"ifelse-statement",children:[],level:3},{value:"Else If Statement",id:"else-if-statement",children:[],level:3},{value:"Case-by-Case",id:"case-by-case",children:[],level:3}],level:2},{value:"Loops",id:"loops",children:[{value:"While Loops",id:"while-loops",children:[],level:3},{value:"Do While Loop",id:"do-while-loop",children:[],level:3},{value:"For Loop",id:"for-loop",children:[{value:"Declaring the Variable",id:"declaring-the-variable",children:[],level:4},{value:"Condition",id:"condition",children:[],level:4},{value:"Increments",id:"increments",children:[],level:4}],level:3},{value:"Conditional Expression",id:"conditional-expression",children:[],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"construct")," is a line of code that performs a specific task under a specific condition, this may include ",(0,o.kt)("strong",{parentName:"p"},"if"),", ",(0,o.kt)("strong",{parentName:"p"},"if/else"),", ",(0,o.kt)("strong",{parentName:"p"},"elseif")," statements, ",(0,o.kt)("strong",{parentName:"p"},"while"),", ",(0,o.kt)("strong",{parentName:"p"},"for")," loops and many more."),(0,o.kt)("h2",{id:"conditional-statements"},"Conditional Statements"),(0,o.kt)("h3",{id:"if-statement"},"If Statement"),(0,o.kt)("p",null,"Here is an example of the ",(0,o.kt)("strong",{parentName:"p"},"If Statement:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int condition = 1;\n\nif(condition == 1){\n    Serial.println(condition);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"1\n")),(0,o.kt)("p",null,"The code inbetween the parenthesis of ",(0,o.kt)("inlineCode",{parentName:"p"},"if()")," is known as the condition, hence the name ",(0,o.kt)("strong",{parentName:"p"},"Conditional Statement"),". In order for the code within the statement to be executed, the condition has to be ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the condition can range from comparing ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"integers")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"booleans"))," and even ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"characters")),"!"),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Here are some examples that ",(0,o.kt)("strong",{parentName:"p"},"will")," print out ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int exampleOne = 1;\nbool exampleTwo = true;\nchar exampleThree = \'a\';\n\nif(exampleOne == 1){\n    Serial.println("yes");\n}\nif(exampleTwo == true){\n    Serial.println("yes");\n}\nif(exampleThree == \'a\'){\n    Serial.println("yes");\n}\n')),(0,o.kt)("p",null,"Here are some examples that ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"will not"))," print out ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int exampleOne = 1;\nbool exampleTwo = true;\nchar exampleThree = \'a\';\n\nif(exampleOne == 3){\n    Serial.println("yes");\n}\nif(exampleTwo == false){\n    Serial.println("yes");\n}\nif(exampleThree == \'y\'){\n    Serial.println("yes");\n}\n')),(0,o.kt)("h3",{id:"ifelse-statement"},"If/Else Statement"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"If/Else Statement")," can be dissected into 2 parts, the ",(0,o.kt)("strong",{parentName:"p"},"If Statement")," and the ",(0,o.kt)("strong",{parentName:"p"},"Else Statement"),". Here is an example of the ",(0,o.kt)("strong",{parentName:"p"},"If/Else Statement"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int condition = 1;\n\nif(condition == 2){\n    Serial.println("nothing");\n}else{\n    Serial.println(condition);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"1\n")),(0,o.kt)("p",null,"In the code above, the program will not execute the command within the ",(0,o.kt)("strong",{parentName:"p"},"If Statement")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"(condition == 1)")," is false, however, with the ",(0,o.kt)("strong",{parentName:"p"},"Else Statement"),", the program will instead execute the code within the ",(0,o.kt)("strong",{parentName:"p"},"Else Statement"),", printing out ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("h3",{id:"else-if-statement"},"Else If Statement"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Else If Statement")," is an ",(0,o.kt)("strong",{parentName:"p"},"Else Statement")," but with another ",(0,o.kt)("strong",{parentName:"p"},"If Statement"),". Essentially, the ",(0,o.kt)("strong",{parentName:"p"},"Else If Statement")," adds another condition to the ",(0,o.kt)("strong",{parentName:"p"},"Else Statement"),". If the condition is false, the program will move on to the next ",(0,o.kt)("strong",{parentName:"p"},"Else Statement"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int condition = 1;\nint elsif = 2;\nint ans = 3;\n\nif(condition == 2){\n    Serial.println(condition);\n}else if(elsif == 3){\n    Serial.println(elsif);\n}else{\n    Serial.println(ans);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"3\n")),(0,o.kt)("p",null,"Since the If Statement's ",(0,o.kt)("inlineCode",{parentName:"p"},"(condition == 2)")," and Else If Statement's ",(0,o.kt)("inlineCode",{parentName:"p"},"(elsif == 3)")," are false, the program will print out ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,o.kt)("h3",{id:"case-by-case"},"Case-by-Case"),(0,o.kt)("p",null,"The case-by-case construct starts off by comparing a condition, if the condition matches the constant value or expression, the program will execute the task within the code. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"char choice = 'n';\n\nswitch(choice)\n{\ncase 'Y':\ncase 'y':\n       Serial.println(\"yes\");\n       break;\ncase 'N':\ncase 'n':\n       Serial.println(\"no\");\n       break;\ndefault:\n       Serial.println(\"neutral\");\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"no\n")),(0,o.kt)("p",null,"The code above compares the choice of ",(0,o.kt)("inlineCode",{parentName:"p"},"'Y'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'y'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'N'")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"'n'"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"choice")," does not follow any of the characters mentioned, the code will execute the code within default."),(0,o.kt)("p",null,"If the condition type (choice) matches the constant type (char), in this case being character, the code within the case-by-case construct will be executed."),(0,o.kt)("p",null,"Think of ",(0,o.kt)("inlineCode",{parentName:"p"},"case")," as an ",(0,o.kt)("strong",{parentName:"p"},"If Statement"),". If the variable given matches with the condition written after ",(0,o.kt)("inlineCode",{parentName:"p"},"case"),", the code within will be executed, if not, the program will skip over the code and go on to the next ",(0,o.kt)("inlineCode",{parentName:"p"},"case"),". If none of the ",(0,o.kt)("inlineCode",{parentName:"p"},"case")," conditions match the given variable, the program will execute the code within ",(0,o.kt)("inlineCode",{parentName:"p"},"default:"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"break;")," that exists at the end of ever block of code is a command that causes the program to skip the case-by-case construct entirely."),(0,o.kt)("h2",{id:"loops"},"Loops"),(0,o.kt)("h3",{id:"while-loops"},"While Loops"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"While Loop")," is used to repeat a specific block of code until the condition is no longer true. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int condition = 0;\n\nwhile(condition <= 5){\n    Serial.println(condition);\n    condition++;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"0\n1\n2\n3\n4\n5\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"While Loop")," shown above has the condition of ",(0,o.kt)("inlineCode",{parentName:"p"},"(condition <= 5)")," and with every loop, ",(0,o.kt)("inlineCode",{parentName:"p"},"condition++;"),", when ",(0,o.kt)("inlineCode",{parentName:"p"},"condition = 6"),", the condition of ",(0,o.kt)("inlineCode",{parentName:"p"},"(condition <= 5)")," will no longer be true, therefore ending the loop. ",(0,o.kt)("em",{parentName:"p"},"(Note: This is not the only use of the while loop)")),(0,o.kt)("h3",{id:"do-while-loop"},"Do While Loop"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Do While Loop")," executes the code ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"at least once"))," and will continue executing the code as long as the condition is true. here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int seq = 3;\nint condition = 2;\n\ndo{\n    Serial.println(seq);\n}while(condition == 1);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"3\n")),(0,o.kt)("p",null,"In this example, since ",(0,o.kt)("inlineCode",{parentName:"p"},"condition == 1")," is false, only the code within ",(0,o.kt)("inlineCode",{parentName:"p"},"do{}")," will be executed. If ",(0,o.kt)("inlineCode",{parentName:"p"},"condition == 1")," is true, the code will look like:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int seq = 3;\nint condition = 2;\n\ndo{\n    Serial.println(seq);\n}while(condition == 2);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"3\n3\n3\n3\n3\n3\n3\n...\n")),(0,o.kt)("h3",{id:"for-loop"},"For Loop"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"For Loop")," is used to repeat a block of code for a certain amount of time, keep in mind, this is different from the Arduino's ",(0,o.kt)("inlineCode",{parentName:"p"},"loop()")," function. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"for(int i = 0; i<5; i++){\n    Serial.println(i);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"0\n1\n2\n3\n4\n")),(0,o.kt)("p",null,"Let's break down the ",(0,o.kt)("strong",{parentName:"p"},"For Loop")," into 3 parts, each part will be seperated by a ",(0,o.kt)("inlineCode",{parentName:"p"},";"),"."),(0,o.kt)("h4",{id:"declaring-the-variable"},"Declaring the Variable"),(0,o.kt)("p",null,"The first part of the ",(0,o.kt)("strong",{parentName:"p"},"For Loop")," is the declaration of a variable, commonly declared as ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),". To declare the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),", the loop must include ",(0,o.kt)("inlineCode",{parentName:"p"},"int i = 0;"),". ",(0,o.kt)("em",{parentName:"p"},"(Note: The value of ",(0,o.kt)("inlineCode",{parentName:"em"},"i")," can be whatever you want)")),(0,o.kt)("h4",{id:"condition"},"Condition"),(0,o.kt)("p",null,"The second part of the ",(0,o.kt)("strong",{parentName:"p"},"For Loop")," is how many times you want the code within the loop to be repeated."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"i=0"),(0,o.kt)("th",{parentName:"tr",align:null},"i<5"),(0,o.kt)("th",{parentName:"tr",align:null},"i++"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"0"),"+1 \u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"1"),"+1 \u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"2"),"+1 \u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"3"),"+1 \u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"4"),"+1 \u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2715"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"5"),"+1 \u2715")))),(0,o.kt)("p",null,"As seen in the chart above, the loop would continue on until ",(0,o.kt)("inlineCode",{parentName:"p"},"i=5"),", in which case, causes ",(0,o.kt)("inlineCode",{parentName:"p"},"i<5")," to be false, therefore ending the loop."),(0,o.kt)("h4",{id:"increments"},"Increments"),(0,o.kt)("p",null,"The third part of the ",(0,o.kt)("strong",{parentName:"p"},"For Loop")," is what will happen to the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," after a singular loop has finished. As shown in the previous lesson, ",(0,o.kt)("inlineCode",{parentName:"p"},"i++;")," means ",(0,o.kt)("inlineCode",{parentName:"p"},"i=i+1"),". For every time the code within the loop gets executed, the integer ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," will have its value be increased by 1. ",(0,o.kt)("em",{parentName:"p"},"(Note: The increment of ",(0,o.kt)("inlineCode",{parentName:"em"},"i")," does not have to be ",(0,o.kt)("inlineCode",{parentName:"em"},"i++"),", it could be anything you can do with an integer)")),(0,o.kt)("h3",{id:"conditional-expression"},"Conditional Expression"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Conditional Expression")," is extremely similar to how the ",(0,o.kt)("strong",{parentName:"p"},"If Else Statement")," works. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"char s = 2 > 1 ? 't' : 'f';\nSerial.println(s);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"t\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Conditional Expression:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-t"},"condition ? operand : operand\n")),(0,o.kt)("p",null,"The first operand of the expression is what the code will do if the condition is true, the second operand is what the code will do if the condition is false."))}d.isMDXComponent=!0}}]);