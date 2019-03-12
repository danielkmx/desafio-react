import React from 'react';
import { Field, reduxForm } from "redux-form";
import {editTalent} from '../../actions';
import { connect } from "react-redux";

 class TalentsEdit extends React.Component{
    async onSubmit(values,dispatch,props){
      await dispatch(editTalent(values))
      return props.history.push('/');
      }
    render(){
        return(

        <form
        
        onSubmit={this.props.handleSubmit(this.onSubmit)} 
        className="ui form error">
          <Field name="Name" component={renderInput} label="Enter Name" />
          <Field name="Email" component={renderInput} label="Enter E-mail" />
          <Field name="PhoneNumber" component={renderInput} label="Enter the Phone Number" />
          <Field name="Linkedin" component={renderInput} label="Enter the Linkedin" />
          <Field name="State" component={renderInput} label="Enter the State" />
          <Field name="City" component={renderInput} label="Enter the City" />
          <Field name="Portfolio" component={renderInput} label="Enter the Portfolio" />
          <Field name="WillignessToWork" component={renderInput} label="Enter the Willigness To Work" />
          <Field name="BestTimeToWork" component={renderInput} label="Enter the BestTimeToWork" />
          <Field name="SalaryRequirementPerHour" component={renderInput} label="Enter the SalaryRequirementPerHour" />
          <button className="ui button primary">Save</button>
        </form>
        )
    }
}
const TalentsEditReduxForm = reduxForm({
    form: "talentsEdit"
  })(TalentsEdit);
  const mapStateToProps = state => {
    return { selectedTalent: state.selectedTalent };
  };
  const renderInput = ({ input , label }) => (
    <div className="field">
    <label>{label}</label>
      <input {...input} />
    </div>
  );
  export default connect(state => ({
    initialValues: state.selectedTalent
  }),)(TalentsEditReduxForm)