import React from 'react';

const Card = ({id,name,email}) => {
	return(
		<div className='bg-light-yellow dib br3 ma2 grow bw2 shadow-5'>
			<img alt ='phot' src={`https://robohash.org/${name}`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;