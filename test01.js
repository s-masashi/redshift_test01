var cli = require("cli");

cli.parse({
	number: ["n", "number of lines", "number", 10]
});

cli.main(function(args, options) {
	console.log("test01: " + options.number);
	var fs = require("fs");
	var count = 0;
	fs.open("/dev/urandom/", "r", function(err, fd) {
		var buffer = new Buffer(150);
		fs.readSync(fd, buffer, 0, 150, 0);
		var s = buffer.toString('base64');
		console.log(count + ", " + s);
		if (count >= optiions.number) return;
	}); // end of fs.open
});
