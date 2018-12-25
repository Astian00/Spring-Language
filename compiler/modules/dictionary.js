let DICTIONARY = {
	"function" : {
		print : function (type, val) {
			let typeSymbol = "%";

			if (type === "char") typeSymbol += "c";
			else if (type === "string") typeSymbol += "s";
			else if (type === "int") typeSymbol += "d";
			else if (type === "float") typeSymbol += "f";
			else if (type === "undefined") typeSymbol += "s";
			else {
				console.error("UNKNOWN_TYPE : " + el.type);
				return;
			}

			return `printf(${typeSymbol}, ${val});\n`;
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