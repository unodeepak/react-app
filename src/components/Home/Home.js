import { useState } from "react";

const Home = () => {
  let count = 100;
  
  const [count1, setCount1] = useState(200);

  const increase = () => {
    const value = count + 1;
    count = value;
    console.log('Value is : ', value);
  };

  const increase1 = () => {
    const value = count1 + 1;
    setCount1(value);
    console.log('========> Value is : <<<======', value);
  };

  return (
    /* JSX => Javascript + XML(HMTL) */
    <>
      <h1>Home Component {count}</h1>
      <h1>Value of Count1 {count1}</h1>

      <button onClick={() => increase()}>increase count</button>
      <button onClick={() => increase1()}>increase the count1</button>
    </>
  );
};

export default Home;
