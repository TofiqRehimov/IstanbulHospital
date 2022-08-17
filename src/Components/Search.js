import React, {useState} from 'react';
import "./Search.css";

const Search = (props) => {


    return (
        <div className='container mt-2'>
            <div className="ui transparent icon input searchInput">
                <input type="text" placeholder="Search..." className='' onChange={(e)=>e.console.log('nese')}/>
                    <i className="search icon"></i>
            </div>
        </div>
    );
};

export default Search;