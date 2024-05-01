import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./Pages";

const App = () => {
  return (
    <div className=" w-screen h-screen ">
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
   
    
    </div>
  );
};

export default App;
