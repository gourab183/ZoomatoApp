import React from 'react';
import { Button } from 'semantic-ui-react';

export default class Button1 extends React.Component {
  add() {
    $.ajax({
      url:'http://localhost:8080/resturant/add',
      type: 'POST',
      data: {"_id":this.props.id,"resPhoto":this.props.image,
      "resName":this.props.name,"resLoc":this.props.location,
      "rating":this.props.rating,"cuisine":this.props.cuisine,"res":"","comments":""},
      success: function(data) {
        console.log('Successfully got JSON from Zomato' + data);
      },
      error: function(err) {
        console.log('error occurred on AJAX');
        console.log(err);
      }
    })
  }

  render() {
    return (
      <Button primary fluid onClick={this.add.bind(this)}>Add</Button>
    )
  }
}
Button1.propTypes= {
    image: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number.isRequired,
    cuisine: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
  }