"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9608],{21298:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(74848),i=s(28453);const r={title:"Infrared Extra-Long-Range Proximity Sensor",sidebar_position:7},o="How to use an Infrared Proximity Sensor (Extra-Long-Range)",a={id:"Extra-Long-Range-Proximity-Sensor",title:"Infrared Extra-Long-Range Proximity Sensor",description:"The sharp infrared distance proximity sensor is a sensor for distance measurements. This sensor is typically used for measuring larger ranges(approximately 100 \u2013 500 cm(39\u2033 to 197\u2033)), although it is quite accurate.",source:"@site/guide/1758-Extra-Long-Range-Proximity-Sensor.md",sourceDirName:".",slug:"/Extra-Long-Range-Proximity-Sensor",permalink:"/guide/Extra-Long-Range-Proximity-Sensor",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/guide/1758-Extra-Long-Range-Proximity-Sensor.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Infrared Extra-Long-Range Proximity Sensor",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Infrared Long-Range Proximity Sensor",permalink:"/guide/Long-Range-Proximity-Sensor"},next:{title:"Soil Moisture Sensor Module (Resistance)",permalink:"/guide/soil-moisture-sensor-resistive"}},d={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Wiring",id:"wiring",level:2},{value:"Parts",id:"parts",level:2},{value:"Wiring Guide",id:"wiring-guide",level:2},{value:"Programming",id:"programming",level:2},{value:"Full Code",id:"full-code",level:2},{value:"Output",id:"output",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-use-an-infrared-proximity-sensor-extra-long-range",children:"How to use an Infrared Proximity Sensor (Extra-Long-Range)"}),"\n",(0,t.jsx)(n.p,{children:"The sharp infrared distance proximity sensor is a sensor for distance measurements. This sensor is typically used for measuring larger ranges(approximately 100 \u2013 500 cm(39\u2033 to 197\u2033)), although it is quite accurate."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(47293).A+"",width:"300",height:"300"})}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(n.p,{children:"The component uses a specific light sensor to detect a light wavelength in the Infrared (IR) wave spectrum. The intensity of the light is received when an object is close to the sensor. The light bounces off the object and into the light sensor, which results in a change to the intensity."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(73908).A+"",width:"300",height:"87"})," ",(0,t.jsx)(n.img,{src:s(62470).A+"",width:"300",height:"288"})]}),"\n",(0,t.jsx)(n.h2,{id:"wiring",children:"Wiring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Red Wire"}),": connected to 5V"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Blue Wire"}),": connected to 5V"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Black Wire"}),": connected to ground"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Yellow Wire"}),": connect to ground"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Green Wire"}),": connect to an analog pin"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(23326).A+"",width:"225",height:"300"})}),"\n",(0,t.jsx)(n.h2,{id:"parts",children:"Parts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1758",children:"Sharp Infrared Long-Range Proximity Sensor (Analog 100-500cm)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/60",children:"Arduino Uno R3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/223",children:"BreadBoard"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/1765",children:"10 k\u2126 resistor"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.canadarobotix.com/products/922",children:"Jumper wires"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"wiring-guide",children:"Wiring Guide"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connect the Voltage and Ground Wires to the breadboard"}),"\n",(0,t.jsx)(n.li,{children:"Connect the component wire (green wire) to an analog pin (ex: A0)"}),"\n",(0,t.jsx)(n.li,{children:"Follow the code provided"}),"\n",(0,t.jsx)(n.li,{children:"Under the Tools folder select you board and pick the port you are using to upload the code onto the Arduino"}),"\n",(0,t.jsx)(n.li,{children:"Watch the change in data from the Serial Monitor found under the Tools tab"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(60551).A+"",width:"225",height:"300"})}),"\n",(0,t.jsx)(n.h2,{id:"programming",children:"Programming"}),"\n",(0,t.jsx)(n.p,{children:"The following code demonstrates how the short proximity sensor works and measures the distance when the sensor is moved\ntowards or away from an object, within the range of 100-500cm. If you want to skip the steps, you can jump to the Full Code."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1:"})," Create variables for the sensors pin and a variable to store the data that is collected"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int sensor = A0; //sensor pin connection\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2:"})," Set up serial communication, set the ",(0,t.jsx)(n.strong,{children:"sensor"})," pin as an ",(0,t.jsx)(n.strong,{children:"INPUT"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"void setup() {\n Serial.begin(9600); // start the serial port\n pinMode(sensor, INPUT); //setting the pin to the Arduino\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3:"})," Read the data from the ",(0,t.jsx)(n.strong,{children:"sensor"}),", and convert the data into a volts measurement"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"void loop() {\n\n //5V\n float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 4:"})," Now convert the volts measurement into distance, a measurement we understand.\n",(0,t.jsxs)(n.strong,{children:["This calculation is found in the datasheet gragh of the component and can be found ",(0,t.jsx)(n.a,{href:"https://cdn.shopify.com/s/files/1/0015/7571/4865/files/datasheet_gp2y0a02yk_e.pdf?292",children:"here!"})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int distance = 13*pow(volts, -1); // worked out from datasheet graph\n delay(1000); // slow down serial port \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 5:"})," Finally use the distance we calculated and display ONLY when the distance is less than or equal to its max limit."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"if (distance >= 100 && distance <= 500){\n   Serial.println(distance);   // prints the distance\n }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"full-code",children:"Full Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int sensor = A0; //sensor pin connection\n\nvoid setup() {\n Serial.begin(9600); //start the serial port\n pinMode(sensor, INPUT); //setting the pin to the Arduino\n}\n\nvoid loop() {\n\n //5V\n float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)\n int distance = 13*pow(volts, -1); // worked out from datasheet graph\n delay(1000); // slow down serial port \n \n if (distance >= 100 && distance <= 500){\n   Serial.println(distance);   // prints the distance\n }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,t.jsx)(n.p,{children:"Serial Monitor will display distance that is measure from the proximity sensor, only if the distance measure is greater than or equal to 100 and less than or equal to the max limit which is 500cm for this exact component."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},62470:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/0350(3)-f9f4810ca8d35c298a2417aca19a07d6.jpg"},47293:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1758(1)-7da81258bf6ae0383a9e3333ea772c7c.jpg"},73908:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1758(2)-f3ab35be04300df6290c0124105187f7.jpg"},60551:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1758(3)-2dbce2549affed942296dd5b946c5ee6.jpg"},23326:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1758(4)-cb4199802b51651dd85d7353a4c2cea3.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);