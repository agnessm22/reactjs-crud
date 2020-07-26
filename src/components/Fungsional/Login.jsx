import React, {useState, PureComponent} from 'react';
import { Link } from 'react-router-dom';


class Login extends PureComponent {
    render() {

    return (
        <div style={{marginTop: "200px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text"  placeholder="Username" className="form-control"  name="username"  />
                                    <username name ="username" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" name="username" />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                    <button className="btn btn-primary" color="danger" type="button" Link to="/home/">Login</button>
                                    </div>

                                    <div className="col-md-6 text-right">
                                    <Link to="/tampil/admin/tambah">
                                    Halaman Daftar
                                    </Link>

                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
  };
}

export default Login

