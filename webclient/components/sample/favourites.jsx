import React from 'react';
// import ReactDOM from 'react-dom';
import { Card } from 'semantic-ui-react';
import CreateCards from './createCards.jsx';

export default class Favourite extends React.Component {

	render() {
		console.log(this.props.obj);
		let z=this.props.favCard;
		let p=this.props.updateComment;
		let x = this.props.obj.map(function(obj){
			console.log(obj);
			return (
				<CreateCards image={obj.resPhoto} name={obj.resName} cuisine={obj.cuisine}
					location = {obj.resLoc} rating = {obj.rating} 
					comments ={obj.comments} id={obj._id} key={obj._id} fav="display" remove={z} comment={p}
				/>
			);
		});
		return (
			<div>
				<Card.Group itemsPerRow={2}>
					{x}
				</Card.Group>
			</div>
		);
	}
}
Favourite.propTypes= {
    obj: React.PropTypes.object.isRequired,
    favCard: React.PropTypes.func,
    updateComment: React.PropTypes.func
  }