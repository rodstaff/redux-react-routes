export default function (state=null, action) {

  switch(action.type) {
    
  	case "TURTLE_SELECTED":
  	  return action.payload;
  	  break;
  }
  return state;
}  