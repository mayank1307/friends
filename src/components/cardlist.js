import React from 'react';
import Card from './card';
const Cardlist = ({ fans }) => {
	const Arrayc = fans.map((users,i) => {
		return <Card key={i} id={fans[i].id} name={fans[i].name} email={fans[i].email}/>
	})
	return(
		<div>
			{Arrayc}
		</div>
	);
}
export default Cardlist;