var test = require('tape');
var b64 = require('./index');

test('Encoding should work as expected', function (t) {
    t.plan(1);
    var expect = 'aGVsbG8gd29ybGQ=';

    //input value, input format
    var result = b64.encode('hello world', 'ascii');

    t.equals(result, expect);
});

test('Decoding should work as expected', function (t) {
    t.plan(1)
    var expect = 'hello world';

    // input value, output format
    var result = b64.decode('aGVsbG8gd29ybGQ=', 'ascii');

    t.equals(result, expect);
});

test('Encoding Buffers should still work as expected', function(t) {
    t.plan(1);

    var expect = 'aGVsbG8gd29ybGQ=';

    // please note that the second argument is ignored here, since the buffer is already raw byte data;
    var result = b64.encode(new Buffer('hello world'));

    t.equals(result, expect);;
});

test('Decoding Buffers should still work as expected', function(t) {
    t.plan(1);

    var expect = 'hello world';

    var result = b64.decode(new Buffer('aGVsbG8gd29ybGQ='), 'ascii');

    t.equals(result, expect);
})