import React, { useState } from "react";
import axios from "axios";
import Map from "./Map";

const SignupForm = () => {
  return (
    <form>
      <div>
        <Map />
        <label>Username:</label>
      </div>
      <div>
        <label>Password:</label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
