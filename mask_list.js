let url = new URL(window.location.href)
let keywordParam = url.searchParams.get("keyword");

var ps = new kakao.maps.services.Places(); // 장소 검색 객체를 생성

let back_btn = document.querySelector(".back-btn-wrapper");

back_btn.addEventListener("click", () => {
    window.history.back();
})

function keywordSearch(keyword){
    ps.keywordSearch(keyword, keywordSearchCallback);
}

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function keywordSearchCallback (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        let center = new kakao.maps.LatLng(data[0].y, data[0].x);
        map.setCenter(center);
        }
    }
    if (keywordParam){
        keywordSearch(keywordParam);
    }