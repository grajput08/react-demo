import React from "react";
import "./styles/main.scss";

export default function App() {
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

      <section className="p-2">
        <div>Hello</div>

      </section>

    </div>
  );
}
