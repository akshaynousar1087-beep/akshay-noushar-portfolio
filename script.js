
const toggle=document.querySelector('.menu-toggle');
if(toggle){toggle.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();


// Live portfolio enquiry submission
const enquiryForm = document.getElementById("portfolio-enquiry");
if (enquiryForm) {
  const statusEl = document.getElementById("form-status");
  enquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submit = enquiryForm.querySelector('button[type="submit"], input[type="submit"]');
    const fd = new FormData(enquiryForm);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || null,
      project_type: String(fd.get("project_type") || fd.get("project") || "General enquiry").trim(),
      message: String(fd.get("message") || "").trim(),
      source: "akshay-noushar-portfolio"
    };

    if (!payload.name || !payload.email || !payload.message) {
      if (statusEl) statusEl.textContent = "Please complete your name, email and project message.";
      return;
    }

    if (submit) submit.disabled = true;
    if (statusEl) statusEl.textContent = "Sending…";

    try {
      const response = await fetch("https://aguvmmwaokaragwfkcjj.supabase.co/rest/v1/portfolio_enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": "sb_publishable_4GdGf7aSt5ShMJJBEkemyw_9COpTM52",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Submission failed");
      enquiryForm.reset();
      if (statusEl) statusEl.textContent = "Thank you. Your enquiry has been received.";
    } catch (error) {
      if (statusEl) statusEl.textContent = "Could not send right now. Please use the direct email or WhatsApp option.";
    } finally {
      if (submit) submit.disabled = false;
    }
  });
}
