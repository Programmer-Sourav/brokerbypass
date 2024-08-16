const initialState = {

    loading: false,
    propertiesToBuy: [],
    propertiesForRent: [],
    commercialProperties: [],
    error: null, 
    searchQuery: "", 
    selectedCity: "", 
    propertyDetails: {}, //for owner
    selectedPlotType: "full-house",
    selectedBHKType: "", 
    selectedPropertyStatus: "",
    selectedAvaiabilityType: "",
    newBuilderProjectsSelected: false,
    commercialPropHoldingStatus: "rent",
    currentSelection: "",
    preferredTenets: "",
    selectedPropertyType:"",
    selectedFurnishing: "", 
    selectedParking: "",
    selectOwnerAvailability: "",
    selectOwnerAvailibilityTime: {startTime: "", endTime: ""}

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
        case 'SELECTED_PLOT_TYPE': 
        return {...state, selectedPlotType: action.payload}

        case 'SELECTED_BHK_TYPE': 
        return {...state, selectedBHKType : action.payload}
        case 'SELECTED_PROPERTY_STATUS':
        return {...state, selectedPropertyStatus: action.payload}
        case 'SELECTED_AVAILABILITY_TYPE':
        return {...state, selectedAvaiabilityType: action.payload}  
        case 'BUILDER_PROJECTS_SELECTED':
        return {...state, newBuilderProjectsSelected: action.payload}  
        case 'COMMERCIAL_PROPERTY_HOLDING_STATUS': 
        return {...state, commercialPropHoldingStatus: action.payload}


        case 'CURRENT_SELECTION': 
        return {...state, currentSelection: action.payload}

        case 'PREFERRED_TENETS':
        return {...state, preferredTenets: action.payload}
        case 'SELECTED_PROPERTY_TYPE':
        return {...state, selectedPropertyType: action.payload}  
        case 'SELECTED_FURNISHING':
        return {...state, selectedFurnishing: action.payload}
        case 'SELECTED_PARKING':
        return {...state, selectedParking: action.payload}  
        case 'SELECTED_OWNER_AVAILABILITY': 
        return {...state, selectOwnerAvailability: action.payload}
        case 'SELECTED_OWNER_AVAILABILITY_TIME':
        return {...state, selectOwnerAvailibilityTime: action.payload}    

        default: 
        return state
    }
}

export default appReducer;