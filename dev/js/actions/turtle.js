export const selectUser = (turtle) => {

  // console.log("You clicked on user: ", 
  // 	user.first + ", " + 
  // 	user.description
  // );
  return {
  	type: "USER_SELECTED",
  	payload: turtle
  };
};