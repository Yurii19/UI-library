

const config1 = ['https://loremflickr.com/320/240', 'https://loremflickr.com/320/240/brazil,rio', 'https://loremflickr.com/g/320/240/paris,girl/all'];
let id = 'carousel1';
drawSlider(id, config1);

const buttonL = document.getElementById('button-left');

function drawSlider(sliderAreaId, config1) {
  const screen = document.getElementById(sliderAreaId);
  const slideWidth = 400;
  const sliderSize = config1.length;
  const buttonL = document.getElementById('button-left');
  const buttonR = document.getElementById('button-right');

  for (let i = 0; i < sliderSize; i++) {
    let nodeImg = document.createElement('img');
    nodeImg.src = config1[i];
    nodeImg.className = 'virtualImg';
    nodeImg.width = slideWidth;
    screen.append(nodeImg);
  }

  let currentPosition = 0;
  showButton(currentPosition, buttonL, buttonR, sliderSize);

  buttonL.addEventListener('click', () => {

    if (currentPosition == 0) {
      return;
    }
    currentPosition -= 1;
    const disposition = slideWidth * currentPosition*-1;
    screen.style.marginLeft = disposition.toString() + 'px';
    showButton(currentPosition, buttonL, buttonR, sliderSize);
  });

  buttonR.addEventListener('click', () => {
    if (currentPosition == sliderSize-1) {
      return;
    }

    currentPosition += 1;
    const disposition = slideWidth * currentPosition*-1;
    screen.style.marginLeft = disposition.toString() + 'px';
    showButton(currentPosition, buttonL, buttonR, sliderSize);
  })
}

function showButton(position, bl, br, cap) {
  if (position == cap-1) {
    br.classList.add('button-hide');
  } else {
    br.classList.remove('button-hide');
  }
  if (position == 0) {
    bl.classList.add('button-hide');
  } else {
    bl.classList.remove('button-hide');
  }
}