(function(root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Sanglv = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  const pages = [
    ['welcome','P01','初见桑旅'],['home','P02','发现桑旅'],['garden','P03','果园与活动'],
    ['booking','P04','预约桑旅'],['ticket','P05','预约凭证'],['map','P06','探索果园'],
    ['routes','P07','选择路线'],['node','P08','节点导览'],['scan','P09','扫码探索'],
    ['passport','P10','游园护照'],['task','P11','互动任务'],['safety','P12','采摘与安全'],
    ['basket','P13','我的这一篮'],['service','P14','成果去向'],['status','P15','服务进度'],
    ['memory','P16','旅程纪念卡'],['gifts','P17','把果香带回家'],['mine','P18','我的桑旅'],
    ['staff','S01','园区工作台'],['sources','资料','内容与数据来源']
  ].map(([id,code,title])=>({id,code,title}));
  const nodes = [
    {id:'N01',no:'01',name:'桑旅起点站',short:'起点',stamp:'初见',icon:'flag',color:'purple',x:21,y:79,subtitle:'和灶灶桑打个招呼',story:'欢迎来到金灶桑旅！先熟悉游园规则，再领取属于你的数字护照。接下来，你会跟着灶灶桑认识水土、观察桑树，亲手采下一篮果香。',fact:'本项目规划一座示范果园。地图与活动节点为设计示意，实际位置须经场地踏勘确认。',source:'课程服务流程与需求文档 V1.0',question:'开始采摘前，我们应该先做什么？',options:['阅读安全说明，确认开放区域','直接进入任何一块果园','摇晃树枝让果子掉下来'],correct:0,explain:'先阅读规则，只在开放区域活动；儿童需有成人陪同。',time:'约 3 分钟'},
    {id:'N02',no:'02',name:'榕江水土站',short:'水土',stamp:'水土',icon:'water',color:'blue',x:30,y:51,subtitle:'一颗桑葚的家在哪里？',story:'金灶的果香，与这片土地紧紧相连。在课程品牌叙事里，榕江水系、砂壤和光热共同构成桑葚生长的自然意象。停下脚步，观察水流与果园的关系。',fact:'金灶是多种特色水果的产地和集散地，桑葚、杨梅、橄榄等共同构成当地的“百果”风景。',source:'汕头市共青团，2020-06-02；课程品牌理念',question:'什么共同影响桑葚的生长？',options:['只有包装颜色','水分、土壤与光照','只有果子的大小'],correct:1,explain:'水分、土壤、光照等条件共同影响作物生长。具体果园环境要以实地资料为准。',time:'约 5 分钟'},
    {id:'N03',no:'03',name:'桑树观察站',short:'观察',stamp:'观察',icon:'leaf',color:'green',x:74,y:33,subtitle:'在枝叶间，发现小秘密',story:'桑葚并不是每一颗都在同一天成熟。看看枝头果实的颜色变化，再听工作人员说明本园品种的成熟特征。请只观察，不拉扯枝叶。',fact:'课程方案以大什果桑为设计对象，描述成熟果实呈紫黑色；实际采摘须先确认园区品种和采收标准。',source:'课程 PDF 第5页；品种与操作待果园确认',question:'本方案中的紫黑色果桑，哪种做法更合适？',options:['看到绿色果实就采摘','只按果实大小判断','确认品种，按工作人员指导选成熟果'],correct:2,explain:'不同品种特征不同，需结合颜色、品种与现场指导判断。',time:'约 6 分钟'},
    {id:'N04',no:'04',name:'枝头采摘站',short:'采摘',stamp:'采摘',icon:'berry',color:'purple',x:64,y:61,subtitle:'轻轻采下，满满收获',story:'取出采摘篮，听工作人员演示，再轻拿轻放。避免挤压果实，不攀爬、不摇树，也别进入尚未开放的区域。把这次体验留下，交给工作人员确认重量。',fact:'桑葚是易受磕碰的浆果。产地报道提到，小规格包装和采后预冷能帮助保存果肉完整与新鲜度。',source:'深汕网，2024-12-03',question:'采下桑葚后，应该怎样放入篮中？',options:['轻拿轻放，避免挤压','用力压紧，装得更多','把果子从高处扔进去'],correct:0,explain:'轻拿轻放有助于减少浆果损伤；称重由工作人员确认。',time:'约 20 分钟'},
    {id:'N05',no:'05',name:'桑果工坊站',short:'工坊',stamp:'工坊',icon:'jar',color:'orange',x:78,y:83,subtitle:'果香，还可以有更多模样',story:'从枝头走进工坊，一颗桑葚还可以成为果汁、果酱或其他加工产品。选择你感兴趣的方式，了解加工过程，再为这一篮选择合适的去向。',fact:'当地桑葚已进入新茶饮供应链。订单农业把农户生产与采购需求连接起来，并在采收、包装等环节进行品质管理。',source:'深汕网，2024-12-03；体验项目为原型设想',question:'下列哪种是本方案的桑葚加工体验？',options:['把塑料做成果汁','了解桑葚果酱的制作','未经确认就自行使用工坊设备'],correct:1,explain:'果酱是方案中的加工体验；具体项目、食品操作与设备须由工作人员安排。',time:'约 15 分钟'}
  ];
  const routes = [
    {id:'nature',name:'灶灶桑 · 自然探索线',tag:'亲子友好',duration:'约 60 分钟',desc:'从水土到枝叶，收集五枚自然印章。',color:'green',order:['N01','N02','N03','N04','N05'],features:['自然观察','轻松科普','亲子任务']},
    {id:'aroma',name:'金灶 · 果香体验线',tag:'果香漫游',duration:'约 75 分钟',desc:'采一篮、做一份，留下自己的果香记忆。',color:'purple',order:['N01','N02','N04','N03','N05'],features:['采摘打卡','工坊体验','伴手礼']}
  ];
  const gifts = [
    {name:'金灶鲜桑葚',kind:'鲜果',icon:'berry',desc:'轻装一盒，把枝头果香带回家',note:'课程包装概念 · 规格待确认',color:'purple'},
    {name:'桑葚果酱',kind:'工坊',icon:'jar',desc:'把这一季的紫色，留进早餐里',note:'课程加工品概念 · 服务待确认',color:'orange'},
    {name:'灶灶桑随行袋',kind:'文创',icon:'bag',desc:'带上好奇心，继续下一次探索',note:'课程 IP 周边概念',color:'green'}
  ];
  function initial(){return {version:1,activeId:null,trips:[],route:'nature',node:'N01',facility:'',welcomeSeen:false};}
  function load(raw){if(!raw||raw.version!==1||!Array.isArray(raw.trips))return initial();return raw;}
  function active(s){return s.trips.find(x=>x.id===s.activeId)||null;}
  function trip(s){let t=active(s);if(!t){t={id:'JL'+Date.now().toString(36).toUpperCase()+Math.random().toString(36).slice(2,6).toUpperCase(),created:new Date().toISOString(),date:new Date().toLocaleDateString('zh-CN'),route:s.route,stamps:[],admitted:false,booking:null,weight:null,photo:null,service:null};s.trips.push(t);s.activeId=t.id;}return t;}
  function route(s){const t=active(s);return routes.find(x=>x.id===(t?t.route:s.route))||routes[0];}
  function summary(s){const t=active(s);return {trip:t,count:t?t.stamps.length:0,route:route(s),next:nodes.find(n=>!t||!t.stamps.includes(n.id))||null};}
  function chooseRoute(s,id){if(!routes.some(r=>r.id===id))throw Error('请选择有效路线');s.route=id;const t=active(s);if(t)t.route=id;}
  function answer(s,id,index){const n=nodes.find(n=>n.id===id);if(!n)throw Error('节点不存在');if(index!==n.correct)return {ok:false,text:n.explain};const t=active(s);const duplicate=t.stamps.includes(id);if(!duplicate)t.stamps.push(id);return {ok:true,duplicate,text:duplicate?'这个印章已经在护照里啦。':`获得「${n.stamp}」印章！`};}
  function book(s,data){if(!data.date||!/^\d{4}-\d{2}-\d{2}$/.test(data.date)||data.date<today())throw Error('请选择今天或之后的日期');if(!['morning','afternoon'].includes(data.slot))throw Error('该时段未开放，请选择其他时段');if(!Number.isInteger(data.people)||data.people<1||data.people>8)throw Error('人数需为 1–8 人');if(!data.nickname||data.nickname.trim().length<1)throw Error('请填写游客昵称');const t=trip(s);if(t.admitted)throw Error('已核验的旅程不可修改预约，请在我的页面开启新旅程');t.booking={date:data.date,slot:data.slot,people:data.people,nickname:data.nickname.trim().slice(0,20),status:'待到园',project:data.project||'采摘与导览'};t.date=data.date;return t;}
  function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
  function checkin(s){const t=active(s);if(!t||!t.booking)throw Error('请先提交预约，或由现场人员登记');t.admitted=true;t.booking.status='已核验';return t;}
  function weigh(s,value){const t=active(s);if(!t||!t.admitted)throw Error('请先完成到园核验');if(t.service&&t.service.status!=='已取消')throw Error('已有服务申请，请先取消申请再修改重量');const w=Number(value);if(!Number.isFinite(w)||w<0.01||w>30)throw Error('请填写 0.01–30 kg 内的有效重量');t.weight={kg:Math.round(w*100)/100,confirmed:true,at:new Date().toISOString(),by:'称重员 · 演示'};return t;}
  function submitService(s,data){const t=active(s);if(!t||!t.weight)throw Error('请先由工作人员确认称重');if(t.service&&!['已取消','已完成'].includes(t.service.status))throw Error('已有服务申请，请先查看进度或取消');if(!['take','jam','send'].includes(data.type))throw Error('请选择可用服务');if(data.type==='send'&&(!data.recipient||!data.address||!/^1\d{10}$/.test(data.phone||'')))throw Error('请填写收件人、11位手机号和地址');t.service={id:'SV'+Date.now().toString(36).toUpperCase(),type:data.type,status:'已提交待确认',created:new Date().toISOString(),recipient:data.type==='send'?data.recipient:'',phone:data.type==='send'?data.phone:'',address:data.type==='send'?data.address:'',history:[{status:'已提交待确认',at:new Date().toISOString()}]};return t;}
  function setService(s,status){const t=active(s);if(!t||!t.service)throw Error('当前没有服务申请');const from=t.service.status;const allowed={'已提交待确认':['工作人员已接收','已取消'],'工作人员已接收':['已完成','已取消']};if(!(allowed[from]||[]).includes(status))throw Error('当前状态不支持此操作');t.service.status=status;t.service.history.push({status,at:new Date().toISOString()});return t;}
  function newTrip(s){s.activeId=null;s.node='N01';return trip(s);}
  function switchTrip(s,id){if(!s.trips.some(x=>x.id===id))throw Error('旅程不存在');s.activeId=id;}
  return {pages,nodes,routes,gifts,initial,load,active,trip,route,summary,chooseRoute,answer,book,today,checkin,weigh,submitService,setService,newTrip,switchTrip};
});
