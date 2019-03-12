import talentsApi from "../apis/talentsApi";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};
export const selectTalent = talentId => {
  return {
    type: "SELECT_TALENT",
    payload: talentId
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const fetchTalents = () => async dispatch => {
  const result = await talentsApi.get("/talents");
  dispatch({ type: "FETCH_TALENTS", payload: result.data });
};

export const createTalent = talent => async dispatch => {
  const result = await talentsApi.post("/talents", {
    Name: talent.Name,
    Email: talent.Email,
    PhoneNumber: talent.PhoneNumber,
    Linkedin: talent.Linkedin,
    State: talent.State,
    City: talent.City,
    Portfolio: talent.Portfolio,
    WillignessToWork: talent.WillignessToWork,
    BestTimeToWork: talent.BestTimeToWork,
    SalaryRequirementPerHour: talent.SalaryRequirementPerHour
  });
  dispatch({ type: "CREATE_TALENT", payload: result.data });
};

export const deleteTalent = talentId => async dispatch => {
  const result = await talentsApi.delete("/talents/" + talentId);
  dispatch({ type: "DELETE_TALENT", payload: result.data });
};
export const editTalent = (values) => async dispatch => {
    const props = [];
     Object.keys(values).forEach( value => {
      props.push({"propName": value, "value": values[value]});  
    });
    const result = await talentsApi.patch("/talents/" + values._id, 
        props
    );
    dispatch({ type: "CREATE_TALENT", payload: result.data });
  };