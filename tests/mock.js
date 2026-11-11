// Faux Firebase (Auth + Firestore) injecté à la place du SDK pour tester l'appli sans réseau.
module.exports=`
(function(){
  var store={revente_matches:{},revente_config:{"abonnements": {"a": {"aR": {"season": "2026-27", "person": "Rachid", "amount": 1524, "ref": "", "source": "billetterie", "by": "Rachid"}, "aS": {"season": "2026-27", "person": "Sylvain", "amount": 1524, "ref": "", "source": "manuel", "by": "Rachid"}}}, "ventes": {"v": {"vpsg01": {"date": "2026-09-04", "label": "PSG – Monaco (J4)", "price": 300, "fee": 36.0, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "verse", "by": "Rachid"}, "vpsg02": {"date": "2026-10-10", "label": "PSG – Le Mans", "price": 232, "fee": 27.84, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "verse", "by": "Rachid"}, "vpsg03": {"date": "2026-10-20", "label": "PSG – Barcelone", "price": 998, "fee": 119.76, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "verse", "by": "Rachid"}, "vpsg04": {"date": "2026-10-26", "label": "PSG – Lyon", "price": 398, "fee": 47.76, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "verse", "by": "Rachid"}, "vpsg05": {"date": "2026-11-07", "label": "PSG – Troyes", "price": 220, "fee": 26.4, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "verse", "by": "Rachid"}, "vpsg06": {"date": "2026-11-25", "label": "PSG – Roma", "price": 598, "fee": 71.76, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "attente", "by": "Rachid"}, "vpsg07": {"date": "2026-11-28", "label": "PSG – Lorient", "price": 250, "fee": 30.0, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "attente", "by": "Rachid"}, "vpsg08": {"date": "2026-12-12", "label": "PSG – Paris FC", "price": 300, "fee": 36.0, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "attente", "by": "Rachid"}, "vpsg09": {"date": "2027-01-23", "label": "PSG – Auxerre", "price": 220, "fee": 26.4, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "attente", "by": "Rachid"}, "vpsg10": {"date": "2027-02-07", "label": "PSG – Marseille", "price": 598, "fee": 71.76, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "attente", "by": "Rachid"}, "vpsg11": {"date": "2027-03-07", "label": "PSG – Rennes", "price": 258, "fee": 30.96, "source": "billetterie", "seller": "Rachid", "sellerSrc": "manuel", "reglement": "attente", "by": "Rachid"}}}}};
  window.__log=[];window.__failSnap=false;
  function mk(e){return {email:e,reauthenticateWithCredential:function(c){if(c.p!=='bon'){var er=new Error('x');er.code='auth/invalid-credential';return Promise.reject(er);}return Promise.resolve();},updatePassword:function(p){window.__log.push(['updatePassword',p]);return Promise.resolve();}};}
  var user=(location.search.indexOf('restore')>=0)?mk('sylvain@psg-revente.fr'):null,listeners=[];
  function colRef(name){
    var c={
      doc:function(id){return {
        get:function(){var d=store[name][id];return Promise.resolve({exists:!!d,data:function(){return Object.assign({},d);}});},
        update:function(p,val){window.__log.push(['update',name,id,p]);if(typeof p==='string'){var k=p.split('.');if(val==='__DEL__')delete store[name][id][k[0]][k[1]];return Promise.resolve();}Object.assign(store[name][id],p);return Promise.resolve();},
        set:function(p,o){window.__log.push(['set',name,id,p]);var cur=store[name][id]=store[name][id]||{};Object.keys(p).forEach(function(k){if(k==='v'){cur.v=Object.assign(cur.v||{},p.v);}else if(k==='t'){cur.t=Object.assign(cur.t||{},p.t);}else if(k==='a'){cur.a=Object.assign(cur.a||{},p.a);}else cur[k]=p[k];});return Promise.resolve();},
        onSnapshot:function(){return function(){};},
        __id:id,__col:name};},
      limit:function(){return c;},
      orderBy:function(){return c;},
      get:function(){var ids=Object.keys(store[name]);
        var docs=ids.map(function(i){return {id:i,data:function(){return Object.assign({},store[name][i]);}};});
        docs.sort(function(a,b){return a.data().order-b.data().order;});
        return Promise.resolve({empty:!ids.length,docs:docs});},
      onSnapshot:function(a,b){if(window.__failSnap&&b)setTimeout(function(){b(new Error('boom'));},50);return function(){};}
    };return c;}
  window.firebase={apps:[],initializeApp:function(){this.apps.push(1);},
    auth:function(){return {
      get currentUser(){return user;},
      onAuthStateChanged:function(cb){setTimeout(function(){cb(user);},10);},
      signInWithEmailAndPassword:function(e,p){window.__log.push(['login',e]);
        if(p==='bon'){user=mk(e);return Promise.resolve();}
        var er=new Error('bad');er.code='auth/invalid-credential';return Promise.reject(er);},
      signOut:function(){user=null;return Promise.resolve();}};},
    firestore:function(){return {enablePersistence:function(){return Promise.resolve();},collection:colRef,
      batch:function(){var ops=[];return {set:function(r,d){ops.push([r,d]);},commit:function(){ops.forEach(function(o){store[o[0].__col][o[0].__id]=o[1];});window.__log.push(['batch',ops.length]);return Promise.resolve();}};}};}};
window.firebase.firestore.FieldValue={delete:function(){return '__DEL__';}};
window.firebase.auth.EmailAuthProvider={credential:function(e,p){return {e:e,p:p};}};
})();`;
