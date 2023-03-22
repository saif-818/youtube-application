import React, {useState,useEffect} from 'react';
import App from './App';

const SearchBar = (props) => {
    const [term,setTerm] = useState('');
    const handleSearchInput = e => {
        setTerm(e.target.value);
    };
    const onFormSubmit = e => {
        e.preventDefault();
        props.onTermSubmit(term);
    }
    return(
       <div className='search-bar ui segment'>
           <form onSubmit={onFormSubmit} className='ui form'>
               <div className="field">
                   <label> Video Search </label>
                   <input
                    type='text'
                    value={term}
                    onChange={handleSearchInput}
                   />
               </div>
           </form>   
       </div>
    );
};
export default SearchBar;