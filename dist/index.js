"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MatrixEffect = /** @class */ (function (_super) {
    __extends(MatrixEffect, _super);
    function MatrixEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatrixEffect.prototype.componentDidMount = function () {
        var _this = this;
        var canvas = this.refs.canvas;
        var ctx = canvas.getContext('2d');
        this.setState({
            p: Array(256).join('1').split('').map(parseFloat)
        });
        setInterval(function () {
            if (ctx === null)
                return;
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(0,255,0,1)";
            _this.setState({
                p: _this.state.p.map(function (v, i) {
                    ctx.fillText(String.fromCharCode(Math.floor(2720 + Math.random() * 33)), i * 10, v);
                    v += 10;
                    if (v > 768 + Math.random() * 10000) {
                        v = 0;
                    }
                    return v;
                })
            });
        }, 33);
    };
    MatrixEffect.prototype.render = function () {
        return (react_1.default.createElement("canvas", { ref: "canvas", height: this.props.height, width: this.props.width }));
    };
    return MatrixEffect;
}(react_1.default.Component));
exports.MatrixEffect = MatrixEffect;
exports.default = MatrixEffect;
//# sourceMappingURL=index.js.map