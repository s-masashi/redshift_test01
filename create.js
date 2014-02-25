var cli = require("cli");

cli.parse({
	number: ["n", "number of lines", "number", 10]
});

cli.main(function(args, options) {
	var fs = require("fs");
	var count = 0;
	fs.open("/dev/urandom", "r", function(err, fd) {
		var buffer = new Buffer(150);
		while (count < options.number) {
			fs.readSync(fd, buffer, 0, 150, null);
			var s = buffer.toString('base64');
			console.log(count + "," + s);
			count++;
		} // end of while
	}); // end of fs.open
});

