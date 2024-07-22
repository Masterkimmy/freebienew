import React, { useState } from "react";
import { FaOutdent } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const [Nav, setNav] = useState(false);
  function handleToogle() {
    setNav(!Nav);
  }

  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch(
          "https://freebiesbackend.onrender.com/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const userInfo = await response.json();
          setUserInfo(userInfo);
        } else {
          console.error("Failed to fetch profile");
          setUserInfo(null);
          localStorage.removeItem("token");
        }
      }
    };

    fetchProfile();
  }, [setUserInfo]);
  const username = userInfo?.user?.username;

  function logout() {
    setUserInfo(null);
    localStorage.removeItem("token");
  }

  return (
    <header className="flex justify-around flex-row w-[100%] items-center bg-[#fff] py-10">
      <a href="/" className=" text-[28px] font-bold text-[#51B73B]">
        Freebiestech
      </a>

      <nav className="flex justify-center">
        {username ? (
          <>
            <div className="flex gap-5 max-sm:hidden" >
              <h5>Welcome {username}</h5>
              <a href="/create">Create new post</a>
              <a href="/profile">Profile</a>
              <a
                onClick={logout}
                href="/"
                className="text-[red] cursor-pointer"
              >
                Logout ({username})
              </a>
            </div>

            <div
              className={`${
                Nav ? "top-[0%] left-2 " : "top-[-54%] left-2 "
              }  sm:hidden  absolute ransition-all duration-1000 mt-20 bg-blue text-black flex items-center bg-white justify-center h-[25vh] flex-col gap-[10px] w-full`}
            >
              <h5>Welcome {username}</h5>
              <a href="/create">Create new post</a>
              <a href="/profile">Profile</a>
              <a
                onClick={logout}
                href="/"
                className="text-[red] cursor-pointer"
              >
                Logout ({username})
              </a>
            </div>
          </>
        ) : (
          <>
            <ul className="flex gap-5 max-sm:hidden ">
              <li className="hover:text-[#51B73B]">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-[#51B73B]">
                <a href="/about">About</a>
              </li>
              <li className="hover:text-[#51B73B]">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="hover:text-[#51B73B]">
                {" "}
                <a href="/contact">Contact Us</a>
              </li>
            </ul>

            <div
              className={`${
                Nav ? "top-[5%] left-2 py-2" : "top-[-54%] left-2"
              }  md:hidden absolute ransition-all duration-1000 mt-20 bg-blue text-black flex items-center justify-center h-[25vh] flex-col gap-[10px] w-full bg-white`}
            >
              <ul className="flex gap-5 flex-col ">
                <li className="hover:text-[#51B73B]">
                  <a href="/">Home</a>
                </li>
                <li className="hover:text-[#51B73B]">
                  <a href="/about">About</a>
                </li>
                <li className="hover:text-[#51B73B]">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li className="hover:text-[#51B73B]">
                  {" "}
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </>
        )}

        <button onClick={handleToogle} className="hidden max-sm:flex">
          {" "}
          {Nav ? <IoMdClose /> : <FaOutdent />}{" "}
        </button>
      </nav>
    </header>
  );
}
