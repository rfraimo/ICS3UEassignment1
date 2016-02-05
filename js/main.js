var browser = navigator.appName;
var java = navigator.javaEnabled();
var platform = navigator.platform;
alert("Your browser is " + browser + ". Your platform is " + platform +". Your Java is " + (java ? "enabled" : "disabled") + ".");
