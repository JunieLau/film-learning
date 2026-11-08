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

/* Self-drawn plates. Every stage and force is spelled on the drawing.
   Aristotle’s chain, Field’s line, the late-climax arc, and Freytag’s pyramid
   stay different shapes. No third-party artwork. */
function drawFieldLine({stack,chosen,active}){
 const x0=70,x1=890,span=x1-x0,b1=x0+span*.25,b2=x0+span*.75,y=248;
 const bands=[[x0,b1],[b1,b2],[b2,x1]];
 const mid=i=>(bands[i][0]+bands[i][1])/2;
 const dim=i=>!active.length||active.includes(i)?1:.28;
 const acts=[
  ['第一幕','Act I','铺陈／建置','Setup','约 30 页','~30 pages'],
  ['第二幕','Act II','对抗','Confrontation','约 60 页','~60 pages'],
  ['第三幕','Act III','解决／结局','Resolution','约 30 页','~30 pages']
 ];
 const inc=x0+span*.12, clx=x0+span*.88;
 const cross=x=>`<path d="M${x-9} ${y-9}l18 18M${x+9} ${y-9}l-18 18" stroke="#f5d266" stroke-width="2.6"/>`;
 let body=`<g data-diagram="field-line"><desc>Syd Field horizontal paradigm, about 30/60/30 pages. Plot Point I and Plot Point II are vertical bars. Inciting Incident is inside Act I. Climax is late in Act III. Not Poetics and not Freytag.</desc>`;
 body+=acts.map((a,i)=>`<g data-stage="${i+1}" opacity="${dim(i)}">${stack(a[0],a[1],mid(i),48)}${stack(a[2],a[3],mid(i),112)}${stack(a[4],a[5],mid(i),176)}</g>`).join('');
 body+=`<path class="field-timeline" d="M${x0} ${y}H${x1}" stroke="#eee" stroke-width="7"/>`;
 body+=`<path d="M${x1-1} ${y-8}l16 8-16 8" fill="none" stroke="#eee" stroke-width="2"/>`;
 body+=`<path data-plot-point="I" d="M${b1} 150V312" stroke="#eee" stroke-width="6"/><path data-plot-point="II" d="M${b2} 150V312" stroke="#eee" stroke-width="6"/>`;
 body+=cross(inc)+cross(clx);
 body+=stack('激励事件','Inciting Incident',inc,352);
 body+=stack('高潮 · 第三幕后段','Climax · late Act III',clx,352);
 body+=stack('情节点 I','Plot Point I',b1,430);
 body+=stack('情节点 II','Plot Point II',b2,430);
 body+='</g>';
 return {body,view:'0 0 960 500'};
}
function drawTensionArc({stack}){
 const plot0=132,span=740,yBase=454,xAxis=78,xEnd=910;
 const X=t=>Math.round((plot0+span*t)*10)/10;
 const b1=X(.25),b2=X(.75);
 const pts=[[.02,424],[.13,356],[.24,330],[.36,286],[.50,232],[.62,188],[.72,150],[.86,86],[.94,164],[1,236]].map(([t,y])=>[X(t),y]);
 let d=`M${pts[0][0]} ${pts[0][1]}`;
 for(let i=0;i<pts.length-1;i++){
  const p0=pts[Math.max(0,i-1)],p1=pts[i],p2=pts[i+1],p3=pts[Math.min(pts.length-1,i+2)];
  const c1=[p1[0]+(p2[0]-p0[0])/6,p1[1]+(p2[1]-p0[1])/6];
  const c2=[p2[0]-(p3[0]-p1[0])/6,p2[1]-(p3[1]-p1[1])/6];
  d+=`C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
 }
 const cross=(x,y)=>`<path class="tension-obstacle" d="M${x-7} ${y-7}l14 14M${x+7} ${y-7}l-14 14" stroke="#aaa" stroke-width="1.8"/>`;
 const dot=(x,y,r)=>`<circle class="tension-marks" cx="${x}" cy="${y}" r="${r}" fill="#f5d266" stroke="#f5d266"/>`;
 const [start,inc,obs1,mid,obs2,peak,fall,end]=[pts[0],pts[1],pts[3],pts[4],pts[6],pts[7],pts[8],pts[9]];
 let body=`<g data-diagram="tension-arc" data-climax="late-act-3"><desc>Contemporary tension curve. It rises through the inciting incident and midpoint, peaks late in Act III, then falls. The midpoint is not the climax. Not Freytag’s centered peak and not a page scale.</desc>`;
 body+=`<path d="M${xAxis} ${yBase}V58" stroke="#eee" stroke-width="1.7"/><path d="M${xAxis-7} 70l7-16 7 16" fill="none" stroke="#eee" stroke-width="1.7"/>`;
 body+=`<path d="M${xAxis} ${yBase}H${xEnd}" stroke="#eee" stroke-width="1.7"/><path d="M${xEnd-14} ${yBase-7}l16 7-16 7" fill="none" stroke="#eee" stroke-width="1.7"/>`;
 body+=`<path d="M${b1} 86V${yBase}M${b2} 86V${yBase}" stroke="#555" stroke-dasharray="5 6"/>`;
 body+=`<path class="tension-curve" d="${d}" stroke="#eee" stroke-width="3" fill="none"/>`;
 body+=cross(obs1[0],obs1[1])+cross(obs2[0],obs2[1]);
 body+=dot(inc[0],inc[1],6.5)+dot(mid[0],mid[1],6.5)+dot(peak[0],peak[1],9);
 body+=stack('冲突／张力','Conflict / tension',xAxis+16,36,'start');
 body+=stack('故事进程','The story’s plot',xEnd,yBase-36,'end');
 body+=stack('引介','Introduction',start[0]+86,start[1]-6);
 body+=stack('激励事件','Inciting Incident',inc[0]+8,inc[1]-52);
 body+=stack('上升','Rising action',X(.38),150);
 body+=stack('中点','Midpoint',mid[0]+108,mid[1]-18);
 body+=stack('障碍','Obstacle',obs1[0],obs1[1]+46);
 body+=stack('障碍','Obstacle',obs2[0]-20,obs2[1]-52);
 body+=stack('高潮 · 第三幕后段','Climax · late Act III',peak[0]+8,peak[1]-46);
 body+=stack('下降','Falling action',fall[0]+24,fall[1]+8);
 body+=stack('收束','Denouement',end[0]-36,end[1]+42);
 const centers=[(plot0+b1)/2,(b1+b2)/2,(b2+X(1))/2];
 [['第一幕 · 铺陈','Act I · Setup'],['第二幕 · 对抗','Act II · Confrontation'],['第三幕 · 解决','Act III · Resolution']].forEach((a,i)=>{body+=stack(a[0],a[1],centers[i],518)});
 body+='</g>';
 return {body,view:'0 0 960 590'};
}
function drawPoeticsChain({stack,chosen}){
 const y=178;
 const nodes=[[190,0,'开端','Beginning','行动的起因','causal start'],[490,1,'中间','Middle','承前启后','follows and leads'],[790,2,'结尾','End','完成后果','completes consequences']];
 let body='<g data-diagram="poetics-chain" data-chain="open"><desc>Open Poetics chain: beginning, therefore middle, therefore end. A secondary line runs from complication through reversal to unraveling and does not return. Not three acts, not a loop, not a 0–120 page scale.</desc>';
 body+=`<path d="M64 ${y}H916" stroke="#eee" stroke-width="3.2"/><path d="M900 ${y-9}l22 9-22 9" fill="none" stroke="#eee" stroke-width="2"/>`;
 nodes.forEach(([x,i,z,e,zz,ee])=>{
  const on=chosen(i);
  body+=`<g data-stage="${i+1}" opacity="${on?1:.3}"><circle cx="${x}" cy="${y}" r="9" fill="#111" stroke="${on?'#f5d266':'#eee'}" stroke-width="2.5"/>${stack(z,e,x,86)}${stack(zz,ee,x,y+42)}</g>`;
 });
 body+=stack('所以','therefore',340,y-28)+stack('所以','therefore',640,y-28);
 const y2=392;
 body+=`<path d="M188 ${y2}H860" stroke="#888" stroke-width="1.7"/><path d="M846 ${y2-7}l16 7-16 7" fill="none" stroke="#888" stroke-width="1.6"/>`;
 body+=stack('次要','secondary',78,y2-4,'start');
 [['结','desis',250],['突转','peripeteia',490],['解','lusis',760]].forEach(([z,e,x])=>{
  body+=`<g class="poetics-secondary"><circle class="poetics-hinge" cx="${x}" cy="${y2}" r="5.5" fill="#f5d266" stroke="#f5d266"/>${stack(z,e,x,y2+34)}</g>`;
 });
 body+='</g>';
 return {body,view:'0 0 980 490'};
}
function drawFreytagPyramid({stack,chosen,active}){
 const L=[230,486],P=[640,132],R=[1050,486];
 const lerp=(a,b,t)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];
 const excite=lerp(L,P,.24), rise=lerp(L,P,.56);
 const tragic=lerp(P,R,.26), fall=lerp(P,R,.56), suspense=lerp(P,R,.80);
 const part=(i,z,e,x,y,anchor='middle')=>{
  const on=chosen(i), mark=active.length&&on?' is-on':'';
  return `<g data-stage="${i+1}" class="freytag-part" opacity="${on?1:.3}">${stack(z,e,x,y,anchor,mark.trim())}</g>`;
 };
 const gem=(pt,name)=>`<circle class="freytag-force" data-force="${name}" cx="${pt[0].toFixed(1)}" cy="${pt[1].toFixed(1)}" r="6" fill="#f5d266" stroke="#f5d266"/>`;
 let body=`<g data-diagram="freytag-pyramid"><desc>Freytag’s symmetric five-part pyramid. Introduction, rise, centered climax, return or fall, and catastrophe are written on the slopes. Exciting force is required; tragic force and the force of final suspense are optional. The fifth part is catastrophe, not denouement.</desc>`;
 body+=`<path d="M${L[0]} ${L[1]}L${P[0]} ${P[1]}L${R[0]} ${R[1]}Z" stroke="#eee" stroke-width="2.8" fill="none"/>`;
 body+=`<path d="M${P[0]} ${P[1]}V${L[1]}" stroke="#555" stroke-dasharray="5 6"/>`;
 body+=part(2,'高潮／顶点（居中）','Climax (center)',P[0],58);
 body+=part(0,'引介（铺垫）','Introduction',L[0],L[1]+52);
 body+=part(4,'灾变','Catastrophe',R[0],R[1]+52);
 body+=part(1,'上升','Rise',rise[0]-78,rise[1]-36);
 body+=part(3,'下降／回落','Return / fall',fall[0]+78,fall[1]-36);
 body+=gem(excite,'exciting')+gem(tragic,'tragic')+gem(suspense,'final-suspense');
 body+=stack('激发力（必要）','Exciting force',excite[0]-36,excite[1]+8,'end');
 body+=stack('悲剧力（可选）','Tragic force',tragic[0]+28,tragic[1]-8,'start');
 body+=stack('最后悬念之力（可选）','Force of final suspense',suspense[0]+22,suspense[1]+6,'start');
 body+='</g>';
 return {body,view:'0 0 1280 640'};
}
window.BookStructureArt=(type,options={})=>{const model=options.model||({beats:'beats',three:'three',pyramid:'pyramid',cycle:'harmon',causal:'aristotle',tension:'tension'}[type]);const labels=options.labels||models[model];if(!labels)throw Error('Missing named model '+model);const active=options.focus||((options.active??-1)>=0?[options.active]:[]);const chosen=i=>!active.length||active.includes(i);const names={campbell:['坎贝尔 · 十七母题','Campbell · seventeen motifs'],vogler:['沃格勒 · 十二阶段','Vogler · twelve stages'],harmon:['哈蒙 · 八步圆环','Harmon · eight-step circle'],beats:['救猫咪 · 十五节拍','Save the Cat · fifteen beats'],three:['现代三幕 · 悉德·菲尔德','Modern three acts · Syd Field'],aristotle:['《诗学》· 开端→中间→结尾','Poetics · beginning → middle → end'],tension:['现代三幕张力示意 · 当代教学图，不是《诗学》，也不是亚⁠里⁠士⁠多⁠德','Three-act tension sketch · teaching diagram, not Poetics or Aristotle'],pyramid:['弗赖塔格 · 五部分金字塔','Freytag · five-part pyramid']};const title=options.title||names[model]||['结构关系','Structural relation'];const focusTitle=options.heading||(!active.length?(type==='beats'?['0–100% · 幕间在约 25% 与 80%','0–100% · act breaks near 25% and 80%']:model==='campbell'?['出发 · 启蒙 · 归返','Departure · Initiation · Return']:model==='vogler'?['日常／特殊 · 1–5 / 6–9 / 10–12','Ordinary / special · 1–5 / 6–9 / 10–12']:['完整结构','Complete structure']):[labels[active[0]][0],labels[active[0]][1]]);const number=(x,y,i)=>`<g data-stage="${i+1}" opacity="${chosen(i)?1:.26}"><circle cx="${x}" cy="${y}" r="${labels.length>12?7:10}" fill="#111" stroke="${chosen(i)?'#f5d266':'#aaa'}" stroke-width="${chosen(i)?2.5:1}"/><text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="#eee" stroke="none" font-family="sans-serif" font-size="${labels.length>12?8:10}">${i+1}</text></g>`;const label=(z,e,x,y)=>[ ['zh',z],['en',e] ].map(([lang,lines])=>`<text class="diagram-label ${lang}" x="${x}" y="${y}" text-anchor="middle" fill="#eee" stroke="none">${(Array.isArray(lines)?lines:[lines]).map((line,j)=>`<tspan x="${x}" dy="${j?14:0}">${esc(line)}</tspan>`).join('')}</text>`).join('');let body='',phases=[],viewBox='0 0 360 203',artClass='library-line book-structure-art',wheelKind='';const nodeLabel=(z,e,x,y)=>['zh','en'].map(lang=>`<text class="diagram-label ${lang}" x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="#eee" stroke="none">${esc(lang==='zh'?z:e)}</text>`).join('');const stack=(z,e,x,y,anchor="middle",extra="")=>`<text class="diagram-label zh${extra?" "+extra:""}" x="${x}" y="${y}" text-anchor="${anchor}" fill="#eee" stroke="none">${esc(z)}</text><text class="diagram-label en${extra?" "+extra:""}" x="${x}" y="${y+22}" text-anchor="${anchor}" fill="#c8c5bf" stroke="none">${esc(e)}</text>`;
if(type==='cycle'){if(model==='campbell')phases=[{p:['出发','Departure'],a:0,b:4,c:'#f2f2ee'},{p:['启蒙','Initiation'],a:5,b:10,c:'#f06552'},{p:['归返','Return'],a:11,b:16,c:'#a8a89f'}];else if(model==='vogler')phases=[{p:['第一幕 1–5','Act I · 1–5'],a:0,b:4,c:'#f2f2ee'},{p:['第二幕 6–9','Act II · 6–9'],a:5,b:8,c:'#f06552'},{p:['第三幕 10–12','Act III · 10–12'],a:9,b:11,c:'#a8a89f'}];if(options.plate&&!active.length&&(model==='campbell'||model==='vogler')&&!options.labels){const drawn=drawHeroWheel(model);body=drawn.body;viewBox=drawn.view;artClass+=' hero-wheel';wheelKind=model==='campbell'?'campbell-17':'vogler-12';}else{const n=labels.length,rr=model==='vogler'?62:72;body=`<circle cx="180" cy="101.5" r="${rr}" stroke="#8d8d86"/>`;if(model==='harmon')body+='<path class="harmon-quadrants" d="M108 101.5H252M180 29.5V173.5" stroke="#555" stroke-dasharray="3 4"/>'+label('日常／秩序',['Ordinary','Order'],52,62)+label('特殊／混沌',['Special','Chaos'],52,137);if(model==='vogler')body+=`<path data-diameter="ordinary-special" d="M${180-rr} 101.5H${180+rr}" stroke="#f2f2ee" stroke-width="1.35"/>`+label('日常 · 已知',['Ordinary','known'],180,78)+label('特殊 · 未知',['Special','unknown'],180,126);for(const ph of phases){const len=2*Math.PI*rr*(ph.b-ph.a+1)/n,off=2*Math.PI*rr*ph.a/n;body+=`<circle cx="180" cy="101.5" r="${rr}" fill="none" stroke="${ph.c}" stroke-width="5" stroke-dasharray="${len-4} ${2*Math.PI*rr-len+4}" stroke-dashoffset="${-off}" transform="rotate(-90 180 101.5)" opacity="${!active.length||active.some(i=>i>=ph.a&&i<=ph.b)?1:.28}"/>`;}body+=labels.map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/n;return number(180+rr*Math.cos(a),101.5+rr*Math.sin(a),i)}).join('');}}if(type==='beats'&&active.length){body=labels.map((_,i)=>{const x=24+i%5*64,y=32+Math.floor(i/5)*58;return `<g data-beat-card="${i+1}" opacity="${chosen(i)?1:.25}"><rect x="${x}" y="${y}" width="56" height="30" rx="3" fill="none" stroke="${chosen(i)?'#f5d266':'#aaa'}" stroke-width="${chosen(i)?2.5:1}"/><text x="${x+28}" y="${y+20}" text-anchor="middle" fill="#eee" stroke="none">${i+1}</text></g>`}).join('');body+='<path d="M20 84H338M146 144V180" stroke="#f5d266" stroke-dasharray="3 3"/>'+label('第一幕 1–5','Act I · 1–5',180,20)+label('第二幕 6–12','Act II · 6–12',180,78)+label('第三幕 13–15','Act III · 13–15',245,193);}
if(type==='three'){const drawn=drawFieldLine({stack,chosen,active});body=drawn.body;viewBox=drawn.view;}
if(type==='pyramid'){const drawn=drawFreytagPyramid({stack,chosen,active});body=drawn.body;viewBox=drawn.view;}
if(type==='causal'){const drawn=drawPoeticsChain({stack,chosen});body=drawn.body;viewBox=drawn.view;}
if(type==='tension'){const drawn=drawTensionArc({stack});body=drawn.body;viewBox=drawn.view;}
if(type==='flow')body=labels.map((_,i)=>{const x=44+i*272/(labels.length-1);return number(x,100,i)+(i<labels.length-1?`<path d="M${x+13} 100h${272/(labels.length-1)-26}m-7-5l7 5-7 5" stroke="#eee"/>`:'')}).join('');
const transitions=type==='pyramid'?`<p class="freytag-force-caption">${dual(['三个转接力写在金字塔上：激发力必要；悲剧力与最后悬念之力可选。','The three transition forces are written on the pyramid: the exciting force is required; the tragic force and the force of final suspense are optional.'])}</p><p class="freytag-climax-note">${dual(['高潮在金字塔正中。第五部分是灾变，不是收束。这不同于现代三幕里偏后的高潮。','The climax is centered on the pyramid. The fifth part is catastrophe, not a denouement. This is unlike the late climax of the modern three-act.'])}</p>`:type==='causal'?`<div class="poetics-secondary-key">${dual(['次要：结（desis）经突转（peripeteia）到解（lusis）。不是三幕，也不是闭合循环。','Secondary: complication (desis) turns on peripeteia into unraveling (lusis). Not three acts, and not a closed loop.'])}</div>`:type==='three'?`<div class="act-diagram-key">${dual(['竖线是情节点 I 与情节点 II，字写在竖线下方。× 是第一幕里的激励事件，和第三幕后段的高潮。约 30／60／30 是页数比例。','Vertical bars are Plot Point I and Plot Point II, with the words under the bars. The × marks are the Inciting Incident, inside Act I, and the Climax, late in Act III. About 30 / 60 / 30 is the page proportion.'])}${dual(['页码只属于约 120 页的菲尔德示意（约 30 / 60 / 30），不是《诗学》。铺陈与建置、解决与结局，是同一功能的两种说法。','Page counts belong only to the roughly 120-page Field sketch (about 30 / 60 / 30), not to Poetics. 铺陈 and 建置, like 解决 and 结局, are two names for one function.'])}</div>`:type==='tension'?`<div class="act-diagram-key">${dual(['当代教学曲线：引介、上升、中点、第三幕后段的高潮、下降和收束都写在弧线上。中点是转向，不是顶点。','A contemporary teaching curve: introduction, rising action, the midpoint, a climax late in Act III, falling action, and the denouement are written on the arc. The midpoint is a turn, not the peak.'])}${dual(['× 是障碍，可反复出现，不是页码。此图不使用菲尔德页码，也不是弗赖塔格居中的高潮。','× marks are obstacles. They can recur and are not pages. This drawing uses no Field page scale, and it is not Freytag’s central climax.'])}</div>`:'';const autoCaption=options.caption||(wheelKind==='campbell-17'?['母题与常见变体，不是必须逐项完成的清单。','Motifs and common variations, not a mandatory checklist.']:wheelKind==='vogler-12'?['水平直径分开日常世界（已知）与特殊世界（未知）。弧段是第一幕 1–5、第二幕 6–9、第三幕 10–12。','The diameter splits the ordinary world (known) from the special world (unknown). Arcs mark Act I 1–5, Act II 6–9, and Act III 10–12.']:null);const frame=(viewBox==='0 0 360 203'?'<rect x=".75" y=".75" width="358.5" height="201.5" rx="3" fill="none"/>':(viewBox.startsWith('0 0 880')?'':`<rect x=".75" y=".75" width="${Number(viewBox.split(' ')[2])-1.5}" height="${Number(viewBox.split(' ')[3])-1.5}" rx="3" fill="none"/>`));const svg='<svg class="'+artClass+'" data-structure="'+type+'"'+(wheelKind?' data-hero-wheel="'+wheelKind+'"':'')+' viewBox="'+viewBox+'" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+esc(title.join(' / ')+' — '+focusTitle.join(' / '))+'" fill="none" stroke="currentColor" stroke-width="1.5"><title>'+esc(title.join(' / ')+' — '+focusTitle.join(' / '))+'</title>'+frame+body+'</svg>';const diagram=(type==='beats'&&!active.length)?window.SaveTheCatPercentTimeline({heading:false}):(wheelKind?'<div class="hero-wheel-scroll"><p class="hero-wheel-hint">'+dual(['横向查看完整圆环','Scroll sideways for the full circle'])+'</p>'+svg+'</div>':svg);const readable=labels.map((p,i)=>`<li class="${chosen(i)?'is-focus':'is-dim'}" data-label-stage="${i+1}"><b>${i+1}</b>${dual(p)}</li>`).join('');return `<div class="book-structure-visual" data-model="${esc(model)}" data-layout="${type==='beats'&&!active.length?'percent':'stages'}" data-focus="${active.map(i=>i+1).join(',')}" data-row="${esc(focusTitle[1])}">${dual(title,'book-model-name')}${dual(focusTitle,'book-focus-heading')}${diagram}${transitions}${phases.length?`<div class="book-phase-key">${phases.map(ph=>`<span style="--phase-color:${ph.c}" class="${!active.length||active.some(i=>i>=ph.a&&i<=ph.b)?'is-focus':'is-dim'}">${dual(ph.p)}</span>`).join('')}</div>`:''}<ol class="book-stage-labels">${readable}</ol>${autoCaption?dual(autoCaption,'book-highlight-caption'):''}</div>`;};window.HeroJourneyDiagrams=()=>`<div class="hero-diagram-pair" data-hero-diagrams="two">${window.BookStructureArt('cycle',{model:'campbell',plate:true})}${window.BookStructureArt('cycle',{model:'vogler',plate:true})}</div>`;})();
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
