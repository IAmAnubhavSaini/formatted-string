"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
describe("formatted-string", function () {
    it('f("{a} is {b}", {a:"A", b:"B"}); should be "A is B".)', function () {
        expect((0, index_1.default)('{a} is {b}', { a: 'A', b: 'B' })).toEqual('A is B');
    });
    it('f("{a} {a} {a}", {a:"A", b:"B"}); should be "A A A".)', function () {
        expect((0, index_1.default)('{a} {a} {a}', { a: 'A', b: 'B' })).toEqual('A A A');
    });
    it('f("{a}{b} {b}{a} {b}{a}{a}{b}", {a:"A", b:"B"}); should be "AB BA BAAB".)', function () {
        expect((0, index_1.default)('{a}{b} {b}{a} {b}{a}{a}{b}', { a: 'A', b: 'B' })).toEqual('AB BA BAAB');
    });
    it('f(10, {a:"A", b:"B"}); throws SyntaxError)', function () {
        // @ts-ignore
        expect(function () { return (0, index_1.default)(10, { a: 'A', b: 'B' }); }).toThrow(new TypeError('fmt should be string.'));
    });
});
//# sourceMappingURL=index.spec.js.map