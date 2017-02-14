import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Route, Router} from 'react-router';
import NavBar from './components/NavBar';
import DisplayComponent from './components/sample/displayComponent.jsx';
import Home from './components/clientapp.jsx';
import Login from './components/sample/login.jsx'
// let {browserHistory, Route, Router, IndexRoute} = require('react-router');

class MainComp extends React.Component{
  render(){
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
}
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path = "/" component={Login}/>
    <Route component={MainComp}>   
    <Route path="/home" component={Home}/>
    <Route path="/Favourite" component={DisplayComponent}/>
    </Route>
  </Router>,document.getElementById('mountapp'));
MainComp.propTypes= {
    children: React.PropTypes.object.isRequired
  }
