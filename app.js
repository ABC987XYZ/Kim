const theme = document.createElement('link');
theme.rel = 'stylesheet';
theme.href = 'flag-theme.css';
document.head.append(theme);

const manifest = document.createElement('link');
manifest.rel = 'manifest';
manifest.href = 'manifest.webmanifest';
document.head.append(manifest);
const appleIcon = document.createElement('link');
appleIcon.rel = 'apple-touch-icon';
appleIcon.href = 'icon.svg';
document.head.append(appleIcon);
const mobileCapable = document.createElement('meta');
mobileCapable.name = 'apple-mobile-web-app-capable';
mobileCapable.content = 'yes';
document.head.append(mobileCapable);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
}

const lessonData = {
  warmup: `<section class="class-step"><p class="step-label">STEP 1 · WARM-UP · 2 MIN</p><h3>What makes a greeting feel kind?</h3><p>In English, “hello” can work almost anywhere. Korean has a similar all-purpose greeting. Listen first—no pressure to copy it perfectly yet.</p><div class="big-phrase"><span class="hangul">안녕하세요 <small>annyeonghaseyo</small></span><b>Hello.</b><button class="play" data-say="안녕하세요">▶</button></div><div class="teacher-says"><b>Teacher says:</b> The ending <span class="hangul">요 <small>yo</small></span> makes this sound politely friendly. Think of it as adding a gentle smile to your words.</div><button class="primary next-step" data-next="words">Ready for the words <span>→</span></button></section>`,
  words: `<section class="class-step"><p class="step-label">STEP 2 · WORDS & MEANING · 3 MIN</p><h3>Three words you can use today</h3><p>Read the Hangul, then check the pronunciation guide. Tap play and repeat each one aloud.</p><div class="word-list">${[['안녕하세요','Hello','annyeonghaseyo'],['저','I / me (polite)','jeo'],['이름','name','ireum'],['이에요','am / is (polite)','ieyo']].map(([ko,en,ro])=>`<article class="word"><button class="play" data-say="${ko}">▶</button><div><b class="hangul">${ko} <small>${ro}</small></b><small>${en}</small></div><span class="roman">say: ${ro}</span></article>`).join('')}</div><div class="sentence-box"><b>Put it together:</b><span class="hangul">제 이름은 나오미예요. <small>je ireumeun Naomi-yeyo</small></span><p>My name is Naomi.</p><button class="play mini" data-say="제 이름은 나오미예요">▶ Hear it</button></div><button class="primary next-step" data-next="speech">Let’s practise speaking <span>→</span></button></section>`,
  speech: `<section class="class-step"><p class="step-label">STEP 3 · SAY IT ALOUD · 3 MIN</p><h3>Your turn, Naomi.</h3><p>Say each chunk slowly. Korean syllables are like little building blocks: one clear beat at a time.</p><div class="repeat-lines"><div><b>1</b><span class="hangul">안녕하세요 <small>annyeonghaseyo</small></span><button class="play" data-say="안녕하세요">▶</button></div><div><b>2</b><span class="hangul">제 이름은 나오미예요 <small>je ireumeun Naomi-yeyo</small></span><button class="play" data-say="제 이름은 나오미예요">▶</button></div></div><div class="challenge"><b>Mini challenge</b><p>Imagine you are meeting a Korean exchange student. Wave, say the greeting, then introduce yourself. You’ve got this.</p></div><button class="primary next-step" data-next="listen">Hear it in a conversation <span>→</span></button></section>`,
  listen: `<section class="class-step"><p class="step-label">STEP 4 · HEAR & READ · 3 MIN</p><h3>Listen for the greeting</h3><p>Read the dialogue once. Then play it and notice the polite <span class="hangul">요 <small>yo</small></span> sound at the end.</p><div class="dialogue"><p><b>민지 <small>Minji</small>:</b> <span class="hangul">안녕하세요! <small>annyeonghaseyo!</small></span></p><p><b>나오미 <small>Naomi</small>:</b> <span class="hangul">안녕하세요. 제 이름은 나오미예요. <small>annyeonghaseyo. je ireumeun Naomi-yeyo.</small></span></p><hr><p class="translation">Minji: Hello!<br/>Naomi: Hello. My name is Naomi.</p><button class="primary" data-say="안녕하세요. 제 이름은 나오미예요">Hear the conversation <span>▶</span></button></div><div class="culture-close"><span>🇰🇷</span><div><p class="step-label">CULTURE CLOSE · SOUTH KOREA · 1 MIN</p><h4>A little bow goes a long way.</h4><p>When Korean people greet someone, a small bow often comes with <span class="hangul">안녕하세요 <small>annyeonghaseyo</small></span>. With close friends, it may just be a nod or a cheerful wave. The deeper the bow, the more respect it shows.</p></div></div><button class="primary" data-go="writing">Next: write your first Hangul letter <span>→</span></button></section>`
};

