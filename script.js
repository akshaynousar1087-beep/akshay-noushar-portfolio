
const toggle=document.querySelector('.menu-toggle');
if(toggle){toggle.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const form=document.getElementById('enquiry-form');
if(form){form.addEventListener('submit',(e)=>{e.preventDefault();const status=document.getElementById('form-status');status.textContent='Enquiry system is being activated. For now, please use email or WhatsApp above.';});}
