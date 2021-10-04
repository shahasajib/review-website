import React from 'react';
import logo from "../../image/404-error-page.jpg"

const Error = () => {
    return (
        <div className="col-sm-12 text-center">
            <h2 className="text-danger fs-1 text-center">Oops </h2>
            <img className="w-25" src={logo} alt="" />
            <p>Please Try To Again</p>
        </div>
    );
};

export default Error;