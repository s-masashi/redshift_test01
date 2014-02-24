

exports.encode = function (inputValue, inputFormat) {
    if (Buffer.isBuffer(inputValue)) {
        return inputValue.toString('base64');
    }

    return (new Buffer(inputValue, inputFormat)).toString('base64');
}

exports.decode = function (inputValue, outputFormat) {
    if (Buffer.isBuffer(inputValue)) {
        return (new Buffer(inputValue.toString(), 'base64')).toString(outputFormat);
    }

    return (new Buffer(inputValue, 'base64')).toString(outputFormat);
}