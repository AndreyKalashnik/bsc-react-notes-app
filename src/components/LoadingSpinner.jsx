import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => (
  <section className="section">
    <div className="container center">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </section>
);

export default LoadingSpinner;
