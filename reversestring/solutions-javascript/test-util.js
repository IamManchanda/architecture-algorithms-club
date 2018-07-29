module.exports = (reverse) => {
  test('Reverse function exists', () => {
    expect(reverse)
      .toBeDefined();
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse('abcd'))
      .toEqual('dcba');
  });
  
  test('Reverse reverses a string including spaces', () => {
    expect(reverse('  abcd'))
      .toEqual('dcba  ');
  });
};
