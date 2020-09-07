import React, { Fragment } from 'react'

function SearchBar(props) {
    return(
        <Fragment>
        <div className="searchbar-wrap">
            <i className="fas fa-search"></i>
            <input className="searchbar"type="text" placeholder="חיפוש תחנת דלק"/>
            
        </div>

        </Fragment>
    );
}

export default SearchBar;