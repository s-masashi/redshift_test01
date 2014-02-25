var cli = require("cli");

cli.parse({
	random_stream: ["rs", "random stream", "path", "/dev/urandom"],
	csv: ["c", "csv file path", "path", "./testtable01.csv"],
	number: ["n", "number of lines", "number", 10]
});

cli.main(function(args, options) {
	var fs = require("fs");
	var count = 0;
	var fdR = fs.openSync(options.random_stream, "r");
	var fdW = fs.openSync(options.csv, "w");
	var buffer = new Buffer(150);
	while (count < options.number) {
		fs.readSync(fdR, buffer, 0, 150, null);
		var s = buffer.toString('base64');
		var line = (count + "," + s + "\n");
		var bufW = new Buffer(line);
		fs.writeSync(fdW, bufW, 0, bufW.length, null);
		count++;
	} // end of while
}); // end of cli.main