const letters = [
  {letter:'ㅏ',sound:'a',shape:'a vertical line with a short stroke to the right',word:'아이',roman:'ai',meaning:'child'},
  {letter:'ㅑ',sound:'ya',shape:'a vertical line with two short strokes to the right',word:'야구',roman:'yagu',meaning:'baseball'},
  {letter:'ㅓ',sound:'eo',shape:'a vertical line with a short stroke to the left',word:'어머니',roman:'eomeoni',meaning:'mother'},
  {letter:'ㅕ',sound:'yeo',shape:'a vertical line with two short strokes to the left',word:'여우',roman:'yeou',meaning:'fox'},
  {letter:'ㅗ',sound:'o',shape:'a horizontal line with a short stroke pointing up',word:'오이',roman:'oi',meaning:'cucumber'}
];
const mentors = [
  ['Sora','soft waves','#33241f','#eac19f','#d74754'],['Yuna','round bob','#201d20','#f1c7a8','#315fbd'],
  ['Jisoo','high ponytail','#422c27','#dfaa87','#d74754'],['Minji','braided hair','#2e2322','#e9bb95','#315fbd'],
  ['Ara','short curls','#2a2421','#d9a27e','#d74754'],['Hana','long straight hair','#17191d','#efc8a5','#315fbd'],
  ['Nari','side bun','#4a3027','#e5b48f','#d74754']
];
const reviewCards = [
  {ko:'안녕하세요',en:'Hello',ro:'annyeonghaseyo'},{ko:'저',en:'I / me (polite)',ro:'jeo'},
  {ko:'이름',en:'name',ro:'ireum'},{ko:'이에요',en:'am / is (polite)',ro:'ieyo'},
  {ko:'요',en:'polite sentence ending',ro:'yo'},{ko:'제',en:'my (polite)',ro:'je'},
  {ko:'나오미',en:'Naomi',ro:'Naomi'},{ko:'친구',en:'friend',ro:'chingu'}
];
let letterIndex = 0, soundOn = true, reviewIndex = 0;
const completed = new Set();

