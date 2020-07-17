var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var general;
(function (general) {
    var Gato = /** @class */ (function (_super) {
        __extends(Gato, _super);
        function Gato(nombre, cantVidas) {
            var _this = _super.call(this, nombre) || this;
            _this.cantVidas = 9;
            _this.cantVidas = cantVidas;
            return _this;
        }
        Gato.prototype.getVidas = function () {
            return this.cantVidas;
        };
        Gato.prototype.setVidas = function (vidas) {
            this.cantVidas = vidas;
        };
        return Gato;
    }(general.Mascota));
    general.Gato = Gato;
})(general || (general = {}));
