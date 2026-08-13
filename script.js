const toggle=document.querySelector('.menu-toggle');
if(toggle){toggle.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.getElementById('enquiry-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const s=document.getElementById('form-status');s.textContent='Enquiry backend is the next integration step. Please use email or WhatsApp for now.';});}
