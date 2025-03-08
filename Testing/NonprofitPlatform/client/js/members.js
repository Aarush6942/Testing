// Function to create member card HTML
function createMemberCard(member) {
    return `
        <div class="member-card">
            <div class="member-avatar">
                <img src="${member.imageUrl}" alt="${member.name}">
            </div>
            <h3 class="member-name">${member.name}</h3>
            <p class="member-title">${member.title}</p>
            <p class="member-bio">${member.bio}</p>
        </div>
    `;
}

// Function to load and display members
async function loadMembers() {
    const membersGrid = document.getElementById('members-grid');
    
    try {
        const response = await fetch('/api/members');
        if (!response.ok) {
            throw new Error('Failed to fetch members');
        }
        
        const members = await response.json();
        
        // Add member cards to the grid
        membersGrid.innerHTML = members.map(member => createMemberCard(member)).join('');
    } catch (error) {
        console.error('Error loading members:', error);
        membersGrid.innerHTML = '<p class="error-message">Failed to load team members. Please try again later.</p>';
    }
}

// Load members when the page loads
document.addEventListener('DOMContentLoaded', loadMembers);
