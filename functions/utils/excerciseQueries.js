"use strict";
exports.__esModule = true;
exports.CREATE_EXCERCISE = exports.GET_EXCERCISES = void 0;
exports.GET_EXCERCISES = "\n    query {\n        allExcersises {\n            data {\n                _id\n                name\n                description\n            }\n        }\n    }";
var CREATE_EXCERCISE = function (name, description) { return "\n    mutation {\n        createExcersise(data: {name: \"" + name + "\", description: \"" + description + "\"}) {\n            _id\n            name\n            description\n        }\n    }\n    "; };
exports.CREATE_EXCERCISE = CREATE_EXCERCISE;
