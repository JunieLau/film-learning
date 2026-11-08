/* Named, focused structure diagrams. Labels are real bilingual text, never a number-only key. */
(()=>{'use strict';window.StcOfficialPercent=[[0,1],[5,5],[1,10],[10,10],[10,20],[20,20],[22,22],[20,50],[50,50],[50,75],[75,75],[75,80],[80,80],[80,99],[99,100]];const models={"campbell": [["冒险的召唤", "The Call to Adventure"], ["拒绝召唤", "Refusal of the Call"], ["超自然援助", "Supernatural Aid"], ["跨越第一道门槛", "The Crossing of the First Threshold"], ["鲸腹", "The Belly of the Whale"], ["试炼之路", "The Road of Trials"], ["与女神相遇", "The Meeting with the Goddess"], ["女人作为诱惑者", "Woman as the Temptress"], ["与父亲和解／合一", "Atonement with the Father"], ["神化／顿悟", "Apotheosis"], ["终极恩赐", "The Ultimate Boon"], ["拒绝返回", "Refusal of the Return"], ["魔法逃亡", "The Magic Flight"], ["外界救援", "Rescue from Without"], ["跨越返回的门槛", "The Crossing of the Return Threshold"], ["两个世界的主人", "Master of the Two Worlds"], ["生活的自由", "Freedom to Live"]], "vogler": [["平凡世界", "Ordinary World"], ["冒险召唤", "Call to Adventure"], ["拒绝召唤", "Refusal of the Call"], ["遇见导师", "Meeting with the Mentor"], ["跨越门槛", "Crossing the First Threshold"], ["考验、盟友、敌人", "Tests, Allies, Enemies"], ["接近最深洞穴", "Approach to the Inmost Cave"], ["严峻考验", "Ordeal"], ["奖赏", "Reward"], ["归途", "The Road Back"], ["复活／最终考验", "Resurrection"], ["携灵药归返", "Return with the Elixir"]], "harmon": [["你／舒适区", "You"], ["需要", "Need"], ["出发", "Go"], ["寻找／适应", "Search"], ["找到", "Find"], ["付出代价", "Take"], ["返回", "Return"], ["改变", "Change"]], "beats": [["开场画面", "Opening Image"], ["主题呈现", "Theme Stated"], ["铺垫", "Set-Up"], ["催化剂／触发事件", "Catalyst"], ["争辩／犹豫", "Debate"], ["进入第二幕", "Break into Two"], ["B 故事／副线", "B Story"], ["游戏时间／类型承诺", "Fun and Games"], ["中点", "Midpoint"], ["坏人逼近／压力收紧", "Bad Guys Close In"], ["一无所有", "All Is Lost"], ["灵魂黑夜／黑暗时刻", "Dark Night of the Soul"], ["进入第三幕", "Break into Three"], ["结局／终场行动", "Finale"], ["终场画面", "Final Image"]], "three": [["铺陈／建置", "Setup"], ["对抗", "Confrontation"], ["解决／结局", "Resolution"]], "pyramid": [["引介（铺垫）", "Introduction"], ["上升", "Rise"], ["高潮／顶点（居中）", "Climax (center)"], ["下降／回落", "Return / fall"], ["灾变（结局）", "Catastrophe"]], "aristotle": [["开端：行动的起因", "Beginning: causal start"], ["中间：承前启后", "Middle: follows and leads"], ["结尾：完成后果", "End: completes consequences"]], "tension": [["激励事件", "Inciting Incident"], ["中点", "Midpoint"], ["高潮 · 第三幕后段", "Climax · late Act III"], ["收束", "Denouement"]]};window.BookStructureModels=models;const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const dual=(p,cls='')=>`<span class="${cls}"><span class="zh" lang="zh-CN">${esc(p[0])}</span><span class="en" lang="en">${esc(p[1])}</span></span>`;

/* Two separate wheels. Campbell is the full seventeen motifs and three arcs only.
   Vogler is the twelve stages, with an ordinary/special diameter and act bands.
   Neither copies a third-party poster. */
function drawHeroWheel(model){
 const names={
  campbell:[
   [['冒险的召唤'],['The Call to','Adventure']],
   [['拒绝召唤'],['Refusal of','the Call']],
   [['超自然援助'],['Supernatural','Aid']],
   [['跨越第一道','门槛'],['The Crossing of','the First Threshold']],
   [['鲸腹'],['The Belly','of the Whale']],
   [['试炼之路'],['The Road','of Trials']],
   [['与女神相遇'],['The Meeting with','the Goddess']],
   [['女人作为','诱惑者'],['Woman as the','Temptress']],
   [['与父亲','和解／合一'],['Atonement with','the Father']],
   [['神化／顿悟'],['Apotheosis']],
   [['终极恩赐'],['The Ultimate','Boon']],
   [['拒绝返回'],['Refusal of','the Return']],
   [['魔法逃亡'],['The Magic','Flight']],
   [['外界救援'],['Rescue from','Without']],
   [['跨越返回','的门槛'],['The Crossing of','the Return Threshold']],
   [['两个世界','的主人'],['Master of the','Two Worlds']],
   [['生活的自由'],['Freedom','to Live']]
  ],
  vogler:[
   [['平凡世界'],['Ordinary','World']],
   [['冒险召唤'],['Call to','Adventure']],
   [['拒绝召唤'],['Refusal of','the Call']],
   [['遇见导师'],['Meeting with','the Mentor']],
   [['跨越门槛'],['Crossing the','First Threshold']],
   [['考验、盟友、','敌人'],['Tests, Allies,','Enemies']],
   [['接近','最深洞穴'],['Approach to','the Inmost Cave']],
   [['严峻考验'],['Ordeal']],
   [['奖赏'],['Reward']],
   [['归途'],['The Road','Back']],
   [['复活／','最终考验'],['Resurrection']],
   [['携灵药归返'],['Return with','the Elixir']]
  ]
 }[model];
 const canonical=models[model];
 names.forEach((pair,i)=>{
  if(pair[0].join('')!==canonical[i][0]||pair[1].join(' ')!==canonical[i][1])throw Error('Hero wheel label drift '+model+' '+(i+1));
 });
 const W=880,H=860,cx=440,cy=430,nodeR=168,arcR=194,nameR=252,n=names.length;
 const ang=i=>-90+i*360/n;
 const rad=d=>d*Math.PI/180;
 const pt=(d,r)=>[cx+r*Math.cos(rad(d)),cy+r*Math.sin(rad(d))];
 const fmt=v=>Math.round(v*10)/10;
 const arc=(a0,a1,r)=>{
  const [x0,y0]=pt(a0,r),[x1,y1]=pt(a1,r);
  return `M${fmt(x0)} ${fmt(y0)} A ${r} ${r} 0 ${(a1-a0)>180?1:0} 1 ${fmt(x1)} ${fmt(y1)}`;
 };
 const anchor=d=>{const c=Math.cos(rad(d));return c>0.45?'start':c<-0.45?'end':'middle';};
 const block=(zh,en,x,y,textAnchor,cls)=>{
  const paint=(lang,lines)=>{
   const y0=y-((lines.length-1)*18)/2;
   return `<text class="diagram-label wheel-label ${cls} ${lang}" x="${fmt(x)}" y="${fmt(y0)}" text-anchor="${textAnchor}" dominant-baseline="central" fill="#f2f2ee" stroke="#0a0a0a" stroke-width="5">${lines.map((line,j)=>`<tspan x="${fmt(x)}" dy="${j?18:0}">${esc(line)}</tspan>`).join('')}</text>`;
  };
  return paint('zh',zh)+paint('en',en);
 };
 const phases=model==='campbell'
  ?[{zh:['出发'],en:['Departure'],a:0,b:4,c:'#f2f2ee'},{zh:['启蒙'],en:['Initiation'],a:5,b:10,c:'#f06552'},{zh:['归返'],en:['Return'],a:11,b:16,c:'#a8a89f'}]
  :[{zh:['第一幕','1–5'],en:['Act I','1–5'],a:0,b:4,c:'#f2f2ee'},{zh:['第二幕','6–9'],en:['Act II','6–9'],a:5,b:8,c:'#f06552'},{zh:['第三幕','10–12'],en:['Act III','10–12'],a:9,b:11,c:'#a8a89f'}];
 const half=180/n;
 let body=`<circle cx="${cx}" cy="${cy}" r="${nodeR}" fill="none" stroke="#8d8d86" stroke-width="1.25"/>`;
 phases.forEach(ph=>{
  const a0=ang(ph.a)-half+2.4, a1=ang(ph.b)+half-2.4;
  body+=`<path data-arc="${esc(ph.en[0])}" d="${arc(a0,a1,arcR)}" fill="none" stroke="${ph.c}" stroke-width="8" stroke-linecap="butt"/>`;
  const mid=(a0+a1)/2,[x,y]=pt(mid,112);
  body+=block(ph.zh,ph.en,x,y,'middle','wheel-phase');
 });
 if(model==='vogler'){
  body+=`<line data-diameter="ordinary-special" x1="${fmt(cx-arcR-18)}" y1="${cy}" x2="${fmt(cx+arcR+18)}" y2="${cy}" stroke="#f2f2ee" stroke-width="1.5"/>`;
  body+=block(['日常世界 · 已知'],['Ordinary · known'],cx,cy-26,'middle','wheel-world')+block(['特殊世界 · 未知'],['Special · unknown'],cx,cy+30,'middle','wheel-world');
 }
 names.forEach((pair,i)=>{
  const d=ang(i),[x,y]=pt(d,nodeR),[lx,ly]=pt(d,nameR);
  body+=`<g data-stage="${i+1}" data-motif="${esc(canonical[i][0])}"><circle cx="${fmt(x)}" cy="${fmt(y)}" r="16" fill="#111" stroke="#f2f2ee" stroke-width="1.25"/><text class="wheel-num" x="${fmt(x)}" y="${fmt(y)}" text-anchor="middle" dominant-baseline="central" fill="#f2f2ee" stroke="none">${i+1}</text></g>`;
  body+=block(pair[0],pair[1],lx,ly,anchor(d),'wheel-motif');
 });
 const tip=ang(0)-half, [tx,ty]=pt(tip,arcR+1);
 const a=rad(tip), px=Math.cos(a), py=Math.sin(a), ux=-py, uy=px, s=9;
 body+=`<path data-direction="clockwise" d="M${fmt(tx-ux*s-px*4)} ${fmt(ty-uy*s-py*4)} L${fmt(tx)} ${fmt(ty)} L${fmt(tx-ux*s+px*4)} ${fmt(ty-uy*s+py*4)}" fill="none" stroke="#f06552" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
 const desc=model==='campbell'
  ?'Campbell seventeen motifs on one circle. Arcs: Departure 1–5, Initiation 6–11, Return 12–17. Motifs and common variations, not a mandatory checklist. No known/unknown split.'
  :'Vogler twelve stages. Diameter: ordinary world (known) above, special world (unknown) below. Act bands 1–5, 6–9, and 10–12.';
 return {body:`<desc>${esc(desc)}</desc>`+body, view:`0 0 ${W} ${H}`};
}
window.BookStructureArt=(type,options={})=>{const model=options.model||({beats:'beats',three:'three',pyramid:'pyramid',cycle:'harmon',causal:'aristotle',tension:'tension'}[type]);const labels=options.labels||models[model];if(!labels)throw Error('Missing named model '+model);const active=options.focus||((options.active??-1)>=0?[options.active]:[]);const chosen=i=>!active.length||active.includes(i);const names={campbell:['坎贝尔 · 十七母题','Campbell · seventeen motifs'],vogler:['沃格勒 · 十二阶段','Vogler · twelve stages'],harmon:['哈蒙 · 八步圆环','Harmon · eight-step circle'],beats:['救猫咪 · 十五节拍','Save the Cat · fifteen beats'],three:['现代三幕 · 悉德·菲尔德','Modern three acts · Syd Field'],aristotle:['《诗学》· 开端→中间→结尾','Poetics · beginning → middle → end'],tension:['现代三幕张力示意 · 当代教学图，不是《诗学》，也不是亚⁠里⁠士⁠多⁠德','Three-act tension sketch · teaching diagram, not Poetics or Aristotle'],pyramid:['弗赖塔格 · 五部分金字塔','Freytag · five-part pyramid']};const title=options.title||names[model]||['结构关系','Structural relation'];const focusTitle=options.heading||(!active.length?(type==='beats'?['0–100% · 幕间在约 25% 与 80%','0–100% · act breaks near 25% and 80%']:model==='campbell'?['出发 · 启蒙 · 归返','Departure · Initiation · Return']:model==='vogler'?['日常／特殊 · 1–5 / 6–9 / 10–12','Ordinary / special · 1–5 / 6–9 / 10–12']:['完整结构','Complete structure']):[labels[active[0]][0],labels[active[0]][1]]);const number=(x,y,i)=>`<g data-stage="${i+1}" opacity="${chosen(i)?1:.26}"><circle cx="${x}" cy="${y}" r="${labels.length>12?7:10}" fill="#111" stroke="${chosen(i)?'#f5d266':'#aaa'}" stroke-width="${chosen(i)?2.5:1}"/><text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="#eee" stroke="none" font-family="sans-serif" font-size="${labels.length>12?8:10}">${i+1}</text></g>`;const label=(z,e,x,y)=>[ ['zh',z],['en',e] ].map(([lang,lines])=>`<text class="diagram-label ${lang}" x="${x}" y="${y}" text-anchor="middle" fill="#eee" stroke="none">${(Array.isArray(lines)?lines:[lines]).map((line,j)=>`<tspan x="${x}" dy="${j?14:0}">${esc(line)}</tspan>`).join('')}</text>`).join('');let body='',phases=[],viewBox='0 0 360 203',artClass='library-line book-structure-art',wheelKind='';const nodeLabel=(z,e,x,y)=>['zh','en'].map(lang=>`<text class="diagram-label ${lang}" x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="#eee" stroke="none">${esc(lang==='zh'?z:e)}</text>`).join('');const stack=(z,e,x,y)=>`<text class="diagram-label zh" x="${x}" y="${y}" text-anchor="middle" fill="#eee" stroke="none">${esc(z)}</text><text class="diagram-label en" x="${x}" y="${y+18}" text-anchor="middle" fill="#c8c5bf" stroke="none">${esc(e)}</text>`;
if(type==='cycle'){if(model==='campbell')phases=[{p:['出发','Departure'],a:0,b:4,c:'#f2f2ee'},{p:['启蒙','Initiation'],a:5,b:10,c:'#f06552'},{p:['归返','Return'],a:11,b:16,c:'#a8a89f'}];else if(model==='vogler')phases=[{p:['第一幕 1–5','Act I · 1–5'],a:0,b:4,c:'#f2f2ee'},{p:['第二幕 6–9','Act II · 6–9'],a:5,b:8,c:'#f06552'},{p:['第三幕 10–12','Act III · 10–12'],a:9,b:11,c:'#a8a89f'}];if(options.plate&&!active.length&&(model==='campbell'||model==='vogler')&&!options.labels){const drawn=drawHeroWheel(model);body=drawn.body;viewBox=drawn.view;artClass+=' hero-wheel';wheelKind=model==='campbell'?'campbell-17':'vogler-12';}else{const n=labels.length,rr=model==='vogler'?62:72;body=`<circle cx="180" cy="101.5" r="${rr}" stroke="#8d8d86"/>`;if(model==='harmon')body+='<path class="harmon-quadrants" d="M108 101.5H252M180 29.5V173.5" stroke="#555" stroke-dasharray="3 4"/>'+label('日常／秩序',['Ordinary','Order'],52,62)+label('特殊／混沌',['Special','Chaos'],52,137);if(model==='vogler')body+=`<path data-diameter="ordinary-special" d="M${180-rr} 101.5H${180+rr}" stroke="#f2f2ee" stroke-width="1.35"/>`+label('日常 · 已知',['Ordinary','known'],180,78)+label('特殊 · 未知',['Special','unknown'],180,126);for(const ph of phases){const len=2*Math.PI*rr*(ph.b-ph.a+1)/n,off=2*Math.PI*rr*ph.a/n;body+=`<circle cx="180" cy="101.5" r="${rr}" fill="none" stroke="${ph.c}" stroke-width="5" stroke-dasharray="${len-4} ${2*Math.PI*rr-len+4}" stroke-dashoffset="${-off}" transform="rotate(-90 180 101.5)" opacity="${!active.length||active.some(i=>i>=ph.a&&i<=ph.b)?1:.28}"/>`;}body+=labels.map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/n;return number(180+rr*Math.cos(a),101.5+rr*Math.sin(a),i)}).join('');}}if(type==='beats'&&active.length){body=labels.map((_,i)=>{const x=24+i%5*64,y=32+Math.floor(i/5)*58;return `<g data-beat-card="${i+1}" opacity="${chosen(i)?1:.25}"><rect x="${x}" y="${y}" width="56" height="30" rx="3" fill="none" stroke="${chosen(i)?'#f5d266':'#aaa'}" stroke-width="${chosen(i)?2.5:1}"/><text x="${x+28}" y="${y+20}" text-anchor="middle" fill="#eee" stroke="none">${i+1}</text></g>`}).join('');body+='<path d="M20 84H338M146 144V180" stroke="#f5d266" stroke-dasharray="3 3"/>'+label('第一幕 1–5','Act I · 1–5',180,20)+label('第二幕 6–12','Act II · 6–12',180,78)+label('第三幕 13–15','Act III · 13–15',245,193);}
if(type==='three'){
const x0=36,x1=684,span=x1-x0,b1=x0+span*.25,b2=x0+span*.75,yBar=178;
const acts=[[x0,b1],[b1,b2],[b2,x1]];
const mid=i=>(acts[i][0]+acts[i][1])/2;
const dim=i=>!active.length||active.includes(i)?1:.28;
const names=[['第一幕','Act I'],['第二幕','Act II'],['第三幕','Act III']];
const jobs=[['铺陈／建置','Setup'],['对抗','Confrontation'],['解决／结局','Resolution']];
const pages=[['约 30 页','~30 pages'],['约 60 页','~60 pages'],['约 30 页','~30 pages']];
body+=acts.map((band,i)=>`<g opacity="${dim(i)}">${stack(names[i][0],names[i][1],mid(i),40)}${stack(jobs[i][0],jobs[i][1],mid(i),86)}${stack(pages[i][0],pages[i][1],mid(i),128)}</g>`).join('');
body+=`<path class="field-timeline" d="M${x0} ${yBar}H${x1}" stroke="#eee" stroke-width="4"/><path d="M${x1-8} ${yBar-6}l10 6-10 6" stroke="#eee" stroke-width="1.5"/>`;
body+=[b1,b2].map(x=>`<path d="M${x} 152V210" stroke="#eee" stroke-width="3"/>`).join('');
const cross=(x,y)=>`<path d="M${x-7} ${y-7}l14 14M${x+7} ${y-7}l-14 14" stroke="#f5d266" stroke-width="2"/>`;
const inc=118,clx=628;
body+=cross(inc,yBar)+cross(clx,yBar)+`<g class="tension-marks"><circle cx="360" cy="${yBar}" r="5" fill="#f5d266" stroke="#f5d266"/></g>`;
body+=stack('激励事件','Inciting Incident',inc,236)+stack('中点','Midpoint',360,236)+stack('高潮 · 后段','Climax · late',clx,236);
body+=stack('情节点 I','Plot Point I',b1,286)+stack('情节点 II','Plot Point II',b2,286);
body+=stack('约 25–27 页','~p.25–27',b1,334)+stack('约 60 页','~p.60',360,334)+stack('约 85–90 页','~p.85–90',b2,334);
body+=active.map(i=>`<rect x="${acts[i][0]}" y="22" width="${acts[i][1]-acts[i][0]}" height="156" fill="none" stroke="#f5d266" stroke-width="2"/>`).join('');
}
if(type==='pyramid'){body='<path d="M24 162H50L180 40L310 162H336M180 40V173" stroke="#888"/>'+[[50,162],[115,101],[180,40],[245,101],[310,162]].map(([x,y],i)=>number(x,y,i)).join('');}
if(type==='pyramid')body+='<g class="freytag-transitions"><circle cx="82" cy="132" r="4" fill="#f5d266"/><circle cx="207" cy="65" r="4" fill="#f5d266"/><circle cx="279" cy="133" r="4" fill="#f5d266"/></g>'+label('A','A',75,120)+label('B','B',224,62)+label('C','C',292,122);
if(type==='causal'){const box=(x,i,z,e)=>`<g data-stage="${i+1}" opacity="${chosen(i)?1:.26}"><rect x="${x}" y="22" width="92" height="44" rx="3" fill="none" stroke="${chosen(i)?'#eee':'#aaa'}" stroke-width="${chosen(i)?2:1.25}"/>${nodeLabel(z,e,x+46,44)}</g>`;const arrow=(x)=>`<path d="M${x} 44h22m-7-5 7 5-7 5" stroke="#eee"/>`;body=box(16,0,'开端','Beginning')+arrow(108)+nodeLabel('所以','so',125,30)+box(142,1,'中间','Middle')+arrow(234)+nodeLabel('所以','so',251,30)+box(268,2,'结尾','End');body+=`<g class="poetics-secondary"><path d="M52 132H308m-8-4 8 5-8 4" stroke="#888"/><circle class="poetics-hinge" cx="180" cy="132" r="4" fill="#f5d266" stroke="#f5d266"/>${label('结','desis',86,116)}${label('突转','peripeteia',180,116)}${label('解','lusis',274,116)}${label('次要','Secondary',180,158)}</g>`;}
if(type==='tension'){
const x0=48,x1=688,span=x1-x0,b1=x0+span*.25,b2=x0+span*.75,base=268;
const pts=[[48,246],[140,204],[208,178],[268,188],[368,142],[448,156],[528,112],[590,86],[632,64],[668,128],[688,176]];
let d=`M${pts[0][0]} ${pts[0][1]}`;
for(let i=0;i<pts.length-1;i++){
 const p0=pts[Math.max(0,i-1)],p1=pts[i],p2=pts[i+1],p3=pts[Math.min(pts.length-1,i+2)];
 const c1=[p1[0]+(p2[0]-p0[0])/6,p1[1]+(p2[1]-p0[1])/6];
 const c2=[p2[0]-(p3[0]-p1[0])/6,p2[1]-(p3[1]-p1[1])/6];
 d+=`C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
}
const cross=(x,y)=>`<path class="tension-obstacle" d="M${x-5} ${y-5}l10 10M${x+5} ${y-5}l-10 10" stroke="#aaa" stroke-width="1.5"/>`;
const mark=(x,y,i,r=5)=>`<g class="tension-marks" data-stage="${i+1}" opacity="${chosen(i)?1:.45}"><circle cx="${x}" cy="${y}" r="${r}" fill="#f5d266" stroke="#f5d266"/></g>`;
const ac=[[x0,b1],[b1,b2],[b2,x1]];
const mid=i=>(ac[i][0]+ac[i][1])/2;
body=`<path d="M${x0} ${base}H${x1}" stroke="#888"/><path d="M${b1} 56V${base}M${b2} 56V${base}" stroke="#555" stroke-dasharray="4 4"/>`;
body+=`<path class="tension-curve" d="${d}" stroke="#eee" stroke-width="2.5"/>`;
body+=cross(268,188)+cross(448,156)+cross(655,108);
body+=mark(140,204,0)+mark(368,142,1)+mark(632,64,2,6.5)+mark(668,128,3);
body+=stack('张力','Tension',78,78);
body+=stack('情节点 I','Plot Point I',b1,28)+stack('情节点 II','Plot Point II',b2,28);
body+=stack('激励事件','Inciting Incident',140,156);
body+=stack('上升行动','Rising action',286,96);
body+=stack('中点','Midpoint',430,112);
body+=stack('障碍','Obstacle',268,214);
body+=stack('高潮 · 后段','Climax · late',640,28);
body+=stack('下降','Falling',674,214);
body+=stack('收束','Denouement',600,168);
const actN=[['第一幕','Act I'],['第二幕','Act II'],['第三幕','Act III']];
const jobs=[['铺陈／建置','Setup'],['对抗','Confrontation'],['解决／结局','Resolution']];
body+=actN.map((n,i)=>stack(n[0],n[1],mid(i),300)+stack(jobs[i][0],jobs[i][1],mid(i),346)).join('');
}
if(type==='flow')body=labels.map((_,i)=>{const x=44+i*272/(labels.length-1);return number(x,100,i)+(i<labels.length-1?`<path d="M${x+13} 100h${272/(labels.length-1)-26}m-7-5l7 5-7 5" stroke="#eee"/>`:'')}).join('');
const transitions=type==='pyramid'?`<p class="freytag-force-caption">${dual(['转接力：A 激发力必要；B 悲剧力与 C 最后悬念之力可选。','Transition forces: the exciting force (A) is required; the tragic force (B) and the force of final suspense (C) are optional.'])}</p><div class="freytag-crisis-key">${dual(['A · 激发力（必要）','A · Exciting force (required)'])}${dual(['B · 悲剧力（可选）','B · Tragic force (optional)'])}${dual(['C · 最后悬念之力（可选）','C · Force of final suspense (optional)'])}</div><p class="freytag-climax-note">${dual(['高潮在金字塔中部，不同于现代三幕里偏后的高潮。','The climax is mid-pyramid, unlike the late climax of the modern three-act.'])}</p>`:type==='causal'?`<div class="poetics-secondary-key">${dual(['次要：结（desis）经突转（peripeteia）到解（lusis）。不是三幕，也不是闭合循环。','Secondary: complication (desis) turns on peripeteia into unraveling (lusis). Not three acts, and not a closed loop.'])}</div>`:type==='three'?`<div class="act-diagram-key">${dual(['竖线是幕间的情节点 I 与情节点 II。× 是激励事件（第一幕内）和高潮（第三幕后段）。中点在第二幕。','Vertical bars are Plot Point I and Plot Point II. The × marks are the Inciting Incident, inside Act I, and the Climax, late in Act III. The midpoint is in Act II.'])}${dual(['页码只属于约 120 页的菲尔德示意（约 30 / 60 / 30），不是《诗学》。铺陈与建置、解决与结局，是同一功能的两种说法。','Page counts belong only to the roughly 120-page Field sketch (about 30 / 60 / 30), not to Poetics. 铺陈 and 建置, like 解决 and 结局, are two names for one function.'])}</div>`:type==='tension'?`<div class="act-diagram-key">${dual(['当代教学曲线：张力上升，在第三幕后段到达高潮，然后才下降、收束。中点是转向，不是顶点。','A contemporary teaching curve: tension rises, reaches its climax late in Act III, and only then falls through the denouement. The midpoint is a turn, not the peak.'])}${dual(['× 是障碍，可反复出现，不是页码。此图不使用菲尔德页码，也不是弗赖塔格居中的高潮。','× marks are obstacles. They can recur and are not pages. This drawing uses no Field page scale, and it is not Freytag’s central climax.'])}</div>`:'';const autoCaption=options.caption||(wheelKind==='campbell-17'?['母题与常见变体，不是必须逐项完成的清单。','Motifs and common variations, not a mandatory checklist.']:wheelKind==='vogler-12'?['水平直径分开日常世界（已知）与特殊世界（未知）。弧段是第一幕 1–5、第二幕 6–9、第三幕 10–12。','The diameter splits the ordinary world (known) from the special world (unknown). Arcs mark Act I 1–5, Act II 6–9, and Act III 10–12.']:null);if(type==='three')viewBox='0 0 720 380';else if(type==='tension')viewBox='0 0 720 420';const frame=({'0 0 360 203':'<rect x=".75" y=".75" width="358.5" height="201.5" rx="3" fill="none"/>','0 0 720 380':'<rect x=".75" y=".75" width="718.5" height="378.5" rx="3" fill="none"/>','0 0 720 420':'<rect x=".75" y=".75" width="718.5" height="418.5" rx="3" fill="none"/>'})[viewBox]||'';const svg='<svg class="'+artClass+'" data-structure="'+type+'"'+(wheelKind?' data-hero-wheel="'+wheelKind+'"':'')+' viewBox="'+viewBox+'" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+esc(title.join(' / ')+' — '+focusTitle.join(' / '))+'" fill="none" stroke="currentColor" stroke-width="1.5"><title>'+esc(title.join(' / ')+' — '+focusTitle.join(' / '))+'</title>'+frame+body+'</svg>';const diagram=(type==='beats'&&!active.length)?window.SaveTheCatPercentTimeline({heading:false}):(wheelKind?'<div class="hero-wheel-scroll"><p class="hero-wheel-hint">'+dual(['横向查看完整圆环','Scroll sideways for the full circle'])+'</p>'+svg+'</div>':svg);const readable=labels.map((p,i)=>`<li class="${chosen(i)?'is-focus':'is-dim'}" data-label-stage="${i+1}"><b>${i+1}</b>${dual(p)}</li>`).join('');return `<div class="book-structure-visual" data-model="${esc(model)}" data-layout="${type==='beats'&&!active.length?'percent':'stages'}" data-focus="${active.map(i=>i+1).join(',')}" data-row="${esc(focusTitle[1])}">${dual(title,'book-model-name')}${dual(focusTitle,'book-focus-heading')}${diagram}${transitions}${phases.length?`<div class="book-phase-key">${phases.map(ph=>`<span style="--phase-color:${ph.c}" class="${!active.length||active.some(i=>i>=ph.a&&i<=ph.b)?'is-focus':'is-dim'}">${dual(ph.p)}</span>`).join('')}</div>`:''}<ol class="book-stage-labels">${readable}</ol>${autoCaption?dual(autoCaption,'book-highlight-caption'):''}</div>`;};window.HeroJourneyDiagrams=()=>`<div class="hero-diagram-pair" data-hero-diagrams="two">${window.BookStructureArt('cycle',{model:'campbell',plate:true})}${window.BookStructureArt('cycle',{model:'vogler',plate:true})}</div>`;})();
/* Original 0–100% overview for Blake Snyder’s 15 beats.
   Positions follow the 110-page book, not a copied teaching poster.
   Act breaks are Break into Two (~25%) and Break into Three (~80%).
   Book page 75 (All Is Lost) is about 68% and stays inside Act II. */
window.StcPercentBeats=[
 {n:'01',zh:'开场画面',en:'Opening Image',at:1,side:'above',lane:1,act:1},
 {n:'02',zh:'主题呈现',en:'Theme Stated',at:5,side:'below',lane:0,act:1},
 {n:'03',zh:'铺垫',en:'Set-Up',at:8,side:'above',lane:0,act:1},
 {n:'04',zh:'催化剂／触发事件',en:'Catalyst',at:11,side:'below',lane:1,act:1,anchor:'~p.12'},
 {n:'05',zh:'争辩／犹豫',en:'Debate',at:18,side:'above',lane:1,act:1},
 {n:'06',zh:'进入第二幕',en:'Break into Two',at:25,side:'below',lane:0,act:2,anchor:'p.25',actBreak:true},
 {n:'07',zh:'B 故事／副线',en:'B Story',at:27,side:'above',lane:0,act:2},
 {n:'08',zh:'游戏时间／类型承诺',en:'Fun and Games',at:39,side:'below',lane:1,act:2},
 {n:'09',zh:'中点',en:'Midpoint',at:50,side:'above',lane:0,act:2,anchor:'p.55 · 50%'},
 {n:'10',zh:'坏人逼近／压力收紧',en:'Bad Guys Close In',at:59,side:'below',lane:0,act:2},
 {n:'11',zh:'一无所有',en:'All Is Lost',at:68,side:'above',lane:1,act:2,anchor:'p.75 ≈ 68%',mark:true},
 {n:'12',zh:'灵魂黑夜／黑暗时刻',en:'Dark Night of the Soul',at:74,side:'below',lane:1,act:2},
 {n:'13',zh:'进入第三幕',en:'Break into Three',at:80,side:'above',lane:0,act:3,anchor:'p.85 ≈ 80%',actBreak:true},
 {n:'14',zh:'结局／终场行动',en:'Finale',at:90,side:'below',lane:0,act:3},
 {n:'15',zh:'终场画面',en:'Final Image',at:100,side:'above',lane:1,act:3,anchor:'p.110'}
];
window.SaveTheCatPercentTimeline=function(options={}){
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const dual=(zh,en,cls='')=>`<span class="${cls}"><span class="zh" lang="zh-CN">${esc(zh)}</span><span class="en" lang="en">${esc(en)}</span></span>`;
 const beats=window.StcPercentBeats;
 const acts=[[1,0,25,'第一幕','Act I','1–5'],[2,25,55,'第二幕','Act II','6–12'],[3,80,20,'第三幕','Act III','13–15']];
 const head=options.heading===false?'':`<div class="stc-percent-head">${dual('十五节拍，按故事的 0–100%','Fifteen beats across 0–100% of the story','stc-percent-title')}</div>`;
 const beatHtml=beats.map(b=>`<li class="stc-beat${b.actBreak?' is-break':''}${b.mark?' is-mark':''}" data-stc-beat="${Number(b.n)}" data-act="${b.act}" data-at="${b.at}" data-side="${b.side}" style="--at:${b.at};--lane:${b.lane}"><span class="stc-beat-copy"><span class="stc-beat-name"><span class="zh" lang="zh-CN"><b>${b.n}</b> ${esc(b.zh)}</span><span class="en" lang="en"><b>${b.n}</b> ${esc(b.en)}</span></span>${b.anchor?`<span class="stc-beat-anchor">${esc(b.anchor)}</span>`:''}</span></li>`).join('');
 const ticks=beats.map(b=>`<i class="stc-tick${b.mark?' is-mark':''}${b.actBreak?' is-break':''}" style="--at:${b.at}" data-at="${b.at}"></i>`).join('');
 const aria='Save the Cat 0–100% beats. Act I is beats 1–5, ending at Break into Two near 25%. Act II is beats 6–12, including All Is Lost and Dark Night of the Soul. Act III is beats 13–15, beginning at Break into Three near 80%. All Is Lost is book page 75, about 68%, not 75%.';
 return `<div class="stc-percent" id="stc-percent-timeline" data-stc-timeline="save-the-cat" data-breaks="25,80">${head}<p class="stc-percent-hint">${dual('横向查看整条 0–100%','Scroll horizontally for the full 0–100% line')}</p><div class="stc-percent-scroll" tabindex="0" role="region" aria-label="${esc(aria)}"><div class="stc-percent-board"><div class="stc-acts">${acts.map(a=>`<div class="stc-act" data-act="${a[0]}" style="--from:${a[1]};--span:${a[2]}"><span class="zh" lang="zh-CN">${a[3]}</span><span class="en" lang="en">${a[4]}</span><span class="stc-act-range">${a[5]}</span></div>`).join('')}</div><i class="stc-break" data-act-break="25" style="--at:25"></i><i class="stc-break" data-act-break="80" style="--at:80"></i><div class="stc-track" aria-hidden="true">${acts.map(a=>`<span class="stc-track-act" data-act="${a[0]}" style="--from:${a[1]};--span:${a[2]}"></span>`).join('')}${ticks}</div><ol class="stc-percent-beats">${beatHtml}</ol><div class="stc-scale" aria-hidden="true">${[0,25,50,80,100].map(n=>`<span data-at="${n}" style="--at:${n}">${n}%</span>`).join('')}</div></div></div><p class="stc-percent-note">${dual('横轴是故事进度，不是页码本身。幕的竖线在进入第二幕（约 25%）和进入第三幕（约 80%），不在 75%。原书 110 页里：催化剂约第 12 页，进入第二幕第 25 页，中点第 55 页（约 50%），一无所有第 75 页约 68%，进入第三幕第 85 页约 80%，终场画面第 110 页。第 75 页不是 75%，这一拍仍在第二幕。','The axis is story progress, not the page number copied onto the scale. Vertical breaks sit at Break into Two (~25%) and Break into Three (~80%), not at 75%. On the book’s 110-page screenplay: Catalyst ~p.12, Break into Two p.25, Midpoint p.55 (~50%), All Is Lost p.75 ≈ 68%, Break into Three p.85 ≈ 80%, Final Image p.110. Page 75 is not 75%, and that beat stays in Act II.')}</p></div>`;
};
