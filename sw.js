const CACHE_NAME = 'wedding-planner-v1';

self.addEventListener('install', (e) => {
    console.log('[Service Worker] 설치 완료');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] 활성화 완료');
});

self.addEventListener('fetch', (e) => {
    // 크롬 설치 팝업을 띄우기 위한 필수 조건 (오프라인 지원 흉내)
    e.respondWith(
        fetch(e.request).catch(() => new Response('오프라인 상태입니다. 인터넷을 연결해주세요.'))
    );
});