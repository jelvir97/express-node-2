const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('works AM', ()=>{
    expect(timeWord('00:12')).toEqual('twelve twelve am')

    expect(timeWord('06:10')).toEqual("six ten am")
    expect(timeWord('06:18')).toEqual("six eighteen am")
    expect(timeWord('06:30')).toEqual("six thirty am")
    expect(timeWord('10:34')).toEqual("ten thirty four am")
  })

  test('works PM', ()=>{
    expect(timeWord('12:09')).toEqual("twelve oh nine pm")
    expect(timeWord('23:23')).toEqual("eleven twenty three pm")
  })

  test('works noon and midnight', ()=>{
    expect(timeWord('00:00')).toEqual('midnight')
    expect(timeWord('12:00')).toEqual("noon")
  })

  test('works oclock and oh -', ()=>{
    expect(timeWord('01:00')).toEqual("one o'clock am")
    expect(timeWord('06:01')).toEqual("six oh one am")
  })
});
