import React from "react";

type Person = {
  name?: string;
  age?: number;
  location?: string;
  label?: string;
  children?: React.ReactNode;
  propAccess?: "destructuring" | "default";
};

export default Person;
