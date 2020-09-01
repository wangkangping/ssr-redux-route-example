import React from "react";
import { Link } from "react-router-dom";

function Navigetor() {
  return (
    <div>
      <Link to="/todos">Todos</Link>
      <Link to="/news">News</Link>
    </div>
  );
}

export default Navigetor;
