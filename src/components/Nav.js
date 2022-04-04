import React from "react";
import { signout } from "../api";
export default function Nav() {
  return (
    <div className="navBar">
      <h5>Word-Play</h5>
      <div className="options" onClick={() => signout()}>
        Logout
      </div>
    </div>
  );
}
