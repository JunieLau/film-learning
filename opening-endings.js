(()=>{
'use strict';
const toc=document.querySelector('.oe-toc');
function measure(){
  const bar=document.querySelector('.topbar');
  const top=bar?bar.getBoundingClientRect().height:0;
  const height=toc?toc.getBoundingClientRect().height:0;
  document.documentElement.style.setProperty('--topbar-height',top+'px');
  document.documentElement.style.setProperty('--oe-toc-height',height+'px');
}
measure();
window.addEventListener('resize',measure,{passive:true});
if(window.ResizeObserver){
  const observer=new ResizeObserver(measure);
  const bar=document.querySelector('.topbar');
  if(bar)observer.observe(bar);
  if(toc)observer.observe(toc);
}

document.querySelectorAll('.oe-play').forEach(button=>{
  button.addEventListener('click',()=>{
    const id=button.dataset.youtube;
    if(!id||button.dataset.loaded==='true')return;
    button.dataset.loaded='true';
    const iframe=document.createElement('iframe');
    const params=new URLSearchParams({rel:'0',modestbranding:'1'});
    iframe.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?'+params.toString();
    iframe.title=button.dataset.title||'YouTube';
    iframe.allow='encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen=true;
    iframe.referrerPolicy='strict-origin-when-cross-origin';
    iframe.className='oe-iframe';
    iframe.loading='eager';
    const player=button.closest('.oe-player')||button.parentElement;
    button.replaceWith(iframe);
    if(player)player.dataset.state='loaded';
  });
});

const dialog=document.querySelector('.oe-dialog');
const dialogImg=dialog?.querySelector('img');
document.querySelectorAll('.oe-zoom').forEach(button=>{
  button.addEventListener('click',()=>{
    if(!dialog||!dialogImg){
      const href=button.dataset.full;
      if(href)window.open(href,'_blank','noopener');
      return;
    }
    dialogImg.src=button.dataset.full;
    dialogImg.alt=button.dataset.alt||'';
    if(typeof dialog.showModal==='function')dialog.showModal();
    else window.open(button.dataset.full,'_blank','noopener');
  });
});

if(toc){
  const links=[...toc.querySelectorAll('a[href^="#"]')];
  const entries=links.map(a=>({a,el:document.getElementById(a.getAttribute('href').slice(1))})).filter(x=>x.el);
  let active=null;
  function select(a){
    if(active===a)return;
    if(active)active.removeAttribute('aria-current');
    active=a;
    if(a)a.setAttribute('aria-current','location');
  }
  function spy(){
    const offset=(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--topbar-height'))||0)+(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--oe-toc-height'))||0)+24;
    let current=entries[0];
    for(const entry of entries){
      if(entry.el.getBoundingClientRect().top<=offset)current=entry;
      else break;
    }
    if(current)select(current.a);
  }
  window.addEventListener('scroll',()=>requestAnimationFrame(spy),{passive:true});
  spy();
}
})();
