import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleSignout = () => {
    try {
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          navigate("/error");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="absolute z-10 flex items-center justify-between w-full px-8 py-2 bg-gradient-to-b from-black">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
      {user && (
        <div className="flex items-center gap-x-3">
          <img
            src={
              user
                ? user?.photoURL
                : "https://avatars.githubusercontent.com/u/110151059?v=4"
            }
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
