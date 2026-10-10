const menuButton = document.querySelector(`#menu-button`);
const mainNav = document.querySelector(`#main-nav`);

function toggleMenu() {
  const isOpen = mainNav.classList.toggle(`open`);
  menuButton.setAttribute(`aria-expanded`, `${isOpen}`);

  if (isOpen) {
    menuButton.textContent = `Close`;
  } else {
    menuButton.textContent = `Menu`;
  }
}

menuButton.addEventListener(`click`, toggleMenu);

const joinForm = document.querySelector(`#join-form`);
const formMessage = document.querySelector(`#form-message`);

function getMembers() {
  const saved = localStorage.getItem(`members`);

  if (saved) {
    return JSON.parse(saved);
  }

  return [];
}

function handleJoin(event) {
  event.preventDefault();

  const member = {
    name: joinForm.elements[`member-name`].value.trim(),
    email: joinForm.elements[`member-email`].value.trim().toLowerCase(),
    level: joinForm.elements[`member-level`].value
  };

  const members = getMembers();
  const alreadyJoined = members.some((saved) => saved.email === member.email);

  if (alreadyJoined) {
    formMessage.textContent = `${member.name}, that email is already registered.`;
    return;
  }

  members.push(member);
  localStorage.setItem(`members`, JSON.stringify(members));
    formMessage.textContent = `Welcome, ${member.name}! You joined at the ${member.level} level.`;
  joinForm.reset();
}

function showReturningMember() {
  const members = getMembers();

  if (members.length > 0) {
    const lastMember = members[members.length - 1];
    formMessage.textContent = `Welcome back, ${lastMember.name}!`;
  }
}

if (joinForm) {
  joinForm.addEventListener(`submit`, handleJoin);
  showReturningMember();
}

const trails = [
  {
    name: `Laguna Wilcacocha`,
    level: `Easy`,
    altitude: 3725,
    description: `A half-day hike above Huaraz with wide views of the Cordillera Blanca. A good first acclimatization walk.`
  },
  {
    name: `Laguna Parón`,
    level: `Easy`,
    altitude: 4200,
    description: `A casual walk along the largest lake in the Cordillera Blanca, and a good first acclimatization hike.`
  },
  {
    name: `Laguna Churup`,
    level: `Moderate`,
    altitude: 4450,
    description: `A steep climb of about three hours to an azure lake surrounded by snow-capped peaks.`
  },
  {
    name: `Laguna 69`,
    level: `Challenging`,
    altitude: 4600,
    description: `A full-day hike from Huaraz to one of the most iconic turquoise lakes in the Andes. Start early.`
  }
];

const trailList = document.querySelector(`#trail-list`);
const levelFilter = document.querySelector(`#level-filter`);

function createTrailCard(trail) {
  return `
    <article class="trail-card">
      <h3>${trail.name}</h3>
      <p>${trail.description}</p>
      <p><strong>Level:</strong> ${trail.level}</p>
      <p><strong>Altitude:</strong> ${trail.altitude} m</p>
    </article>
  `;
}

function renderTrails(list) {
  if (list.length === 0) {
    trailList.innerHTML = `<p>No trails match this difficulty yet.</p>`;
    return;
  }

  trailList.innerHTML = list.map(createTrailCard).join(``);
}

function filterTrails() {
  const level = levelFilter.value;
  localStorage.setItem(`trail-level`, level);

  if (level === `all`) {
    renderTrails(trails);
  } else {
    renderTrails(trails.filter((trail) => trail.level === level));
  }
}

if (trailList && levelFilter) {
  levelFilter.value = localStorage.getItem(`trail-level`) || `all`;
  levelFilter.addEventListener(`change`, filterTrails);
  filterTrails();
}