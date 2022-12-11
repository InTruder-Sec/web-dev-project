document.cookie = "Temp=0";
fetchCookies();

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}



function getnoCookies() {
  let cook = document.cookie;
  let cook2 = (cook.split(";").length-1);
  return cook2;
}


function add() {
    var val = document.getElementById("addTask").value;
    let count = getnoCookies();
    let newCount = count + 1;
    let cookName = "ToDo" + newCount;
    console.log(cookName);
    document.cookie = cookName + "=" + val;
    let list = document.getElementById("makeList");
    let li = document.createElement("li");
    li.innerText = val;
    list.appendChild(li);
}

function fetchCookies() {
  let count = getnoCookies();
  if(count==0) {
    return 0;
  } else {
    for(let i=1; i<(count+1); i++) {
      let list = document.getElementById("makeList");
      let current = "ToDo" + i;
      let newCurrent = getCookie(current);
      let li = document.createElement("li");
      li.innerText = newCurrent;
      list.appendChild(li);
    }
  }
}

function reset() {
    var allCookies = document.cookie.split(';');
    for (var i = 0; i < allCookies.length; i++) {
      document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString();
    displayCookies.innerHTML = document.cookie;
  } 
}