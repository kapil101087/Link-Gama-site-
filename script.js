function copyContract(){
  const ca = 'REPLACE_WITH_CONTRACT_ADDRESS';
  navigator.clipboard.writeText(ca).then(()=>{
    const btn = document.querySelector('.copy-btn');
    if(btn){ btn.textContent='Copied!'; setTimeout(()=>btn.textContent='Copy Contract Address', 1800); }
  }).catch(()=> alert('Unable to copy on this device.'));
}

const revealEls = [];
document.addEventListener('DOMContentLoaded', () => {
  // year
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // Roadmap reveal
  document.querySelectorAll('.roadmap-phase').forEach((el, idx)=>{
    el.style.animationDelay = (0.2 + idx*0.2) + 's';
    revealEls.push(el);
  });
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.animation = 'fadeUp 1s ease-out forwards';
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.2});
  revealEls.forEach(el=>io.observe(el));

  // Back to top
  const back = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) back.classList.add('show'); else back.classList.remove('show');
  });
  if (back) back.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', ()=>{
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>links.classList.remove('open')));
  }
});
