import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };

  const handleAuth = () => {
    const name = nameRef?.current?.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const message = checkValidData(email, password);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // signup
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name,
            photoURL: "https://avatars.githubusercontent.com/u/110151059?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " - " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // signin

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="hero-img"
          className=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 w-[28%] mt-36 left-0 right-0 mx-auto bg-black bg-opacity-80 text-white rounded-md"
      >
        <h1 className="p-2 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="mt-5">
          {!isSignInForm && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="m-2 px-2 py-4 w-full bg-zinc-800 bg-opacity-60 border-[0.5px] border-gray-500 rounded-md"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email Address"
            className="m-2 px-2 py-4 w-full bg-zinc-800 bg-opacity-60 border-[0.5px] border-gray-500 rounded-md"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="m-2 px-2 py-4 w-full bg-zinc-800 bg-opacity-60 border-[0.5px] border-gray-500 border-opacity-60 rounded-md"
          />

          <p className="px-2 text-red-500">{errorMessage}</p>
          <button
            className="p-2 mx-2 mt-4 w-full bg-[#e50914] font-medium"
            onClick={handleAuth}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="p-2 mt-6">
            <span className="text-gray-300">
              {isSignInForm ? "New to Netflix?" : "Already have an account?"}
            </span>
            <span
              className="ml-2 font-medium cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
