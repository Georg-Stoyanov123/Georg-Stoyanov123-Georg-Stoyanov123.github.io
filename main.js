document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }
  document.addEventListener('contextmenu', event => event.preventDefault());
    
function openDiscord() {
    window.open("https://discord.gg/zUcvez8s5Z")
}
function openGithubURL() {
    window.open("https://github.com/Georg-Stoyanov123")
}
function openYoutubeURL() {
    window.open("https://www.youtube.com/channel/UCZ0-z1H_EQPpOzzx935PZeQ")
}
function openDiscordURL() {
    window.open("https://discord.gg/zUcvez8s5Z")
}
function scrollToBottom() {
    document.body.scrollIntoView(false);
}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "View more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "View less"; 
      moreText.style.display = "inline";
    }
  }


    