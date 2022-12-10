

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
document.cookie = "Temp=0";
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
    alert(document.cookie);
}

// function fetchCookies() {
//   let count = getnoCookies()+1;
//   for(let i = 2;i<count)
// }