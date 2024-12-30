import React from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial">
        <p>"Amazing work!"</p>
        <span>- Client A</span>
      </div>
      <div className="testimonial">
        <p>"Outstanding performance."</p>
        <span>- Client B</span>
      </div>
    </div>
  );
}

export default Testimonials;
