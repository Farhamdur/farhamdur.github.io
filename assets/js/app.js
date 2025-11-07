(function(){
  const pref = localStorage.getItem('theme'); if(pref==='light'){document.documentElement.classList.add('light');}
  document.querySelector('.theme-btn')?.addEventListener('click', ()=>{ document.documentElement.classList.toggle('light'); localStorage.setItem('theme', document.documentElement.classList.contains('light')?'light':'dark'); });
  const mb=document.querySelector('.menu-btn'), menu=document.querySelector('.menu'); mb?.addEventListener('click', ()=> menu.classList.toggle('open'));
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{ if(a.getAttribute('href')===current){ a.classList.add('active'); }});
})();