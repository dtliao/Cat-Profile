import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className='dib br3 pa3 ma2 grow bw2 shadow-5' style={{backgroundColor: '#f2d9e5'}}>
			<img alt='cats' src={`https://robohash.org/set_set4/${id}?200x200`}/>
			<div>
				<h2 style={{color: "#29293d"}}>{name}</h2>
				<p style={{color: "#29293d"}}>{email}</p>
			</div>
		</div>
	);
}

export default Card;


