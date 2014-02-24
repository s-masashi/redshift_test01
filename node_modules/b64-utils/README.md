b64
===

Simple Base64 methods using Built In buffers. This means its just an abstraction and will be as reliable as nodejs buffers are.


[![browser support](https://ci.testling.com/miketheprogrammer/b64.png)](https://ci.testling.com/miketheprogrammer/b64)


npm install b64-utils

This library is just a small quick stable library to clean up all the new Buffer( blah ).toString() blah.

Works well for me especially when doing alot of b64 work with crypto, on enterprise api's where security is insane.

Tests are the documentation. Enjoy

```javascript


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

```