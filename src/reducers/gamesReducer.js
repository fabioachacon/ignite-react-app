const initState  = {
    popular: [],
    newGames: [],
    upComingGames: [],
    searched: []
}

const gamesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, 
                popular: action.payload.popular,
                upcomig: action.payload.upcoming,
                newGames: action.payload.newGames
            }
        default:
            return {...state}
    }

}

export default gamesReducer;