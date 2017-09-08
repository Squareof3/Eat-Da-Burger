var connection = require("../config/connection.js");

function printQuestionMarks(num) {
	var arr = [];
	
	for (var i=0; i < num; i++) {
		arr.push("?"); 
	}
	
	return arr.toString();
	
	}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (Object.hasOwnProperty.call(ob, key)) {
		arr.push(key + "=" + ob[key]);
	}
	}
		return arr.toString();
	}

var orm = {
	all: function(tableInput, cb) {
	 var queryString = "select * from" + tableInput + ";";
	 connection.query(queryString, function(err, result) {
	 if (err) {
	 	throw err;
	 }
	 cb(reslut);
	});
	},
	create: function(table, cols, vals, cb) {
		var queryString = "insert into" + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "values (";
		queryString += printQuestionmarks(vals.length);
		queryString += ") ";
		
		console.log(queryString);

connection.query(queryString, vals, function(err, result) {
	if (err) {
		throw err;
	}
	cb(result);
	});
	},
update: function(table, objColVals, condition, cb) {
	var queryString = "update " + table;

	queryString += " set ";
	queryString += objToSql(objColVals);
	querySting += " where ";
	queryString += condition;
	
	console.log(queryString);
	connection.query(queryString, function(err, result) {
		if (err) {
		 throw err;
		}
		cb(result);
		});
		}
};

module.exports = orm;
