import {initializeApp} from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC-ZChgPXXTx30Ama59eHs_hESL9QbAuVs",
    authDomain: "changera-fe-task.firebaseapp.com",
    projectId: "changera-fe-task",
    storageBucket: "changera-fe-task.appspot.com",
    messagingSenderId: "487861618425",
    appId: "1:487861618425:web:52c1b84402a88eb7c50428",
    measurementId: "G-8F3DQD9GJC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  export default auth;