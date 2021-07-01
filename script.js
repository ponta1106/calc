btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
  textarea = document.getElementById('textarea');
  const content = textarea.value;
  alert(content);
})