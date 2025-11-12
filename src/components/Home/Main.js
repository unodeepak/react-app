import { useState } from "react";

const Main = (props) => {
  const count = props.count;

  return (
    /* JSX => Javascript + XML(HMTL) */
    <>
      <h1>Main Component props value is : {count}</h1>
    </>
  );
};

export default Main;
