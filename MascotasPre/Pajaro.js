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
    var ETipo;
    (function (ETipo) {
        ETipo[ETipo["Rapi\u00F1a"] = 0] = "Rapi\u00F1a";
        ETipo[ETipo["Loro"] = 1] = "Loro";
    })(ETipo = general.ETipo || (general.ETipo = {}));
    var Pajaro = /** @class */ (function (_super) {
        __extends(Pajaro, _super);
        function Pajaro(nombre, tipo) {
            var _this = _super.call(this, nombre) || this;
            _this.tipo = tipo;
            return _this;
        }
        Pajaro.prototype.getTipo = function () {
            return this.tipo;
        };
        Pajaro.prototype.setTipo = function (tipo) {
            this.tipo = tipo;
        };
        return Pajaro;
    }(general.Mascota));
    general.Pajaro = Pajaro;
})(general || (general = {}));
