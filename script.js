// 1. PIN & DATA CONFIGURATION
const CORRECT_PIN = "STUDENT@776301JK";

// Sample Batches List (Aap yahan apne naye batches add/edit kar sakte hain)
const batches = [
    { name: "SSC PRATHAM 2026", code: "SP", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "CARRIER WILL", code: "CW", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "VIDYAGRAM", code: "V6", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "TEXTBOOKS", code: "TBK", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "PINNACLE BOOKS", code: "PB", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "FUTURE KUL", code: "FK", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "TOPPER WISDOM", code: "TWS", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "UNCOFFLINE", code: "UFF", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "VIBRANT ACADEMY", code: "VA", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "CDS JOURNEY", code: "CJ", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "STUDY IQ", code: "SI", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "SELECTION WAY", code: "SW", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "RWA", code: "RWA", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "UNACADEMY", code: "UA", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "MISSION JEET", code: "MJ", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "SCIENCE AND FUN", code: "SF", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "KHAN GLOBAL STUDIES", code: "KGS", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "NEXT TOPPERS", code: "NT", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "PI-PRO", code: "PP", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "PW DIGITAL/BOOKS", code: "PDB", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "ALLEN", code: "AN", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "E-SARAL", code: "ES", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "PRAMAR BATCHES", code: "PB", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "GYAN BINDU", code: "GB", logo: "https://via.placeholder.com/50", link: "#" },
    { name: "PHYSICS WALLAH", code: "PW", logo: "https://via.placeholder.com/50", link: "#" }
];

// 2. INTRO SPLASH TIMER
window.addEventListener("DOMContentLoaded", () => {
    // 2.5 seconds baad splash screen se lock screen par switch karega
    setTimeout(() => {
        const intro = document.getElementById("introScreen");
        const lock = document.getElementById("lockScreen");
        
        if (intro) intro.classList.add("hidden");
        if (lock) lock.classList.remove("hidden");
    }, 2500);
});

// 3. UNLOCK SYSTEM
function unlockPortal() {
    const userPinInput = document.getElementById("pinInput");
    const userPin = userPinInput ? userPinInput.value.trim() : "";

    if (userPin === CORRECT_PIN) {
        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");
        renderBatches(batches);
    } else {
        alert("Incorrect PIN! Access Denied.");
    }
}

// 4. BATCH CARDS RENDER FUNCTION
function renderBatches(batchArray) {
    const container = document.getElementById("batchContainer");
    if (!container) return;

    if (batchArray.length === 0) {
        container.innerHTML = `<p style="color:#94a3b8; text-align:center; grid-column: 1/-1;">No batches found.</p>`;
        return;
    }

    container.innerHTML = batchArray.map(item => `
        <div class="card">
            <div class="card-header">
                <img src="${item.logo}" alt="${item.name}">
                <span class="code-badge">${item.code}</span>
            </div>
            <h4>${item.name}</h4>
            <span class="verified"><i class="fa-solid fa-sparkles"></i> Verified Comprehensive Batch</span>
            <a href="${item.link}" target="_blank" class="btn-access">
                Access Batch <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
    `).join("");
}

// 5. REAL-TIME SEARCH FILTER
function filterBatches() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    const query = searchInput.value.toLowerCase().trim();
    const filtered = batches.filter(batch => 
        batch.name.toLowerCase().includes(query) || 
        batch.code.toLowerCase().includes(query)
    );
    
    renderBatches(filtered);
}
