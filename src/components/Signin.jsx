import React, { useState } from "react";
import { auth, twitterProvider } from "../fire";
import { Button, Card } from "react-bootstrap";

const Signin = () => {
  const [result, setResult] = useState([]);

  const signInWithTwitter = () => {
    auth
      .signInWithPopup(twitterProvider)
      .then((result) => {
        setResult(result);
      })
      .catch((error) => {
        console.log("yikes");
      });
  };

  return (
    <>
      <h1>Login</h1>
      <Button onClick={signInWithTwitter}>Sign In With Twitter</Button>
      <div>
        <img src={result?.user?.photoURL} alt='' />
        <p>{result?.user?.displayName}</p>
        <p>{result?.additionalUserInfo?.username}</p>
      </div>
    </>
  );
};

export default Signin;
