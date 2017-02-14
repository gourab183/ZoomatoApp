import React from 'react';
// import ReactDom from 'react-dom';
import { Card,Image} from 'semantic-ui-react';
// import AddButton from '../addbutton.jsx';
import Button1 from '../Button1.jsx';
import Button2 from '../Button2.jsx';
// import padding from '../../style'

class Child2 extends React.Component
{
	constructor()
	{
		super();
    this.state={comments:''}
	}
  func(comments)
  {
    this.setState({comments:comments})
  }
	render()
	{
      let z=this.props.remove;
      let p=this.props.comment;
    let button="";
    if(this.props.fav === "add")
    {
      // When [1, {declaration: true, assignment: false, return: true}]
      button = (
      <Button1 image={this.props.image} name={this.props.name} 
      location={this.props.location}
      rating={this.props.rating} cuisine={this.props.cuisine}
      id={this.props.id} comments={this.state.comments}/>
      )
    }
    else
    {
      
      button=<Button2 id={this.props.id} comment={p} k={z} comments={this.state.comments}/>
    }
		return(
			
      <Card>
      	<Image style = {{height : 250+'px'}} src={this.props.image}/>
      	<Card.Content>
      		<Card.Header id="item">{this.props.name}</Card.Header>
      		<Card.Meta id="item">
            <span id="span"><b>Cuisines:</b></span>
            {this.props.cuisine}
          </Card.Meta>
      		<Card.Description id="item">
            <span id="span">Address:</span>
            {this.props.location}
          </Card.Description>
          <Card.Description id="item">
            <span id="span">Rating:</span>{this.props.rating}/5
          </Card.Description>
          <Card.Description id="item">
            <span id="span">Comments:</span>
            {this.props.comments}
          </Card.Description>
      	</Card.Content>
      	<Card.Content extra>
          {button}
      	</Card.Content>

      		</Card>
			);
	}
}
Child2.propTypes= {
    image: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number.isRequired,
    cuisine: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    comments: React.PropTypes.string.isRequired,
    comment: React.PropTypes.func,
    fav: React.PropTypes.string.isRequired,
    remove: React.PropTypes.func.isRequired
  }
export default Child2;
// ReactDom.render(
// 	<MainComponent/>,document.getElementById('mountapp')
// 	);