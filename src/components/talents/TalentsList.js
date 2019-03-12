import React from "react";
import { connect } from "react-redux";
import { fetchTalents,selectTalent ,deleteTalent} from "../../actions";
import { Link } from "react-router-dom";
import './TalentsList.css';

 class TalentsList extends React.Component {
  componentDidMount() {
    this.props.fetchTalents();
  }
  handleDeltete(){

    
  }
  render() {
    if (this.props.talents.length > 0) {
      const talents = this.props.talents.map((talent ,i)=> {
        return (
            <tbody key={i}>
              <tr>
                <td data-label="Name">{talent.Name}</td>
                <td data-label="E-mail">{talent.Email}</td>
                <td data-label="Phone Number">{talent.PhoneNumber}</td>
                <td data-label="Linkedin">{talent.Linkedin}</td>
                <td data-label="State">{talent.State}</td>
                <td data-label="City">{talent.City}</td>
                <td data-label="Portfolio">{talent.Portfolio}</td>
                <td data-label="WillignessToWork">{talent.WillignessToWork}</td>
                <td data-label="BestTimeToWork">{talent.BestTimeToWork}</td>
                <td data-label="SalaryRequirementPerHour">{talent.SalaryRequirementPerHour}</td>
                <td data-label="RegisterDate">{talent.RegisterDate}</td>
                <td>
                  <Link onClick={() => this.props.selectTalent(talent)}  to={`/talents/edit`}>Edit</Link>
                  <i onClick={async () => {await this.props.deleteTalent(talent._id); this.props.fetchTalents()}} className="trash-icon trash alternate outline icon"></i>
                  </td>
                
              </tr>
            </tbody>
        );
      });
      return (
        <div>
          <div className=" ui  ">
            <p>Talentos</p>
          </div>
          <table className="ui celled table">

          <thead>
              <tr><th>Name</th>
              <th>E-mail</th>
              <th>Phone Number</th>
              <th>Linkedin</th>
              <th>State</th>
              <th>City</th>
              <th>Portfolio</th>
              <th>Willigness To Work</th>
              <th>Best Time To Work</th>
              <th>Salary Requirement Per Hour</th>
              <th>RegisterDate</th>
              <th>Actions</th>
            </tr></thead>
          {talents}

          </table>

        </div>
      );
    }
    return (
      <div className=" ui  message">
        <p>Talentos</p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { talents: state.talents };
};

export default connect(
  mapStateToProps,
  { fetchTalents, selectTalent, deleteTalent }
)(TalentsList);
