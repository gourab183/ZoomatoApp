import React from 'react';
// import ReactDom from 'react-dom';
import CreateCards from './createCards.jsx';
import { Card } from 'semantic-ui-react';

export default class Child1 extends React.Component {
	render() {
		let x = this.props.Obj;
		let listItems = x.map(function(Obj) {
			return(
				<CreateCards image={Obj.restaurant.featured_image} name={Obj.restaurant.name}
				cuisine={Obj.restaurant.cuisines}
					location = {Obj.restaurant.location.address} 
					rating={Obj.restaurant.user_rating.aggregate_rating} 
					id ={Obj.restaurant.R.res_id} fav="add"
				/>
			)
		});
	return (
		<div>
			<Card.Group itemsPerRow={3}>
				{listItems}  
			</Card.Group>
		</div>
		)
	}
}
Child1.propTypes= {
    Obj: React.PropTypes.array.isRequired
}