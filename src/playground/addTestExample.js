const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;
/**
 * @param string pequeña descripción del test
 * @param fn callback que valida los tests
 */
test('should add two numbers', () => {
    const result = add(3,4);
    // Jest lib func
    expect(result).toBe(7);
});

test('should generate greeting', () => {
    const result = generateGreeting('Junaid');
    expect(result).toBe('Hello Junaid!');
});