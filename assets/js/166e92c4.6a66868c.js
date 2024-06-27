"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2621],{3430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(74848),r=t(28453);const i={title:"Flame Sensor",sidebar_position:1},o="How to use a Flame Sensor",a={id:"flame-sensor",title:"Flame Sensor",description:"The flame sensor module consists of an IR receiver, resistor, capacitor, potentiometer, and a comparator LM393 in an integrated circuit. It can detect infrared light with a wavelength ranging from 700nm to 1000nm. The flame probe converts the light detected into the form of infrared light into current changes.",source:"@site/guide/1752-flame-sensor.md",sourceDirName:".",slug:"/flame-sensor",permalink:"/guide/flame-sensor",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/1752-flame-sensor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Flame Sensor",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SW-18015P Motion Vibration Sensor Module",permalink:"/guide/motion-vibration-sensor-module"},next:{title:"Humidity and Temperature Sensor",permalink:"/guide/humidity-and-temperature-sensor"}},l={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Connect to Arduino Uno",id:"connect-to-arduino-uno",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-use-a-flame-sensor",children:"How to use a Flame Sensor"}),"\n",(0,s.jsx)(n.p,{children:"The flame sensor module consists of an IR receiver, resistor, capacitor, potentiometer, and a comparator LM393 in an integrated circuit. It can detect infrared light with a wavelength ranging from 700nm to 1000nm. The flame probe converts the light detected into the form of infrared light into current changes."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(57210).A+"",width:"480",height:"320"})}),"\n",(0,s.jsx)(n.p,{children:"The flame sensor module operates between 3.3V to 5V DC with a digital output that indicate the presence of a high infrared signal. When it is triggered, it will output a HIGH."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(97886).A+"",width:"480",height:"196"})}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,s.jsxs)(n.p,{children:["The flame sensor is very sensitive to IR wavelength. The ",(0,s.jsx)(n.strong,{children:"analog output (A0)"})," outputs a real-time voltage signal on the thermal resistance, while the ",(0,s.jsx)(n.strong,{children:"digital output (D0)"})," outputs a high and low signal threshold adjustable via the potentiometer when the temperature reaches a certain threshold."]}),"\n",(0,s.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/1752",children:"Flame Sensor Module"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,s.jsx)(n.p,{children:"In this guide, we'll only talk about how to read the digital sginal from the sensor. Connect the 3 pins with male to female jumper wires"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(65237).A+"",width:"480",height:"275"})}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-arduino-uno",children:"Connect to Arduino Uno"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flame Sensor Module ",(0,s.jsx)(n.strong,{children:"VCC"})," -- Arduino ",(0,s.jsx)(n.strong,{children:"5V"})," pin"]}),"\n",(0,s.jsxs)(n.li,{children:["Flame Sensor Module ",(0,s.jsx)(n.strong,{children:"GND"})," -- Arduino ",(0,s.jsx)(n.strong,{children:"GND"})," pin"]}),"\n",(0,s.jsxs)(n.li,{children:["Flame Sensor Module ",(0,s.jsx)(n.strong,{children:"D0"})," -- Arduino ",(0,s.jsx)(n.strong,{children:"D7"})," pin"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:t(96140).A+"",width:"480",height:"322"}),"\r\n",(0,s.jsx)(n.img,{src:t(26307).A+"",width:"480",height:"215"})]}),"\n",(0,s.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,s.jsx)(n.p,{children:"The following code demonstrates how the flame sensor module works when it detects a flame or not. It will be triggered when there is a flame within its range and send out a message. If you want to skip all the steps and jump to the Full Code."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 1:"})," Define the connection pin."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define sensor 7\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 2:"})," Create a variable for storing the module's state."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"int value = 0;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 3:"})," Set up serial communication between Arduino and sensor and set the sensor as an input."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"void setup(){\r\n  Serial.begin(9600);\r\n  pinMode(sensor, INPUT);\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 4:"})," Read signal from sensor."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"void loop(){\r\n  value = digitalRead(sensor);\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 5:"})," If it is triggered, a flame is detected, print out a message accordingly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:' if (value == HIGH){\r\n    Serial.println("FIRE FIRE FIRE!!");\r\n  }\r\n  else{\r\n    Serial.println("CLEAR");\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define sensor 7\r\nint value = 0;\r\n\r\nvoid setup(){\r\n  Serial.begin(9600);\r\n  pinMode(sensor, INPUT);\r\n}\r\nvoid loop(){\r\n  value = digitalRead(sensor);\r\n  if (value == HIGH){\r\n    Serial.println("FIRE FIRE FIRE!!");\r\n  }\r\n  else{\r\n    Serial.println("CLEAR");\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.p,{children:"When there is no flame"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(8730).A+"",width:"76",height:"176"})}),"\n",(0,s.jsx)(n.p,{children:"When there is flame. Use the potentiometer to adjust the threshold."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(38897).A+"",width:"135",height:"163"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},57210:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1752_01-4cd1bf3c16c59c589eb5f9581e1d6c59.jpg"},97886:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1752_01-aa83bb61706740cc18d927a95f300a0f.png"},65237:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1752_02-4e3e0fdd5e9bcd8f05ebb9d12373103f.png"},96140:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1752_03-fc6d4d630c5d8eee0397b25fc3357005.png"},26307:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1752_04-ed5623460acd329cd4bb92a08e4afa2b.png"},8730:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAACwCAYAAAClx4hJAAABC2lDQ1BpY2MAABiVY2BgXJGTnFvMJMDAkJtXUhTk7qQQERmlwH6HgZFBkoGZQZPBMjG5uMAxIMCHASf4do2BEURf1gWZxUAa4ExJLU5mYGD4wMDAEJ9cUFTCwMAIsounvKQAxI5gYGAQKYqIjGJgYMwBsdMh7AYQOwnCngJWExLkzMDAyMPAwOCQjsROQmJD7QIB1mSj5ExkhySXFpVBmVIMDAynGU8yJ7NO4sjm/iZgLxoobaL4UXOCkYT1JDfWwPLYt9kFVaydG2fVrMncX3v58EuD//9LUitKQJqdnQ0YQGGIHjYIsfxFDAwWXxkYmCcgxJJmMjBsb2VgkLiFEFNZwMDA38LAsO08APD9TdvF8UZ0AAAACXBIWXMAAAsSAAALEgHS3X78AAAEG0lEQVR42u3Yzyu0exzG8Wseh8kkscDCr6YJKSvJ1JCSkpWlnbJhoSk1C7K0UFKmRPkL7CZDxAILZDYyfhSxmrHQRLHQ1Nyo+ZyVu8c5njp5zuKZel91L9zfub9yYeb7eXnMzET+c378/EUul9PR0ZEymQzN/CpmZu/v7zY6OmplZWXW2tpqXq/XlpeXzcwsGAza1NSUfZXGxkYrKioyr9frXs/Pz+760dGRSbKlpSX3XjKZNElWXFxsJSUl1tLSYnNzc1YokZnZ8PCw1dbW2t3dnZmZOY7j/uCdnZ02OTn55cMNDQ0WjUZ/uXkkEjFJ1tvb6947PT01SZZKpezx8dFWVlZMkp2enhZEYT+y2axWV1cVjUbV0NAgSfJ6vaqsrPztv9719XUNDQ3p8PBQT09P/1qvqqrS4OCgJKmkpKQw3sPOz8+Vz+fV0dHxrQ3Oz88Vi8UUi8V0fHzs3r+8vFQ6ndbCwoJKS0u1ubn56bl8Pq+XlxeNjY2pr69PbW1tBVHYXx9v8NXV1d/aIJFI6P7+XpIUDAbV1dUlSYrH4wqFQqqrq9PAwIDW1tY0MjLiPhcIBCRJ7e3tOjg4KJxPyY/f7PX19bc2GB8f197envb29jQ7O+ve/ygsk8koFAppd3dX2WzWXT87O1M4HNbNzc2X/65/bGHNzc3y+Xza3t7+3zZNpVK6uLjQ4uKi/H6/pqen5TiOdnZ23NdUVFRodnZWFRUVmpiYKJzCioqKNDMzo7m5OSUSCUlSJpNRKpVyX/T09KTb21v3yuVy7trDw8Ontbe3N8XjcTU1NclxHPfq7u5WPB7/9M3Ly8sVjUa1sbGhra2twjmHmZmFw2Hz+XxWX19vHo/n0zlM0qdrf3/fPYf9c+3q6sp6enosEol8+jien5+38vJyOzk5MUmWTqfdtf7+fvP7/fb6+vrHHys8P49GjuMomUwqEAiopqaGU/0X8TBL/sYsSSiMwigMD8PD8DA8DA/Dw/AwPAwPw8PwMDwMD8PDGL4JhVEYheFheBgehofhYXgYHoaH4WF4GB6Gh+FheBjDN4URCqMwPAwPw8PwMDwMD8PD8DA8DA/Dw/AwPAwPY/imMEJhFIaH4WF4GB6Gh+FheBgehofhYXgYHoaH4WEM3xRGYYTC8DA8DA/Dw/AwPAwPw8PwMDwMD8PD8DA8jOGbwiiMUBgehofhYXgYHoaH4WF4GB6Gh+FheBgehocxfFMYhVEYwcPwMDwMD8PD8DA8DA/Dw/AwPAwPw8PwMIZvCqMwCiN4GB6Gh+FheBgehofhYXgYHoaH4WF4GB7G8E1hFEZhFIaH4WF4GB6Gh+FheBgehofhYXgYHkbwMIZvCqMwCsPD8DA8DA/Dw/AwPAwPw8PwMDwMD8PD8DDC8E1hFFYY+RtL47afCFqk9AAAAABJRU5ErkJggg=="},38897:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);