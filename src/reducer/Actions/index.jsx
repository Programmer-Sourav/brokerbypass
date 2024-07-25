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