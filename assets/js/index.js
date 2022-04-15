/* 공지사항 슬라이더 */
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
}, 1000);

/*  */
document.querySelector('.notice .prom-btn').addEventListener('click', (e) => {
  e.preventDefault();

  const current = e.currentTarget;
  current.classList.toggle('prom-btn-click');

  const prom = document.querySelector('.promotion');
  prom.classList.toggle('prom-show');
});

/* GNB메뉴 마우스 이벤트 */
const gnbSubWrap = document.querySelector('.gnb_sub_wrap');

document.querySelectorAll('.gnb_bottom_inner > ul > li').forEach((v, i) => {
  v.addEventListener('mouseover', (e) => {
    const subInner = v.querySelector('.gnb_sub_wrap');
    subInner.style.maxHeight = subInner.scrollHeight + 'px';
  });

  v.addEventListener('mouseout', (e) => {
    const subInner = v.querySelector('.gnb_sub_wrap');
    subInner.style.maxHeight = 0;
  });
});

document
  .querySelector('.gnb_top .btn_search')
  .addEventListener('click', (e) => {
    const current = e.currentTarget;
    current.classList.toggle('show');

    if (current.classList.contains('show')) {
      show(e);
    } else {
      hide(e);
    }
  });

function show(e) {
  const current = e.currentTarget;
  current.style.width = '180px';

  const icon = current.querySelector('a');
  icon.style.right = '-5px';
  icon.style.left = 'unset';

  const input = current.querySelector('input');
  input.style.display = 'block';
}

function hide(e) {
  const current = e.currentTarget;
  current.style.width = '34px';

  const icon = current.querySelector('a');
  icon.style.right = 'unset';
  icon.style.left = '5px';

  const input = current.querySelector('input');
  input.style.display = 'none';
}

/* 스크롤시 이벤트, 애니메이션  */
const scroll = document.querySelectorAll('#scroll');
const windowHeight = window.innerHeight;

function scrollAnimations() {
  scroll.forEach((v, i) => {
    const scrollTop = v.getBoundingClientRect().top;

    if (windowHeight > scrollTop) {
      v.classList.add('animations');
    } else {
      v.classList.remove('animations');
    }
  });
}

window.addEventListener('scroll', scrollAnimations);
