import React, { Component } from 'react'
import { Input, Menu,Segment,Button } from 'semantic-ui-react'
import {Link} from 'react-router';

export default class NavBar extends Component {
  // state = {
  //   activeItem:'home';
  // }
  logoutCall() {
  $.ajax({
    url:"http://localhost:8080/users/logout",
    type: 'GET',
    // datatype: 'JSON',
    // data:{username :this.state.username,password:this.state.password},
    success: function(res)
    {
      if (typeof res.redirect === 'string') {
      window.location.replace(window.location.protocol + "//" 
        + window.location.host + res.redirect);
  }
      console.log(res.responseText);
      // browserHistory.push('/');
    },
    error: function(err)
    {
      // alert("error occurred while logging out");
      console.log(err.responseText);
    }
  });
}

  render() {
    return ( 
    <Segment inverted>  
      <Menu fixed='top' inverted pointing secondary>
        <Menu.Item name='Home'as={Link} to='/home' />
        <Menu.Item name='Favourite' as={Link} to='/Favourite' />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Button onClick={this.logoutCall.bind(this)}>Logout</Button>
        </Menu.Menu>
      </Menu>
    </Segment>
    )
  }
}

module.exports=NavBar;



// var React = require('react');
// var {Link} = require('react-router');
// var NavBar = React.createClass({

// render:function(){
//   return(
//     <div className="container-fluid">
//     <ul className="nav navbar-nav">
//     <li><Link to="/home">Home</Link></li>
//     <li><Link to="/Favourite">Favourite</Link></li>
//     </ul>
//     </div>
//   );
// }
// });

// module.exports=NavBar;
