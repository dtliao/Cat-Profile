import React from 'react';

const Searchbox = ({ searchfield,SearchChange }) => {
	return(
		<div className='pa2'>
			<input 
				className='pa3 ba w-20 fw5 f3 helvetica'
				type='search' 
				placeholder= 'search cats'
				onChange={SearchChange}
			/>
		</div>
	);
}

export default Searchbox