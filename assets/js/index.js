/* 공지사항 슬라이드 */
const rolling = document.querySelector('.notice-rolling ul');
const lists = document.querySelectorAll('.notice-rolling li');
let i = 0;

setInterval(function () {
  i = (i + 1) % lists.length;
  if (i == 0) {
    rolling.style.top = 0;
  } else {
    rolling.style.top = -i * 24 + 'px';
  }
}, 1500);

/* 스타벅스 프로모션 버튼, 클릭 이벤트 */
const promBtn = document.querySelector('.notice .prom-btn');
promBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const current = e.currentTarget;
  current.classList.toggle('prom-btn-click');

  const prom = document.querySelector('.promotion');
  prom.classList.toggle('prom-show');
});

/* GNB 메뉴, 마우스 이벤트 */
const gnbSubWrap = document.querySelector('.gnb_sub_wrap');
document.querySelectorAll('.gnb_bottom_inner > ul > li').forEach((v, i) => {
  // 마우스를 올리면 메뉴가 나타난다.
  v.addEventListener('mouseover', (e) => {
    const subInner = v.querySelector('.gnb_sub_wrap');
    subInner.style.maxHeight = subInner.scrollHeight + 'px';
  });

  // 마우스가 나가면 메뉴가 사라진다.
  v.addEventListener('mouseout', (e) => {
    const subInner = v.querySelector('.gnb_sub_wrap');
    subInner.style.maxHeight = 0;
  });
});

/* 검색버튼, 클릭 이벤트 */
const btnSearch = document.querySelector('.gnb_top .btn_search a');
const searchBar = document.querySelector('.gnb_top .btn_search input');
let search = false;

btnSearch.addEventListener('click', (e) => {
  const current = e.currentTarget;

  if (!search) {
    // 검색창을 보여준다.
    current.classList.add('show');
    show(e);

    // 검색창에 포커스를 준다.
    searchBar.focus();

    // 검색어 입력 체크
    search = true;
  } else {
    // 검색어가 없다면
    if (!searchBar.value) {
      // alert창을 띄운다.
      alert('검색어를 입력하세요.');
      searchBar.focus();
      return;
    }
    // 있다면 구글 검색 결과로 이동한다.
    location.href = `https://www.google.com/search?q=${searchBar.value}`;
    searchBar.value = '';
  }
});

// <input>를 보여준다.
function show(e) {
  const current = e.currentTarget;
  current.parentElement.style.width = '180px';

  current.style.right = '-5px';
  current.style.left = 'unset';

  const input = document.querySelector('.btn_search input');
  input.style.display = 'block';
}

/* <input> 검색어 입력시 이벤트 */
searchBar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    location.href = `https://www.google.com/search?q=${searchBar.value}`;
    searchBar.value = '';
  }
});

/* 스크롤시 발생하는 이벤트, 애니메이션을 적용한다. */
const scroll = document.querySelectorAll('#scroll');
const windowHeight = window.innerHeight;

function scrollAnimations() {
  scroll.forEach((v, i) => {
    const scrollTop = v.getBoundingClientRect().top;

    // 윈도우의 높이가 아이템의 top 값보다 크면
    if (windowHeight > scrollTop) {
      // 클래스를 추가한다.
      v.classList.add('animations');
    } else {
      v.classList.remove('animations');
    }
  });
}

window.addEventListener('scroll', scrollAnimations);
