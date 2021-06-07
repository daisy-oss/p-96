var firebaseConfig = {
      apiKey: "AIzaSyCXVhEMkI_uBF8P00pCl-O3mXw8h2DJ7i4",
      authDomain: "kwitter-2a73a.firebaseapp.com",
      databaseURL: "https://kwitter-2a73a-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a73a",
      storageBucket: "kwitter-2a73a.appspot.com",
      messagingSenderId: "624510095062",
      appId: "1:624510095062:web:f202f688c76aa075efc377"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user =localStorage.getItem("user");
    document.getElementById("room_name").innerHTML="Welcome to kwitter " + user;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
      });});}
getData();

function out(){
      localStorage.removeItem("user");
      window.location="index.html";
}

function add(){
    room_name =  document.getElementById("room").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}


function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}