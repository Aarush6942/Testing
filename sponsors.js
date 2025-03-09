// Function to create sponsor card HTML
function createSponsorCard(sponsor) {
    return `
        <div class="sponsor-card">
            <div class="sponsor-logo">
                <img src="${sponsor.logoUrl}" alt="${sponsor.name} logo">
            </div>
            <h3 class="sponsor-name">${sponsor.name}</h3>
            <p class="sponsor-description">${sponsor.description}</p>
            <a href="${sponsor.websiteUrl}" target="_blank" rel="noopener noreferrer" class="sponsor-link">
                Visit Website
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
}

// Function to load and display sponsors
async function loadSponsors() {
    const sponsorsGrid = document.getElementById('sponsors-grid');
    
    try {
        const response = await fetch('/api/sponsors');
        if (!response.ok) {
            throw new Error('Failed to fetch sponsors');
        }
        
        const sponsors = await response.json();
        
        // Add sponsor cards to the grid
        sponsorsGrid.innerHTML = sponsors.map(sponsor => createSponsorCard(sponsor)).join('');
    } catch (error) {
        console.error('Error loading sponsors:', error);
        sponsorsGrid.innerHTML = '<p class="error-message">Failed to load sponsors. Please try again later.</p>';
    }
}

// Load sponsors when the page loads
document.addEventListener('DOMContentLoaded', loadSponsors);