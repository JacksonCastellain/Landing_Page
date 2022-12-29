const h1 = document.querySelector('.container h5');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full',  timeStyle: 'medium'});