import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {createTalent} from '../../actions';

 class TalentsCreate extends React.Component {
  
  

  async onSubmit(values,dispatch,props){
    await dispatch(createTalent(values))
    return props.history.push('/');
  }
  render() {
    return (
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
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = formValues => {
const errors = {};
if(!formValues.talentName) errors.talentName = 'You must enter the name';
if(!formValues.talentEmail) errors.talentEmail = 'You must enter the email';
return errors;

}
const TalentsCreateForm = reduxForm({
  form: "talentsCreate",
  validate: validate
})(TalentsCreate);

const renderError = ({error , touched}) => {
  if(touched && error){
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
}
export default connect(state => ({
  initialValues: state.selectedTalent
}),)(TalentsCreateForm)

const renderInput = ({ input , label , meta}) => (
    <div className="field">
    <label>{label}</label>
      <input {...input} />
    <div>{renderError(meta)}</div>
    </div>
  );