(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jvNF:function(t,n,e){"use strict";e.r(n),e.d(n,"InstrumentsModule",(function(){return K}));var o=e("PCNd"),i=e("tyNb"),s=e("JIr8"),r=e("vkgz"),c=e("lJxs"),g=e("w1tV"),a=e("fXoL"),d=e("edtR"),l=e("ofXK");let b=(()=>{class t{constructor(){this.angle=99}ngOnChanges(){this.transform=this.rotateString()}rotateString(){return`rotate(${this.angle}deg)`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=a.Eb({type:t,selectors:[["","fdRotate",""]],hostVars:2,hostBindings:function(t,n){2&t&&a.qc("transform",n.transform)},inputs:{angle:["fdRotate","angle"]},features:[a.xb]}),t})();function h(t,n){1&t&&(a.Ob(0,"div",11),a.Kb(1,"img",12),a.Nb())}let u=(()=>{class t{constructor(){this.speed=200,this.showBox=!1,this.size="250px"}ngOnInit(){}handAngle(){var t=0;return this.speed>=0&&this.speed<40&&(t=.9*this.speed),this.speed>=40&&this.speed<=160&&(t=1.8*this.speed-36),this.speed>70&&this.speed<=160&&(t=2*this.speed-50),this.speed>160&&(t=this.speed+110),this.speed>200&&(t=311+this.speed%2),t}get trueSpeedRotation(){return 30}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-airspeed-indicator"]],inputs:{speed:"speed",showBox:"showBox",size:"size"},decls:11,vars:2,consts:[[1,"instrument"],["class","background box",4,"ngIf"],[1,"inner","box"],[1,"truespeed","box"],["src","img/airspeed_trueairspeed.svg","alt","",1,"box","move"],[1,"bg","box"],["src","img/airspeed_markings.svg","alt","",1,"box"],[1,"hand","box"],["src","img/airspeed_hand.svg",1,"box","move",3,"fdRotate"],[1,"indicator_foreground","box"],["src","img/indicator_foreground.svg","alt","",1,"box"],[1,"background","box"],["src","img/indicator_background_dashboard.svg","alt","",1,"box"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.tc(1,h,2,0,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Kb(4,"img",4),a.Nb(),a.Ob(5,"div",5),a.Kb(6,"img",6),a.Nb(),a.Ob(7,"div",7),a.Kb(8,"img",8),a.Nb(),a.Nb(),a.Ob(9,"div",9),a.Kb(10,"img",10),a.Nb(),a.Nb()),2&t&&(a.zb(1),a.ec("ngIf",n.showBox),a.zb(7),a.ec("fdRotate",n.handAngle()))},directives:[l.l,b],styles:['[_nghost-%COMP%]{display:flex;justify-content:center;right:0;left:0;bottom:0;top:0;background-color:#252525}.instruments[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.instruments[_ngcontent-%COMP%]{max-width:1500px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:minmax(-webkit-min-content,-webkit-max-content);grid-auto-rows:minmax(min-content,max-content);place-items:start}.grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{width:100%}div.instrument[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;display:inline-block;overflow:hidden}div.instrument[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:1px;height:0;padding-bottom:100%;vertical-align:top}div.instrument[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}div.instrument[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{will-change:transform}svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{text-anchor:middle;alignment-baseline:middle}svg.buttons[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;pointer-events:none}svg.buttons[_ngcontent-%COMP%]   g.frequency[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:10px;font-family:Digital Numbers,sans-serif;font-style:normal;text-shadow:#fff 0 0 1px!important;pointer-events:none;fill:red}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{height:30;width:30;rx:5;ry:5}svg.buttons[_ngcontent-%COMP%]   rect.inactive[_ngcontent-%COMP%]{fill:grey}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]:hover{stroke:#00f}svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{r:20;cy:30}.box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:250;width:250}svg.course1[_ngcontent-%COMP%]   line[_ngcontent-%COMP%]{stroke:#ff0;stroke-width:4}svg.course1[_ngcontent-%COMP%]   marker[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ff0}svg.course2[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], svg.course2[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{fill:none;stroke:green;stroke-width:2}div.heading_text[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{fill:#fff}@media screen and (max-width:500px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}'],changeDetection:0}),t})();function m(t,n){1&t&&(a.Ob(0,"div",13),a.Kb(1,"img",14),a.Nb())}let f=(()=>{class t{constructor(){this.bank=30,this.pitch=-10,this.showBox=!1,this.size=250}ngOnInit(){}get rotationAngle(){return this.bank}get pitchBallPos(){return.55*this.pitch}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-attitude"]],inputs:{bank:"bank",pitch:"pitch",showBox:"showBox",size:"size"},decls:13,vars:4,consts:[[1,"instrument"],["class","background box",4,"ngIf"],[1,"inner","box",3,"fdRotate"],[1,"box"],["src","img/attitude_roll_1.svg","alt","",1,"box"],[1,"ball","box"],["src","img/attitude_pitch.svg","alt","",1,"box"],[1,"marker","box"],["src","img/attitude_roll_2.svg","alt","",1,"box"],[1,"foreground","box"],["src","img/attitude_foreground_1.svg","alt","",1,"box"],["src","img/attitude_foreground_2.svg","alt","",1,"box"],["src","img/indicator_foreground.svg","alt","",1,"box"],[1,"background","box"],["src","img/indicator_background_dashboard.svg","alt","",1,"box"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.tc(1,m,2,0,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Kb(4,"img",4),a.Nb(),a.Ob(5,"div",5),a.Kb(6,"img",6),a.Nb(),a.Ob(7,"div",7),a.Kb(8,"img",8),a.Nb(),a.Nb(),a.Ob(9,"div",9),a.Kb(10,"img",10),a.Kb(11,"img",11),a.Kb(12,"img",12),a.Nb(),a.Nb()),2&t&&(a.zb(1),a.ec("ngIf",n.showBox),a.zb(1),a.ec("fdRotate",n.bank),a.zb(4),a.qc("transform","translateY("+n.pitchBallPos+"%)"))},directives:[l.l,b],styles:['[_nghost-%COMP%]{display:flex;justify-content:center;right:0;left:0;bottom:0;top:0;background-color:#252525}.instruments[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.instruments[_ngcontent-%COMP%]{max-width:1500px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:minmax(-webkit-min-content,-webkit-max-content);grid-auto-rows:minmax(min-content,max-content);place-items:start}.grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{width:100%}div.instrument[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;display:inline-block;overflow:hidden}div.instrument[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:1px;height:0;padding-bottom:100%;vertical-align:top}div.instrument[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}div.instrument[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{will-change:transform}svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{text-anchor:middle;alignment-baseline:middle}svg.buttons[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;pointer-events:none}svg.buttons[_ngcontent-%COMP%]   g.frequency[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:10px;font-family:Digital Numbers,sans-serif;font-style:normal;text-shadow:#fff 0 0 1px!important;pointer-events:none;fill:red}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{height:30;width:30;rx:5;ry:5}svg.buttons[_ngcontent-%COMP%]   rect.inactive[_ngcontent-%COMP%]{fill:grey}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]:hover{stroke:#00f}svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{r:20;cy:30}.box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:250;width:250}svg.course1[_ngcontent-%COMP%]   line[_ngcontent-%COMP%]{stroke:#ff0;stroke-width:4}svg.course1[_ngcontent-%COMP%]   marker[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ff0}svg.course2[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], svg.course2[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{fill:none;stroke:green;stroke-width:2}div.heading_text[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{fill:#fff}@media screen and (max-width:500px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}'],changeDetection:0}),t})();function O(t,n){1&t&&(a.Ob(0,"div",15),a.Kb(1,"img",16),a.Nb())}let _=(()=>{class t{constructor(){this.showBox=!1,this.pressure=29.92,this.altitude=7777,this.size=250}get sizeStyle(){}ngOnInit(){}handAngle(t){return this.altitude/(10*t)*360}get pressureRotationInhg(){return 100*(31.6-this.pressure)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-altimeter"]],inputs:{showBox:"showBox",pressure:"pressure",altitude:"altitude",size:"size"},decls:15,vars:5,consts:[[1,"instrument"],["class","background box",4,"ngIf"],[1,"inner","box"],[1,"pressure","move","inhg","box"],["src","img/altimeter_pressure_inhg.svg","alt","",1,"box",3,"fdRotate"],[1,"bg","box"],["src","img/altimeter_background.svg","alt","",1,"box"],[1,"hand10000","box"],["src","img/altimeter_hand_10000ft.svg","alt","",1,"box","move",3,"fdRotate"],[1,"hand1k","box"],["src","img/altimeter_hand_1000ft.svg",1,"box","move",3,"fdRotate"],[1,"hand100","box"],["src","img/altimeter_hand_100ft.svg","alt","",1,"box","move",3,"fdRotate"],[1,"foreground","box"],["src","img/altimeter_foreground.svg","alt","",1,"box"],[1,"background","box"],["src","img/indicator_background_dashboard.svg","alt","",1,"box"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.tc(1,O,2,0,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Kb(4,"img",4),a.Nb(),a.Ob(5,"div",5),a.Kb(6,"img",6),a.Nb(),a.Ob(7,"div",7),a.Kb(8,"img",8),a.Nb(),a.Ob(9,"div",9),a.Kb(10,"img",10),a.Nb(),a.Ob(11,"div",11),a.Kb(12,"img",12),a.Nb(),a.Nb(),a.Ob(13,"div",13),a.Kb(14,"img",14),a.Nb(),a.Nb()),2&t&&(a.zb(1),a.ec("ngIf",n.showBox),a.zb(3),a.ec("fdRotate",n.pressureRotationInhg),a.zb(4),a.ec("fdRotate",n.handAngle(1e4)),a.zb(2),a.ec("fdRotate",n.handAngle(1e3)),a.zb(2),a.ec("fdRotate",n.handAngle(100)))},directives:[l.l,b],styles:['[_nghost-%COMP%]{display:flex;justify-content:center;right:0;left:0;bottom:0;top:0;background-color:#252525}.instruments[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.instruments[_ngcontent-%COMP%]{max-width:1500px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:minmax(-webkit-min-content,-webkit-max-content);grid-auto-rows:minmax(min-content,max-content);place-items:start}.grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{width:100%}div.instrument[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;display:inline-block;overflow:hidden}div.instrument[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:1px;height:0;padding-bottom:100%;vertical-align:top}div.instrument[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}div.instrument[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{will-change:transform}svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{text-anchor:middle;alignment-baseline:middle}svg.buttons[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;pointer-events:none}svg.buttons[_ngcontent-%COMP%]   g.frequency[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:10px;font-family:Digital Numbers,sans-serif;font-style:normal;text-shadow:#fff 0 0 1px!important;pointer-events:none;fill:red}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{height:30;width:30;rx:5;ry:5}svg.buttons[_ngcontent-%COMP%]   rect.inactive[_ngcontent-%COMP%]{fill:grey}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]:hover{stroke:#00f}svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{r:20;cy:30}.box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:250;width:250}svg.course1[_ngcontent-%COMP%]   line[_ngcontent-%COMP%]{stroke:#ff0;stroke-width:4}svg.course1[_ngcontent-%COMP%]   marker[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ff0}svg.course2[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], svg.course2[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{fill:none;stroke:green;stroke-width:2}div.heading_text[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{fill:#fff}@media screen and (max-width:500px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}'],changeDetection:0}),t})();function v(t,n){1&t&&(a.Ob(0,"div",11),a.Kb(1,"img",12),a.Nb())}let p=(()=>{class t{constructor(){this.turnDegree=10,this.slip=1,this.showBox=!1,this.size=250}ngOnInit(){}static ballMoveCurve(t){return t*t*-.08}get ballMoveStr(){return`translate(${16*this.slip}%,${16*t.ballMoveCurve(this.slip)}%)`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-turn-indicator"]],inputs:{turnDegree:"turnDegree",slip:"slip",showBox:"showBox",size:"size"},decls:13,vars:4,consts:[[1,"instrument"],["class","background box",4,"ngIf"],[1,"inner","box"],[1,"box"],["src","img/turn_markings_1.svg","alt","",1,"box"],["src","img/turn_ball.svg","alt","",1,"box","move"],[1,"turn_airplane","box"],["src","img/turn_airplane.svg","alt","",1,"box","move",3,"fdRotate"],["src","img/turn_markings_2.svg","alt","",1,"box"],[1,"indicator_foreground"],["src","img/indicator_foreground.svg","alt","",1,"box"],[1,"background","box"],["src","img/indicator_background_dashboard.svg","alt","",1,"box"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.tc(1,v,2,0,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Kb(4,"img",4),a.Nb(),a.Ob(5,"div",3),a.Kb(6,"img",5),a.Nb(),a.Ob(7,"div",6),a.Kb(8,"img",7),a.Nb(),a.Ob(9,"div",3),a.Kb(10,"img",8),a.Nb(),a.Nb(),a.Ob(11,"div",9),a.Kb(12,"img",10),a.Nb(),a.Nb()),2&t&&(a.zb(1),a.ec("ngIf",n.showBox),a.zb(5),a.qc("transform",n.ballMoveStr),a.zb(2),a.ec("fdRotate",n.turnDegree))},directives:[l.l,b],styles:['[_nghost-%COMP%]{display:flex;justify-content:center;right:0;left:0;bottom:0;top:0;background-color:#252525}.instruments[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.instruments[_ngcontent-%COMP%]{max-width:1500px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:minmax(-webkit-min-content,-webkit-max-content);grid-auto-rows:minmax(min-content,max-content);place-items:start}.grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{width:100%}div.instrument[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;display:inline-block;overflow:hidden}div.instrument[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:1px;height:0;padding-bottom:100%;vertical-align:top}div.instrument[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}div.instrument[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{will-change:transform}svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{text-anchor:middle;alignment-baseline:middle}svg.buttons[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;pointer-events:none}svg.buttons[_ngcontent-%COMP%]   g.frequency[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:10px;font-family:Digital Numbers,sans-serif;font-style:normal;text-shadow:#fff 0 0 1px!important;pointer-events:none;fill:red}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{height:30;width:30;rx:5;ry:5}svg.buttons[_ngcontent-%COMP%]   rect.inactive[_ngcontent-%COMP%]{fill:grey}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]:hover{stroke:#00f}svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{r:20;cy:30}.box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:250;width:250}svg.course1[_ngcontent-%COMP%]   line[_ngcontent-%COMP%]{stroke:#ff0;stroke-width:4}svg.course1[_ngcontent-%COMP%]   marker[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ff0}svg.course2[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], svg.course2[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{fill:none;stroke:green;stroke-width:2}div.heading_text[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{fill:#fff}@media screen and (max-width:500px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}'],changeDetection:0}),t})();function C(t,n){1&t&&a.Kb(0,"img",27)}function x(t,n){if(1&t&&(a.Yb(),a.Ob(0,"svg",28),a.Ob(1,"defs"),a.Ob(2,"symbol",29),a.Kb(3,"polygon",30),a.Nb(),a.Ob(4,"symbol",31),a.Kb(5,"rect",32),a.Nb(),a.Ob(6,"symbol",33),a.Kb(7,"rect",34),a.Nb(),a.Nb(),a.Kb(8,"use",35),a.Kb(9,"use",36),a.Kb(10,"use",37),a.Kb(11,"use",38),a.Nb()),2&t){const t=a.Zb();a.ec("fdRotate",t.beaconCourse(1)),a.zb(9),a.qc("transform",t.crsError(0))}}function M(t,n){if(1&t&&(a.Yb(),a.Ob(0,"svg",39),a.Ob(1,"defs"),a.Ob(2,"marker",40),a.Kb(3,"polygon",41),a.Nb(),a.Nb(),a.Kb(4,"line",42),a.Kb(5,"line",43),a.Kb(6,"line",44),a.Nb()),2&t){const t=a.Zb();a.ec("fdRotate",t.beaconCourse(0)),a.zb(5),a.qc("transform",t.crsError(0))}}let P=(()=>{class t{constructor(){this.heading=0,this.size=250,this.toggleCourse=new a.n,this.MAX_TRANS_X=20}ngOnInit(){}get headingText(){return this.heading.toFixed(0)+"\t\xb0"}beaconCourse(t){var n;return(null===(n=this.beacons)||void 0===n?void 0:n[t].course)||90}crsError(t){var n;return`translateX(${((null===(n=this.beacons)||void 0===n?void 0:n[t].error)||0)/100*this.MAX_TRANS_X}%)`}showBeacon(t){var n;return null===(n=this.beacons)||void 0===n?void 0:n[t].show}crsToggle(t){this.toggleCourse.emit(t),console.log(0)}fillColor(t){var n;let e=[["yellow","#CCFFCC"],["green","red"]];return(null===(n=this.beacons)||void 0===n?void 0:n[t].show)?e[t][0]:e[t][1]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-heading-indicator"]],inputs:{heading:"heading",beacons:"beacons",showBox:"showBox",size:"size"},outputs:{toggleCourse:"toggleCourse"},decls:37,vars:9,consts:[[1,"instrument"],[1,"background","box"],["src","img/indicator_background_dashboard.svg","class","box",4,"ngIf"],[1,"inner","box"],[1,"heading_rot","move","box",3,"fdRotate"],["src","img/heading_yaw.svg",1,"box"],[1,"beacon","box"],["class","box move course2","viewBox","0 0 250 250",3,"fdRotate",4,"ngIf"],["class","box move course1","viewBox","0 0 250 250",3,"fdRotate",4,"ngIf"],[1,"heading_markings","box"],["src","img/heading_markings.svg","alt","",1,"box"],[1,"indicator_foreground"],["src","img/indicator_foreground.svg","alt","",1,"box"],[1,"heading_text","box"],["viewBox","0 0 250 50"],["x","105","y","19","width","45","height","17","fill","black"],["x","130","y","29"],[1,"button_container","box"],["viewBox","0 0 250 250",1,"box","buttons"],["transform","translate(10,20)"],["height","18","width","40","fill","yellow",3,"click"],["width","40","height","40"],["x","50%","y","25%"],[1,"frequency"],["x","50%","y","70%"],["transform","translate(200,20)"],["height","18","width","40","fill","green",3,"click"],["src","img/indicator_background_dashboard.svg",1,"box"],["viewBox","0 0 250 250",1,"box","move","course2",3,"fdRotate"],["id","arrow","xRef","0","yRef","0"],["height","25","points","2 22, 11 2, 20 22"],["id","body_rect"],["x","11","y","10","width","8","height","22"],["id","move_rect"],["x","11","y","10","width","8","height","43"],[0,"xlink","href","#move_rect","x","110","y","138"],[0,"xlink","href","#move_rect","x","110","y","92"],[0,"xlink","href","#body_rect","x","110","y","67"],[0,"xlink","href","#arrow","x","114","y","55"],["viewBox","0 0 250 250",1,"box","move","course1",3,"fdRotate"],["id","arrow1","markerWidth","8","marketHeight","8","refX","0","refY","1.5","orient","auto"],["points","0 0, 5 1.5, 0 3"],["x1","125","y1","190","x2","125","y2","150"],["x1","125","y1","148","x2","125","y2","102"],["x1","125","y1","100","x2","125","y2","78","marker-end","url(#arrow1)"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.Ob(1,"div",1),a.tc(2,C,1,0,"img",2),a.Nb(),a.Ob(3,"div",3),a.Ob(4,"div",4),a.Kb(5,"img",5),a.Ob(6,"div",6),a.tc(7,x,12,3,"svg",7),a.Nb(),a.Ob(8,"div",6),a.tc(9,M,7,3,"svg",8),a.Nb(),a.Nb(),a.Ob(10,"div",9),a.Kb(11,"img",10),a.Nb(),a.Nb(),a.Ob(12,"div",11),a.Kb(13,"img",12),a.Nb(),a.Ob(14,"div",13),a.Yb(),a.Ob(15,"svg",14),a.Kb(16,"rect",15),a.Ob(17,"text",16),a.uc(18),a.Nb(),a.Nb(),a.Nb(),a.Xb(),a.Ob(19,"div",17),a.Yb(),a.Ob(20,"svg",18),a.Ob(21,"g",19),a.Ob(22,"rect",20),a.Vb("click",(function(){return n.crsToggle(0)})),a.Nb(),a.Ob(23,"svg",21),a.Ob(24,"text",22),a.uc(25,"CRS1"),a.Nb(),a.Ob(26,"g",23),a.Ob(27,"text",24),a.uc(28,"122.50"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(29,"g",25),a.Ob(30,"rect",26),a.Vb("click",(function(){return n.crsToggle(1)})),a.Nb(),a.Ob(31,"svg",21),a.Ob(32,"text",22),a.uc(33,"CRS2"),a.Nb(),a.Ob(34,"g",23),a.Ob(35,"text",24),a.uc(36,"123.15"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.zb(2),a.ec("ngIf",n.showBox),a.zb(2),a.ec("fdRotate",-n.heading),a.zb(3),a.ec("ngIf",n.showBeacon(1)),a.zb(2),a.ec("ngIf",n.showBeacon(0)),a.zb(9),a.vc(n.headingText),a.zb(4),a.Bb("inactive",!n.showBeacon(0)),a.zb(8),a.Bb("inactive",!n.showBeacon(1)))},directives:[l.l,b],styles:['[_nghost-%COMP%]{display:flex;justify-content:center;right:0;left:0;bottom:0;top:0;background-color:#252525}.instruments[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.instruments[_ngcontent-%COMP%]{max-width:1500px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:minmax(-webkit-min-content,-webkit-max-content);grid-auto-rows:minmax(min-content,max-content);place-items:start}.grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{width:100%}div.instrument[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;display:inline-block;overflow:hidden}div.instrument[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:1px;height:0;padding-bottom:100%;vertical-align:top}div.instrument[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}div.instrument[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{will-change:transform}svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{text-anchor:middle;alignment-baseline:middle}svg.buttons[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;pointer-events:none}svg.buttons[_ngcontent-%COMP%]   g.frequency[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:10px;font-family:Digital Numbers,sans-serif;font-style:normal;text-shadow:#fff 0 0 1px!important;pointer-events:none;fill:red}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{height:30;width:30;rx:5;ry:5}svg.buttons[_ngcontent-%COMP%]   rect.inactive[_ngcontent-%COMP%]{fill:grey}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]:hover{stroke:#00f}svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{r:20;cy:30}.box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:250;width:250}svg.course1[_ngcontent-%COMP%]   line[_ngcontent-%COMP%]{stroke:#ff0;stroke-width:4}svg.course1[_ngcontent-%COMP%]   marker[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ff0}svg.course2[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], svg.course2[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{fill:none;stroke:green;stroke-width:2}div.heading_text[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{fill:#fff}@media screen and (max-width:500px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}']}),t})();function w(t,n){1&t&&(a.Ob(0,"div",9),a.Kb(1,"img",10),a.Nb())}let y=(()=>{class t{constructor(){this.speed=10,this.showBox=!1,this.size=250}ngOnInit(){}get handAngle(){let t=Math.sign(this.speed)*Math.min(Math.abs(this.speed),20)*8.2;return(this.speed>20||this.speed<-20)&&(t+=this.speed%2),t}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-variometer"]],inputs:{speed:"speed",showBox:"showBox",size:"size"},decls:9,vars:2,consts:[[1,"instrument"],["class","background box",4,"ngIf"],[1,"inner","box"],[1,"bg","box"],["src","img/vario_markings.svg","alt","",1,"box"],[1,"hand","box"],["src","img/vario_hand.svg",1,"box","move",3,"fdRotate"],[1,"indicator_foreground"],["src","img/indicator_foreground.svg","alt","",1,"box"],[1,"background","box"],["src","img/indicator_background_dashboard.svg","alt","",1,"box"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.tc(1,w,2,0,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Kb(4,"img",4),a.Nb(),a.Ob(5,"div",5),a.Kb(6,"img",6),a.Nb(),a.Nb(),a.Ob(7,"div",7),a.Kb(8,"img",8),a.Nb(),a.Nb()),2&t&&(a.zb(1),a.ec("ngIf",n.showBox),a.zb(5),a.ec("fdRotate",n.handAngle))},directives:[l.l,b],styles:['[_nghost-%COMP%]{display:flex;justify-content:center;right:0;left:0;bottom:0;top:0;background-color:#252525}.instruments[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.instruments[_ngcontent-%COMP%]{max-width:1500px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:minmax(-webkit-min-content,-webkit-max-content);grid-auto-rows:minmax(min-content,max-content);place-items:start}.grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{width:100%}div.instrument[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;display:inline-block;overflow:hidden}div.instrument[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:1px;height:0;padding-bottom:100%;vertical-align:top}div.instrument[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}div.instrument[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{will-change:transform}svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{text-anchor:middle;alignment-baseline:middle}svg.buttons[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;pointer-events:none}svg.buttons[_ngcontent-%COMP%]   g.frequency[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:10px;font-family:Digital Numbers,sans-serif;font-style:normal;text-shadow:#fff 0 0 1px!important;pointer-events:none;fill:red}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{height:30;width:30;rx:5;ry:5}svg.buttons[_ngcontent-%COMP%]   rect.inactive[_ngcontent-%COMP%]{fill:grey}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]:hover{stroke:#00f}svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{r:20;cy:30}.box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:250;width:250}svg.course1[_ngcontent-%COMP%]   line[_ngcontent-%COMP%]{stroke:#ff0;stroke-width:4}svg.course1[_ngcontent-%COMP%]   marker[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ff0}svg.course2[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], svg.course2[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{fill:none;stroke:green;stroke-width:2}div.heading_text[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{fill:#fff}@media screen and (max-width:500px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}']}),t})();const k=["instruments"],N=function(){return[]},z=i.a.forChild([{path:"",component:(()=>{class t{constructor(t,n){this.dataService=t,this.ref=n,this.maxWidth=3e3,this.data$=this.dataService.message$.pipe(Object(s.a)(t=>{throw t}),Object(r.a)({error:t=>console.log("[SixPack] Error:",t),complete:()=>console.log("[SixPack] Connection Closed")}),function(...t){const n=t.length;if(0===n)throw new Error("list of properties cannot be empty.");return e=>Object(c.a)(function(t,n){return e=>{let o=e;for(let i=0;i<n;i++){const n=null!=o?o[t[i]]:void 0;if(void 0===n)return;o=n}return o}}(t,n))(e)}("instruments"),Object(g.a)()),this.beacons=[{course:60,show:!0,error:0},{course:100,show:!0,error:0}]}ngOnInit(){this.dataService.message$.subscribe(t=>{this.beacons[0].course=t.navData.hsi_1.course,this.beacons[0].error=t.avionics.cdi_1.radialError,this.beacons[1].course=t.navData.hsi_2.course,this.beacons[1].error=t.avionics.cdi_2.radialError})}ngAfterViewInit(){this.maxWidth=1.5*this.container.nativeElement.offsetHeight-1,this.ref.detectChanges()}toggleCourseVisibility(t){this.beacons[t].show=!this.beacons[t].show}onResize(t){this.maxWidth=1.5*this.container.nativeElement.offsetHeight-1}}return t.\u0275fac=function(n){return new(n||t)(a.Jb(d.a),a.Jb(a.h))},t.\u0275cmp=a.Db({type:t,selectors:[["app-instruments"]],viewQuery:function(t,n){var e;1&t&&a.xc(k,!0),2&t&&a.gc(e=a.Wb())&&(n.container=e.first)},hostBindings:function(t,n){1&t&&a.Vb("resize",(function(t){return n.onResize(t)}),!1,a.kc)},decls:17,vars:31,consts:[[1,"instruments","grid"],["instruments",""],[3,"speed"],[3,"bank","pitch"],[3,"altitude","pressure"],[3,"turnDegree","slip"],[3,"heading","beacons","toggleCourse"]],template:function(t,n){var e,o,i,s,r,c,g,d,l;1&t&&(a.Ob(0,"div",0,1),a.Kb(2,"app-airspeed-indicator",2),a.ac(3,"async"),a.Kb(4,"app-attitude",3),a.ac(5,"async"),a.ac(6,"async"),a.Kb(7,"app-altimeter",4),a.ac(8,"async"),a.ac(9,"async"),a.Kb(10,"app-turn-indicator",5),a.ac(11,"async"),a.ac(12,"async"),a.Ob(13,"app-heading-indicator",6),a.Vb("toggleCourse",(function(t){return n.toggleCourseVisibility(t)})),a.ac(14,"async"),a.Nb(),a.Kb(15,"app-variometer",2),a.ac(16,"async"),a.Nb()),2&t&&(a.qc("max-width",n.maxWidth,"px"),a.zb(2),a.ec("speed",(null==(e=a.bc(3,12,n.data$))?null:e.indicatedAirspeed)||0),a.zb(2),a.ec("bank",(null==(o=a.bc(5,14,n.data$))?null:o.bankAngle)||0)("pitch",(null==(i=a.bc(6,16,n.data$))?null:i.pitchAngle)||0),a.zb(3),a.ec("altitude",(null==(s=a.bc(8,18,n.data$))?null:s.indicatedAltitude)||0)("pressure",(null==(r=a.bc(9,20,n.data$))?null:r.kohlsmanSettingHg)||29.92),a.zb(3),a.ec("turnDegree",(null==(c=a.bc(11,22,n.data$))?null:c.turnIndicatorRate)||0)("slip",(null==(g=a.bc(12,24,n.data$))?null:g.turnCoordinatorBall)||0),a.zb(3),a.ec("heading",(null==(d=a.bc(14,26,n.data$))?null:d.headingIndicatorDeg)||0)("beacons",n.beacons||a.fc(30,N)),a.zb(2),a.ec("speed",(null==(l=a.bc(16,28,n.data$))?null:l.verticalSpeed)||0))},directives:[u,f,_,p,P,y],pipes:[l.b],styles:['[_nghost-%COMP%]{display:flex;justify-content:center;right:0;left:0;bottom:0;top:0;background-color:#252525}.instruments[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.instruments[_ngcontent-%COMP%]{max-width:1500px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:minmax(-webkit-min-content,-webkit-max-content);grid-auto-rows:minmax(min-content,max-content);place-items:start}.grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{width:100%}div.instrument[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;display:inline-block;overflow:hidden}div.instrument[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:1px;height:0;padding-bottom:100%;vertical-align:top}div.instrument[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}div.instrument[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{will-change:transform}svg[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{text-anchor:middle;alignment-baseline:middle}svg.buttons[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:12px;font-weight:700;pointer-events:none}svg.buttons[_ngcontent-%COMP%]   g.frequency[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:10px;font-family:Digital Numbers,sans-serif;font-style:normal;text-shadow:#fff 0 0 1px!important;pointer-events:none;fill:red}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{height:30;width:30;rx:5;ry:5}svg.buttons[_ngcontent-%COMP%]   rect.inactive[_ngcontent-%COMP%]{fill:grey}svg.buttons[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]:hover{stroke:#00f}svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{r:20;cy:30}.box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:250;width:250}svg.course1[_ngcontent-%COMP%]   line[_ngcontent-%COMP%]{stroke:#ff0;stroke-width:4}svg.course1[_ngcontent-%COMP%]   marker[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ff0}svg.course2[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], svg.course2[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{fill:none;stroke:green;stroke-width:2}div.heading_text[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{fill:#fff}@media screen and (max-width:500px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}']}),t})()}]);let K=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(n){return new(n||t)},imports:[[o.a,z]]}),t})()}}]);