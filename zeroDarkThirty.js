function zeroDarkThirty(num) {
  
if (num === 0){
  return NaN  
}
 
  let result = '';
  num = String(num);
    if (num === 0) {
      result = NaN;
  }
  for (let i = 0; i <= num.length-1; i++) {
    if (num[i] !== 0) {
    result = num[i];
    }
    return Number(result)
  }
}

describe('zeroDarkThirty', () => {

  it('is a function', () => {
    expect(typeof zeroDarkThirty).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = zeroDarkThirty(10);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the original number after stripping out the zeros', () => {
    let returnedValue = zeroDarkThirty(10000000000);
    expect(returnedValue).toEqual(1);
  });

  it('returns NaN if given an 0', () => {
    let returnedValue = zeroDarkThirty(0);
    expect(returnedValue).toEqual(NaN);
  });

});
