let Type = require("./utils/type.js").TYPE;

let DICTIONARY = {
	"function" : {
		print : function (type, val) {
			let typeSymbol = "%";
			let parsedValue = val;

			if (type === "int" || type === "float") {
				parsedValue = eval(parsedValue);

				if (Type(parsedValue) !== type) {
					console.error("Type error : " + typeof parsedValue + " !== " + type);
					return;
				}
			}

			if (type === "char") typeSymbol += "c";
			else if (type === "string") typeSymbol += "s";
			else if (type === "int") typeSymbol += "d";
			else if (type === "float") typeSymbol += "f";
			else if (type === "undefined") typeSymbol += "s";
			else {
				console.error("UNKNOWN_TYPE : " + type);
				return;
			}

			return `printf(${typeSymbol},${parsedValue});\n`;
		}
	},

	"types" : [
		"int",
		"float",
		"string",
		"char"
	]
};

module.exports.DICTIONARY = DICTIONARY;