import React from 'react';
import {Link} from 'react-router-dom';

const AllLinks=()=>{
    return (
        <div> 
            <nav class="navbar navbar-expand-lg navbar-light bg-primary" >
            <a class="navbar-brand" href="#">CRICKET</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">Home</a>
            <a class="nav-item nav-link active" href="/about">About</a>
            <a class="nav-item nav-link active" href="/contact">Contact</a>
            
            </div>
            </div>
            </nav>           
        </div>
    );
}

export default AllLinks;