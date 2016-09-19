export default function (state=null, action) {

  switch(action.type) {
    
  	case "USER_SELECTED":
  	  return action.payload;
  	  break;
  	case "ADD_USER_NAME":
  	  return action.payload;
  	  break;
  	case "ADD_USER_AGE":
  	  return action.payload;
  	  break;
  }
  return state;
}  