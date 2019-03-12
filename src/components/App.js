import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TalentsCreate from './talents/TalentsCreate';
import TalentsList from './talents/TalentsList';
import TalentsEdit from './talents/TalentsEdit';
import Header from "./Header";
import { connect } from "react-redux"

class App extends React.Component{
  render(){
    if(this.props.signedIn){

  return (
    <div className="ui container">
      <BrowserRouter>

        <div>
      <Header signIn={this.props.signedIn}  />
          
          <Route path="/" exact component={TalentsList} />
          <Route path="/talents/new" exact component={TalentsCreate} />
          <Route path="/talents/edit" exact component={TalentsEdit} />
        </div>
      </BrowserRouter>
    </div>
  );
    }else{

  return (
    <div className="ui container">
      <BrowserRouter>

        <div>
      <Header signIn={this.props.signedIn} />
          
      <div class="ui message">
  <p>You must login first.</p>
</div>
        </div>
      </BrowserRouter>
    </div>
  );
  }
};
}

export default connect(state => ({signedIn: state.auth.isSignedIn}))(App);
