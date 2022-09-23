import React from "react";

export default () => {
	return (
		<React.Fragment>
			<h1>New Recipe</h1>

			<p>Title</p>
			<input name="title" />
			<p>Ingredients</p>
			<input name="ingredients" />

			{/* This has to be more intelligent 
            than a datalist if she is going to 
            actually use it. 
            
            Will need to be something really
            intuitive. Something with the option
            to easily add a new ingredient if
            necessary.*/}
		</React.Fragment>
	);
};
