import React from 'react';
// import ReactDOM from 'react-dom';
// import { Card } from 'semantic-ui-react';
import Favoroute from './favourites.jsx';

export default class DisplayComponent extends React.Component {
	constructor () {
		super();
		this.state = {
      cards : []
    };

	}

   componentDidMount() {
    this.getFav();
   }
  getFav() {
    console.log("gggggggg");
    $.ajax({
      url:'http://localhost:8080/resturant/get',
      type:'GET',
      success: function(data) {
        console.log('Successfully got JSON Zomato'+JSON.stringify(data));
        console.log(data);
        this.setState({cards: data.resturant});
      }.bind(this),
      error: function(err) {
        console.log('error occurred on AJAX');
        console.log(err);
      }
    });
    // this.setState({refresh: this.context.refresh});
  }
  removeFavCard(id){
        let favArray = this.state.cards;
    let arr=[];
    console.log(JSON.stringify(favArray));
    for(let obj of favArray){
      if(obj._id!==id){
        arr.push(obj);
      }
    }
    this.setState({cards : arr});
    }
    updateComment(id,comments){
    let favArray = this.state.cards;
    console.log(JSON.stringify(favArray));
    for(let obj of favArray){
      if(obj._id===id){
        obj.comments = comments;
      }
    }
    this.setState({cards : favArray});
    }


  render() {
    console.log(this.state.refresh)
  	return (
  		<Favoroute obj={this.state.cards} 
      favCard={this.removeFavCard.bind(this)} updateComment={this.updateComment.bind(this)}/>
  	);
  }
}
// DisplayComponent.childContextTypes = {
//   refresh: React.PropTypes.bool
// };