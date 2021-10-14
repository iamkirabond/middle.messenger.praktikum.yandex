"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var src_1 = require("../src");
describe("Typescript + Babel usage suite", function () {
    it("should return string correctly", function () {
        (0, chai_1.expect)((0, src_1.hello)("mocha"), "Hello mocha");
    });
});
