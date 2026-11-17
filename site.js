/* Shared helpers for the public pages (index.html, blog.html).
   Content lives in content/*.json and is edited from /admin. */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const isZh=()=>document.documentElement.lang==='zh';
const CY={langHooks:[]};

/* Admin "preview" drafts: /admin can stash unsaved JSON in localStorage and open ?preview=1 */
async function loadJSON(name){
  try{ if(new URLSearchParams(location.search).has('preview')){const d=localStorage.getItem('cy-draft-'+name); if(d) return JSON.parse(d);} }catch(e){}
  const base=document.querySelector('meta[name=cy-root]')?.content||'';
  const r=await fetch(base+'content/'+name+'.json?v='+Date.now()); return r.json();
}

function setLang(l){
  document.documentElement.lang=l;
  $$('[data-lang-btn]').forEach(b=>b.classList.toggle('on',b.dataset.langBtn===l));
  $$('[data-ph-en]').forEach(i=>i.placeholder=i.getAttribute('data-ph-'+l)||i.placeholder);
  try{localStorage.lang=l}catch(e){}
  CY.langHooks.forEach(f=>f(l));
}
function initLang(){let l='en';try{l=localStorage.lang||(navigator.language.startsWith('zh')?'zh':'en')}catch(e){} setLang(l)}

/* very small Markdown: ## headings, ![alt](src) images, **bold**, [text](url), paragraphs */
function md(src){
  return String(src||'').split(/\n{2,}/).map(b=>{
    b=b.trim(); if(!b) return '';
    const im=b.match(/^!\[([^\]]*)\]\(([^)]+)\)$/); if(im) return `<img src="${esc(im[2])}" alt="${esc(im[1])}" loading="lazy">`;
    let h=esc(b).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\[([^\]]+)\]\((https?:[^)]+|[^)]+\.html[^)]*)\)/g,'<a href="$2" style="color:var(--gaea)">$1</a>').replace(/\n/g,'<br>');
    if(b.startsWith('## ')) return `<h2>${h.slice(3)}</h2>`;
    return `<p>${h}</p>`;
  }).join('');
}

function reveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
    const el=e.target;
    if(el.dataset.count){const max=+el.dataset.count,d=+el.dataset.dec||0,t0=performance.now();
      (function f(t){const p=Math.min((t-t0)/2000,1),v=max*(1-Math.pow(1-p,4));el.textContent=v.toFixed(d);if(p<1)requestAnimationFrame(f)})(t0)}
    else el.classList.add('in')}),{threshold:.2});
  $$('[data-count],.reveal').forEach(el=>io.observe(el));
}
