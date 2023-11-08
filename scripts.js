function showSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      section.style.display = 'none';
      section.classList.remove('active');
  });

  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.classList.remove('active');
  });

  const sectionToShow = document.getElementById(id);
  if (sectionToShow) {
      sectionToShow.style.display = 'block';
      setTimeout(() => {
          sectionToShow.classList.add('active');
      }, 10);
  }

  document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
  document.getElementById("mainNav").classList.remove('active');
}

function toggleMenu() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle('active');
}

window.onload = function() {
  showSection('info');
}

function isPhishingWebsite(url) {
  // Check if the length of the URL is more than 54 characters
  var URL_Length = false;
  if (url.length < 54) {
    URL_Length = -1;
  } else if (url.length == 54) {
    URL_Length = 0;
  } else if (url.length > 54) {
    URL_Length = 1;
  }

  // Check if there is a number in the URL compatible with an IP address format
  const ipRegex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
  if (ipRegex.test(url)) {
    having_IP_Address = 1; // IP address found, might indicate a phishing website
  } else {
    having_IP_Address = 0; // No IP address found
  }

  // Check if there is an "@" character in the URL
  //if (url.includes('@')) {
   // phishing = true;
  //}

  // Check if there are more than 3 dots in the URL
  //const dotCount = (url.match(/\./g) || []).length;
 // if (dotCount > 3) {
 //     phishing = true;
  

  // If none of the conditions are met, it's not a phishing website
  return phishing;
exec
}


document.getElementById('phishingCheckForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Grab the value from the input
  const url = document.getElementById('link').value;
  
  const resultDiv = document.getElementById('phishingResult');
  if (isPhishingWebsite(url)) {
    resultDiv.textContent = "This is a Phishing Website!";
  } else {
    resultDiv.textContent = "This is not a Phishing Website!";
  }
});






