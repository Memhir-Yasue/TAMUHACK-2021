import app from 'firebase/app'

// <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js"></script>

//  // <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-analytics.js"></script>

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBl36mNJtRvH1rBP9OJ28Ex5DLFwKWk-T0",
    authDomain: "vaccinetrust-e6cfc.firebaseapp.com",
    projectId: "vaccinetrust-e6cfc",
    storageBucket: "vaccinetrust-e6cfc.appspot.com",
    messagingSenderId: "1060240975738",
    appId: "1:1060240975738:web:921e3da099e85295b9d8c3",
    measurementId: "G-NT82YZEKPE"
  };

  // Create Firebase class
  class Firebase {
      constructor() {
          app.initializeApp(firebaseConfig)
        //   app.analytics();
      }
  }

  export default Firebase