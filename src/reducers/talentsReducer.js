export default (state = [],action) => {
    switch(action.type){
        case "FETCH_TALENTS":
            return action.payload.talents
        case "CREATE_TALENT":
            return state;
        default:
            return state;
    }
}