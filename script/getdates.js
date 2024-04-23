// Get the current year
const currentYearC = new Date().getFullYear();

// Set the copyright year in the footer
document.getElementById('copyright').textContent = `Copyright © ${currentYearC} 👨🏼‍💻Mark Augustine Gregorio Estimada 🇵🇭 Quezon City`;

// Get the last modified date of the document
const pattern = /last_modif\s*=\s*([^;]*)/;

    const lastVisit = parseFloat(document.cookie.replace(pattern, "$1"));
    const lastModif = Date.parse(document.lastModified);
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear(); // Initialize currentYear here

    if (Number.isNaN(lastVisit) || lastModif > lastVisit) {
      document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
        location.pathname
      }`;
    }

    // Update the content of the footer
    const footerContent = document.getElementById('footer-content');
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    footerContent.textContent = `Last Modified: ${lastModifiedDate.toLocaleString('en-US', options)} | Current Year: ${currentYear}`;