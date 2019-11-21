var sysbarSystem = document.getElementById("systemButton");
var sysbarApps = document.getElementById("appsButton");
var sysbarSystemContextMenu = document.getElementById("systemContextMenu");
var sysbarAppsContextMenu = document.getElementById("appsContextMenu");
var sysbarClick = false;
var clockDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var clockMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var osContextMenu = document.getElementById("osContextMenu");

setInterval( function() {
	var date = new Date();
  var minute = date.getMinutes()
  if (date.getMinutes() < 10) minute = "0" + date.getMinutes();
	document.getElementById("sysbarClock").innerHTML = clockDays[date.getDay()] + " " + clockMonths[date.getMonth()] + " " + date.getDate() + " - " + " " + date.getHours() + ":" + minute;
}, 1000);

sysbarSystem.addEventListener("click", function() {
  if (sysbarClick) {
    sysbarClick = false;
    sysbarSystem.style = null;
    sysbarSystemContextMenu.style = "display: none;";
    sysbarAppsContextMenu.style = "display: none;";
    sysbarApps.style = null;
  } else {
    sysbarClick = true;
    sysbarSystemContextMenu.style = "transform: translate(0px, -20px);";
    setTimeout(function(){
      sysbarSystemContextMenu.style = "transform: translate(0px, 0px);";
    }, 1)
    sysbarSystem.style = "background-color: #004b8a;";
  }
});
sysbarApps.addEventListener("click", function() {
  if (sysbarClick) {
    sysbarClick = false;
    sysbarApps.style = null;
    sysbarSystemContextMenu.style = "display: none;";
    sysbarAppsContextMenu.style = "display: none;";
    sysbarSystem.style = null;
  } else {
    sysbarClick = true;
    sysbarAppsContextMenu.style = "transform: translate(81px, -20px);";
    setTimeout(function(){
      sysbarAppsContextMenu.style = "transform: translate(81px, 0px);";
    }, 1)
    sysbarApps.style = "background-color: #004b8a;";
  }
});

sysbarSystem.addEventListener("mouseover", function() {
  if (sysbarClick) {
    sysbarSystem.style = "background-color: #004b8a;";
    sysbarSystemContextMenu.style = null;
    sysbarAppsContextMenu.style = "display: none;";
    sysbarApps.style = null;
  }
});
sysbarApps.addEventListener("mouseover", function() {
  if (sysbarClick) {
    sysbarApps.style = "background-color: #004b8a;";
    sysbarSystemContextMenu.style = "display: none;";
    sysbarAppsContextMenu.style = "transform: translate(81px, 0px);";
    sysbarSystem.style = null;
  }
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    osContextMenu.style = "position: fixed;";
    osContextMenu.style.top = (e.clientY - 20) + "px";
    osContextMenu.style.left = e.clientX + "px";
    setTimeout(function() {
      osContextMenu.style.top = e.clientY + "px";
    }, 1)
}, false);
document.addEventListener("mousedown", function() {
  osContextMenu.style = "display: none;"
})

document.getElementById("systemShutdown").onmousedown = function() {
  document.getElementById("shutdown").style = null;
  setTimeout(function() {
    document.getElementById("shutdown").style = "transition:0.5s;background-color:black;width:100%;height:100%;position:absolute;z-index:256;";
  }, 1)
}

document.getElementById("systemReboot").onmousedown = function() {
  document.getElementById("shutdown").style = null;
  setTimeout(function() {
    document.getElementById("shutdown").style = "transition:0.5s;background-color:black;width:100%;height:100%;position:absolute;z-index:256;";
  }, 1);
  setTimeout(function() {
    location = location;
  }, 1000);
}

