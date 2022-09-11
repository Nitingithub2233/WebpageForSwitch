// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXVD4KKbiAXKGXJlDHBkV8PNfPs6DKk2o",
    authDomain: "esp32firebase-c7abd.firebaseapp.com",
    databaseURL: "https://esp32firebase-c7abd-default-rtdb.firebaseio.com",
    projectId: "esp32firebase-c7abd",
    storageBucket: "esp32firebase-c7abd.appspot.com",
    messagingSenderId: "1008662675123",
    appId: "1:1008662675123:web:62a712614ca8c56c16fac6",
    measurementId: "G-KQFNP0C1EH"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
    var LED_STATUS;
    var LED_STATUS2;
    var LED_STATUS3;
    var LED_STATUS4;
    database.ref().on("value", function(snap){
        LED_STATUS = snap.val().LED_STATUS;
        LED_STATUS2 = snap.val().LED_STATUS2;
        LED_STATUS3 = snap.val().LED_STATUS3;
        LED_STATUS4 = snap.val().LED_STATUS4;
        if(LED_STATUS == "1"){
            document.getElementById("unact").style.display = "none";
            document.getElementById("act").style.display = "block";
        } else {
            document.getElementById("unact").style.display = "block";
            document.getElementById("act").style.display = "none";
        }
        if(LED_STATUS2 == "1"){
            document.getElementById("unact1").style.display = "none";
            document.getElementById("act1").style.display = "block";
        } else {
            document.getElementById("unact1").style.display = "block";
            document.getElementById("act1").style.display = "none";
        }
        if(LED_STATUS3 == "1"){
            document.getElementById("unact2").style.display = "none";
            document.getElementById("act2").style.display = "block";
        } else {
            document.getElementById("unact2").style.display = "block";
            document.getElementById("act2").style.display = "none";
        }
        if(LED_STATUS4 == "1"){
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";
        } else {
            document.getElementById("unact3").style.display = "block";
            document.getElementById("act3").style.display = "none";
        }
    });

    $(".toggle-btn").click(function(){
        var firebaseRef = firebase.database().ref().child("LED_STATUS");
        if(LED_STATUS == "1"){
            firebaseRef.set("0");
            LED_STATUS = "0";
        } else {
            firebaseRef.set("1");
            LED_STATUS = "1";
        }
    })
    $(".toggle-btn1").click(function(){
        var firebaseRef = firebase.database().ref().child("LED_STATUS2");
        if(LED_STATUS2 == "1"){
            firebaseRef.set("0");
            LED_STATUS2 = "0";
        } else {
            firebaseRef.set("1");
            LED_STATUS2 = "1";
        }
    })
    $(".toggle-btn2").click(function(){
        var firebaseRef = firebase.database().ref().child("LED_STATUS3");
        if(LED_STATUS3 == "1"){
            firebaseRef.set("0");
            LED_STATUS3 = "0";
        } else {
            firebaseRef.set("1");
            LED_STATUS3 = "1";
        }
    })
    $(".toggle-btn3").click(function(){
        var firebaseRef = firebase.database().ref().child("LED_STATUS4");
        if(LED_STATUS4 == "1"){
            firebaseRef.set("0");
            LED_STATUS4 = "0";
        } else {
            firebaseRef.set("1");
            LED_STATUS4 = "1";
        }
    })
});