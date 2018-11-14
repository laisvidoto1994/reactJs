import React, { Component } from 'react';

//stateless functional component
const Navbar = (props) => {
    console.log("App - Navbar");
    return (
        <div>
            <ul>
                <li className="espacamento3 corCinza">
                    Contador:
                        <span className="espacamento3">
                        {props.totalCounters}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
