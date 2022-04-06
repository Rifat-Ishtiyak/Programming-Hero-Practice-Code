import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        console.warn("logout success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>React Simple Firebase Authentication</h1>

      {
      user.uid ? (
        <button onClick={handleSignOut}> signOut</button>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )
      }

      {/* <button onClick={handleSignIn}>Sign in with Google</button>
      <button onClick={handleSignOut}> signOut</button> */}

      <div>
        <p> User Name : {user.displayName} </p>
        <p> Email : {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
}

export default App;
