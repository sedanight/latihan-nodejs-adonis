"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sapa = exports.filterData = exports.convert = exports.checkScore = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var sapa = function sapa(nama) {
  return "Halo Selamat Pagi ".concat(nama);
};
exports.sapa = sapa;
var convert = function convert(nama, domisili, umur) {
  return {
    nama: nama,
    domisili: domisili,
    umur: umur
  };
};
exports.convert = convert;
var data = [{
  name: "Ahmad",
  kelas: "adonis"
}, {
  name: "Regi",
  kelas: "laravel"
}, {
  name: "Bondra",
  kelas: "adonis"
}, {
  name: "Iqbal",
  kelas: "vuejs"
}, {
  name: "Putri",
  kelas: "Laravel"
}];
var filterData = function filterData(namaKelas) {
  for (var j = 0; j < data.length; j++) {
    return data.filter(function (el) {
      return el['kelas'].toLowerCase().includes(namaKelas.toLowerCase());
    });
  }
};
exports.filterData = filterData;
var checkScore = function checkScore(input) {
  var dataArray = input.split(',');
  var processedData = dataArray.reduce(function (acc, curr) {
    var _curr$split = curr.split(':'),
      _curr$split2 = _slicedToArray(_curr$split, 2),
      key = _curr$split2[0],
      value = _curr$split2[1];
    acc[key] = value;
    return acc;
  }, {
    name: "Ahmad",
    kelas: "adonis",
    score: 89
  });
  return processedData;
};
exports.checkScore = checkScore;