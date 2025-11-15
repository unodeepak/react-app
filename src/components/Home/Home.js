import { useEffect, useState } from "react";
import Main from "./Main";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Rating, Typography } from "@mui/material";

const Home = () => {
  const [count1, setCount1] = useState(200);
  const [count, setCount] = useState(200);
  const navigate = useNavigate();

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
      <Typography variant="h2">Home Component Count: {count}</Typography>
      <Typography variant="h2">Value of Count1 {count1}</Typography>

      <Button variant="contained" color="success" onClick={() => increase()}>increase count</Button>
      <Button variant="contained" color="warning" onClick={() => increase1()}>increase the count1</Button>
      <Button variant="contained" color="error" onClick={() => navigate("/main", { state: { count } })}>
        Navigate to main
      </Button>
      <Button variant="contained" color="error" onClick={() => navigate("/dashboard")}>
        Dashboard
      </Button>
      <br />
      <Divider /><br />

      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

      {/* <Main count={count} /> */}
    </>
  );
};

export default Home;
