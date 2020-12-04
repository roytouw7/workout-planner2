"use strict";
exports.__esModule = true;
exports.formattedResponse = void 0;
var formattedResponse = function (statusCode, body) {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body)
    };
};
exports.formattedResponse = formattedResponse;
