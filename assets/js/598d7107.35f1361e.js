"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6206],{40661:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(74848),s=i(28453);const r={title:"Variable Types",sidebar_position:2},o="How to Use Programming Variable Types in C",l={id:"intro-to-C/c02-types",title:"Variable Types",description:"Types help define and determine the size of data. It is usually placed in front of a variable to declare its type and data size. Some types that are commonly used in C programming are",source:"@site/docs/intro-to-C/c02-types.md",sourceDirName:"intro-to-C",slug:"/intro-to-C/c02-types",permalink:"/intro-to-C/c02-types",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/intro-to-C/c02-types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Variable Types",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to C With Arduino",permalink:"/intro-to-C/c01-beginning"},next:{title:"Literals",permalink:"/intro-to-C/c03-literals"}},a={},d=[{value:"Type int Size Specifiers",id:"type-int-size-specifiers",level:2},{value:"Type Double Size Specifier",id:"type-double-size-specifier",level:2},{value:"Type Modifiers",id:"type-modifiers",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-use-programming-variable-types-in-c",children:"How to Use Programming Variable Types in C"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Types help define and determine the size of data"}),". It is usually placed in front of a variable to declare its type and data size. Some types that are commonly used in C programming are"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Types"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"int"}),(0,t.jsxs)(n.td,{children:["Occupies ",(0,t.jsx)(n.strong,{children:"4 bytes"})," and can store an integer like, 0, -5, -20 and 40"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"char"}),(0,t.jsxs)(n.td,{children:["Occupies ",(0,t.jsx)(n.strong,{children:"1 byte"})," and can hold a small integer value, a single character or a single symbol"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"float"}),(0,t.jsxs)(n.td,{children:["Occupies ",(0,t.jsx)(n.strong,{children:"4 bytes"})," and is able to store a single-precision (usually 7 decimal digits), floating-point number"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"double"}),(0,t.jsxs)(n.td,{children:["Occupies ",(0,t.jsx)(n.strong,{children:"8 bytes"})," and stores a double-precision (doubly the bytes for a single-precision number), floating-point number"]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Try using ",(0,t.jsx)(n.em,{children:"float"})," to write a character"]})}),"\n",(0,t.jsx)(n.p,{children:"If you try using float instead of char on a word like \u201cschool\u201d, it will return as an error. Enter the following entries to see which is and isn\u2019t a valid entry:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"int school = fun;"}),"\n",(0,t.jsx)(n.li,{children:"char age = \u2018a\u2019;"}),"\n",(0,t.jsx)(n.li,{children:"float year = 201.5;"}),"\n",(0,t.jsx)(n.li,{children:"float age = 19"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'int myAge = 16;\r\nfloat momAge = "school";\r\nvoid setup(){\r\n    int myAge = 21;\r\n    Serial.begin(9600);\r\n    Serial.println(myAge);\r\n    Serial.println(momAge);\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE: sometimes the output will be different from the input. This means it is an error."}),"\r\n",(0,t.jsx)(n.em,{children:"(Eg: float age = \u2018a\u2019 will return 97.00. This means that the wrong type is used.)"})]}),"\n",(0,t.jsx)(n.h1,{id:"what-are-size-specifiers",children:"What are Size Specifiers?"}),"\n",(0,t.jsx)(n.p,{children:"Size specifiers are used to adjust the size of an int and double to fit in larger or smaller variables."}),"\n",(0,t.jsx)(n.h2,{id:"type-int-size-specifiers",children:"Type int Size Specifiers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A short int contains a minimum of 16 bits which is the same size as a regular int"}),"\n",(0,t.jsx)(n.li,{children:"A long int contains 32 bits"}),"\n",(0,t.jsx)(n.li,{children:"A long long int contains 64 bits."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(76229).A+"",width:"480",height:"284"})}),"\n",(0,t.jsx)(n.h2,{id:"type-double-size-specifier",children:"Type Double Size Specifier"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A long double contains typically 64 bits which is the same size as a regular double."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"type-modifiers",children:"Type Modifiers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To alter the data storage of type you can also use type modifiers: ",(0,t.jsx)(n.strong,{children:"signed"})," and ",(0,t.jsx)(n.strong,{children:"unsigned"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Signed"})," is a 32-bit type modifier that can contain any integer from -2147483648 to 2147483648"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Unsigned"})," is also a 32-bit type modifier but can only store a nonnegative integer from 0 to 4294967295."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int myAge = 327698545;\r\nlong int yourAge = 327698545;\r\nvoid setup(){\r\n    Serial.begin(9600);\r\n    Serial.println(myAge);\r\n    Serial.println(yourAge);\r\n}\r\nvoid loop(){\r\n    \r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"As shown in the picture above, when a number is bigger than what a type can hold it prints out a different number. When 327698545 was assigned to int it was unable to print the same number. When we added the long in front it was able to print out the number."}),"\n",(0,t.jsx)(n.h1,{id:"try-it-yourself",children:"TRY IT YOURSELF"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use signed and unsigned to see the limit and difference between the 2 keywords."}),"\n",(0,t.jsx)(n.li,{children:"Use different types and size specifiers to see which one can hold \u201c9,223,372,036,854,775,807\u201d."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},76229:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/guide2_01-104d0a774c3b6a6bfab394ac5d101a49.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);