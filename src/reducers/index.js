const reducer = (state = {}, action) => {
  switch (action.type) {

      //ALL CHARACTERS
    case 'GET_CHARACTERS':
      console.log('GET_CHARACTERS REDUCER');
      return { ...state, loading: true };

      //CHARACTERS RECEIVED
    case 'CHARACTERS_RECEIVED':
      console.log('CHARACTERS_RECEIVED REDUCER');
      return { ...state, characters: action.characters, loading: false }
    
      //FETCHING CHARACTERS
    case 'FETCHING_CHARACTERS':
      console.log('FETCHING_CHARACTERS REDUCER');
      console.log('fetching characters data');
      return { ...state, loading: true }
    
      //ERROR ON GET CHARACTERS
    case 'GET_CHARACTERS_FAILED':
      console.log('FETCHING_CHARACTERS_FAILED REDUCER');
      return { ...state, loading: false }

    ///////////////


      // GET CHARACTER BY ID  
    case 'GET_CHARACTER_BY_ID': 
      console.log('GET_CHARACTER_BY_ID REDUCER');
      return { ...state, loadind: true }

      //FETCHING CHARACTERS BY ID
    case 'FETCHING_CHARACTER_BY_ID': 
      console.log('FETCHING_CHARACTER_BY_ID REDUCER');
      return { ...state, loadind: true }
      
      //CHARACTERS RECEIVED
    case 'CHARACTER_BY_ID_RECEIVED': 
      console.log('CHARACTER_BY_ID REDUCER');
      return { ...state, characterById: action.characterById, loading: false }
      
      //CHARACTERS GET FAILED 
    case 'GET_CHARACTER_BY_ID_FAILED':
      console.log('GET_CHARACTER_BY_ID_FAILED REDUCER');
      return { ...state, loading: false }

      ///////////////////
      
      //CLOSE MODAL
    case 'CLOSE_MODAL':
      console.log('CLOSE_MODAL REDUCER');
      return{ ...state, characterById: undefined }
      //DEFAULT PAYLODAD
    default: 
      return state;
  }
 };
 export default reducer;