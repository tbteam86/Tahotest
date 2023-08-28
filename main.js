let money = 2000;

document.getElementById('btn').onclick = function(){
  money -= parseInt(document.getElementById('amount').value);
  
  document.getElementById('money').innerHTML = money;
}
  
