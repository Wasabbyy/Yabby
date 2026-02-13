(function () {
  'use strict';

  const startScreen = document.getElementById('start-screen');
  const gameScreen = document.getElementById('game-screen');
  const startBtn = document.getElementById('start-btn');
  const backBtn = document.getElementById('back-btn');
  const doorsContainer = document.getElementById('doors-container');
  const character = document.getElementById('character');
  const pathway = document.querySelector('.pathway');
  const memoryModal = document.getElementById('memory-modal');
  const modalBackdrop = memoryModal.querySelector('.modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const memoryDateEl = memoryModal.querySelector('.memory-date');
  const memoryPhotoEl = memoryModal.querySelector('.memory-photo');
  const memoryTextEl = memoryModal.querySelector('.memory-text');
  const memoryPrevBtn = document.getElementById('memory-prev');
  const memoryNextBtn = document.getElementById('memory-next');
  const memoryModalContent = document.getElementById('memory-modal-content');

  const dates = JOURNEY_DATA.dates || [];
  const visited = new Set();
  let characterAtDoorIndex = null;
  let currentSlides = null;
  let currentSlideIndex = 0;

  function showScreen(screen) {
    startScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    memoryModal.classList.add('hidden');
    if (screen === 'start') startScreen.classList.remove('hidden');
    else if (screen === 'game') gameScreen.classList.remove('hidden');
    else if (screen === 'memory') memoryModal.classList.remove('hidden');
  }

  function getDoorLayoutScale(w) {
    if (w <= 0) return { doorHalf: 70, leftOffset: 222 };
    if (w < 400) return { doorHalf: 36, leftOffset: 114 };
    if (w < 500) return { doorHalf: 50, leftOffset: 158 };
    var scale = Math.min(1, w / 720);
    return { doorHalf: Math.round(70 * scale), leftOffset: Math.round(222 * scale) };
  }

  function getDoorPositions() {
    if (!pathway || !dates.length) return [];
    const w = pathway.offsetWidth;
    const h = pathway.offsetHeight;
    const margin = Math.max(20, Math.min(40, w * 0.05));
    const n = dates.length;
    var pathCount = n;
    if (n === 11) pathCount = 10;
    const rows = Math.ceil(pathCount / 2);
    const leftX = w * 0.15;
    const rightX = w * 0.85;
    return dates.map(function (_, i) {
      if (i >= pathCount) {
        return { x: w / 2, y: h - margin };
      }
      const row = Math.floor(i / 2);
      const x = i % 2 === 0 ? leftX : rightX;
      const y = rows <= 1 ? h / 2 : margin + (h - 2 * margin) * (row + 0.5) / rows;
      return { x: x, y: y };
    });
  }

  function buildPathway() {
    doorsContainer.innerHTML = '';
    characterAtDoorIndex = null;
    if (!dates.length) {
      doorsContainer.innerHTML = '<p style="text-align:center;padding:2rem;font-size:8px;">Add dates in data.js</p>';
      updateCharacterPosition(null);
      return;
    }

    const positions = getDoorPositions();
    const n = dates.length;
    var pathCount = n;
    if (n === 11) pathCount = 10;
    const rows = Math.ceil(pathCount / 2);
    const pathOrder = [];
    for (var r = 0; r < rows; r++) {
      if (r % 2 === 0) {
        pathOrder.push(r * 2);
        if (r * 2 + 1 < pathCount) pathOrder.push(r * 2 + 1);
      } else {
        if (r * 2 + 1 < pathCount) pathOrder.push(r * 2 + 1);
        pathOrder.push(r * 2);
      }
    }
    const pathPositions = pathOrder.map(function (i) { return positions[i]; });

    const pathPoints = pathPositions.map(function (p) { return p.x + ',' + p.y; }).join(' ');
    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    pathEl.setAttribute('class', 'path-snake');
    pathEl.setAttribute('viewBox', '0 0 ' + pathway.offsetWidth + ' ' + pathway.offsetHeight);
    pathEl.setAttribute('preserveAspectRatio', 'none');
    pathEl.innerHTML = '<polyline class="path-pink" fill="none" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" points="' + pathPoints + '"/>';
    doorsContainer.appendChild(pathEl);

    var layout = getDoorLayoutScale(pathway.offsetWidth);
    dates.forEach(function (d, i) {
      const pos = positions[i];
      var isLeft = i % 2 === 0;
      if (n === 11 && i === 10) isLeft = false;
      const wrapper = document.createElement('div');
      wrapper.className = 'door-wrapper door-' + (isLeft ? 'left' : 'right') + (visited.has(d.id) ? ' visited' : '') + (pathway.offsetWidth < 500 ? ' door-compact' : '');
      wrapper.dataset.id = d.id;
      wrapper.dataset.index = String(i);
      if (isLeft) {
        wrapper.style.left = (pos.x - layout.leftOffset) + 'px';
      } else {
        wrapper.style.left = (pos.x - layout.doorHalf) + 'px';
      }
      wrapper.style.top = pos.y + 'px';

      wrapper.innerHTML =
        '<div class="door">' +
        '<img class="door-img" src="assets/dvere.png" alt="Door">' +
        '<span class="door-date">' + escapeHtml(d.date) + '</span>' +
        '</div>';

      wrapper.addEventListener('click', function () {
        onDoorClick(i, d);
      });
      doorsContainer.appendChild(wrapper);
    });

    updateCharacterPosition(null);
  }

  function onDoorClick(index, memory) {
    if (characterAtDoorIndex === index) {
      openMemory(memory);
      return;
    }
    characterAtDoorIndex = index;
    updateCharacterPosition(index);
    updateDoorHighlights();
  }

  function updateCharacterPosition(doorIndex) {
    if (!character || !pathway) return;
    const positions = getDoorPositions();
    if (doorIndex === null || positions.length === 0) {
      const p = positions[0];
      if (p) {
        character.style.left = p.x + 'px';
        character.style.top = p.y + 'px';
      }
      return;
    }
    const p = positions[doorIndex];
    character.style.left = p.x + 'px';
    character.style.top = p.y + 'px';
  }

  function updateDoorHighlights() {
    const wrappers = doorsContainer.querySelectorAll('.door-wrapper');
    wrappers.forEach(function (w, i) {
      w.classList.toggle('at-character', characterAtDoorIndex === i);
    });
  }

  function showMemorySlide(index) {
    if (!currentSlides || index < 0 || index >= currentSlides.length) return;
    currentSlideIndex = index;
    const slide = currentSlides[index];
    memoryPhotoEl.src = slide.src;
    memoryPhotoEl.alt = slide.text || 'Memory';
    memoryTextEl.textContent = slide.text || '';
    memoryTextEl.style.display = 'block';
    memoryPrevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    memoryNextBtn.style.visibility = index === currentSlides.length - 1 ? 'hidden' : 'visible';
  }

  function openMemory(memory) {
    memoryDateEl.textContent = memory.date;
    visited.add(memory.id);

    const doorEl = doorsContainer.querySelector('[data-id="' + memory.id + '"]');
    if (doorEl) doorEl.classList.add('visited');

    if (memory.photos && memory.photos.length > 0) {
      memoryModal.classList.add('memory-fullpage');
      memoryModalContent.classList.add('memory-presentation-wrap');
      currentSlides = memory.photos;
      currentSlideIndex = 0;
      memoryPrevBtn.style.display = 'flex';
      memoryNextBtn.style.display = 'flex';
      showMemorySlide(0);
    } else {
      memoryModal.classList.remove('memory-fullpage');
      memoryModalContent.classList.remove('memory-presentation-wrap');
      currentSlides = null;
      memoryPhotoEl.src = memory.photo;
      memoryPhotoEl.alt = memory.text || 'Memory';
      memoryTextEl.textContent = memory.text || '';
      memoryTextEl.style.display = memory.text ? 'block' : 'none';
      memoryPrevBtn.style.display = 'none';
      memoryNextBtn.style.display = 'none';
    }

    showScreen('memory');
  }

  function onMemoryPrev() {
    if (currentSlides && currentSlideIndex > 0) showMemorySlide(currentSlideIndex - 1);
  }

  function onMemoryNext() {
    if (currentSlides && currentSlideIndex < currentSlides.length - 1) showMemorySlide(currentSlideIndex + 1);
  }

  function closeMemory() {
    memoryModal.classList.add('hidden');
    memoryModal.classList.remove('memory-fullpage');
    memoryModalContent.classList.remove('memory-presentation-wrap');
    showScreen('game');
  }

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  startBtn.addEventListener('click', function () {
    showScreen('game');
    buildPathway();
  });

  backBtn.addEventListener('click', function () {
    showScreen('start');
  });

  modalClose.addEventListener('click', closeMemory);
  modalBackdrop.addEventListener('click', closeMemory);
  memoryPrevBtn.addEventListener('click', onMemoryPrev);
  memoryNextBtn.addEventListener('click', onMemoryNext);

  var startPhotoEl = document.getElementById('start-photo');
  if (JOURNEY_DATA.startPhoto && startPhotoEl) {
    startPhotoEl.src = JOURNEY_DATA.startPhoto;
  }
  startPhotoEl.addEventListener('error', function () {
    this.classList.add('failed');
  });

  buildPathway();
  window.addEventListener('resize', function () {
    var saved = characterAtDoorIndex;
    buildPathway();
    characterAtDoorIndex = saved;
    if (saved !== null) {
      updateCharacterPosition(saved);
      updateDoorHighlights();
    }
  });
})();
