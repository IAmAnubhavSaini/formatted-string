import test from 'ava';
import f from './';

test('f("{a} is {b}", {a:"A", b:"B"}); should be "A is B".)', async t => {
    t.is(f.formatted('{a} is {b}', {a: 'A', b: 'B'}), 'A is B');
});

test('f("{a} {a} {a}", {a:"A", b:"B"}); should be "A A A".)', async t => {
    t.is(f.formatted('{a} {a} {a}', {a: 'A', b: 'B'}), 'A A A');
});
