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
    
    user_name=localStorage.getItem("user");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
          });
    }

    function logout(){
      localStorage.removeItem("user");
      window.location="kwitter_room.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";

}