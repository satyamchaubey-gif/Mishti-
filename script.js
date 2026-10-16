const surpriseBtn=document.getElementById('surpriseBtn');
const toast=document.getElementById('toast');
function hearts(count=18){for(let i=0;i<count;i++){const h=document.createElement('span');h.className='heart';h.textContent=['♡','✦','♥','✧'][Math.floor(Math.random()*4)];h.style.left=(10+Math.random()*80)+'vw';h.style.top=(55+Math.random()*30)+'vh';h.style.fontSize=(15+Math.random()*22)+'px';h.style.animationDelay=(Math.random()*.6)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),3200)}}
surpriseBtn.addEventListener('click',()=>{document.getElementById('letter').scrollIntoView({behavior:'smooth'});hearts(24);toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3500)});
document.getElementById('wishBtn').addEventListener('click',()=>{document.getElementById('wishMessage').textContent='Close your eyes, make a wish… ✨ May it find its way to you. ♡';hearts(16)});
