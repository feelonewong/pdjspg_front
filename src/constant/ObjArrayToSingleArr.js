export function toSingleArr(arr, KEY) {
  const newArr = [];
  arr.map((item) => {
    if( KEY in item){
        newArr.push(item[KEY]);
    }
  })
  return newArr;
}