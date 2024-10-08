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
    selectedAvaiabilityType: "Immediate",
    newBuilderProjectsSelected: false,
    commercialPropHoldingStatus: "rent",
    currentSelection: "",
    preferredTenets: [],
    selectedPropertyType:"",
    selectedFurnishing: "", 
    selectedParking: "",
    selectOwnerAvailability: "",
    selectOwnerAvailibilityTime: {startTime: "", endTime: ""},
    propertyAvailability: "rent",
    expectedRent: "", 
    expectedDeposit: "",
    monthlyMaintenance: "",
    maintenanceAmount:"",
    availableFrom: "",
    rentDetailsDescription:"",
    rentNegotiable: false,
    amenities: [],
    waterSupply: ""

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
        case 'SELECTED_SORT_VALUE': 
        if(state.selectedSortingValue.includes(action.payload)){
            console.log(6661, action.payload)
            return {...state, selectedSortingValue: state.selectedSortingValue.filter((sortVal)=>sortVal!==action.payload)}
        }
        else{
             console.log(6662, action.payload)
            return {...state, selectedSortingValue: [...state.selectedSortingValue, action.payload]}
        }
        case 'OWNER_DETAILS':
        return {...state, ownerDetails: action.payload}  
        
        case 'LEASED_PROPERTIES_ONLY': 
        return {...state, onlyLe}

        case 'PREFERRED_TENETS':
         if(state.preferredTenets.includes(action.payload)){
            return {...state, preferredTenets : state.preferredTenets.filter((tenets)=>tenets!==action.payload)}
        }
        else{
            return {...state, preferredTenets: [...state.preferredTenets, action.payload]}
        }
        case 'SELECTED_PROPERTY_TYPE':
         if(state.selectedPropertyType.includes(action.payload)){
            return {...state, selectedPropertyType: state.selectedPropertyType.filter((propertyType)=>propertyType!==action.payload)}
         }
         else{
            return {...state, selectedPropertyType : [...state.selectedPropertyType, action.payload]}
         }
        case 'SELECTED_FURNISHING':
        if(state.selectedFurnishing.includes(action.payload)){
            return {...state, selectedFurnishing: state.selectedFurnishing.filter((selFurnish)=>selFurnish!==action.payload)}
        }
        else{
            return {...state, selectedFurnishing: [...state.selectedFurnishing, action.payload]}
        }
        case 'AVIALABLE_AMENITIES':
         if(state.amenities.includes(action.payload)){
            return {...state, amenities: state.amenities.filter((amenity)=>amenity!==action.payload)}
         } 
         else{
            return {...state, amenities: [...state.amenities, action.payload]}
         }  
        case 'SELECTED_PARKING':
        return {...state, selectedParking: action.payload}  
        case 'SELECTED_OWNER_AVAILABILITY': 
        return {...state, selectOwnerAvailability: action.payload}
        case 'SELECTED_OWNER_AVAILABILITY_TIME':
        return {...state, selectOwnerAvailibilityTime: action.payload}    

        case 'PROPERTY_AVAILAIBILITY': 
        return {...state, propertyAvailability: action.payload}
        case 'EXPECTED_RENT':
        return {...state, expectedRent: action.payload}    
        case 'EXPECTED_DEPOSIT':
        return {...state, expectedDeposit: action.payload}
        case 'MONTHLY_MAINTENANCE':    
        return {...state, monthlyMaintenance: action.payload}
        case "MAINTENANCE_AMOUNT":
        return {...state, maintenanceAmount: action.payload}
        case "ABAILABLE_FROM":
        return {...state, availableFrom: action.payload}
        case "RENT_DETAILS_DESCRIPTION":
        return {...state, rentDetailsDescription: action.payload}
        case "RENT_NEGOTIABLE":
            console.log(111, action.payload)
        return {...state, rentNegotiable : action.payload }  
        case "SAVE_AMENITIES_DETAILS": 
         return {...state, amenitiesDetails: action.payload}
        case "WATER_SUPPLY":
         return {...state, waterSupply: action.payload}     

        default: 
        return state
    }
}

export default appReducer;