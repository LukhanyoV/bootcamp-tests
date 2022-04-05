const greet = name => {
	if(typeof name === "string"){
		return "Hello, " + name;
	} else {
		return "Invalid input";
	}
}