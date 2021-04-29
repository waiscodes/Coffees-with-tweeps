import React from "react";
import { auth, twitterProvider } from "../fire";
import { Button } from "react-bootstrap";

const Signin = () => {
  const signInWithTwitter = () => {
    auth
      .signInWithPopup(twitterProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("yikes");
      });
  };

  return (
    <>
      <h1>Login</h1>
      <Button onClick={signInWithTwitter}>Sign In With Twitter</Button>
    </>
  );
};

export default Signin;
