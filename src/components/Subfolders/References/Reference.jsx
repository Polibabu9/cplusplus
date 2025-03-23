import React from 'react'

function Reference() {
  return (
    <div>
      <div className="container my-5" id='Ref-container'>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">C++ Standard Library Reference</h1>
          <p className="lead">Explore various C++ libraries and their functionalities.</p>
        </div>
        
        <section>
          <h2>Standard C++ Library Reference</h2>
          <p>The elements of the C++ Standard Library provide a wide range of functions, including general utilities, input/output, and memory management.</p>
          
          <h3>C Library</h3>
          <p>The following C library headers are available in C++:</p>
          <ul>
            <li>&lt;cassert&gt; - Diagnostics Library</li>
            <li>&lt;cctype&gt; - Character handling functions</li>
            <li>&lt;cerrno&gt; - Error handling</li>
            <li>&lt;cmath&gt; - Mathematical functions</li>
            <li>&lt;cstdio&gt; - Input/Output operations</li>
            <li>&lt;cstdlib&gt; - General Utilities</li>
            <li>&lt;cstring&gt; - String handling</li>
            <li>&lt;ctime&gt; - Date and time utilities</li>
          </ul>
        </section>

        <section>
          <h3>Containers</h3>
          <p>Data structures available in the C++ Standard Library:</p>
          <ul>
            <li>&lt;vector&gt; - Dynamic arrays</li>
            <li>&lt;list&gt; - Doubly-linked list</li>
            <li>&lt;map&gt; - Associative array</li>
            <li>&lt;set&gt; - Unique sorted elements</li>
            <li>&lt;stack&gt; - LIFO stack</li>
            <li>&lt;queue&gt; - FIFO queue</li>
          </ul>
        </section>

        <section>
          <h3>Input/Output Stream Library</h3>
          <p>Functions to handle input and output:</p>
          <ul>
            <li>&lt;iostream&gt; - Standard I/O streams</li>
            <li>&lt;fstream&gt; - File handling</li>
            <li>&lt;sstream&gt; - String streams</li>
          </ul>
        </section>
        
        <section>
          <h3>Miscellaneous Libraries</h3>
          <p>Other useful components:</p>
          <ul>
            <li>&lt;algorithm&gt; - Algorithms</li>
            <li>&lt;functional&gt; - Function objects</li>
            <li>&lt;memory&gt; - Smart pointers</li>
            <li>&lt;thread&gt; - Multithreading</li>
            <li>&lt;regex&gt; - Regular expressions</li>
            <li>&lt;random&gt; - Random number generation</li>
          </ul>
        </section>
     </div>
    </div>
  )
}

export default Reference