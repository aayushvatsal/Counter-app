const countValue = document.querySelector('#counter');

const increment = () => {
    //get the value from UI
  let value =parseInt(countValue.innerText);
  //UPDATE THE VALUE
  value = value + 1;
  //set the value
  countValue.innerText = value;
};

const decrement = () => {
    //get the value from UI
  let value =parseInt(countValue.innerText);
  //UPDATE THE VALUE
  value = value - 1;
  //set the value
  countValue.innerText = value;
};