(function(){
var nav=document.getElementById('nav'),menu=document.getElementById('menu'),b=document.getElementById('burger');
function sc(){nav.classList.toggle('s',scrollY>20)}sc();addEventListener('scroll',sc,{passive:true});
b.addEventListener('click',function(){menu.classList.toggle('open');nav.classList.toggle('o')});
menu.addEventListener('click',function(){menu.classList.remove('open');nav.classList.remove('o')});
var t=document.getElementById('track');t.innerHTML+=t.innerHTML;
document.querySelectorAll('.bar').forEach(function(e){e.style.setProperty('--w',e.dataset.w)});
function count(el){var n=+el.dataset.n,p=el.dataset.p||'',s=el.dataset.s||'',st=null,d=1600;
function f(ts){st=st||ts;var k=Math.min((ts-st)/d,1),v=Math.round(n*(1-Math.pow(1-k,3)));el.textContent=p+v.toLocaleString('en-US')+(k===1?s:'');if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
document.querySelectorAll('.rv,.bars').forEach(function(e){io.observe(e)});
var so=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.querySelectorAll('b[data-n]').forEach(count);so.unobserve(x.target)}})},{threshold:.4});
var st=document.querySelector('.stats');if(st)so.observe(st);
document.querySelectorAll('details').forEach(function(d){d.addEventListener('toggle',function(){if(d.open)document.querySelectorAll('details[open]').forEach(function(o){if(o!==d)o.open=false})})});
})();
