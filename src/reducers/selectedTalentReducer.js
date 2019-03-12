export default (state = null,action) => {
    switch(action.type){
        case "SELECT_TALENT":
            return action.payload
        default:
            return state;
    }
}