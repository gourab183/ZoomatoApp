import React, { Component } from 'react'
import { Input, Menu,Segment } from 'semantic-ui-react'
import {Link} from 'react-router';

export default class NavBar extends Component {

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
          <Menu.Item name='login' as={Link} to='/login' />
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
