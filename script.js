const firebaseConfig = {
  apiKey: "AIzaSyCfeZBOE99Y32sMXjemqFEZeKB-tfY0xTg",
  authDomain: "portfolio-contact-form-9a820.firebaseapp.com",
  databaseURL: "https://portfolio-contact-form-9a820-default-rtdb.firebaseio.com",
  projectId: "portfolio-contact-form-9a820",
  storageBucket: "portfolio-contact-form-9a820.appspot.com",
  messagingSenderId: "161656441105",
  appId: "1:161656441105:web:998364044f438416fae4b0",
  measurementId: "G-RPNF66ZF52"
};


//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactformDB= firebase.database().ref('contactform');

document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();
  var name= getElementVal('name');
  var mobilenumber= getElementVal('mobilenumber');
  var emailid= getElementVal('emailid');
  var messagecont= getElementVal('messagecont');

  savemessage(name, mobilenumber, emailid, messagecont);

  //enable alert
  document.querySelector('.alert').style.display ='block';
  
  //remove alert
  setTimeout(() =>{
    document.querySelector('.alert').style.display ='none';
  }, 3000);

  //reset the form
  document.getElementById("contactform").reset();

}

const savemessage= (mane, mobilenumber, emailid, messagecont) =>{
  var newcontactform = contactformDB.push();

  newcontactform.set({
    name : name,
    mobilenumber : mobilenumber,
    emailid : emailid,
    messagecont : messagecont,


  })
}

const getElementVal = (id) =>{
  return document.getElementById(id).value;
};
