"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;

var _request = _interopRequireDefault(require("../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function query() {
  return (0, _request["default"])("/api/users");
}