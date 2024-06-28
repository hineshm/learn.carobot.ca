"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9940],{83236:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=i(74848),r=i(28453);const o={sidebar_position:18},s="RC522 RFID Module",d={id:"UNO-R4-Starter-Kit/RFID-module",title:"RC522 RFID Module",description:"This module is commonly used for security in offices, attendance at schools, and has many other practical applications. You can make your own customizable security system with this module!",source:"@site/docs/UNO-R4-Starter-Kit/RFID-module.md",sourceDirName:"UNO-R4-Starter-Kit",slug:"/UNO-R4-Starter-Kit/RFID-module",permalink:"/UNO-R4-Starter-Kit/RFID-module",draft:!1,unlisted:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/UNO-R4-Starter-Kit/RFID-module.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Sound Sensor",permalink:"/UNO-R4-Starter-Kit/Sound-Sensor"},next:{title:"LCD 1602 Module",permalink:"/UNO-R4-Starter-Kit/LCD-1602-Module"}},l={},c=[{value:"Materials",id:"materials",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Connections",id:"connections",level:4}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rc522-rfid-module",children:"RC522 RFID Module"}),"\n",(0,t.jsx)(n.p,{children:"This module is commonly used for security in offices, attendance at schools, and has many other practical applications. You can make your own customizable security system with this module!"}),"\n",(0,t.jsx)(n.h2,{id:"materials",children:"Materials"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"Image"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Breadboard"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/breadboard.webp",width:"200",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Jumper wires"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp",width:"200",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Arduino Minima R4"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp",width:"190",height:"150"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RC522 RFID Module"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/RFID-module/RFID-2.jpg",width:"300",height:"300"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Make the following connections using the jumper wires:"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"connections",children:"Connections"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SDA (SS_PIN) to pin 10"}),"\n",(0,t.jsx)(n.li,{children:"SCK to pin 13"}),"\n",(0,t.jsx)(n.li,{children:"MOSI to pin 11"}),"\n",(0,t.jsx)(n.li,{children:"MISO to pin 12"}),"\n",(0,t.jsx)(n.li,{children:"IRQ to not connected"}),"\n",(0,t.jsx)(n.li,{children:"GND (RC522) to GND (Arduino R4)"}),"\n",(0,t.jsx)(n.li,{children:"RST (RST_PIN) to pin 9"}),"\n",(0,t.jsx)(n.li,{children:"3.3V (RC522) to 3.3V (Arduino R4)"}),"\n",(0,t.jsx)(n.li,{children:"USB-C to USB-A or USB-C cord (depending on available ports on your laptop)"}),"\n"]}),"\n",(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/RFID-module/RFID_3.png",width:"570",height:"290"}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Paste the following code in your Arduino IDE. Use this code as a basis for future personal projects using the RFID module."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <SPI.h>\n#include <MFRC522.h>\n\n// Define the pins for the RFID module\n#define RST_PIN   9   // Configurable, see typical pin layout above\n#define SS_PIN    10  // Configurable, see typical pin layout above\n\nMFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance\n\n/* Set your new UID here! */\n#define NEW_UID {0xDE, 0xAD, 0xBE, 0xEF}\n\nMFRC522::MIFARE_Key key;\n\nvoid setup() {\n  Serial.begin(9600);  // Initialize serial communications with the PC\n  while (!Serial);     // Do nothing if no serial port is opened\n  SPI.begin();\n  \n  // Init MFRC522 card with specific SPI settings\n  SPI.beginTransaction(SPISettings(4000000, MSBFIRST, SPI_MODE0)); // 4 MHz SPI clock speed\n  mfrc522.PCD_Init();  // Init MFRC522 card\n  \n  Serial.println(F("Warning: this example overwrites the UID of your UID changeable card, use with care!"));\n  \n  for (byte i = 0; i < 6; i++) {\n    key.keyByte[i] = 0xFF;\n  }\n}\n\nvoid loop() {\n  // Look for new cards, and select one if present\n  if ( ! mfrc522.PICC_IsNewCardPresent() || ! mfrc522.PICC_ReadCardSerial() ) {\n    delay(50);\n    return;\n  }\n  \n  // Now a card is selected. The UID and SAK is in mfrc522.uid.\n  \n  // Dump UID\n  Serial.print(F("Card UID:"));\n  for (byte i = 0; i < mfrc522.uid.size; i++) {\n    Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");\n    Serial.print(mfrc522.uid.uidByte[i], HEX);\n  } \n  Serial.println();\n\n  // Set new UID\n  byte newUid[] = NEW_UID;\n  if ( mfrc522.MIFARE_SetUid(newUid, (byte)4, true) ) {\n    Serial.println(F("Wrote new UID to card."));\n  }\n  \n  // Halt PICC and re-select it so DumpToSerial doesn\'t get confused\n  mfrc522.PICC_HaltA();\n  if ( ! mfrc522.PICC_IsNewCardPresent() || ! mfrc522.PICC_ReadCardSerial() ) {\n    return;\n  }\n  \n  // Dump the new memory contents\n  Serial.println(F("New UID and contents:"));\n  mfrc522.PICC_DumpToSerial(&(mfrc522.uid));\n  Serial.println("Test is Successful!");\n  delay(2000);\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Once all the connections have been correctly set up and the code has been pasted into your arduino IDE, connect your arduino board to your laptop."}),"\n"]}),"\n",(0,t.jsx)("img",{src:"/img/docs/UNO-R4-Starter-Kit/RFID-module/RFID_1.jpg",width:"500",height:"290"}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Upload the code to the arduino by clicking the "Upload" button.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Test the module! Open to serial monitor and scan your RFID card and keychain with the module."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Customize! Play around with the code and personlize it to suit your own personal projects."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);