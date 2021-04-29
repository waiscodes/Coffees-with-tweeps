import React from "react";
import { auth, twitterProvider } from "../fire";
import { Button } from "react-bootstrap";

const Signin = () => {
  return (
    <>
      <h1>Login</h1>
      <Button>Sign In With Twitter</Button>
    </>
  );
};

export default Signin;
