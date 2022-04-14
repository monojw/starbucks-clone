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
