import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Route, Router, IndexRoute} from 'react-router';
import NavBar from './components/NavBar';
import DisplayComponent from './components/sample/displayComponent.jsx';
import Home from './components/clientapp.jsx';
import Login from './components/sample/login.jsx'

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
  <Router history={hashHistory}>
    <Route path = "/" component={MainComp}>   
    <IndexRoute component={Login}/>
    <Route path="/home" component={Home}/>
    <Route path="/Favourite" component={DisplayComponent}/>
    <Route path="/login" component={Login}/>
    </Route>
  </Router>,document.getElementById('mountapp'));
MainComp.propTypes= {
    children: React.PropTypes.object.isRequired
  }
