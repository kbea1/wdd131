// Footer: current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// Array of temple objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo-guam-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-d.c.-temple.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-city-temple.jpg"
  },
  {
    templeName: "Trujillo Perú",
    location: "Trujillo, Perú",
    dedicated: "2015, October, 11",
    area: 26008,
    imageUrl: "images/trujillo-peru-temple.jpg"
  },
  {
    templeName: "Arequipa Perú",
    location: "Arequipa, Perú",
    dedicated: "2019, June, 23",
    area: 26008,
    imageUrl: "images/arequipa-temple.jpg"
  },
  {
    templeName: "Draper Utah",
    location: "Draper, Utah, United States",
    dedicated: "2009, March, 20",
    area: 94924,
    imageUrl: "images/draper-utah-temple.jpg"
  }
];

// Function to build the HTML for one temple card
function buildTempleCard(temple) {
  return `
    <figure>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    </figure>
  `;
}

// Function to display a given list of temples in the gallery
function displayTemples(templeArray) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  templeArray.forEach((temple) => {
    gallery.innerHTML += buildTempleCard(temple);
  });
}

// Show all temples when the page first loads
displayTemples(temples);

// Filter functions
document.getElementById('home').addEventListener('click', () => {
  displayTemples(temples);
});

document.getElementById('old').addEventListener('click', () => {
  const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', () => {
  const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

document.getElementById('large').addEventListener('click', () => {
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(largeTemples);
});

document.getElementById('small').addEventListener('click', () => {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(smallTemples);
});