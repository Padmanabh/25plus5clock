(this.webpackJsonp25plus5clock=this.webpackJsonp25plus5clock||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(4),r=n.n(c),a=(n(10),n(2)),o=n(5),l=(n(11),n(12),n(0)),m=function(e){return Object(l.jsxs)("div",{className:"length-control",children:[Object(l.jsx)("div",{id:e.mode.toLowerCase()+"-label",children:e.title}),Object(l.jsx)("button",{className:"btn-level",onClick:function(){return e.onDecrement(e.mode)},value:"-",id:e.mode.toLowerCase()+"-decrement",children:Object(l.jsx)("i",{className:"fa fa-arrow-down fa-2x"})}),Object(l.jsx)("div",{className:"btn-level",id:e.mode.toLowerCase()+"-length",children:e.length}),Object(l.jsx)("button",{className:"btn-level",onClick:function(){return e.onIncrement(e.mode)},value:"+",id:e.mode.toLowerCase()+"-increment",children:Object(l.jsx)("i",{className:"fa fa-arrow-up fa-2x"})})]})};var d=function(){var e={SESSION:"SESSION",BREAK:"BREAK",SESSION_LENGTH:60,BREAK_LENGTH:60},t={breakLength:5,sessionLength:25,timerState:e.STOPPED,timerType:e.SESSION,timeLimit:1500,timerRunning:!1,timeout:null},n=Object(i.useState)(t),s=Object(o.a)(n,2),c=s[0],r=s[1],d=function(t){if(!c.timerRunning){var n=t===e.SESSION?c.sessionLength>1?c.sessionLength-1:1:c.sessionLength,i=t===e.BREAK?c.breakLength>1?c.breakLength-1:1:c.breakLength,s=c.timerType===e.SESSION?60*n:60*i;r((function(e){return Object(a.a)(Object(a.a)({},e),{},{sessionLength:n,breakLength:i,timeLimit:s})}))}},b=function(t){if(!c.timerRunning){var n=t===e.SESSION?c.sessionLength<e.SESSION_LENGTH?c.sessionLength+1:e.SESSION_LENGTH:c.sessionLength,i=t===e.BREAK?c.breakLength<e.BREAK_LENGTH?c.breakLength+1:e.BREAK_LENGTH:c.breakLength,s=c.timerType===e.SESSION?60*n:60*i;r((function(e){return Object(a.a)(Object(a.a)({},e),{},{sessionLength:n,breakLength:i,timeLimit:s})}))}};return Object(l.jsxs)("div",{id:"container",children:[Object(l.jsx)("div",{className:"main-title",children:"25 + 5 Clock"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{length:c.breakLength,onDecrement:d,onIncrement:b,title:"Break Length",mode:e.BREAK}),Object(l.jsx)(m,{length:c.sessionLength,onDecrement:d,onIncrement:b,title:"Session Length",mode:e.SESSION})]}),Object(l.jsx)("div",{className:"timer",children:Object(l.jsxs)("div",{className:"timer-wrapper",children:[Object(l.jsx)("div",{id:"timer-label",className:c.timeLimit<60?"warning":"",children:c.timerType}),Object(l.jsx)("div",{id:"time-left",className:c.timeLimit<60?"warning":"",children:function(){var e=Math.floor(c.timeLimit/60),t=c.timeLimit-60*e;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)}()})]})}),Object(l.jsxs)("div",{className:"timer-control",children:[Object(l.jsxs)("button",{id:"start_stop",onClick:function(){r((function(e){return Object(a.a)(Object(a.a)({},e),{},{timerRunning:!e.timerRunning})}))},children:[Object(l.jsx)("i",{className:"fa fa-play fa-2x"}),Object(l.jsx)("i",{className:"fa fa-pause fa-2x"})]}),Object(l.jsx)("button",{id:"reset",onClick:function(){r(t);var e=document.getElementById("beep");e.pause(),e.currentTime=0},children:Object(l.jsx)("i",{className:"fa fa-refresh fa-2x"})})]}),Object(l.jsx)("audio",{id:"beep",preload:"auto",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.07093a8d.chunk.js.map