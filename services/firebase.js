// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAMUSeWMv2PO1jh9Bpl7Vfisk9mY1ei9y4",
  authDomain: "movieapp-50841.firebaseapp.com",
  projectId: "movieapp-50841",
  storageBucket: "movieapp-50841.appspot.com",
  messagingSenderId: "912135657145",
  appId: "1:912135657145:web:6089cb0fc20119fc08ed68",
  measurementId: "G-DRLE16VS6Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


const register = ({email, password}, callback = null) => {
  console.log('====================================');
  console.log("register", email, password);
  console.log('====================================');
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log('====================================');
    console.log(user);
    console.log('====================================');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
    alert(errorMessage)
  });
}

const login = async ({email, password}) => {
  
  
  try {
    const authentication = await firebase.auth().signInWithEmailAndPassword(email, password)  
    console.log(authentication);
    return {
      isAuth: true
    }
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return {
      isAuth: false,
      message: errorMessage
    }
  }
  
}