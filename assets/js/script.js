const CONTRACT='CiC5iLSSEcvzSxhJZHUL99fi4iw85PHyZG84z7KcayFC';
function copyContract(){navigator.clipboard.writeText(CONTRACT).then(()=>alert('Contract address copied to clipboard'));}
const backBtn=document.getElementById('backTop');
window.addEventListener('scroll',()=>{ if(window.scrollY>500){ backBtn.classList.add('show'); } else { backBtn.classList.remove('show'); } });
backBtn?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const dex=document.getElementById('dexFrame');
if('IntersectionObserver'in window&&dex){const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!dex.src){dex.src=dex.dataset.src;io.disconnect();}})});io.observe(dex);}else if(dex){dex.src=dex.dataset.src;}
(function(){const el=document.getElementById('visit-count'); if(!el) return; fetch('https://api.countapi.xyz/hit/linkgama3.com/visits').then(r=>r.json()).then(d=>el.textContent=d.value).catch(()=>el.textContent='—');})();
