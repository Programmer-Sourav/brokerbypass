const initialState = {
    loading: false,
    propertiesToBuy: [],
    propertiesForRent: [],
    commercialProperties: [],
    error: null, 
    searchQuery: "", 
    selectedCity: "", 
    propertyDetails: {}, //for owner
    plotType: "full-house",
}


const appReducer = (state = initialState, action) =>{

    switch(action.type){
        case 'FETCH_PROPERTY_TO_BUY_REQUEST': 
        return {...state, loading: true, error: null}
        case 'FETCH_PROPERTY_TO_BUY_SUCCESS': 
        return {...state, loading: false, propertiesToBuy: action.payload}
        case 'FETCH_PROPERTY_TO_BUY_FAILURE': 
        return {...state, loading: false, error: action.error}

        case 'FETCH_PROPERTY_FOR_RENT_REQUEST': 
        return {...state, loading: true, error: null}
        case 'FETCH_PROPERTY_FOR_RENT_SUCCESS': 
        return {...state, loading: false, propertiesForRent: action.payload}
        case 'FETCH_PROPERTY_FOR_RENT_FAILURE': 
        return {...state, loading: false, error: action.error}

        case 'FETCH_COMMERCIAL_PROPERTY_DATA_REQUEST': 
        return {...state, loading: true, error: null}
        case 'FETCH_COMMERCIAL_PROPERTY_DATA_SUCCESS': 
        return {...state, loading: false, commercialProperties: action.payload}
        case 'FETCH_COMMERCIAL_PROPERTY_DATA_FAILURE': 
        return {...state, loading: false, error: action.error}

        case 'SEARCH': 
        return {...state, searchQuery : action.payload}
        case 'SELECT_CITY':
        return {...state, selectedCity: action.payload}

        default: 
        return state
    }
}

export default appReducer;