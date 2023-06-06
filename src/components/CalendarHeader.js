import dayjs from "dayjs";
import React, { useContext,useState } from "react";
// import logo from "../assets/logo.png";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import Contex from "../contex/Contex";
export default function CalendarHeader() {
  const [token, setToken] = useState('')
  const { monthIndex, setMonthIndex } = useContext(Contex);
  console.log("MOnth index inside the calendar header:", monthIndex)
  console.log("MOnth index inside the calendar header: types is", typeof(monthIndex))
  console.log("monthIndex",monthIndex)
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleLogout() {
    setToken('')
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">
        Calendar
      </h1>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(),monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
      <span>
        {/* {token ?<button className="mr-4 text-red-500 border px-8 p-2 rounded-full flex items-center shadow-md hover:shadow-2xl font-bold" onClick={handleLogout}>Logout</button>: <LoginSocialGoogle className="mr-12"
        client_id={"925534215061-lhqcqsnmr3semr04cf300ocvnu85fc1r.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
          console.log("data is:",data )
          setToken(data.access_token)
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
          <GoogleLoginButton />
      </LoginSocialGoogle> }
      */}
      </span>
    </header>
  );
}