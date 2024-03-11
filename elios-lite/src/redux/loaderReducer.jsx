const initialState = {
    loading: false,
}


const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'showLoading':
        return {
          ...state,
          loading: true // Update the loading property to true
        };
      case 'hideLoading':
        return {
          ...state,
          loading: false // Update the loading property to false
        };
      default:
        return state; // Return the previous state if action type is unknown
    }
  };

  export {loaderReducer};
  