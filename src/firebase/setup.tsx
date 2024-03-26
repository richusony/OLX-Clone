import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCgGXAPahb7S3t_5YjYOoy-HD9-YvI3X1Q",
  authDomain: "hft-next-chat-admin-user.firebaseapp.com",
  projectId: "hft-next-chat-admin-user",
  storageBucket: "hft-next-chat-admin-user.appspot.com",
  messagingSenderId: "912218860080",
  appId: "1:912218860080:web:8412e86cc8d462e8661bf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();