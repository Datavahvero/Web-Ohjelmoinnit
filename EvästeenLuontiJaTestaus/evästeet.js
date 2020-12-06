window.onload = testCookies();

function testCookies() {
//
}

  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
	//
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  // Avaa https://www.w3schools.com/jsref/jsref_decodeuricomponent.asp
  // Avaa https://www.w3schools.com/jsref/jsref_obj_string.asp  -- split- ja substring-metodi
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }