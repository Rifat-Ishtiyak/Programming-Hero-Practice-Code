import "./App.css";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleSignIn = ()=>{
    signInWithPopup(auth, provider)
      .then((result)=>{
        const user = result.user;
        console.log(user);
      })
      .catch( (error)=>{
        console.log(error);
      })
  }

  return (
    <div className="App">
      <h1>React Simple Firebase Authentication</h1>

      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default App;
