document.getElementById('year').textContent = new Date().getFullYear();
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-header nav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));}
const form=document.getElementById('enquiry-form');
const status=document.getElementById('form-status');
if(form&&status){form.addEventListener('submit',e=>{e.preventDefault();status.textContent='Enquiry system is being activated. Please contact Akshay directly by email or WhatsApp.';});}