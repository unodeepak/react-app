import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const count = props.count;
  const navigate = useNavigate();

  return (
    /* JSX => Javascript + XML(HMTL) */
    <>
      <h1>Main Component props value is : {count}</h1>

      <button onClick={() => navigate("/home")}>
        Navigate to Home
      </button>
    </>
  );
};

export default Main;
