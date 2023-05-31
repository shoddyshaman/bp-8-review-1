import React from "react";

function MyButton(props) {
  function handleLogin() {
    props.setLogin(!props.isLoggedIn)
  }

  return (
    <>
      <button className="my-btn" onClick={handleLogin}>
        Log Me In
      </button>
    </>
  );
}

export default MyButton;
