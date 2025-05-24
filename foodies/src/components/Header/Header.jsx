import React from "react";

function Header() {
  return (
    <div className="container bg-light text-dark p-4  mt-2 rounded ">
      <div className="container-fluid text-center py-5">
        <h1 className="display-4 fw-bold">Explore Food, Order Happiness!</h1>
        <p className="lead ">
          Your favorite meals delivered fresh at your doorstep.
        </p>
        <button type="button" class="btn btn-primary btn-lg">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Header;
