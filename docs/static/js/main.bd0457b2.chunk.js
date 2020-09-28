(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),s=t.n(r),i=(t(11),t(1)),l=(t(12),function(e){var a=e.setCity,t=Object(n.useState)(""),r=Object(i.a)(t,2),s=r[0],l=r[1];return c.a.createElement("form",{className:"search",onSubmit:function(e){e.preventDefault(),a(s),l("")}},c.a.createElement("input",{type:"text",placeholder:"Busca tu ciudad \ud83d\ude00",value:s,onChange:function(e){l(e.target.value)}}))}),m=t(2),o=t.n(m),d=t(5),p=(t(14),function(){return c.a.createElement("div",{className:"loader"})}),u=t(15),h=function(e){var a=e.city,t=Object(n.useState)({data:{},predictions:[],img:"",loading:!1,error:!1}),r=Object(i.a)(t,2),s=r[0],l=r[1];Object(n.useEffect)((function(){m(a)}),[a]);var m=function(){var e=Object(d.a)(o.a.mark((function e(a){var t,n,c,r,s,i,m,d,p,h,E,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a){e.next=26;break}return l({data:{},predictions:[],img:"",loading:!0,error:!1}),e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&units=metric&lang=es&appid=024d45d23e83c80330a78d19d8d88448"));case 5:return c=e.sent,e.next=8,c.json();case 8:return r=e.sent,e.next=11,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(null===(t=r.coord)||void 0===t?void 0:t.lat,"&lon=").concat(null===(n=r.coord)||void 0===n?void 0:n.lon,"&exclude=minutely,hourly&units=metric&appid=024d45d23e83c80330a78d19d8d88448"));case 11:return s=e.sent,e.next=14,fetch("https://api.pexels.com/v1/search?query=".concat(a,"&per_page=1"),{headers:new Headers({Authorization:"563492ad6f917000010000019331042d1ff3469e86b549f1badb5a35"})});case 14:return i=e.sent,e.next=17,i.json();case 17:return m=e.sent,d=m.photos,e.next=21,s.json();case 21:p=e.sent,h=p.daily,E=h.splice(4).map((function(e,a){return{id:Math.floor(999999*Math.random()),temp:Math.round(e.temp.day),main:e.weather[0].main,icon:e.weather[0].icon,day:u((new Date).setDate((new Date).getDate()+a+1)).format("ddd")}})),console.log(E),"404"===r.cod?l({data:r.message,predictions:[],img:"",loading:!1,error:!0}):l({data:r,predictions:E,img:(null===(v=d[0])||void 0===v?void 0:v.src.portrait)||"https://images.pexels.com/photos/159020/sunset-sky-afterglow-evening-sky-159020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",loading:!1,error:!1});case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(0),l({data:{},predictions:[],img:"",loading:!1,error:!0});case 31:case"end":return e.stop()}}),e,null,[[0,28]])})));return function(a){return e.apply(this,arguments)}}(),h=s.data,E=h.name,v=h.sys,f=h.main,N=h.weather,g=h.wind;return s.error?c.a.createElement("p",{style:{textAlign:"center"}},"!Oops la ciudad - ",a," no existe \ud83e\udd7a\ud83d\ude26\xa1"):c.a.createElement(c.a.Fragment,null,s.loading&&c.a.createElement("div",null,c.a.createElement(p,null)),f&&c.a.createElement("div",{className:"weather-content"},c.a.createElement("div",{className:"weather-side",style:{backgroundImage:'url("'.concat(s.img,'")')}},c.a.createElement("div",{className:"weather-gradient"}),c.a.createElement("div",{className:"date-container"},c.a.createElement("h2",{className:"date-dayname"},"".concat(u().format("dddd"))),c.a.createElement("span",{className:"date-day"},"".concat(u().format("D MMMM YYYY"))),c.a.createElement("i",{className:"location-icon","data-feather":"map-pin"}),c.a.createElement("span",{className:"location"},"".concat(E,", ").concat(v.country))),c.a.createElement("div",{className:"weather-container"},c.a.createElement("img",{className:"weather-icon",src:"https://openweathermap.org/img/w/".concat(N[0].icon,".png"),alt:N[0].icon}),c.a.createElement("h1",{className:"weather-temp"},Math.round(f.temp),"\xb0C"),c.a.createElement("h3",{className:"weather-desc"},N[0].main))),c.a.createElement("div",{className:"info-side"},c.a.createElement("div",{className:"today-info-container"},c.a.createElement("div",{className:"today-info"},c.a.createElement("div",{className:"precipitation"},c.a.createElement("span",{className:"title"},"TEMP MAX"),c.a.createElement("span",{className:"value"},Math.round(f.temp_max)," %")),c.a.createElement("div",{className:"precipitation"},c.a.createElement("span",{className:"title"},"TEMP MIN"),c.a.createElement("span",{className:"value"},Math.round(f.temp_min)," %")),c.a.createElement("div",{className:"precipitation"},c.a.createElement("span",{className:"title"},"SENSATION"),c.a.createElement("span",{className:"value"},Math.round(f.feels_like)," %")),c.a.createElement("div",{className:"humidity"},c.a.createElement("span",{className:"title"},"HUMIDITY"),c.a.createElement("span",{className:"value"},f.humidity," %")),c.a.createElement("div",{className:"wind"},c.a.createElement("span",{className:"title"},"WIND"),c.a.createElement("span",{className:"value"},g.speed," km/h")))),c.a.createElement("div",{className:"week-container"},c.a.createElement("ul",{className:"week-list"},s.predictions.map((function(e){var a=e.id,t=e.temp,n=e.main,r=e.icon,s=e.day;return c.a.createElement("li",{key:a},c.a.createElement("img",{className:"day-icon",src:"https://openweathermap.org/img/w/".concat(r,".png"),alt:n}),c.a.createElement("span",{className:"day-name"},s),c.a.createElement("span",{className:"day-temp"},t,"\xb0C"))})))))))};var E=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1];return c.a.createElement("div",{id:"main"},c.a.createElement(l,{setCity:r}),c.a.createElement(h,{city:t}))};s.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.bd0457b2.chunk.js.map