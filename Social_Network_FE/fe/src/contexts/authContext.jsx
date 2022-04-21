import React from "react";

export const token = localStorage.getItem("token") || "";

const tokenContext = React.createContext(token);

export default tokenContext;
