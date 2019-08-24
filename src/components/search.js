import React from 'react';

const SearchBox = ({searchfield,searchchange}) =>{
    return(
        <div className='pa2'>
        <input 
            className='bg-lightest-blue dib br3 ma2 grow bw2 shadow-5'
            type='search'
            placeholder='search friends'
            onChange={searchchange}
        />
        </div>
    );
}
export default SearchBox;