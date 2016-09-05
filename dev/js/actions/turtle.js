export const selectTurtle = (turtle) => {

  // console.log("You clicked on user: ", 
  // 	user.first + ", " + 
  // 	user.description
  // );
  return {
  	type: "TURTLE_SELECTED",
  	payload: turtle
  };
};