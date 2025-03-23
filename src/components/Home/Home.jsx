import React from "react";
import '../../../public/logo-cpp.png';
import './home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container text-center my-5" id="hero">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-7 d-flex align-items-center text-md-start">
            <div>
              <h1 className="display-4 fw-bold">Master C++ with Ease!</h1>
              <p className="lead">
                Explore tutorials, references, and expert articles to become a C++ pro with <span>CPlusPlus.com</span>
              </p>
              <Link className="btn btn-primary btn-lg" id="start-learn" to="/tutorials">
                Start Learning
              </Link>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <img src="logo-cpp.png" alt="C++ Coding" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/*------------- Features section ------------- */}

      <div className="small-heading">
        <h2 className="text-center mb-1">Why Learn C++ with Us?</h2>
      </div>
      <div className="container my-5" id="feature-section">
        <div className="row text-center learn">
          <div className="col-md-4">
            <i className="bi bi-code-slash fs-1 text-primary"></i>
            <h4>Comprehensive Tutorials</h4>
            <p>Step-by-step lessons from basics to advanced topics.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-lightning fs-1 text-danger"></i>
            <h4>Fast & Interactive</h4>
            <p>Engaging content with real-time examples.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-chat-dots fs-1 text-success"></i>
            <h4>Community Support</h4>
            <p>Join discussions and get help from experts.</p>
          </div>
        </div>
      </div>

      {/*------------- Tutorials section ------------- */}

      <div className="small-heading">
        <h2 className="text-center mb-1">Explore C++ Tutorials</h2>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100 d-flex flex-column justify-content-center text-center">
              <div className="card-body">
                <h5 className="card-title">C++ Tutorials</h5>
                <p className="card-text">Step-by-step guides to master C++ from basics to advanced.</p>
                <Link to="/tutorials" className="btn btn-primary mt-auto">Tutorials</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 d-flex flex-column justify-content-center text-center">
              <div className="card-body">
                <h5 className="card-title">C++ References</h5>
                <p className="card-text">Detailed documentation on C++ syntax, functions, and libraries.</p>
                <Link to="/references" className="btn btn-primary mt-auto">References</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 d-flex flex-column justify-content-center text-center">
              <div className="card-body">
                <h5 className="card-title">C++ Articles</h5>
                <p className="card-text">Expert insights, best practices, and in-depth analysis of C++ topics.</p>
                <Link to="/articles" className="btn btn-primary mt-auto">Articles</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;