
// document.getElementById("listNotes").innerHTML = "";
let Notes = getCookie("Note");
if (Notes == ""){
    let Note = [['Welcome to Notes Keeper', 'Get started by adding your first note!']];
    let arr = JSON.stringify(Note);
    document.cookie = "Note =" + arr;
    notesGen();
} else {
    notesGen();
}

function notesGen() {
    let cookNotes = getCookie("Note");
    var arr = JSON.parse(cookNotes);

    for (let i=0; i<arr.length; i++) {
        let head = arr[i][0];
        let body = arr[i][1];
        let content = '<div class="folder1"><div class="folderHeader">' + head + '</div><div class="folderDetails">' + body + '</div></div>';
        document.getElementById("listNotes").innerHTML += content;
    }
}

function addNewNote() {
    let head = document.getElementById("headerInput").value;
    let body = document.getElementById("textHolder").value;
    head = head.replace(/[^a-zA-Z0-9 ]/g, '');
    body = body.replace(/[^a-zA-Z0-9 ]/g, '');
    if (head != "" && body!= "") {
        let cookName = getCookie("Note");
        var arr = JSON.parse(cookName);
        let content = [head, body];
        arr.push(content);
        console.log(arr);
        arr = JSON.stringify(arr);
        document.cookie = "Note =" + arr;
        document.getElementById("headerInput").value = "";
        document.getElementById("textHolder").value = "";
        location.reload();
    }
    
}




function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1);
       if(c.indexOf(name) == 0)
          return c.substring(name.length,c.length);
    }
    return "";
}


function displayWindow(v) {
    if (v==1) {
        document.getElementById("window").style.zIndex = "1";
        setTimeout("changeOpacity()", 100);
        document.getElementById("wrapper").style.opacity = "0.5";
        document.getElementById("addNote").value = "0";
        document.getElementById("addNote").style.rotate = "45deg";
    } else {
        document.getElementById("window").style.opacity = '0';
        document.getElementById("window").style.zIndex = "-1";
        document.getElementById("wrapper").style.opacity = "1";
        document.getElementById("addNote").value = "1";
        document.getElementById("addNote").style.rotate = "0deg";
    }
}

function changeOpacity() {
    document.getElementById("window").style.opacity = '1';
}