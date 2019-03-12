import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';

const Header = (props) => {
  console.log(props)
  if(props.signIn){

  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Easy COMMUNICATION &
TECHNOLOGY
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
            All Talents
        </Link>
        <Link to="/talents/new" className="item">
            Add new Talent
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
  }else{
    
  return (
    <div className="ui secondary pointing menu">
      <div className="item">
        Easy COMMUNICATION &
TECHNOLOGY
      </div>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
  }
};

export default Header;
