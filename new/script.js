// Discord link
const DISCORD_LINK = "https://discord.gg/Qr4Ve9hZAd";
const SUPPORT_EMAIL = "support@finalmc.fun";

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Join Discord function
function joinDiscord() {
    window.open(DISCORD_LINK, '_blank');
}

// Join Server function
function joinServer() {
    const ip = 'play.finalmc.fun';
    // For Minecraft, we can't directly join, but we can copy the IP
    copyIP();
    alert('Server IP copied to clipboard! Open Minecraft and add this server.');
}

// Copy IP to clipboard
function copyIP() {
    const ip = 'play.finalmc.fun';
    navigator.clipboard.writeText(ip).then(() => {
        // Show success message
        const button = event.target.closest('.btn-secondary');
        if (button) {
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> IP Copied!';
            button.style.background = 'var(--mc-india-green)';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
            }, 2000);
        }
    });
}

// Purchase rank function
function purchaseRank(rankName) {
    if (confirm(`To purchase ${rankName} rank, you need to join our Discord server and create a ticket. Continue to Discord?`)) {
        joinDiscord();
    }
}

// Copy email function
function copyEmail() {
    navigator.clipboard.writeText(SUPPORT_EMAIL).then(() => {
        const emailElement = event.target;
        const originalText = emailElement.textContent;
        emailElement.textContent = 'Email Copied!';
        emailElement.style.background = 'var(--mc-india-green)';
        
        setTimeout(() => {
            emailElement.textContent = originalText;
            emailElement.style.background = '';
        }, 2000);
    });
}

// Open email client
function openEmail() {
    window.location.href = `mailto:${SUPPORT_EMAIL}`;
}

// Rank card hover effects
document.querySelectorAll('.rank-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('popular') && !this.classList.contains('ultimate')) {
            this.style.transform = 'translateY(0)';
        } else if (this.classList.contains('popular')) {
            this.style.transform = 'scale(1.05)';
        } else if (this.classList.contains('ultimate')) {
            this.style.transform = 'scale(1.05)';
        }
    });
});

// Simulate player count update
function updatePlayerCount() {
    const playerElement = document.querySelector('.server-status .fa-users').parentElement;
    const basePlayers = 84;
    const randomChange = Math.floor(Math.random() * 10) - 5; // -5 to +5
    const newCount = Math.max(0, Math.min(150, basePlayers + randomChange));
    
    playerElement.querySelector('span').textContent = `${newCount}/150 Players`;
}

// Update player count every 30 seconds
setInterval(updatePlayerCount, 30000);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Discord button highlight
document.addEventListener('DOMContentLoaded', function() {
    const discordButtons = document.querySelectorAll('.btn-discord, .discord-cta, .support-btn');
    discordButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            joinDiscord();
        });
    });

});

// Add this function to your existing script.js file

// Purchase coins function
function purchaseCoins(coins, price) {
    if (confirm(`Purchase ${coins} coins for ₹${price}?\n\nYou will be redirected to our Discord server to complete the purchase.`)) {
        joinDiscord();
        
        // Optional: Show a message about the purchase process
        setTimeout(() => {
            alert(`To complete your purchase of ${coins} coins:\n\n1. Create a ticket in our Discord server\n2. Specify you want to buy ${coins} coins\n3. Our staff will assist you with payment\n4. Coins will be delivered instantly!`);
        }, 1000);
    }
}

// Also update the navigation to include coins store
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for coins store link
    document.querySelectorAll('nav a[href="#coins-store"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector('#coins-store');
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});
