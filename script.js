const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function go(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),3000)}
addEventListener('scroll',()=>$('.progress').style.width=(scrollY/(document.body.scrollHeight-innerHeight)*100)+'%');
const ob=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});$$('.reveal').forEach(x=>ob.observe(x));
$$('.filters button').forEach(b=>b.onclick=()=>{ $$('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');let f=b.dataset.filter;$$('.grid figure').forEach(x=>x.style.display=f==='all'||x.dataset.cat===f?'':'none') });
const lb=$('#lightbox'), img=$('#lbImg'), cap=$('#lbCap');$$('.grid figure,.portrait-row figure').forEach(f=>f.onclick=()=>{lb.classList.add('show');img.src=f.querySelector('img').src;cap.textContent=f.querySelector('figcaption')?.textContent||''});$('.close').onclick=()=>lb.classList.remove('show');lb.onclick=e=>{if(e.target===lb)lb.classList.remove('show')};
$('#music').onclick=()=>toast('Music control is ready — add your favourite song when you are ready.');
const reelImgs=['assets/photo_61.jpg','assets/photo_23.jpg','assets/photo_07.jpg','assets/photo_05.jpg','assets/photo_21.jpg','assets/photo_58.jpg','assets/photo_15.jpg','assets/photo_67.jpg','assets/photo_27.jpg','assets/photo_64.jpg'];
$('#reelTrack').innerHTML=[...reelImgs,...reelImgs].map((s,i)=>`<div class="reel-card"><img src="${s}"><span>Memory ${i%10+1} ✨</span></div>`).join('');
$('#videoInput').addEventListener('change',e=>{const list=$('#videoList');list.innerHTML='';[...e.target.files].forEach(file=>{const url=URL.createObjectURL(file), v=document.createElement('video');v.controls=true;v.src=url;list.appendChild(v)})});

const herStrip=document.getElementById('herHorizontal');
const herLeft=document.querySelector('.her-arrow.left');
const herRight=document.querySelector('.her-arrow.right');
if(herStrip && herLeft && herRight){
  herLeft.addEventListener('click',()=>herStrip.scrollBy({left:-280,behavior:'smooth'}));
  herRight.addEventListener('click',()=>herStrip.scrollBy({left:280,behavior:'smooth'}));
}
const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("music");

musicButton.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicButton.textContent = "🔊";
    } else {
        bgMusic.pause();
        musicButton.textContent = "♫";
    }
});
