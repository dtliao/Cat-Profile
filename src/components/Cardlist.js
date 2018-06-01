import React from 'react';
import Card from './Card';

const Cardlist = ({ cats }) => {
	const x = cats.map(cat =>{
		return(
			<Card 
				id={cat.id} 
				name={cat.name} 
				email={cat.email}
			/>
		)
	})
	
	return (
		<div>
			{x}
		</div>
	);
}

export default Cardlist;