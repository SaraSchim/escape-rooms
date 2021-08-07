import React from 'react';
import error from '../images/error.jpg';
import '../css/error.css';

export default function Error(params) {

    return (
        <div className="error-page">
            <img src={error} className="error-img" />
        </div>
    )
}