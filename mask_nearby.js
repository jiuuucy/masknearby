let url = new URL(window.location.href)
let keywordParam = url.searchParams.get("keyword");

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var ps = new kakao.maps.services.Places(); // 장소 검색 객체를 생성

map.setMaxLevel(5);

// 버튼 누르거나 Enter 눌렀을 때 검색이 되도록 받기
let search_btn = document.querySelector(".search-btn");
let search_bar = document.querySelector("#search-bar");
let back_btn = document.querySelector(".back-btn-wrapper");
console.log(search_bar);
console.log(search_btn);

search_btn.addEventListener("click", () => {
    let keyword = search_bar.value;
    if(keyword) {
        console.log(keyword + "검색하셨습니다.")
        keywordSearch(keyword);
    } else {
        alert("검색어를 입력해주세요.");
    }
});

search_bar.addEventListener("keyup", () => {
    //keycode 13 = Enter key
    if(event.keyCode === 13) {
        search_btn.click();
    }
})

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
    }}
    if (keywordParam){
        keywordSearch(keywordParam);
    }