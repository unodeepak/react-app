import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Main = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const { count } = location.state;

  return (
    /* JSX => Javascript + XML(HMTL) 
    - With the help of this, you can directly write the javascript code into a HTML tag.
    - JSX is combination of Javascript + XML
    - If you create any tag, in JSX then must be every tag should be closed. 

    */
    <>
      <h1>Main Component props value is : {count}</h1>

      <button onClick={() => navigate("/home")}>
        Navigate to Home
      </button>
    </>
  );
};

export default Main;
