document.addEventListener('DOMContentLoaded', ()=> {
  const upBtn = document.getElementById('up');
  const downBtn = document.getElementById('down');
  const result = document.getElementById('result');

  let resultNum = 0;
  result.innerText = resultNum;

  upBtn.addEventListener('click', ()=> {
    let input = document.getElementById('input').value;
    input = Number(input);
    resultNum += input;
    result.innerText = resultNum;
  });
  
  downBtn.addEventListener('click', ()=> {
    let input = document.getElementById('input').value;
    input = Number(input);
    resultNum -= input;
    result.innerText = resultNum;
  });
  
});