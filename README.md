# Programming Exercise
### alaTest (ICSS) Challenge 2019


>run :
```npm install```
```npm test```
 > to see the result of the unit tests

there is two function ```matchTheLogestNumberInOperator``` and ```findTheCheapestOperator```.
## 1 ```matchTheLogestNumberInOperator```:
 When several prefixes match the same number, the longest one should be used.
##### The params of the function
1. The phone number should be a string any string 
"+458799-987" or "65877445488" or "4f555gg44f4+g8gg"
the function clean the string befor it calcul the result
2.The second param is array of object that represent the price lists :
```
priceLists = [
  { prefix: 1, price: 0.9 },
  { prefix: 268, price: 5.1 },
  ...];
```
##### The result  of the function
The result is an object look like this :
```
result = {
    prefix: 0,
    price: 0
  };
```

## 1 ```findTheCheapestOperator```:
Can calculate which operator that is cheapest for a certain number
#### The params of the function :

1. phone number like we explain before
2. array of object look like this  :
```sh
[
    { op_name: "A", operator : listOfPriceA },
    { op_name: "B", operator : listOfPriceB }
  ]
```

#### The result of this function :
a string represent the name of the operator that is cheapest


#### My cv is in cv.pdf
