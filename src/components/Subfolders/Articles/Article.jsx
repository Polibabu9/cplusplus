import React from 'react'
import './article.css'

const Article = () => {
  const categories = [
    { title: "Algorithms", description: "Learn about sorting, searching, and other algorithmic techniques in C++." },
    { title: "C++ 11", description: "Discover new features introduced in C++11 and how to use them effectively." },
    { title: "Graphics and Multimedia", description: "Explore graphics programming and multimedia handling in C++." },
    { title: "How-To", description: "Step-by-step guides to solve common C++ problems." },
    { title: "Language Features", description: "Deep dive into core and modern C++ features." },
    { title: "Unix/Linux Programming", description: "C++ development tips for Unix and Linux environments." },
    { title: "Source Code", description: "Access useful C++ source code snippets and examples." },
    { title: "Standard Library", description: "Master the C++ Standard Library with practical examples." },
    { title: "Tips and Tricks", description: "Handy tricks to write better and more efficient C++ code." },
    { title: "Tools and Libraries", description: "Explore popular C++ tools and third-party libraries." },
    { title: "Visual C++", description: "Learn about Visual Studio and Microsoft’s C++ development tools." },
    { title: "Windows API", description: "Develop applications using the Windows API with C++." },
  ];

  return (
    <div className="container my-5" id="myArticles-container">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">C++ Articles</h1>
        <p className="lead">Explore in-depth articles covering various aspects of C++ programming.</p>
      </div>
      <div className="row">

        {categories.map((category, index) => (
          <div className="col-md-4" key={index}>
            <div className="card text-center mb-4">
              <div className="card-body">
                <h5 className="card-title">{category.title}</h5>
                <p className="card-text">{category.description}</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Article
