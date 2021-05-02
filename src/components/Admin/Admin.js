import React from 'react';
import AdminDashBoard from './AdminDashBoard/AdminDashBoard';

const Admin = () => {
    return (
        <div>
        <div className="col-md-3 m-3">
        {/* <AdminNavbar></AdminNavbar> */}
        <AdminDashBoard></AdminDashBoard>
    </div>

    <div className="col-md-3 m-5 mt-5 card2">
    
                    {/* <div class="card-body">
                        <h5 class="card-title">Teacher Name: {
                            data.teachersName
                        }</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Course name: {
                            data.name
                        }</h6>
                    </div>
         */}
        </div>
    </div>
    );
};

export default Admin;