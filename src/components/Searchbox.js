import React from 'react';
import './Searchbox.css';

const Searchbox = ({ searchfield,SearchChange }) => {
	return(
		<div className='pa2'>
			<input 
				className='pa3 ba w-15 f3 helvetica'
				type='search' 
				placeholder= '&#xf002; search cats'
				onChange={SearchChange}
			/>
		</div>
	);
}

export default Searchbox