function updateGoal() {
  document.getElementById('dailyDone').textContent = completed.size;
  document.getElementById('goalWords').textContent = `${completed.size} of 3 activities complete`;
}
function showPage(id) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a.dataset.page===id));
  document.getElementById('pageTitle').textContent=({home:'Good morning, Naomi.',learn:'Lesson 1: First hellos',writing:'Hangul Lab: Writing',review:'Your review is ready.',library:'Your learning library.'})[id];
  if(['learn','writing','review'].includes(id)) completed.add(id);
  updateGoal(); window.location.hash=id;
}
function renderLesson(topic='warmup') {
  document.getElementById('lessonContent').innerHTML=lessonData[topic];
  document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.lesson===topic));
}
function renderLetter() {
  const x=letters[letterIndex]; document.getElementById('letterNumber').textContent=letterIndex+1;
  const finish=letterIndex===letters.length-1;
  const nextButton=finish
    ? `<button class="primary" data-go="review">Finish writing · Start review <span>→</span></button>`
    : `<button class="primary" id="nextLetter">I wrote it! Next letter <span>→</span></button>`;
  document.getElementById('letterLesson').innerHTML=`<p class="step-label">TODAY'S LETTER</p><div class="letter-display"><span class="hangul">${x.letter}</span><button class="play" data-say="${x.letter}">▶</button></div><h3>Say <b>“${x.sound}”</b> like the <i>a</i> in “father.”</h3><p>This letter is ${x.shape}. Trace it in the air with one finger, then write it three times on paper.</p><div class="stroke-row"><span>1</span><div class="stroke-guide hangul">│<i>─</i></div><p>Start with the long line, then add the short line.</p></div><div class="find-word"><p>Find it in this word:</p><b class="hangul">${x.word} <small>${x.roman}</small></b><span>${x.meaning}</span></div>${nextButton}`;
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===letterIndex));
}
function renderCharacter() {
  const m=mentors[new Date().getDay()], root=document.getElementById('dailyCharacter');
  root.style.setProperty('--hair',m[2]); root.style.setProperty('--skin',m[3]); root.style.setProperty('--shirt',m[4]);
  root.dataset.style=new Date().getDay();
  root.innerHTML=`<div class="mentor-bubble"><b>${m[0]}</b><small>your guide today</small></div><div class="mentor"><i class="mentor-hair"></i><i class="mentor-ear"></i><i class="mentor-face"><b class="eye eye-left"></b><b class="eye eye-right"></b><em class="nose"></em><strong class="smile"></strong><span class="blush blush-left"></span><span class="blush blush-right"></span></i><i class="mentor-neck"></i><i class="mentor-shirt"><span class="shirt-collar"></span></i><span class="hair-clip">✦</span></div><span class="character-caption">${m[0]} · ${m[1]}</span>`;
}
function say(text) {
  if(!soundOn){toast('Audio is off');return;}
  if(!('speechSynthesis' in window)){toast('Audio playback is not supported in this browser.');return;}
  speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.lang='ko-KR';
  utterance.rate=.76;
  speechSynthesis.speak(utterance);
}
function renderReview(showAnswer=false) {
  const card=reviewCards[reviewIndex%reviewCards.length], el=document.getElementById('reviewCard'), position=(reviewIndex%reviewCards.length)+1;
  el.classList.remove('hidden');
  el.innerHTML=`<p class="label">KOREAN → ENGLISH · ${position} OF ${reviewCards.length}</p><h3 class="hangul">${card.ko}<small>${card.ro}</small></h3>${showAnswer?`<div class="answer">${card.en}<small>${card.ro}</small></div><div class="answer-actions"><button data-review="again">Again</button><button class="know" data-review="know">I knew it</button></div>`:`<button class="primary" id="reveal">Reveal answer <span>→</span></button>`}`;
}
function toast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2300);}
document.addEventListener('click',event=>{
  const go=event.target.closest('[data-go]'); if(go) showPage(go.dataset.go);
  const nav=event.target.closest('.nav-link'); if(nav){event.preventDefault();showPage(nav.dataset.page);}
  const tab=event.target.closest('.tab'); if(tab) renderLesson(tab.dataset.lesson);
  const next=event.target.closest('[data-next]'); if(next) renderLesson(next.dataset.next);
  const audio=event.target.closest('[data-say]'); if(audio) say(audio.dataset.say);
  if(event.target.id==='nextLetter'){letterIndex=(letterIndex+1)%letters.length;renderLetter();toast('Nice work — a new letter is ready!');}
  if(event.target.id==='startReview'){completed.add('review');updateGoal();renderReview();}
  if(event.target.id==='reveal') renderReview(true);
  const review=event.target.closest('[data-review]'); if(review){reviewIndex=(reviewIndex+1)%reviewCards.length;renderReview();toast(review.dataset.review==='know'?'Great — next review scheduled.':'No problem — we’ll practise it again soon.');}
  if(event.target.closest('.sound-toggle')){soundOn=!soundOn;event.target.closest('.sound-toggle').textContent=soundOn?'⌁':'⌁̸';toast(soundOn?'Audio on':'Audio off');}
});
document.querySelector('meta[name="theme-color"]').content='#ffffff';
document.querySelector('.brand span').innerHTML='김<small>gim</small>';
document.querySelector('.activity-note b').textContent='Your Korean journey starts here.';
document.querySelector('.activity-note span').textContent='A little practice each day adds up.';
renderLesson(); renderLetter(); renderCharacter(); updateGoal();
if(location.hash&&document.querySelector(location.hash)) showPage(location.hash.slice(1));
