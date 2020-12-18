let mapbtn = document.querySelector(".map-btn");
let listbtn = document.querySelector(".list-btn");
let searchBar = document.querySelector("#search-bar")

let path = {
    "map": "mask_nearby.html",
    "list": "mask_list.html",
}

mapbtn.addEventListener("click", () => {
    let keyword = searchBar.value;
    if(keyword){
    let newURL = `${window.location.origin}/${path.map}?keyword=${keyword}`
    window.location.href = newURL;
    } else {
        alert('목적지를 입력해주세요.');
    }
});

listbtn.addEventListener("click", () => {
    let keyword = searchBar.value;
    if(keyword){
    let newURL = `${window.location.origin}/${path.list}?keyword=${keyword}`
    window.location.href = newURL;
    } else {
        alert('목적지를 입력해주세요.');
    }
});