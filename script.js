const toggle=document.querySelector('.menu-toggle');
const menu=document.getElementById('mobile-menu');
function setMenu(open){toggle?.setAttribute('aria-expanded',String(open));if(menu)menu.hidden=!open;}
toggle?.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){setMenu(false);toggle.focus();}});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
window.matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)setMenu(false);});
const subject=document.getElementById('subject');const draft=document.getElementById('email-draft');
subject?.addEventListener('change',()=>{const s=subject.value;draft.href='mailto:info@eljonsson.se'+(s?'?subject='+encodeURIComponent('Förfrågan: '+s)+'&body='+encodeURIComponent('Hej Eljonsson!\n\nJag vill ha hjälp med '+s.toLowerCase()+'.\n\nPlats för jobbet: \nBeskrivning: \nMitt telefonnummer: \n\nVänliga hälsningar\n'):'');});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal');io.unobserve(e.target);}})},{threshold:.1});document.querySelectorAll('.section-head,.people-intro,.intro-section').forEach(el=>io.observe(el));}
