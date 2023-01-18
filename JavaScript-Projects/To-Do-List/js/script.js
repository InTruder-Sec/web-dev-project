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
    let newdiv = document.createElement("li");
    document.getElementById("makeList").appendChild(newdiv);
    newdiv.innerText = val;
    clearInput();
    document.getElementById("makeList").appendChild(div);
    
}

function clearInput(){
  var getValue= document.getElementById("addTask");
  getValue.innerHTML = "";
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
  let count = getnoCookies();
  console.log(count);
  for (var t=0; t<count; t++) {
    let current = "ToDo" + (t+1);
    document.cookie = current + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";  
  }
  window.location.reload();
}
