// PropertyReducer.js
export const initialState = {
    properties: [],
    loading: false,
    error: null,
  };
  
  export const propertyReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_PROPERTIES_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_PROPERTIES_SUCCESS':
        return { ...state, loading: false, properties: action.payload };
      case 'FETCH_PROPERTIES_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'ADD_PROPERTY':
        return { ...state, properties: [...state.properties, action.payload] };
      case 'UPDATE_PROPERTY':
        return {
          ...state,
          properties: state.properties.map(property =>
            property._id === action.payload._id ? action.payload : property
          ),
        };
      default:
        return state;
    }
  };
  