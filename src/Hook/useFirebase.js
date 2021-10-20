import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,updateProfile  } from "firebase/auth";

initializeAuthentication();
// common functionality here
const useFirebase = () => {
  const [name,setName] =useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState({});
  
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const handleFormSubmit = (e) => {
    e.preventDefault();
    //password regx
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
      setError("Passord must have one number,one uppercase and one lowercase character");
      return;
    }
    isRegister ? processLogin(email, password) : registerNewUser(email, password);
  };

  const handleNameBlur = (e) => {
    setName(e.target.value)

  }
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const toggleLogin = (e) => {
    setIsRegister(e.target.checked);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        verifyEmail();
        setUserName()

      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name})
    .then(() => {
      
    }).catch((error) => {
       
    });
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      
    });
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };
  

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })

      .catch((error) => {
        setError(error.message);
      });
  };
  
  // log out
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }

// manange currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user)
      } 
    });
  }, []);
  
//  return necessary property which will be call from other component
  return {
    user,
    error,
    handleFormSubmit,
    handleNameBlur,
    handleEmailBlur,
    handlePasswordBlur,
    handleResetPassword,
    toggleLogin,
    googleSignIn,
    handleLogOut
  };
};

export default useFirebase;
