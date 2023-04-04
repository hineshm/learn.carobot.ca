"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[9275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),h=n,k=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return r?o.createElement(k,a(a({ref:t},u),{},{components:r})):o.createElement(k,a({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},25360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const i={title:"TinkerKit LCD - Tutorial 01 - Windows Installation Guide",sidebar_position:2,slug:"tinkerkit-lcd-tutorial-01-windows-installation-guide"},a=void 0,l={unversionedId:"tinkerkit/tinkerkit-lcd-1",id:"tinkerkit/tinkerkit-lcd-1",title:"TinkerKit LCD - Tutorial 01 - Windows Installation Guide",description:"In order to use your LCD module with Windows, you have to install the driver for it. You can download the driver from our TinkerKit LCD product page.",source:"@site/docs/tinkerkit/tinkerkit-lcd-1.md",sourceDirName:"tinkerkit",slug:"/tinkerkit/tinkerkit-lcd-tutorial-01-windows-installation-guide",permalink:"/tinkerkit/tinkerkit-lcd-tutorial-01-windows-installation-guide",draft:!1,editUrl:"https://github.com/carobot/learn.carobot.ca/tree/main/docs/tinkerkit/tinkerkit-lcd-1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"TinkerKit LCD - Tutorial 01 - Windows Installation Guide",sidebar_position:2,slug:"tinkerkit-lcd-tutorial-01-windows-installation-guide"},sidebar:"tutorialSidebar",previous:{title:"TinkerKit LCD - Tutorials",permalink:"/tinkerkit/tinkerkit-lcd-tutorials"},next:{title:"TinkerKit LCD - Tutorial 02 - Introduction to LCD",permalink:"/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd"}},s={},d=[{value:"Install Software and Library, Download Driver",id:"install-software-and-library-download-driver",level:2},{value:"Install Driver",id:"install-driver",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"In order to use your LCD module with Windows, you have to install the driver for it. You can ",(0,n.kt)("a",{parentName:"strong",href:"https://www.canadarobotix.com/products/1654"},"download the driver from our TinkerKit LCD product page"),".")),(0,n.kt)("h2",{id:"install-software-and-library-download-driver"},"Install Software and Library, Download Driver"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Main/Software"},"Arduino Software")," and the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/carobot/TKLCD-Library"},"TKLCD library"),", following the guide on the dedicated page."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/1654"},"Download the driver from our TinkerKit LCD product page")," or ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/carobot/tinkerkit_core/raw/master/TKLCD_drivers.zip"},"from here")),(0,n.kt)("li",{parentName:"ol"},"Once uncompressed, you should have a Tinkerkit Drivers folder."),(0,n.kt)("li",{parentName:"ol"},"Locate the Arduino folder (where your Arduino software is installed). If you are not sure, find the Arduino icon, right click, properties then click on the \u201cOpen file location\u201d button, it will open your Arduino software folder."),(0,n.kt)("li",{parentName:"ol"},"Locate the drivers subfolder"),(0,n.kt)("li",{parentName:"ol"},"Now move the content of the downloaded \u201cTinkerkit Drivers\u201d folder inside the Arduino drivers subfolder. At this point it\u2019s important to know that the TinkerKit! (and also the Arduino) boards works in this way: they have two \u201cstates\u201d. One is called \u201cbootloader state\u201d that lasts for about seven seconds after you plug the board into the usb port, then it goes into \u201csketch mode\u201d. Every time you power the board (or reset it) it goes into bootloader mode, then sketchbook mode after seven seconds. We have to install a driver for each mode.")),(0,n.kt)("h2",{id:"install-driver"},"Install Driver"),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Plug the TinkerKit LCD in the USB port using a micro-USB cable."),(0,n.kt)("li",{parentName:"ol"},"Open Control Panel from the Start menu, click on System and Security, then on System. On the left sidebar you should have the \u201cDevice Manager\u201d link, click on it. This opens the device manager (If you can\u2019t find it you can always type \u201cdevmgmt.msc\u201d in Start->Run)."),(0,n.kt)("li",{parentName:"ol"},"Under \u201cPorts\u201d you should have the \u201cArduino Leonardo\u201d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(only if you have already used an Arduino Leonardo) Right-click on it then press \u201cUninstall\u201c."),(0,n.kt)("li",{parentName:"ul"},"pop-up window appears, check the \u201cDelete the driver software for this device\u201d option and press OK."))),(0,n.kt)("li",{parentName:"ol"},"Press the reset button on the TKLCD board, without closing the Device Manager. Once restarted, for the first 7 seconds, while it\u2019s in bootloader mode, you should see an unknown \u201cArduino Leonardo\u201d in the device list, right click on it and select \u201cUninstall\u201c. A pop-up confirmation window appears, press OK. (sometimes Windows shows the \u201cunknown device\u201d at the top of the list and not under the \u201cports\u201d sub-menu)"),(0,n.kt)("li",{parentName:"ol"},"Now that we have uninstalled the Leonardo drivers for the LCD, we have to install them again. Press reset again on the TKLCD board, and when the unknown \u201cArduino Leonardo\u201d pops up from the ports menu, right-click then \u201cUpdate driver software\u201c"),(0,n.kt)("li",{parentName:"ol"},"Choose \u201cBrowse my computer for driver software\u201d"),(0,n.kt)("li",{parentName:"ol"},"Click on browse and look for the \u201cdrivers\u201d folder inside your Arduino folder, where you pasted the files, then press OK"),(0,n.kt)("li",{parentName:"ol"},"If everything went fine it should say \u201cinstallation complete\u201d. Don\u2019t leave the device manager, as we also have to install the drivers for the sketch mode."),(0,n.kt)("li",{parentName:"ol"},"Press the reset button, Windows should see a \u201cTinkerKit LCD bootloader\u201d, then after 8 seconds it turns again into an unknown Arduino Leonardo. Repeat the right click, update driver procedure that we did in steps 12 to 14."),(0,n.kt)("li",{parentName:"ol"},"Now the LCD is installed on your Windows PC. After installing it, you can select the Arduino Leonardo board from the IDE every time that you want to use the TinkerKit! LCD.")))}p.isMDXComponent=!0}}]);