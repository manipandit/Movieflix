import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/store/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleSignout = () => {
    try {
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          navigate("/error");
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 flex items-center justify-between w-full px-8 py-2 bg-gradient-to-b from-black">
      <img src={LOGO} alt="logo" className="w-44" />
      {user && (
        <div className="flex items-center gap-x-3">
          <img
            src={user ? user?.photoURL : USER_ICON}
            alt="userIcon"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="text-xs font-semibold text-white">
              {user.displayName}
            </div>
            <button
              className="font-medium text-white underline "
              onClick={handleSignout}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
