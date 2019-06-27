const script = require("./script")
const assert = require('assert')

// operatorA
it('matchTheLogestNumberInOperator should return the prefix 4620', () => {
  assert.equal(
      matchTheLogestNumberInOperator(phone_number, operatorA).prefix, 
      4620
      ) ;
})
it('matchTheLogestNumberInOperator should return the price 0', () => {
    assert.equal(
        matchTheLogestNumberInOperator(phone_number, operatorA).price, 
         0
        ) ;
  })

  //+46-73-212345
  it('matchTheLogestNumberInOperator should return the prefix 46732', () => {
    assert.equal(
        matchTheLogestNumberInOperator("+46-73-212345", operatorA).prefix, 
         46732
        ) ;
  })
  it('matchTheLogestNumberInOperator should return the price 1.1', () => {
      assert.equal(
          matchTheLogestNumberInOperator("+46-73-212345", operatorA).price, 
           1.1
          ) ;
    })

    // operatorB
it('matchTheLogestNumberInOperator should return the prefix 46', () => {
    assert.equal(
        matchTheLogestNumberInOperator(phone_number, operatorB).prefix, 
        46
        ) ;
  })
  it('matchTheLogestNumberInOperator should return the price 0.01', () => {
      assert.equal(
          matchTheLogestNumberInOperator(phone_number, operatorB).price, 
           0.01
          ) ;
    })
  
    //+46-73-212345
    it('matchTheLogestNumberInOperator should return the prefix 467', () => {
      assert.equal(
          matchTheLogestNumberInOperator("+46-73-212345", operatorB).prefix, 
           467
          ) ;
    })
    it('matchTheLogestNumberInOperator should return the price 1', () => {
        assert.equal(
            matchTheLogestNumberInOperator("+46-73-212345", operatorB).price, 
             1
            ) ;
      })

//findTheCheapestOperator
it('findTheCheapestOperator should return the price A', () => {
    assert.equal(
        findTheCheapestOperator(phone_number, [
            { op_name: "A", operator : operatorA },
            { op_name: "B", operator : operatorB }
          ]), 
         "A"
        ) ;
  })

  ////+46-73-212345
  it('findTheCheapestOperator should return the price B', () => {
    assert.equal(
        findTheCheapestOperator("+46-73-212345", [
            { op_name: "A", operator : operatorA },
            { op_name: "B", operator : operatorB }
          ]), 
         "B"
        ) ;
  })
