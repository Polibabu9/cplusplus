import React from 'react'

function Forum() {
  return (
    <div>
        <div className="container my-5">
            <h2 className="text-center fw-bold">Forum</h2>
            <ul className="list-group mt-3">
                <li className="list-group-item">
                <strong>Beginners:</strong> Getter for enum member returns a copy of enum?
                </li>
                <li className="list-group-item">
                <strong>Windows Programming:</strong> Formatted Console Log with Datetime
                </li>
                <li className="list-group-item">
                <strong>UNIX/Linux Programming:</strong> tzdb: cannot locate zone
                </li>
                <li className="list-group-item">
                <strong>General C++ Programming:</strong> Use C++ 20 with Embarcadero
                </li>
                <li className="list-group-item">
                <strong>Lounge:</strong> I wrote a cron job!
                </li>
                <li className="list-group-item">
                <strong>Jobs:</strong> Jobs
                </li>
                <li className="list-group-item">
                <strong>Articles:</strong> How to Make a Game 2
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Forum
