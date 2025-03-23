import React from 'react'
function Tutorial() {
  return (
    <>
      <div className="container my-5" id="Tut-container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">C++ Language Tutorial</h1>
          <p className="lead">
            Learn C++ from its basics or introduce yourself to new language features with The C++ Language Tutorial.
          </p>
          <p className="lead">
            A fast-paced self-teaching tutorial covering the modern concepts of this programming language.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Supplemental Papers</h5>
                <p className="card-text">Explore additional resources to enhance your C++ knowledge.</p>
                <a href="#" className="btn btn-primary">View Papers</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">ASCII Codes</h5>
                <p className="card-text">Understand ASCII encoding and its role in C++ programming.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Numerical Bases</h5>
                <p className="card-text">Learn about binary, octal, and hexadecimal number systems.</p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Boolean Operations</h5>
                <p className="card-text">Master logical operations and Boolean algebra in C++.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tutorial
