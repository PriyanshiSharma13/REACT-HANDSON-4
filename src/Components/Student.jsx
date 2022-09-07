import React from "react";

const Student = () => {
    return(
        <div className="studentPage">
            <div className="topS">
                <div className="left">
                    <span className="stuDetails">Student Details</span>
                </div>
                <div className="right">
                    <button className="btn">Add New Student</button>
                </div>
            </div>
            <div className="bottomS">
                <table className="tableBox">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Course</th>
                            <th scope="col">Batch</th>
                            <th scope="col">Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Priyanshi</th>
                            <td>24</td>
                            <td>MERN</td>
                            <td>May</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th scope="row">John</th>
                            <td>25</td>
                            <td>MERN</td>
                            <td>June</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th scope="row">Doe</th>
                            <td>26</td>
                            <td>MERN</td>
                            <td>July</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th scope="row">Tina</th>
                            <td>23</td>
                            <td>MERN</td>
                            <td>April</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Student;