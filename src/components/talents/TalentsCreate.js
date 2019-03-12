import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {createTalent} from '../../actions';
import './TalentsList.css';

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
        <Field name="Name" component={renderInput} label="Nome/ Name" />
        <Field name="Email" component={renderInput} label="Endereço de E-mail" />
        <Field name="PhoneNumber" component={renderInput} label="Telefone/Phone (Whatsapp)" />
        <Field name="Linkedin" component={renderInput} label="Linkedin" />
        <Field name="State" component={renderInput} label="Estado/ State" />
        <Field name="City" component={renderInput} label="Cidade / City " />
        <Field name="Portfolio" component={renderInput} label="Portfolio" />
 <label>What is your willingness to work today? / Qual é sua disponibilidade para trabalhar hoje?</label>

 <Field name="WillignessToWork" component="select">
      <option></option>
      <option value="Up to 4 hours per day / Até 4 horas por dia">Up to 4 hours per day / Até 4 horas por dia</option>
      <option value="4 to 6 hours per day / De 4 á 6 horas por dia">4 to 6 hours per day / De 4 á 6 horas por dia</option>
      <option value="6 to 8 hours per day /De 6 á 8 horas por dia">6 to 8 hours per day /De 6 á 8 horas por dia</option>
      <option value="Up to 8 hours a day (are you sure?) / Acima de 8 horas por dia (tem certeza?)">Up to 8 hours a day (are you sure?) / Acima de 8 horas por dia (tem certeza?)</option>
      <option value="Only weekends / Apenas finais de semana">Only weekends / Apenas finais de semana</option>
    </Field>
    <label>What's the best time to work for you? / Pra você qual é o melhor horário para trabalhar?</label>

        <Field name="BestTimeToWork" component="select">
      <option></option>
      <option value="Morning (from 08:00 to 12:00) / Manhã (de 08:00 ás 12:00)">Morning (from 08:00 to 12:00) / Manhã (de 08:00 ás 12:00)</option>
      <option value="Afternoon (from 1:00 p.m. to 6:00 p.m.) / Tarde (de 13:00 ás 18:00)">Afternoon (from 1:00 p.m. to 6:00 p.m.) / Tarde (de 13:00 ás 18:00)</option>
      <option value="Night (7:00 p.m. to 10:00 p.m.) /Noite (de 19:00 as 22:00)">Night (7:00 p.m. to 10:00 p.m.) /Noite (de 19:00 as 22:00)</option>
      <option value="Dawn (from 10 p.m. onwards) / Madrugada (de 22:00 em diante)">Dawn (from 10 p.m. onwards) / Madrugada (de 22:00 em diante)</option>
      <option value="Business (from 08:00 a.m. to 06:00 p.m.) / Comercial (de 08:00 as 18:00)">Business (from 08:00 a.m. to 06:00 p.m.) / Comercial (de 08:00 as 18:00)</option>
    </Field>
        <Field name="SalaryRequirementPerHour" component={renderInput} label="What is your hourly salary requirements? / Qual sua pretensão salarial por hora? " />
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