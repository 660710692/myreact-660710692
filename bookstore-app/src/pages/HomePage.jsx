import { Link } from "react-router-dom";
import React from "react";
import './style/HomePage.css';

const HomePage = () => {
    return (
        <div>
        <h1>Welcome to Homepage!</h1>
        <Link to="/books">Go to List</Link>
    </div>
    );
}

export default HomePage;