function windowEnable(elmnt, canDrag) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var firstActivate = document.getElementById(elmnt.id + "Open")
  var secondActivate = null;
  var thirdActivate = null;
  var fourthActivate = null;
  var maximize = null;
  document.getElementById(elmnt.id + "Close").onmouseup = function() {
    elmnt.style = "display: none;";
  }
  try {var secondActivate=document.getElementById(elmnt.id + "Open2");}catch(a){}
  try {var thirdActivate=document.getElementById(elmnt.id + "Open3");}catch(a){}
  try {var fourthActivate=document.getElementById(elmnt.id + "Open4");}catch(a){}
  try {var maximize=document.getElementById(elmnt.id + "Maximize");}catch(a){}
  if (maximize) {
    maximize.onmouseup = function() {
      elmnt.style.height = document.getElementById(elmnt.id + "Body").style.height ? document.getElementById(elmnt.id + "Body").style.height : "0%";
      elmnt.style.width = document.getElementById(elmnt.id + "Body").style.width ? document.getElementById(elmnt.id + "Body").style.width : "0%";
      document.getElementById(elmnt.id + "Body").style.resize = "none";
      document.getElementById(elmnt.id + "Body").style.height = null;
      document.getElementById(elmnt.id + "Body").style.width = null;
      elmnt.style.transition = null;
      setTimeout(function() {
        elmnt.style.top = "31px";
        elmnt.style.left = "0px";
        elmnt.style.width = "100%";
        elmnt.style.height = "calc(100vh - 148px)";
        setTimeout(function() {elmnt.style.transition = "none";}, 500);
      }, 1)
    }
  }
  if (secondActivate) {
    secondActivate.onmouseup = function() {
      if (maximize) document.getElementById(elmnt.id + "Body").style.resize = null;
      elmnt.style = "top: 30px;";
      setTimeout(function() {
        elmnt.style = "top: 50px;";
      }, 1)
      setTimeout(function() {
        elmnt.style = "top: 50px; transition: none;";
      }, 100)
    }
  }
  if (thirdActivate) {
    thirdActivate.onmousedown = function() {
      if (maximize) document.getElementById(elmnt.id + "Body").style.resize = null;
      elmnt.style = "top: 30px;";
      setTimeout(function() {
        elmnt.style = "top: 50px;";
      }, 1)
      setTimeout(function() {
        elmnt.style = "top: 50px; transition: none;";
      }, 100)
    }
  }
  if (fourthActivate) {
    fourthActivate.onmousedown = function() {
      if (maximize) document.getElementById(elmnt.id + "Body").style.resize = null;
      elmnt.style = "top: 30px;";
      setTimeout(function() {
        elmnt.style = "top: 50px;";
      }, 1)
      setTimeout(function() {
        elmnt.style = "top: 50px; transition: none;";
      }, 100)
    }
  }
  firstActivate.onmouseup = function() {
    if (maximize) document.getElementById(elmnt.id + "Body").style.resize = null;
    elmnt.style = "top: 30px;";
    setTimeout(function() {
      elmnt.style = "top: 50px;";
    }, 1)
    setTimeout(function() {
      elmnt.style = "top: 50px; transition: none;";
    }, 100)
  }
  if (canDrag) {
    document.getElementById(elmnt.id + "TitleBar").onmousedown = function(e) {
    e = e || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.getElementById("aboutWindow").style.zIndex = 1;
    document.getElementById("settingsWindow").style.zIndex = 1;
    document.getElementById("uiWindow").style.zIndex = 1;
    document.getElementById("terminalWindow").style.zIndex = 1;
    elmnt.style.zIndex = 2;
    document.onmouseup = function() {document.onmouseup = null; document.onmousemove = null;};
    document.onmousemove = function(e) {
      e = e || window.event;
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      e.preventDefault();
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    }
  }
}

document.getElementById("closeAllWindows").onmousedown = function() {
  document.getElementById("aboutWindow").style = "display: none;";
  document.getElementById("settingsWindow").style = "display: none;";
  document.getElementById("uiWindow").style = "display: none;";
  document.getElementById("terminalWindow").style = "display: none;";
}

windowEnable(document.getElementById("aboutWindow"), true);
windowEnable(document.getElementById("settingsWindow"), true);
windowEnable(document.getElementById("uiWindow"), true);
windowEnable(document.getElementById("terminalWindow"), true);

window.onload = function() { // this executes after above has executed & resources finished loading
  document.body.removeChild(document.getElementById("startup"));
  document.getElementById("shutdown").style = "background-color:black;width:100%;height:100%;position:absolute;z-index:256;";
  setTimeout(function() {
    document.getElementById("shutdown").style = "transition:0.5s;margin:50%;margin-top:0%;width:0%;height:0%;position:absolute;";
    setTimeout(function(){document.getElementById("shutdown").style = "display: none;"},600)
  }, 1000)
}