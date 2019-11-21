var fontSize = document.getElementById("settingsFontSize")
var fontSizeStyle = document.createElement("style");
document.head.appendChild(fontSizeStyle);
fontSizeStyle.sheet.insertRule("a{}");
var transparencyEffects = document.getElementById("settingsTransparencyEffects");
var transparencyEffectsStyle = document.createElement("style");
document.head.appendChild(transparencyEffectsStyle);
transparencyEffectsStyle.sheet.insertRule("a{}");
var backgroundURL = document.getElementById("settingsWallpaperURL");
var backgroundURLStyle = document.createElement("style");
document.head.appendChild(backgroundURLStyle);
backgroundURLStyle.sheet.insertRule("a{}");

fontSize.addEventListener("input", function() {
  fontSizeStyle.sheet.deleteRule(0);
  fontSizeStyle.sheet.insertRule("*:not(h1){font-size:" + fontSize.value + "px;}");
  document.getElementById("settingsFontSizePreview").innerHTML = "Font Size: " + fontSize.value + "px";
});

transparencyEffects.onchange = function() {
  if (transparencyEffects.checked) {
    transparencyEffectsStyle.sheet.deleteRule(0);
    transparencyEffectsStyle.sheet.insertRule("a{}");
  } else {
    transparencyEffectsStyle.sheet.deleteRule(0);
    transparencyEffectsStyle.sheet.insertRule(".blur{backdrop-filter:none;background-color:rgb(40,40,40);}");
  }
}

document.getElementById("settingsWallpaperURLSelect").onclick = function() {
  backgroundURLStyle.sheet.deleteRule(0);
  backgroundURLStyle.sheet.insertRule("body{background-image:url('" + backgroundURL.value + "')}")
}
