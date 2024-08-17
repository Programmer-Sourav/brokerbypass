export const fetchPropertyForRentRequest = () =>{
    type: "FETCH_PROPERTY_FOR_RENT_REQUEST"
}

export const fetchPropertyForRentSuccess = (data) =>({
    type: "FETCH_PROPERTY_FOR_RENT_SUCCESS",
    payload: data
})

export const fetchPropertyForRentFailure = (error) =>({
   type: "FETCH_PROPERTY_FOR_RENT_FAILURE",
   error
})


export const fetchPropertyForBuyRequest = () =>{
    type: "FETCH_PROPERTY_TO_BUY_REQUEST"
}

export const fetchPropertyForBuySuccess = (data) =>({
    type: "FETCH_PROPERTY_TO_BUY_SUCCESS", 
    payload: data
})

export const fetchPropertyForBuyFailure = (error) =>(
    {
        type: "FETCH_PROPERTY_TO_BUY_FAILURE", 
        error
    }
) 


export const fetchDataForCommercialPropertyRequest = () =>{
    type : "FETCH_COMMERCIAL_PROPERTY_DATA_REQUEST"
}

export const fetchDataForCommercialPropertySuccess = (data) =>({
    type: "FETCH_COMMERCIAL_PROPERTY_DATA_SUCCESS",
    payload: data
})

export const fetchDataForCommercialPropertyFailure = (error) =>({
    type: "FETCH_COMMERCIAL_PROPERTY_DATA_FAILURE", 
    error
})


export const postPropertyDetailsByOwnerRequest = () =>{
    type: "POST_PROPERTY_DETAILS_BY_OWNER_REQUEST"
}

export const postPropertyDetailsByOwnerSucces = (data) =>({
    type: "POST_PROPERTY_DETAILS_BY_OWNER_SUCCESS",
    payload: data
})

export const postPropertyDetailsByOwnerFailure = (error) =>{
    type: "POST_PROPERTY_DETAILS_BY_OWNER_FAILURE",
    error
}

export const inputSearchQuery = (data) =>({
  type: "SEARCH",
  payload: data
})

export const setSelectedCity = (data) =>(
    {
        type: "SELECT_CITY", 
        payload: data
    }
)

export const setSelectedPlotType = (data) =>(
    {
        type: "SELECTED_PLOT_TYPE", 
        payload: data
    }
)

export const setSelectedBHKType = (data) =>(
    {type: "SELECTED_BHK_TYPE", 
     payload: data
    }
)

export const setPropertyStatus = (data) =>(
    {
    type: "SELECTED_AVAILABILITY_TYPE", 
    payload: data
})

export const setCommercialPropertyHoldingStatus = (data) =>(
    {
        type: "COMMERCIAL_PROPERTY_HOLDING_STATUS",
        payload: data
    }
)

export const setCurrentSelection = (data) =>(
    {type: "CURRENT_SELECTION",
      payload: data  
    }
)

export const setPreferredTenets = (data) =>({
    type: "PREFERRED_TENETS",
    payload: data
})

export const setPropertyType = (data) =>(
    {
        type: "SELECTED_PROPERTY_TYPE", 
        payload: data
    }
)

export const setSelectedFurnishing = (data) =>(
    {
        type: "SELECTED_FURNISHING",
        payload: data
    }
)

export const setSelectedParking = (data) =>({
    type: "SELECTED_PARKING",
    payload: data
})

export const setSelectedOwnerAvailability = (data) =>(
    {
        type: "SELECTED_OWNER_AVAILABILITY",
        payload: data
    }
)

export const setSelectedOwnerAvailabilityTime = ( data) =>({
    type: "SELECTED_OWNER_AVAILABILITY_TIME",
    payload: data
})

export const setOwnerDetails = (data) =>({
    type: "OWNER_DETAILS", 
    payload: data
})

export const setPreferenceForLeasedProperties = (data) =>({
    type: "LEASED_PROPERTIES_ONLY",
    payload: data
})

export const setSelectedSortingValue = (data) =>({
    type: "SORTING_VALUE", 
    payload: data
})

export const sortValue = (data) =>({
    type: "SORT_VALUE",
    payload: data
})

export const fetchPropertyForRentData = () =>{
    return async(dispatch) =>{
        dispatch(fetchPropertyForRentRequest());
        try{
         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
         const data = await response.json();
         dispatch(fetchPropertyForRentSuccess(data))
        }
        catch(error){
            dispatch(fetchPropertyForRentFailure(error.message))
        }
    }
}


export const fetchDataForProprtyToBuy = () =>{
    return async(dispatch) =>{
        dispatch(fetchPropertyForBuyRequest());
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        dispatch(fetchPropertyForBuySuccess(data))
        }
        catch(error){
            dispatch(fetchPropertyForBuyFailure(error.message))
        }
    }
}

export const fetchDataForCommercialPropertyData = () =>{
    return async(dispatch) =>{
        dispatch(fetchDataForCommercialPropertyRequest());
        try{
         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
         const data = await response.json();
         dispatch(fetchDataForCommercialPropertySuccess(data))
        }
        catch(error){
            dispatch(fetchDataForCommercialPropertyFailure(error.message))
        }
    }
}

export const postPropertyDetailsByOwner = () =>{
    return async(dispatch) =>{
        dispatch(postPropertyDetailsByOwnerRequest());
        try{
         const response   = await fetch('https://jsonplaceholder.typicode.com/posts', {method: "POST"})
         const data = await response.json();
         dispatch(postPropertyDetailsByOwnerSucces(data))
        }
        catch(error){
            dispatch(postPropertyDetailsByOwnerFailure(error.message))
        }
    }
}