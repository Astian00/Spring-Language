let fs = require("fs");

let dictionary = require("./modules/dictionary.js").DICTIONARY;
let lexer = require("./modules/lexer.js").LEXER;
let parser = require("./modules/parser.js").PARSER;

fs.readFile("../test/test.lang", "utf-8", function (error, content) {

	if (error === null) {
		let lexems = lexer(content, dictionary);

		let parsedString = parser(lexems, dictionary);

		console.log(parsedString);

		// console.log(JSON.stringify(lexems, null, 4));
	}
	else {
		console.error("ERROR!");
		console.error(error);
	}

});