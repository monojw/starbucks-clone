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
const btnSearch = document.querySelector('.gnb_top .btn_search');
btnSearch.addEventListener('click', (e) => {
  const current = e.currentTarget;
  current.classList.toggle('show');

  if (current.classList.contains('show')) {
    show(e);
  } else {
    hide(e);
  }
});

// <input>를 보여준다.
function show(e) {
  const current = e.currentTarget;
  current.style.width = '180px';

  const icon = current.querySelector('a');
  icon.style.right = '-5px';
  icon.style.left = 'unset';

  const input = current.querySelector('input');
  input.style.display = 'block';
}

// <input>을 숨긴다.
function hide(e) {
  const current = e.currentTarget;
  current.style.width = '34px';

  const icon = current.querySelector('a');
  icon.style.right = 'unset';
  icon.style.left = '5px';

  const input = current.querySelector('input');
  input.style.display = 'none';
}

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
