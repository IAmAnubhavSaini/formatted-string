import formatted from "./index";

describe("formatted-string", () => {
    it('f("{a} is {b}", {a:"A", b:"B"}); should be "A is B".)', () => {
        expect(formatted('{a} is {b}', {a: 'A', b: 'B'})).toEqual('A is B');
    });
    it('f("{a} {a} {a}", {a:"A", b:"B"}); should be "A A A".)', () => {
        expect(formatted('{a} {a} {a}', {a: 'A', b: 'B'})).toEqual('A A A');
    });
    it('f("{a}{b} {b}{a} {b}{a}{a}{b}", {a:"A", b:"B"}); should be "AB BA BAAB".)', () => {
        expect(formatted('{a}{b} {b}{a} {b}{a}{a}{b}', {a: 'A', b: 'B'})).toEqual('AB BA BAAB');
    });
    it('f(10, {a:"A", b:"B"}); throws SyntaxError)', () => {
        // @ts-ignore
        expect(() => formatted(10, {a: 'A', b: 'B'})).toThrow(new TypeError('fmt should be string.'));

    });
});
