var firebaseConfig = {
      apiKey: "AIzaSyBodxXdErDx4a5Q3uyUu6EczqZZ4-WKwEk",
      authDomain: "kwitter-23f1f.firebaseapp.com",
      databaseURL: "https://kwitter-23f1f-default-rtdb.firebaseio.com",
      projectId: "kwitter-23f1f",
      storageBucket: "kwitter-23f1f.appspot.com",
      messagingSenderId: "296420491859",
      appId: "1:296420491859:web:a669b601b6d18d1a42fca6"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE




  
  function addRoom()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "I am adding the user"
      });
  }





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
