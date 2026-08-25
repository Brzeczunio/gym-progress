const CACHE='gym-progress-v36';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(
  caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k.startsWith('gym-progress-') && k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));
self.addEventListener('fetch',e=>{
  const req=e.request;
  const url=new URL(req.url);
  const isImage=req.destination==='image' || url.pathname.includes('/eximg/');
  const isNav=req.mode==='navigate';
  if(isImage || isNav){
    e.respondWith(fetch(req).then(resp=>{
      const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(req,copy)); return resp;
    }).catch(()=>caches.match(req).then(r=>r || (isNav?caches.match('./index.html'):undefined))));
    return;
  }
  e.respondWith(caches.match(req).then(r=>r||fetch(req).then(resp=>{
    const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(req,copy)); return resp;
  }).catch(()=>caches.match('./index.html'))));
});
