import { useEffect, useState } from "react";
import Main from "./Main";

const Home = () => {
  //   let count = 100;

  const [count1, setCount1] = useState(200);
  const [count, setCount] = useState(200);

  const increase = () => {
    const value = count + 1;
    setCount(value);
    // console.log('Value is : ', value);
  };

  const increase1 = () => {
    const value = count1 + 1;
    setCount1(value);
    // console.log('========> Value is : <<<======', value);
  };

  /* It will be call every time, when your DOM is render. */
  // useEffect(() => { 1%
  //   console.log("Current value is : ", { count, count1 });
  // });

  /* It will be call only first Time when our component is loaded.  */
  //   useEffect(() => { 99.99%
  //     console.log("======> Current value is <======= ", { count, count1 });
  //   }, []);

  useEffect(() => {
    // 90%
    console.log(">>>>>>>> Current value is <<<<<< ", { count, count1 });
  }, [count]);

  return (
    /* JSX => Javascript + XML(HMTL) */
    <>
      <h1>Home Component Count: {count}</h1>
      <h1>Value of Count1 {count1}</h1>

      <button onClick={() => increase()}>increase count</button>
      <button onClick={() => increase1()}>increase the count1</button>
      <Main count={count} />
    </>
  );
};

export default Home;
