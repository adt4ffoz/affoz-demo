import React from "react";
import { Button } from "../../components/common/index";

export default function CreateUser() {
  return (
    <div>
      <h1>Create user</h1>
      <Button
        title="Tiếp tục"
        handleClick={() => {
          console.log("hello world!!!!!");
        }}
      />
    </div>
  );
}
