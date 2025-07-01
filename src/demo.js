import React from "react";
import "./styles/main.scss";

export default function Demo() {
  return (
    <div className="min-vh-100 bg-light">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            React Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 fw-bold text-dark mb-4">
              Simple & Clean UI
            </h1>
            <p className="lead text-muted mb-4">
              A beautiful, responsive interface built with React and Bootstrap
              5. Clean design with modern components and smooth interactions.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg px-4">
                Get Started
              </button>
              <button className="btn btn-outline-secondary btn-lg px-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
