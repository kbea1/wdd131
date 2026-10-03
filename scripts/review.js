// Footer: current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// Read form data from the URL query string
const params = new URLSearchParams(window.location.search);

document.getElementById('summaryProduct').textContent = params.get('product') || 'N/A';
document.getElementById('summaryRating').textContent = params.get('rating') ? params.get('rating') + ' star(s)' : 'N/A';
document.getElementById('summaryDate').textContent = params.get('installDate') || 'N/A';

const features = params.getAll('features');
document.getElementById('summaryFeatures').textContent = features.length > 0 ? features.join(', ') : 'None selected';

document.getElementById('summaryUsername').textContent = params.get('username') || 'Anonymous';

// localStorage counter
let reviewCount = localStorage.getItem('reviewCount');

if (!reviewCount) {
  reviewCount = 0;
}

reviewCount = parseInt(reviewCount) + 1;
localStorage.setItem('reviewCount', reviewCount);

document.getElementById('reviewCount').textContent = reviewCount;