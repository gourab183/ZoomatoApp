import React from 'react';
import { Button, Input } from 'semantic-ui-react';
// import DisplayComponent from './sample/DisplayComponent';
// import padding from '../style'
export default class Button2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ''
      // refresh: false
    }
  }

  // getChildContext() {
  //   return {refresh: this.state.refresh};
  // }

  updateComments(evt){
    this.setState({comments : evt.target.value});
  }
  update1() {
    $.ajax({
      url:'http://localhost:8080/resturant/update/'+this.props.id,
      type: 'put',
      data:{"comments": this.state.comments},
      success: function(data){
        this.props.comment(this.props.id,this.state.comments);
        console.log(this.props.id);
        console.log('Successfully updated' + data);
        // this.setState({refresh: true});
      }.bind(this),
      error: function(err){
        console.log('error occurred on AJAX');
        console.log(err);
      }
    });
  }
  delete1() {
      // alert(this.props.id);
    $.ajax({
      url:'http://localhost:8080/resturant/delete/'+this.props.id,
      type: 'delete',
      success:function(data) {
      
        this.props.k(this.props.id);
        // console.log(this.props.id);
        console.log('Successfully deleted' + data);
        // this.setState({refresh: true});
        // this.getChildContext();
      }.bind(this),
      error:function(err){
        console.log('error occurred on AJAX');
        console.log(err);
      }
    });
  }
  render(){
    console.log('Hi: ', this.state.comments);
    return (
      <div>
        <div>
          <Input fluid onChange={this.updateComments.bind(this)} 
                  placeholder ="Enter Comments"
          />
        </div>
        <div id="button">
          <Button.Group>
            <Button fluid onClick={this.update1.bind(this)}>Update</Button>
            <Button.Or />
            <Button positive fluid onClick={this.delete1.bind(this)}>Delete</Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

Button2.propTypes = {
  id: React.PropTypes.string,
  comments: React.PropTypes.string,
  comment: React.PropTypes.func,
  k: React.PropTypes.func
}

// Button2.childContextTypes = {
//   refresh: React.PropTypes.bool
// };