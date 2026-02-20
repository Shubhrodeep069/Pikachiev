// Generate 58 badges with different themes
const generateBadges = () => {
  const badgeCategories = {
    streak: {
      icon: "🔥",
      color: "var(--warning)",
      bgColor: "rgba(255, 204, 0, 0.2)",
    },
    consistency: {
      icon: "⏰",
      color: "var(--success)",
      bgColor: "rgba(0, 255, 157, 0.2)",
    },
    achievement: {
      icon: "🏆",
      color: "var(--primary)",
      bgColor: "rgba(0, 212, 255, 0.2)",
    },
    learning: {
      icon: "📚",
      color: "var(--learning)",
      bgColor: "rgba(0, 212, 255, 0.2)",
    },
    health: {
      icon: "💪",
      color: "var(--health)",
      bgColor: "rgba(0, 255, 157, 0.2)",
    },
    productivity: {
      icon: "⚡",
      color: "var(--warning)",
      bgColor: "rgba(255, 204, 0, 0.2)",
    },
    social: {
      icon: "👥",
      color: "var(--social)",
      bgColor: "rgba(255, 102, 204, 0.2)",
    },
    creative: {
      icon: "🎨",
      color: "var(--epic)",
      bgColor: "rgba(204, 102, 255, 0.2)",
    },
    finance: {
      icon: "💰",
      color: "var(--finance)",
      bgColor: "rgba(0, 255, 204, 0.2)",
    },
    special: {
      icon: "🌟",
      color: "var(--mythic)",
      bgColor: "rgba(255, 51, 102, 0.2)",
    },
  };

  const badgeNames = {
    streak: [
      "Fire Starter",
      "Week Warrior",
      "Month Master",
      "Year Champion",
      "Century Club",
      "Eternal Flame",
      "Unbreakable",
      "Time Lord",
      "Consistency King",
      "Dedication Deity",
    ],
    consistency: [
      "Early Bird",
      "Night Owl",
      "Midday Master",
      "Dawn Breaker",
      "Perfect Week",
      "Flawless Month",
      "Annual Ace",
      "Punctual Pro",
      "Routine Ruler",
      "Habit Hero",
    ],
    achievement: [
      "First Step",
      "Goal Getter",
      "Target Smasher",
      "Milestone Master",
      "Challenge Chaser",
      "Quest Queen",
      "Mission Master",
      "Objective Oracle",
      "Target Titan",
      "Achievement Ace",
    ],
    learning: [
      "Bookworm",
      "Knowledge Knight",
      "Study Sage",
      "Research Ruler",
      "Skill Seeker",
      "Wisdom Wizard",
      "Learning Legend",
      "Curiosity Captain",
      "Brain Booster",
      "Mind Master",
    ],
    health: [
      "Fitness Fanatic",
      "Health Hero",
      "Wellness Warrior",
      "Vitality Victor",
      "Strength Sage",
      "Endurance Emperor",
      "Flexibility Master",
      "Balance Boss",
      "Recovery King",
      "Wellbeing Wizard",
    ],
    productivity: [
      "Efficiency Expert",
      "Productivity Pro",
      "Task Titan",
      "Focus Master",
      "Priority Prince",
      "Schedule Sage",
      "Time Tyrant",
      "Deadline Destroyer",
      "Workflow Wizard",
      "Output Overlord",
    ],
    social: [
      "Network Ninja",
      "Social Star",
      "Connection Captain",
      "Community Chief",
      "Relationship Ruler",
      "Team Titan",
      "Group Guru",
      "Social Sage",
      "Network Navigator",
      "Community Champion",
    ],
    creative: [
      "Idea Innovator",
      "Creativity Captain",
      "Imagination Icon",
      "Design Deity",
      "Artistic Ace",
      "Visionary Victor",
      "Innovation Idol",
      "Creative King",
      "Imagination Master",
      "Artistry Ace",
    ],
    finance: [
      "Wealth Wizard",
      "Finance Pro",
      "Investment Icon",
      "Budget Boss",
      "Savings Sage",
      "Money Master",
      "Financial Guru",
      "Capital King",
      "Revenue Ruler",
      "Asset Ace",
    ],
    special: [
      "Legendary",
      "Mythic",
      "Ultimate",
      "Supreme",
      "Grand Master",
      "Elite",
      "Exalted",
      "Transcendent",
      "Omniscient",
      "Quantum",
    ],
  };

  const rarities = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "legendary",
    "mythic",
  ];
  const badgeCounts = {
    common: 10,
    uncommon: 15,
    rare: 15,
    epic: 10,
    legendary: 6,
    mythic: 2,
  };

  let badges = [];
  let id = 1;

  // Generate badges for each category
  Object.keys(badgeCategories).forEach((category) => {
    const categoryInfo = badgeCategories[category];
    const names = badgeNames[category];

    names.forEach((name, index) => {
      // Determine rarity based on index
      let rarity;
      if (index < 2) rarity = "common";
      else if (index < 4) rarity = "uncommon";
      else if (index < 7) rarity = "rare";
      else if (index < 9) rarity = "epic";
      else if (index < 10) rarity = "legendary";
      else rarity = "mythic";

      // Randomly unlock some badges (approx 18/58)
      const unlocked = Math.random() < 0.3;

      badges.push({
        id: id++,
        name: name,
        icon: categoryInfo.icon,
        category: category,
        rarity: rarity,
        unlocked: unlocked,
        description: `Achieve excellence in ${category} ${rarity === "mythic" ? "perfection" : "mastery"}`,
        color: categoryInfo.color,
        bgColor: categoryInfo.bgColor,
      });
    });
  });

  return badges;
};

// Generate 100 challenges
const generateChallenges = () => {
    // Personal life goals
    const personalGoals = [
        // Social Goals
        { title: "Movie night with friends", category: "social", target: 1, points: 100 },
        { title: "Dinner party with 5+ friends", category: "social", target: 1, points: 150 },
        { title: "Weekend trip with friends", category: "social", target: 1, points: 200 },
        { title: "Game night with friends", category: "social", target: 1, points: 80 },
        { title: "Attend a concert with friends", category: "social", target: 1, points: 180 },
        
        // Family Goals
        { title: "Family dinner at home", category: "family", target: 4, points: 200 },
        { title: "Visit parents/grandparents", category: "family", target: 2, points: 150 },
        { title: "Family weekend getaway", category: "family", target: 1, points: 250 },
        { title: "Movie night with family", category: "family", target: 3, points: 150 },
        { title: "Cook a special meal for family", category: "family", target: 2, points: 120 },
        
        // Adventure Goals
        { title: "Visit a haunted place alone", category: "adventure", target: 1, points: 300 },
        { title: "Try a new extreme sport", category: "adventure", target: 1, points: 250 },
        { title: "Camping in the wilderness", category: "adventure", target: 1, points: 200 },
        { title: "Road trip to new place", category: "adventure", target: 1, points: 180 },
        { title: "Hike to a mountain peak", category: "adventure", target: 1, points: 150 },
        
        // Self Care Goals
        { title: "Spa day at home", category: "selfcare", target: 2, points: 120 },
        { title: "Digital detox for 24 hours", category: "selfcare", target: 1, points: 150 },
        { title: "Meditate for 30 days straight", category: "selfcare", target: 30, points: 400 },
        { title: "Full day of self care", category: "selfcare", target: 1, points: 200 },
        { title: "Try a new wellness activity", category: "selfcare", target: 3, points: 180 },
        
        // Entertainment Goals
        { title: "Watch a movie trilogy in one day", category: "entertainment", target: 3, points: 150 },
        { title: "Attend a theater show", category: "entertainment", target: 1, points: 120 },
        { title: "Visit an amusement park", category: "entertainment", target: 1, points: 180 },
        { title: "Try a new restaurant each week", category: "entertainment", target: 4, points: 200 },
        { title: "Game marathon weekend", category: "entertainment", target: 1, points: 160 },
        
        // Personal Growth Goals
        { title: "Read 5 personal growth books", category: "personal", target: 5, points: 500 },
        { title: "Learn a new hobby skill", category: "personal", target: 1, points: 200 },
        { title: "Complete an online course", category: "personal", target: 1, points: 300 },
        { title: "Volunteer for a cause", category: "personal", target: 3, points: 350 },
        { title: "Start a personal project", category: "personal", target: 1, points: 250 }
    ];
    
    let challenges = { weekly: [], monthly: [], yearly: [] };
    let id = 1;
    
    // Distribute goals across frequencies
    personalGoals.forEach((goal, index) => {
        let frequency;
        if (index < 15) frequency = 'weekly';
        else if (index < 25) frequency = 'monthly';
        else frequency = 'yearly';
        
        const completed = Math.random() > 0.7;
        const current = completed ? goal.target : Math.floor(Math.random() * goal.target);
        
        challenges[frequency].push({
            id: id++,
            title: goal.title,
            category: goal.category,
            current: current,
            target: goal.target,
            points: goal.points,
            completed: completed,
            description: getGoalDescription(goal.title, goal.category),
            frequency: frequency,
            unit: getUnitFromGoal(goal.title)
        });
    });
    
    return challenges;
};

// Helper function for goal descriptions
const getGoalDescription = (title, category) => {
    const descriptions = {
        social: `Social connection activity: ${title}`,
        family: `Family bonding activity: ${title}`,
        adventure: `Adventure challenge: ${title}`,
        selfcare: `Self care activity: ${title}`,
        entertainment: `Entertainment experience: ${title}`,
        personal: `Personal growth activity: ${title}`
    };
    return descriptions[category] || `Complete: ${title}`;
};

// Helper function for units
const getUnitFromGoal = (title) => {
    if (title.includes('day')) return 'days';
    if (title.includes('week')) return 'weeks';
    if (title.includes('month')) return 'months';
    if (title.includes('book')) return 'books';
    if (title.includes('dinner')) return 'dinners';
    if (title.includes('movie')) return 'movies';
    if (title.includes('visit')) return 'visits';
    return 'times';
};

// Helper functions
const getCategoryName = (category) => {
    const names = {
        social: 'Social',
        family: 'Family', 
        adventure: 'Adventure',
        selfcare: 'Self Care',
        entertainment: 'Entertainment',
        personal: 'Personal Growth'
    };
    return names[category] || category;
};

const getUnitFromCategory = (category) => {
  const units = {
    health: "sessions",
    learning: "modules",
    productivity: "tasks",
    personal: "meditations",
    finance: "transactions",
    social: "connections",
  };
  return units[category] || "units";
};

// App Data Structure
const appData = {
  user: {
    level: 8,
    points: 5280,
    streak: 42,
    longestStreak: 150,
    totalChallenges: 100,
    completedChallenges: 47,
  },

  analytics: {
        completionHistory: [], // Will store when goals were completed
        activityData: {}, // Daily activity counts
        categoryStats: {}, // Category-wise statistics
        insights: [] // Generated insights
    },

  categories: [
    { 
        id: "social", 
        name: "Social", 
        icon: "👥", 
        color: "var(--social)", 
        lightColor: "rgba(255, 102, 204, 0.2)",
        progress: 30,
        completed: 3,
        total: 10
    },
    { 
        id: "family", 
        name: "Family", 
        icon: "👨‍👩‍👧‍👦", 
        color: "#FF9966", 
        lightColor: "rgba(255, 153, 102, 0.2)",
        progress: 40,
        completed: 2,
        total: 5
    },
    { 
        id: "adventure", 
        name: "Adventure", 
        icon: "🧗‍♂️", 
        color: "#FFCC00", 
        lightColor: "rgba(255, 204, 0, 0.2)",
        progress: 20,
        completed: 1,
        total: 5
    },
    { 
        id: "selfcare", 
        name: "Self Care", 
        icon: "🧘", 
        color: "var(--personal)", 
        lightColor: "rgba(204, 102, 255, 0.2)",
        progress: 50,
        completed: 5,
        total: 10
    },
    { 
        id: "entertainment", 
        name: "Entertainment", 
        icon: "🎬", 
        color: "#66CCFF", 
        lightColor: "rgba(102, 204, 255, 0.2)",
        progress: 60,
        completed: 6,
        total: 10
    },
    { 
        id: "personal", 
        name: "Personal Growth", 
        icon: "🌱", 
        color: "#00CC99", 
        lightColor: "rgba(0, 204, 153, 0.2)",
        progress: 35,
        completed: 7,
        total: 20
    }
],

  badges: generateBadges(),

  challenges: generateChallenges(),

  progress: {
    daily: { completed: 15, total: 20 },
    weekly: { completed: 34, total: 50 },
    monthly: { completed: 41, total: 50 },
    yearly: { completed: 12, total: 20 },
  },

  monthlyRecap: {
    month: "January 2024",
    challengesCompleted: 47,
    pointsEarned: 5280,
    streakDays: 42,
    badgesEarned: 18,
    bestCategory: "Power Core",
    productivityScore: 94,
    insights: [
      "Quantum efficiency increased by 28% this cycle",
      "Biosystems optimization at peak performance",
      "Neural network synchronization improved",
      "Social grid expansion successful",
    ],
  },
};

// Initialize App
document.addEventListener("DOMContentLoaded", function () {
  // Show loading screen for 3 seconds
  setTimeout(() => {
    initializeApp();
  }, 3000);
});

function initializeApp() {
  // Hide loading screen
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.classList.add("hidden");

  // NEW: Load saved data first
    loadDataFromStorage();

     renderBadgeRequirements();

  // Create matrix rain effect
  createMatrixRain();

  // Set up navigation
  setupNavigation();

  // Initialize all sections
  updateUserStats();
  renderChallenges("weekly");
  renderBadges();
  updateProgressBars();
  renderMonthlyRecap();
  setupCategorySelectors();
  setupFrequencySelectors();
  updateNavigationStats();

  // Set active section
  showSection("challenges");

  // Add holographic effect to header
  document.querySelector(".header").classList.add("holographic");

   initAnalyticsData();
    renderAnalyticsCharts('month');

    loadSavedTheme();
}

// Create Matrix Rain Effect
function createMatrixRain() {
  const matrixBg = document.getElementById("matrixBg");
  const chars = "01";
  const charCount = 200;

  for (let i = 0; i < charCount; i++) {
    const char = document.createElement("div");
    char.className = "matrix-char";
    char.textContent = chars[Math.floor(Math.random() * chars.length)];
    char.style.left = Math.random() * 100 + "%";
    char.style.animationDuration = Math.random() * 5 + 5 + "s";
    char.style.animationDelay = Math.random() * 5 + "s";
    char.style.opacity = Math.random() * 0.5 + 0.1;
    matrixBg.appendChild(char);
  }
}

// Navigation Setup
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Show corresponding section
            const section = this.dataset.section;
            showSection(section);
            
            // Scroll to top of the section
            const sectionElement = document.getElementById(section + 'Section');
            if (sectionElement) {
                sectionElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Show Section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId + 'Section');
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Scroll to top of page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Special handling for challenges section
    if (sectionId === 'challenges') {
        showChallengeType('weekly');
    }
}

// Update User Stats
function updateUserStats() {
  document.getElementById("userLevel").textContent = appData.user.level;
  document.getElementById("userPoints").textContent =
    appData.user.points.toLocaleString();

  // Update badge count display
  const unlockedBadges = appData.badges.filter((b) => b.unlocked).length;
  const badgeCountElement = document.getElementById("badgeCount");
  if (badgeCountElement) {
    badgeCountElement.textContent = unlockedBadges;
  }

  // Update achievement core stats
  const navBadgeElement = document.querySelector(
    '.nav-item[data-section="badges"] .nav-stats span:last-child',
  );
  if (navBadgeElement) {
    navBadgeElement.textContent = `${unlockedBadges}/${appData.badges.length}`;
  }
}

// Render Challenges
function renderChallenges(type) {
  const containerId = type + "Challenges";
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = "";

  const challenges = appData.challenges[type];

  if (challenges.length === 0) {
    container.innerHTML = `
                    <div style="text-align: center; padding: 50px; color: var(--gray);">
                        <i class="fas fa-tasks" style="font-size: 52px; margin-bottom: 25px; opacity: 0.5;"></i>
                        <h3 style="color: var(--primary); font-family: 'Orbitron';">NO ACTIVE PROTOCOLS</h3>
                        <p>Generate new quantum missions to begin</p>
                    </div>
                `;
    return;
  }

  // Display first 10 challenges for each type
  const displayChallenges = challenges.slice(0, 10);

  displayChallenges.forEach((challenge) => {
    const progressPercent = (challenge.current / challenge.target) * 100;
    const isCompleted = challenge.completed;

    const challengeElement = document.createElement("div");
    challengeElement.className = `challenge-item ${isCompleted ? "completed" : ""}`;
    challengeElement.innerHTML = `
                    <div class="challenge-info">
                        <div class="challenge-header">
                            <span class="challenge-category category-${challenge.category}" style="border-color: ${getCategoryColor(challenge.category)}; color: ${getCategoryColor(challenge.category)}; background: ${getCategoryColor(challenge.category)}20;">
                                ${getCategoryName(challenge.category)}
                            </span>
                            <span style="font-size: 12px; color: var(--gray); font-family: 'Orbitron';">
                                ${challenge.frequency.toUpperCase()}
                            </span>
                        </div>
                        <h3 class="challenge-title">${challenge.title}</h3>
                        <p class="challenge-description">${challenge.description}</p>
                        <div class="challenge-progress">
                            <div class="challenge-progress-bar">
                                <div class="challenge-progress-fill" style="width: ${progressPercent}%; background: linear-gradient(90deg, ${getCategoryColor(challenge.category)}, ${getCategoryColor(challenge.category)}80);"></div>
                            </div>
                            <div class="challenge-stats">
                                <span class="challenge-stat">
                                    <i class="fas fa-${isCompleted ? "check-circle" : "circle"}" style="color: ${getCategoryColor(challenge.category)};"></i>
                                    ${challenge.current}/${challenge.target} ${challenge.unit}
                                </span>
                                <span class="challenge-stat">
                                    <i class="fas fa-star" style="color: ${getCategoryColor(challenge.category)};"></i>
                                    +${challenge.points} QE
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="challenge-actions">
                        ${
                          !isCompleted
                            ? `
                            <button class="btn btn-success btn-sm" onclick="completeChallenge(${challenge.id}, '${type}')">
                                <i class="fas fa-check"></i> COMPLETE
                            </button>
                        `
                            : `
                            <button class="btn btn-outline btn-sm" onclick="resetChallenge(${challenge.id}, '${type}')">
                                <i class="fas fa-redo"></i> RESET
                            </button>
                        `
                        }
                    </div>
                `;

    container.appendChild(challengeElement);
  });

  // Add "Show More" button if there are more challenges
  if (challenges.length > 10) {
    const showMoreBtn = document.createElement("button");
    showMoreBtn.className = "btn btn-outline";
    showMoreBtn.style.marginTop = "20px";
    showMoreBtn.innerHTML = `<i class="fas fa-chevron-down"></i> SHOW ${challenges.length - 10} MORE PROTOCOLS`;
    showMoreBtn.onclick = () =>
      alert(
        `There are ${challenges.length} total ${type} protocols in the system.`,
      );
    container.appendChild(showMoreBtn);
  }
}

// Show Challenge Type
function showChallengeType(type) {
  // Update active tab
  document.querySelectorAll(".challenge-tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  event.target.classList.add("active");

  // Hide all challenge lists
  document.getElementById("weeklyChallenges").style.display = "none";
  document.getElementById("monthlyChallenges").style.display = "none";
  document.getElementById("yearlyChallenges").style.display = "none";

  // Show selected challenge list
  document.getElementById(type + "Challenges").style.display = "grid";

  // Re-render challenges for the selected type
  renderChallenges(type);
}

// Complete Challenge
function completeChallenge(challengeId, type) {
  const challenge = appData.challenges[type].find((c) => c.id === challengeId);

  if (!challenge || challenge.completed) return;

  // Increment progress
  if (challenge.current < challenge.target) {
    challenge.current++;

    // Update user points
    const pointsPerUnit = Math.floor(challenge.points / challenge.target);
    appData.user.points += pointsPerUnit;

    // Check if challenge is completed
    if (challenge.current === challenge.target) {
      challenge.completed = true;
      appData.user.points +=
        challenge.points - pointsPerUnit * (challenge.target - 1);

      // Update progress stats
      if (type === "weekly") {
        appData.progress.weekly.completed++;
        appData.user.completedChallenges++;
      }
      if (type === "monthly") {
        appData.progress.monthly.completed++;
        appData.user.completedChallenges++;
      }
      if (type === "yearly") {
        appData.progress.yearly.completed++;
        appData.user.completedChallenges++;
      }

      // Update category progress
      const category = appData.categories.find(
        (c) => c.id === challenge.category,
      );
      if (category) {
        category.completed++;
        category.progress = Math.min(
          100,
          Math.round((category.completed / category.total) * 100),
        );
      }

      // Check for badge unlocks
      checkBadgeUnlocks();

      // Show celebration
      showCelebration();

      // Show notification
      showNotification(
        `⚡ QUANTUM PROTOCOL COMPLETE!\n\n${challenge.title}\n\n+${challenge.points} Quantum Energy Acquired!`,
        "success",
      );
    } else {
      showNotification(
        `🔄 PROGRESS UPDATE: ${challenge.current}/${challenge.target} ${challenge.unit}`,
        "info",
      );
    }

    // CRITICAL: Update ALL UI elements
    updateAllUI();

    // NEW: Save data to localStorage
    saveDataToStorage();
  }
}

// Reset Challenge
function resetChallenge(challengeId, type) {
  const challenge = appData.challenges[type].find((c) => c.id === challengeId);

  if (challenge && challenge.completed) {
    challenge.current = 0;
    challenge.completed = false;

    // Update progress stats
    if (type === "weekly")
      appData.progress.weekly.completed = Math.max(
        0,
        appData.progress.weekly.completed - 1,
      );
    if (type === "monthly")
      appData.progress.monthly.completed = Math.max(
        0,
        appData.progress.monthly.completed - 1,
      );
    if (type === "yearly")
      appData.progress.yearly.completed = Math.max(
        0,
        appData.progress.yearly.completed - 1,
      );

    // Update UI
    renderChallenges(type);
    updateProgressBars();

    showNotification(`🔄 Protocol Reset: ${challenge.title}`, "info");
    // NEW: Save data
    saveDataToStorage();
  }
}

function updateAllUI() {
  // Update user stats
  updateUserStats();

  // Update progress bars and text
  updateProgressBars();

  // Update category progress
  updateCategoryProgress();

  // Update navigation stats
  updateNavigationStats();
   updateHeaderProgressCards();

  // Update monthly recap
  renderMonthlyRecap();

  // Update challenges list
  const activeType =
    document.querySelector(".challenge-tab.active")?.textContent || "weekly";
  const typeMap = {
    "WEEKLY CYCLES": "weekly",
    "MONTHLY SYSTEMS": "monthly",
    "YEARLY PROTOCOLS": "yearly",
  };
  renderChallenges(typeMap[activeType] || "weekly");
}

function updateNavigationStats() {
  // Calculate active missions (incomplete challenges)
  const activeMissions =
    appData.challenges.weekly.filter((c) => !c.completed).length +
    appData.challenges.monthly.filter((c) => !c.completed).length +
    appData.challenges.yearly.filter((c) => !c.completed).length;

  // Calculate overall efficiency (average of all progress)
//   const dailyEff =
//     (appData.progress.daily.completed / appData.progress.daily.total) * 100;
  const weeklyEff =
    (appData.progress.weekly.completed / appData.progress.weekly.total) * 100;
  const monthlyEff =
    (appData.progress.monthly.completed / appData.progress.monthly.total) * 100;
  const yearlyEff =
    (appData.progress.yearly.completed / appData.progress.yearly.total) * 100;
  const overallEfficiency = Math.round(
    (weeklyEff + monthlyEff + yearlyEff) / 3,
  );

  // Update badge count
  const unlockedBadges = appData.badges.filter((b) => b.unlocked).length;

  // Update active sectors count
  const activeSectors = appData.categories.filter((c) => c.progress > 0).length;

  // Update monthly recap count
  const thisCycle = appData.user.completedChallenges;

  // Update all navigation items
  document.querySelector(
    '.nav-item[data-section="challenges"] .nav-stats span:last-child',
  ).textContent = activeMissions;
  document.querySelector(
    '.nav-item[data-section="progress"] .nav-stats span:last-child',
  ).textContent = `${overallEfficiency}%`;
  document.querySelector(
    '.nav-item[data-section="badges"] .nav-stats span:last-child',
  ).textContent = `${unlockedBadges}/${appData.badges.length}`;
  document.querySelector(
    '.nav-item[data-section="categories"] .nav-stats span:last-child',
  ).textContent = activeSectors;
  document.querySelector(
    '.nav-item[data-section="recap"] .nav-stats span:last-child',
  ).textContent = thisCycle;

  // Update header progress cards
  updateHeaderProgressCards();
}

function updateHeaderProgressCards() {
    // Yearly Protocols (FIRST card - was showing monthly data)
    const yearlyPercent = Math.round((appData.progress.yearly.completed / appData.progress.yearly.total) * 100);
    const yearlyText = document.querySelector('.progress-card:nth-child(1) .progress-label');
    if (yearlyText) {
        yearlyText.innerHTML = `
            <span>${yearlyPercent}% QUANTIZED</span>
            <span>${appData.progress.yearly.completed}/${appData.progress.yearly.total} PROTOCOLS</span>
        `;
        
        // Update the yearly progress bar width in header
        const yearlyBar = document.getElementById('yearlyProgressHeaderFill');
        if (yearlyBar) {
            yearlyBar.style.width = `${yearlyPercent}%`;
        }
    }
    
    // Weekly Cycles (SECOND card)  
    const weeklyPercent = Math.round((appData.progress.weekly.completed / appData.progress.weekly.total) * 100);
    const weeklyText = document.querySelector('.progress-card:nth-child(2) .progress-label');
    if (weeklyText) {
        weeklyText.innerHTML = `
            <span>${weeklyPercent}% OPTIMIZED</span>
            <span>${appData.progress.weekly.completed}/${appData.progress.weekly.total} CHALLENGES</span>
        `;
        
        // Update progress bar width
        const weeklyBar = document.getElementById('weeklyProgressFill');
        if (weeklyBar) {
            weeklyBar.style.width = `${weeklyPercent}%`;
        }
    }
    
    // Monthly Systems (THIRD card - was showing yearly data before)
    const monthlyPercent = Math.round((appData.progress.monthly.completed / appData.progress.monthly.total) * 100);
    const monthlyText = document.querySelector('.progress-card:nth-child(3) .progress-label');
    if (monthlyText) {
        monthlyText.innerHTML = `
            <span>${monthlyPercent}% OPERATIONAL</span>
            <span>${appData.progress.monthly.completed}/${appData.progress.monthly.total} GOALS</span>
        `;
        
        // Update progress bar width
        const monthlyBar = document.getElementById('monthlyProgressFill');
        if (monthlyBar) {
            monthlyBar.style.width = `${monthlyPercent}%`;
        }
    }
}

// Render Badges
function renderBadges() {
  const container = document.getElementById("badgesContainer");
  container.innerHTML = "";

  // Group badges by rarity
  const groupedBadges = {
    mythic: [],
    legendary: [],
    epic: [],
    rare: [],
    uncommon: [],
    common: [],
  };

  appData.badges.forEach((badge) => {
    groupedBadges[badge.rarity].push(badge);
  });

  // Display badges by rarity tier
  Object.keys(groupedBadges).forEach((rarity) => {
    const badges = groupedBadges[rarity];
    if (badges.length > 0) {
      // Show first 6 badges of each rarity, add "Show More" for others
      const displayBadges = badges.slice(0, 6);

      displayBadges.forEach((badge) => {
        const badgeElement = document.createElement("div");
        badgeElement.className = `badge ${badge.unlocked ? "unlocked" : "badge-locked"}`;
        badgeElement.style.borderColor = badge.color;
        badgeElement.style.background = badge.bgColor;
        badgeElement.style.color = badge.color;
        badgeElement.title = `${badge.name}\n${badge.description}\nTier: ${badge.rarity.toUpperCase()}`;

        badgeElement.innerHTML = `
                            <div class="badge-icon">${badge.icon}</div>
                            <div class="badge-name">${badge.name}</div>
                            <div class="badge-rarity" style="background: ${badge.color}; color: black;">${badge.rarity.charAt(0).toUpperCase()}</div>
                        `;

        badgeElement.addEventListener("click", function () {
          showBadgeDetails(badge);
        });

        container.appendChild(badgeElement);
      });

      // Add "Show More" for additional badges
      if (badges.length > 6) {
        const showMoreBadge = document.createElement("div");
        showMoreBadge.className = "badge";
        showMoreBadge.style.borderColor = "var(--gray)";
        showMoreBadge.style.background = "rgba(138, 138, 181, 0.1)";
        showMoreBadge.style.color = "var(--gray)";
        showMoreBadge.innerHTML = `
                            <div class="badge-icon">+${badges.length - 6}</div>
                            <div class="badge-name">MORE ${rarity.toUpperCase()}</div>
                        `;
        showMoreBadge.onclick = () => {
          const badgeList = badges
            .map((b) => `${b.unlocked ? "✅" : "🔒"} ${b.name}`)
            .join("\n");
          showNotification(
            `${rarity.toUpperCase()} BADGES:\n\n${badgeList}`,
            "info",
          );
        };
        container.appendChild(showMoreBadge);
      }
    }
  });
}

// Show Badge Details
function showBadgeDetails(badge) {
  const message = `🏅 ${badge.name}\n\n${badge.description}\n\nTier: ${badge.rarity.toUpperCase()}\nStatus: ${badge.unlocked ? "✅ QUANTUM UNLOCKED" : "🔒 PROTOCOL LOCKED"}`;
  showNotification(message, "info");
}

// Update Progress Bars
function updateProgressBars() {
    // Calculate percentages
    const weeklyPercent = (appData.progress.weekly.completed / appData.progress.weekly.total) * 100;
    const monthlyPercent = (appData.progress.monthly.completed / appData.progress.monthly.total) * 100;
    const yearlyPercent = (appData.progress.yearly.completed / appData.progress.yearly.total) * 100;
    
    document.getElementById('weeklyProgressFill').style.width = `${weeklyPercent}%`;
    document.getElementById('monthlyProgressFill').style.width = `${monthlyPercent}%`;
    document.getElementById('yearlyProgressHeaderFill').style.width = `${yearlyPercent}%`; // NEW
    
    // For progress section (keep as is)
    document.getElementById('weeklyProgressFill2').style.width = `${weeklyPercent}%`;
    document.getElementById('monthlyProgressFill2').style.width = `${monthlyPercent}%`;
    document.getElementById('yearlyProgressFill').style.width = `${yearlyPercent}%`;
    
    
    // Progress section text
    document.getElementById('weeklyProgressText').textContent = 
        `${appData.progress.weekly.completed}/${appData.progress.weekly.total} SYNCHED`;
    document.getElementById('monthlyProgressText').textContent = 
        `${appData.progress.monthly.completed}/${appData.progress.monthly.total} ONLINE`;
    document.getElementById('yearlyProgressText').textContent = 
        `${appData.progress.yearly.completed}/${appData.progress.yearly.total} QUANTIZED`;
}

// Update Category Progress
function updateCategoryProgress() {
  appData.categories.forEach((category) => {
    document.getElementById(category.id + "Progress").textContent =
      `${category.progress}%`;
  });
}

// Update All Progress
function updateAllProgress() {
  // Show loading animation
  showNotification("🔄 REFRESHING QUANTUM SYSTEMS...", "info");

  setTimeout(() => {
    // Simulate progress update
    appData.progress.daily.completed = Math.min(
      appData.progress.daily.total,
      appData.progress.daily.completed + 1,
    );
    appData.user.streak++;
    appData.user.points += 100;

    // Update UI
    updateProgressBars();
    updateUserStats();

    // Check for streak badge
    if (appData.user.streak === 50) {
      unlockBadge(appData.badges.find((b) => b.name === "Time Lord"));
    }

    showNotification("⚡ SYSTEMS REFRESHED!\n+100 Quantum Energy", "success");
  }, 1500);
}

// Render Monthly Recap
function renderMonthlyRecap() {
  document.getElementById("recapChallenges").textContent =
    appData.monthlyRecap.challengesCompleted;
  document.getElementById("recapPoints").textContent =
    appData.monthlyRecap.pointsEarned.toLocaleString();
  document.getElementById("recapStreak").textContent =
    appData.monthlyRecap.streakDays;
  document.getElementById("recapBadges").textContent =
    appData.monthlyRecap.badgesEarned;

  const insightsContainer = document.getElementById("recapInsights");
  insightsContainer.innerHTML = "";

  appData.monthlyRecap.insights.forEach((insight) => {
    const insightElement = document.createElement("div");
    insightElement.className = "insight-item";
    insightElement.innerHTML = `
                    <div class="insight-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <div>
                        <strong style="color: var(--primary);">${insight}</strong>
                    </div>
                `;
    insightsContainer.appendChild(insightElement);
  });
}

// Generate Recap Report
function generateRecapReport() {
  // Create matrix-style report
  const report = `
╔════════════════════════════════════════════════════╗
║              QUANTUM SYSTEM REPORT                 ║
║                 ${appData.monthlyRecap.month}                    ║
╠════════════════════════════════════════════════════╣
║                                                    ║
║  • Quantum Level:          ${appData.user.level.toString().padStart(3)}         ║
║  • Energy Points:        ${appData.user.points.toLocaleString().padStart(8)}   ║
║  • Streak Cycle:           ${appData.user.streak.toString().padStart(3)}         ║
║                                                    ║
║  • Missions Completed:     ${appData.monthlyRecap.challengesCompleted.toString().padStart(3)}         ║
║  • Achievement Nodes:      ${appData.monthlyRecap.badgesEarned.toString().padStart(3)}         ║
║  • System Efficiency:      ${appData.monthlyRecap.productivityScore}%        ║
║                                                    ║
║  • Optimal Sector:         ${appData.monthlyRecap.bestCategory.padEnd(15)}   ║
║                                                    ║
╚════════════════════════════════════════════════════╝
            `;

  // Copy to clipboard
  navigator.clipboard.writeText(report).then(() => {
    showNotification("📋 QUANTUM MATRIX COPIED TO CLIPBOARD!", "success");
  });
}

// Show Category Details
function showCategoryDetails() {
  let details = "📊 SECTOR GRID ANALYSIS:\n\n";
  appData.categories.forEach((category) => {
    details += ` ${category.icon} ${category.name}: ${category.completed}/${category.total} (${category.progress}%)\n`;
  });

  showNotification(details, "info");
}

// Setup Category Selectors
function setupCategorySelectors() {
  const categoryButtons = document.querySelectorAll(".category-select");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// Setup Frequency Selectors
function setupFrequencySelectors() {
  const frequencyButtons = document.querySelectorAll(".frequency-select");
  frequencyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      frequencyButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// Add Custom Challenge
function addCustomChallenge() {
  const title = document.getElementById("challengeTitle").value.trim();
  const category = document.querySelector(".category-select.active")?.dataset
    .category;
  const frequency = document.querySelector(".frequency-select.active")?.dataset
    .frequency;
  const target = parseInt(document.getElementById("challengeTarget").value);
  const description = document
    .getElementById("challengeDescription")
    .value.trim();

  // Validation
  if (!title) {
    showNotification("🚨 ENTER MISSION TITLE", "info");
    return;
  }

  if (!category) {
    showNotification("🚨 SELECT QUANTUM SECTOR", "info");
    return;
  }

  if (!frequency) {
    showNotification("🚨 SELECT FREQUENCY CYCLE", "info");
    return;
  }

  if (!target || target <= 0) {
    showNotification("🚨 ENTER VALID TARGET QUANTUM", "info");
    return;
  }

  // Create new challenge
  const newChallenge = {
    id: Date.now(),
    title: title,
    category: category,
    current: 0,
    target: target,
    points: calculatePoints(frequency, target),
    completed: false,
    description:
      description ||
      `Complete ${target} ${getUnitFromCategory(category)} this ${frequency}`,
    frequency: frequency,
    unit: getUnitFromCategory(category),
  };

  // Add to challenges
  appData.challenges[frequency].unshift(newChallenge);

  // Reset form
  document.getElementById("addChallengeForm").reset();
  document
    .querySelectorAll(".category-select, .frequency-select")
    .forEach((btn) => {
      btn.classList.remove("active");
    });
  document
    .querySelector('.frequency-select[data-frequency="weekly"]')
    .classList.add("active");

  // Show success message
  showNotification(`⚡ PROTOCOL GENERATED: ${title}`, "success");

  // NEW: Save data
    saveDataToStorage();

  // Switch to challenges section
  showSection("challenges");
  showChallengeType(frequency);
}

// Calculate Points
function calculatePoints(frequency, target) {
  const basePoints = {
    weekly: 50,
    monthly: 100,
    yearly: 200,
  };

  return Math.floor(basePoints[frequency] * Math.log10(target + 1) * 10);
}

// Show Challenge Templates
function showChallengeTemplates() {
  const templates = [
    {
      title: "Daily Neural Enhancement",
      category: "learning",
      frequency: "weekly",
      target: 7,
    },
    {
      title: "Quantum Fitness Protocol",
      category: "health",
      frequency: "monthly",
      target: 30,
    },
    {
      title: "Economic Matrix Optimization",
      category: "finance",
      frequency: "yearly",
      target: 365,
    },
    {
      title: "Social Grid Expansion",
      category: "social",
      frequency: "weekly",
      target: 5,
    },
  ];

  let templateList = "✨ QUANTUM TEMPLATES:\n\n";
  templates.forEach((template, index) => {
    templateList += `${index + 1}. ${template.title}\n   Sector: ${getCategoryName(template.category)}\n   Cycle: ${template.frequency}\n   Target: ${template.target}\n\n`;
  });

  templateList += "Select a template to begin protocol generation.";
  showNotification(templateList, "info");
}

// Check Badge Unlocks
function checkBadgeUnlocks() {
  // Check various badge conditions
  const totalCompleted = appData.user.completedChallenges;

  // Check for milestone badges
  const milestoneBadges = [
    { threshold: 10, name: "First Step" },
    { threshold: 25, name: "Goal Getter" },
    { threshold: 50, name: "Milestone Master" },
    { threshold: 100, name: "Achievement Ace" },
  ];

  milestoneBadges.forEach((milestone) => {
    if (totalCompleted >= milestone.threshold) {
      const badge = appData.badges.find((b) => b.name === milestone.name);
      if (badge && !badge.unlocked) {
        unlockBadge(badge);
      }
    }
  });

  // Check for category-specific badges
  appData.categories.forEach((category) => {
    if (category.completed >= 25) {
      const badgeName = category.name.includes("Biosystem")
        ? "Health Hero"
        : category.name.includes("Neural")
          ? "Learning Legend"
          : category.name.includes("Power")
            ? "Productivity Pro"
            : category.name.includes("Consciousness")
              ? "Mind Master"
              : category.name.includes("Economy")
                ? "Finance Pro"
                : "Social Star";

      const badge = appData.badges.find((b) => b.name === badgeName);
      if (badge && !badge.unlocked) {
        unlockBadge(badge);
      }
    }
  });
}

// Unlock Badge
function unlockBadge(badge) {
  if (badge && !badge.unlocked) {
    badge.unlocked = true;
    appData.monthlyRecap.badgesEarned++;
    appData.user.points += 250; // Bonus points for badge

    // Show celebration
    showCelebration();

    // Show notification
    showNotification(
      `🏆 QUANTUM NODE UNLOCKED!\n\n${badge.name}\n\n+250 Quantum Energy`,
      "success",
    );

    // Update UI
    renderBadges();
    updateUserStats();
     renderBadgeRequirements();
    // NEW: Save data
        saveDataToStorage();
  }
}

// Get Category Color
function getCategoryColor(category) {
    const colors = {
        social: 'var(--social)',
        family: '#FF9966',
        adventure: '#FFCC00',
        selfcare: 'var(--personal)',
        entertainment: '#66CCFF',
        personal: '#00CC99'
    };
    return colors[category] || 'var(--primary)';
}

// Show Celebration Animation
function showCelebration() {
  const container = document.getElementById("celebrationContainer");
  container.innerHTML = "";

  // Create multiple types of particles
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";

    // Random shape and color
    const shapes = ["circle", "square", "triangle"];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    if (shape === "triangle") {
      confetti.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
      confetti.style.borderRadius = "0";
    } else if (shape === "square") {
      confetti.style.borderRadius = "0";
    }

    // Random gradient color
    const colors = [
      "linear-gradient(45deg, var(--primary), var(--success))",
      "linear-gradient(45deg, var(--warning), var(--danger))",
      "linear-gradient(45deg, var(--epic), var(--personal))",
      "linear-gradient(45deg, var(--success), var(--primary))",
    ];
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    // Random size
    const size = Math.random() * 20 + 10;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    // Animate
    const animation = confetti.animate(
      [
        {
          top: "-20px",
          opacity: 1,
          transform: `rotate(0deg) scale(1)`,
          left: Math.random() * 100 + "vw",
        },
        {
          top: Math.random() * 100 + "vh",
          opacity: 0,
          transform: `rotate(${Math.random() * 720}deg) scale(0)`,
          left:
            Math.random() * 100 - 50 + parseFloat(confetti.style.left) + "vw",
        },
      ],
      {
        duration: Math.random() * 3000 + 2000,
        easing: "cubic-bezier(0.215, 0.610, 0.355, 1)",
      },
    );

    container.appendChild(confetti);

    animation.onfinish = () => {
      confetti.remove();
    };
  }

  // Add sound effect (simulated)
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  playCelebrationSound(audioContext);

  // Remove celebration container after animation
  setTimeout(() => {
    container.innerHTML = "";
  }, 5000);
}

// Play celebration sound
function playCelebrationSound(audioContext) {
  try {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.5,
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (e) {
    console.log("Audio not supported");
  }
}

// Show Notification
function showNotification(message, type) {
  const container = document.getElementById("notificationContainer");
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;

  const icon = type === "success" ? "🏆" : "ℹ️";
  const iconClass = type === "success" ? "fas fa-trophy" : "fas fa-info-circle";

  notification.innerHTML = `
                <div class="notification-icon">
                    <i class="${iconClass}"></i>
                </div>
                <div style="flex: 1; font-family: 'Exo 2';">
                    ${message
                      .split("\n")
                      .map(
                        (line) => `<div style="margin: 5px 0;">${line}</div>`,
                      )
                      .join("")}
                </div>
                <button onclick="this.parentElement.remove()" style="background: none; border: none; color: var(--primary); cursor: pointer; font-size: 20px;">
                    <i class="fas fa-times"></i>
                </button>
            `;

  container.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  // Auto-remove after 6 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 500);
    }
  }, 6000);

  // Click to dismiss
  notification.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON" || e.target.tagName === "I") return;
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 500);
  });
}



// Save data to localStorage
function saveDataToStorage() {
    const dataToSave = {
        user: appData.user,
        categories: appData.categories,
        challenges: appData.challenges,
        progress: appData.progress,
        monthlyRecap: appData.monthlyRecap,
        badges: appData.badges.map(badge => ({
            ...badge,
            // We only need to save unlocked status
            unlocked: badge.unlocked
        }))
    };
    
    try {
        localStorage.setItem('nexusAchieveData', JSON.stringify(dataToSave));
        console.log('Data saved successfully');
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

// Load data from localStorage
function loadDataFromStorage() {
    try {
        const savedData = localStorage.getItem('nexusAchieveData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            
            // Merge saved data with existing appData
            Object.keys(parsedData).forEach(key => {
                if (key === 'user' || key === 'progress' || key === 'monthlyRecap') {
                    // For simple objects, merge them
                    Object.assign(appData[key], parsedData[key]);
                } else if (key === 'challenges') {
                    // For challenges, update current and completed status
                    Object.keys(parsedData.challenges).forEach(freq => {
                        appData.challenges[freq].forEach((challenge, index) => {
                            if (parsedData.challenges[freq][index]) {
                                challenge.current = parsedData.challenges[freq][index].current || 0;
                                challenge.completed = parsedData.challenges[freq][index].completed || false;
                            }
                        });
                    });
                } else if (key === 'categories') {
                    // Update category progress
                    parsedData.categories.forEach((savedCategory, index) => {
                        if (appData.categories[index]) {
                            appData.categories[index].completed = savedCategory.completed || 0;
                            appData.categories[index].progress = savedCategory.progress || 0;
                        }
                    });
                } else if (key === 'badges') {
                    // Update badge unlocked status
                    parsedData.badges.forEach((savedBadge, index) => {
                        if (appData.badges[index]) {
                            appData.badges[index].unlocked = savedBadge.unlocked || false;
                        }
                    });
                }
            });
            
            console.log('Data loaded successfully');
            return true;
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
    return false;
}

// Auto-save every 30 seconds
setInterval(() => {
    saveDataToStorage();
    console.log('Auto-saved data');
}, 30000);

function clearAllData() {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
        localStorage.removeItem('nexusAchieveData');
        location.reload(); // Reload page to reset
    }
}










// Show confirmation modal
function showDeleteConfirmation() {
    const modal = document.getElementById('deleteConfirmation');
    if (modal) {
        modal.style.display = 'flex';
        // Add fade in animation
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

// Hide confirmation modal
function hideDeleteConfirmation() {
    const modal = document.getElementById('deleteConfirmation');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Delete all history function
function deleteAllHistory() {
    // Reset all data to initial state
    appData.user = {
        level: 1,
        points: 0,
        streak: 0,
        longestStreak: 0,
        totalChallenges: 0,
        completedChallenges: 0
    };
    
    // Reset all goals to 0
    Object.keys(appData.challenges).forEach(freq => {
        appData.challenges[freq].forEach(challenge => {
            challenge.current = 0;
            challenge.completed = false;
        });
    });
    
    // Reset categories
    appData.categories.forEach(category => {
        category.completed = 0;
        category.progress = 0;
    });
    
    // Reset progress
    appData.progress = {
        weekly: { completed: 0, total: 50 },
        monthly: { completed: 0, total: 50 },
        yearly: { completed: 0, total: 20 }
    };
    
    // Reset monthly recap
    appData.monthlyRecap = {
        month: "January 2024",
        challengesCompleted: 0,
        pointsEarned: 0,
        streakDays: 0,
        badgesEarned: 0,
        bestCategory: "None",
        productivityScore: 0,
        insights: ["Start fresh! Your journey begins now."]
    };
    
    // Reset badges (lock all)
    appData.badges.forEach(badge => {
        badge.unlocked = false;
    });
    
    // Clear localStorage
    localStorage.removeItem('nexusAchieveData');
    
    // Hide confirmation modal
    hideDeleteConfirmation();
    
    // Show success notification
    showNotification('🗑️ ALL HISTORY DELETED!\n\nYour journey starts fresh from 0!', 'success');
    
    // Update all UI
    updateAllUI();
    
    // Re-render badges
    renderBadges();
    
    // Show celebration for fresh start
    setTimeout(() => {
        showNotification('✨ FRESH START!\n\nAll goals reset to 0. Ready for new achievements!', 'info');
    }, 1000);
}







// Render badge requirements list
function renderBadgeRequirements() {
    const container = document.getElementById('requirementsList');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Group badges by rarity
    const rarityGroups = {
        legendary: [],
        epic: [],
        rare: [],
        uncommon: [],
        common: [],
        mythic: []
    };
    
    appData.badges.forEach(badge => {
        if (rarityGroups[badge.rarity]) {
            rarityGroups[badge.rarity].push(badge);
        }
    });
    
    // Create requirements list
    Object.entries(rarityGroups).forEach(([rarity, badges]) => {
        if (badges.length > 0) {
            // Add rarity header
            const rarityHeader = document.createElement('div');
            rarityHeader.style.cssText = `
                background: ${getRarityColor(rarity)}20;
                color: ${getRarityColor(rarity)};
                padding: 12px 20px;
                margin: 15px 0 10px 0;
                border-radius: var(--radius);
                font-family: 'Orbitron';
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                border-left: 4px solid ${getRarityColor(rarity)};
                display: flex;
                align-items: center;
                gap: 10px;
            `;
            rarityHeader.innerHTML = `
                <i class="fas fa-${getRarityIcon(rarity)}"></i>
                ${rarity.toUpperCase()} BADGES (${badges.length})
            `;
            container.appendChild(rarityHeader);
            
            // Add badges for this rarity
            badges.forEach(badge => {
                const requirementItem = document.createElement('div');
                requirementItem.className = 'badge-requirement-item';
                requirementItem.style.cssText = `
                    background: ${badge.unlocked ? 'rgba(0, 255, 157, 0.1)' : 'rgba(138, 138, 181, 0.1)'};
                    border: 2px solid ${badge.unlocked ? 'var(--success)' : 'var(--gray)'};
                    border-radius: var(--radius);
                    padding: 15px;
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    transition: var(--transition);
                    cursor: pointer;
                `;
                requirementItem.onmouseenter = () => {
                    requirementItem.style.transform = 'translateX(5px)';
                    requirementItem.style.boxShadow = 'var(--shadow)';
                };
                requirementItem.onmouseleave = () => {
                    requirementItem.style.transform = 'translateX(0)';
                    requirementItem.style.boxShadow = 'none';
                };
                requirementItem.onclick = () => showBadgeDetails(badge);
                
                requirementItem.innerHTML = `
                    <div style="font-size: 28px; color: ${badge.color};">
                        ${badge.icon}
                    </div>
                    <div style="flex: 1;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                            <span style="font-family: 'Orbitron'; font-weight: 700; color: ${badge.unlocked ? 'var(--success)' : 'var(--light)'};">
                                ${badge.name}
                            </span>
                            <span style="font-size: 12px; padding: 3px 10px; border-radius: var(--radius-full); 
                                   background: ${badge.unlocked ? 'var(--success)' : 'var(--gray)'}; 
                                   color: ${badge.unlocked ? 'black' : 'white'}; font-weight: 700;">
                                ${badge.unlocked ? 'UNLOCKED' : 'LOCKED'}
                            </span>
                        </div>
                        <div style="color: ${badge.unlocked ? 'var(--success-light)' : 'var(--gray)'}; font-size: 14px;">
                            ${getBadgeRequirementText(badge)}
                        </div>
                    </div>
                `;
                
                container.appendChild(requirementItem);
            });
        }
    });
}

// Get badge requirement description text
function getBadgeRequirementText(badge) {
    const requirements = {
        // Social badges
        'Movie night with friends': 'Complete 5 movie nights with friends',
        'Dinner party master': 'Host 3 dinner parties with 5+ friends',
        'Weekend trip expert': 'Go on 2 weekend trips with friends',
        
        // Family badges
        'Family dinner champion': 'Have 10 family dinners at home',
        'Grandparent visitor': 'Visit parents/grandparents 5 times',
        'Family getaway expert': 'Plan 2 family weekend getaways',
        
        // Adventure badges
        'Haunted explorer': 'Visit 3 haunted places alone',
        'Extreme sports fan': 'Try 5 different extreme sports',
        'Wilderness camper': 'Go camping 5 times in the wilderness',
        
        // Self Care badges
        'Spa day expert': 'Have 10 spa days at home',
        'Digital detox master': 'Complete 7 digital detox days',
        'Meditation guru': 'Meditate for 100 consecutive days',
        
        // Entertainment badges
        'Movie marathon pro': 'Watch 10 movie marathons',
        'Theater enthusiast': 'Attend 5 theater shows',
        'Food explorer': 'Try 20 different restaurants',
        
        // Personal Growth badges
        'Bookworm': 'Read 25 personal growth books',
        'Skill master': 'Learn 10 new hobby skills',
        'Course completer': 'Finish 5 online courses',
        
        // Achievement badges
        'First Step': 'Complete your first goal',
        'Goal Getter': 'Complete 25 total goals',
        'Milestone Master': 'Complete 50 total goals',
        'Achievement Ace': 'Complete 100 total goals',
        
        // Consistency badges
        'Week Warrior': 'Complete 4 weekly challenges',
        'Month Master': 'Complete 3 monthly goals',
        'Year Champion': 'Complete yearly milestones',
        
        // Default fallback
        'default': badge.description || 'Complete specific achievements to unlock'
    };
    
    return requirements[badge.name] || requirements['default'];
}

// Get rarity color
function getRarityColor(rarity) {
    const colors = {
        common: 'var(--common)',
        uncommon: 'var(--uncommon)',
        rare: 'var(--rare)',
        epic: 'var(--epic)',
        legendary: 'var(--legendary)',
        mythic: 'var(--mythic)'
    };
    return colors[rarity] || 'var(--primary)';
}

// Get rarity icon
function getRarityIcon(rarity) {
    const icons = {
        common: 'circle',
        uncommon: 'star',
        rare: 'gem',
        epic: 'crown',
        legendary: 'trophy',
        mythic: 'fire'
    };
    return icons[rarity] || 'star';
}

// Filter badges by rarity
function filterBadges(rarity) {
    // Update active tab
    document.querySelectorAll('.badge-filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const container = document.getElementById('requirementsList');
    if (!container) return;
    
    container.innerHTML = '';
    
    let badgesToShow;
    if (rarity === 'all') {
        badgesToShow = appData.badges;
    } else {
        badgesToShow = appData.badges.filter(badge => badge.rarity === rarity);
    }
    
    // Create filtered list
    badgesToShow.forEach(badge => {
        const requirementItem = document.createElement('div');
        requirementItem.className = 'badge-requirement-item';
        requirementItem.style.cssText = `
            background: ${badge.unlocked ? 'rgba(0, 255, 157, 0.1)' : 'rgba(138, 138, 181, 0.1)'};
            border: 2px solid ${badge.unlocked ? 'var(--success)' : getRarityColor(badge.rarity)};
            border-radius: var(--radius);
            padding: 15px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 15px;
            transition: var(--transition);
            cursor: pointer;
        `;
        requirementItem.onmouseenter = () => {
            requirementItem.style.transform = 'translateX(5px)';
            requirementItem.style.boxShadow = 'var(--shadow)';
        };
        requirementItem.onmouseleave = () => {
            requirementItem.style.transform = 'translateX(0)';
            requirementItem.style.boxShadow = 'none';
        };
        requirementItem.onclick = () => showBadgeDetails(badge);
        
        requirementItem.innerHTML = `
            <div style="font-size: 28px; color: ${badge.color};">
                ${badge.icon}
            </div>
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <div>
                        <span style="font-family: 'Orbitron'; font-weight: 700; color: ${badge.unlocked ? 'var(--success)' : 'var(--light)'}; margin-right: 10px;">
                            ${badge.name}
                        </span>
                        <span style="font-size: 11px; padding: 2px 8px; border-radius: var(--radius-full); 
                               background: ${getRarityColor(badge.rarity)}; 
                               color: black; font-weight: 700; text-transform: uppercase;">
                            ${badge.rarity}
                        </span>
                    </div>
                    <span style="font-size: 12px; padding: 3px 10px; border-radius: var(--radius-full); 
                           background: ${badge.unlocked ? 'var(--success)' : 'var(--gray)'}; 
                           color: ${badge.unlocked ? 'black' : 'white'}; font-weight: 700;">
                        ${badge.unlocked ? 'UNLOCKED' : 'LOCKED'}
                    </span>
                </div>
                <div style="color: ${badge.unlocked ? 'var(--success-light)' : 'var(--gray)'}; font-size: 14px;">
                    ${getBadgeRequirementText(badge)}
                </div>
            </div>
        `;
        
        container.appendChild(requirementItem);
    });
    
    // If no badges found
    if (badgesToShow.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--gray);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
                <h4 style="color: var(--primary);">NO ${rarity.toUpperCase()} BADGES FOUND</h4>
                <p>Complete more achievements to unlock ${rarity} badges!</p>
            </div>
        `;
    }
}





// Initialize analytics data
function initAnalyticsData() {
    // Generate mock activity data for demo
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    appData.analytics.activityData = {};
    days.forEach(day => {
        appData.analytics.activityData[day] = Math.floor(Math.random() * 10) + 1;
    });
    
    // Generate completion history (last 30 days)
    const today = new Date();
    for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        appData.analytics.completionHistory.push({
            date: date.toISOString().split('T')[0],
            count: Math.floor(Math.random() * 5) + 1,
            categories: ['social', 'family', 'adventure'][Math.floor(Math.random() * 3)]
        });
    }
}

// Show analytics for selected period
function showAnalyticsPeriod(period) {
    // Update active tab
    document.querySelectorAll('.analytics-period-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update charts based on period
    renderAnalyticsCharts(period);
    updateAnalyticsStats(period);
    generateInsights(period);
}

// Render all analytics charts
function renderAnalyticsCharts(period = 'month') {
    renderCategoryChart();
    renderTrendChart(period);
    renderHeatmapChart();
    renderDifficultyChart();
}

// Category Distribution Chart
function renderCategoryChart() {
    const container = document.getElementById('categoryChart');
    if (!container) return;
    
    // Calculate category completion percentages
    const categoryData = appData.categories.map(cat => {
        const percent = cat.progress;
        return {
            name: cat.name,
            percent: percent,
            color: cat.color,
            completed: cat.completed,
            total: cat.total
        };
    });
    
    // Sort by percentage
    categoryData.sort((a, b) => b.percent - a.percent);
    
    // Render as bars
    let html = '';
    categoryData.forEach(cat => {
        html += `
            <div class="chart-bar">
                <div class="bar-label">${cat.name}</div>
                <div class="bar-container">
                    <div class="bar-fill" style="width: ${cat.percent}%; background: ${cat.color};"></div>
                </div>
                <div class="bar-value">${cat.percent}%</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Trend Chart
function renderTrendChart(period) {
    const container = document.getElementById('trendChart');
    if (!container) return;
    
    // Generate trend data based on period
    let dataPoints = [];
    let labels = [];
    
    switch(period) {
        case 'week':
            labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            dataPoints = labels.map(() => Math.floor(Math.random() * 8) + 2);
            break;
        case 'month':
            labels = Array.from({length: 4}, (_, i) => `Week ${i + 1}`);
            dataPoints = labels.map(() => Math.floor(Math.random() * 20) + 5);
            break;
        case 'year':
            labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            dataPoints = labels.map(() => Math.floor(Math.random() * 50) + 10);
            break;
        default:
            labels = ['Q1', 'Q2', 'Q3', 'Q4'];
            dataPoints = labels.map(() => Math.floor(Math.random() * 100) + 20);
    }
    
    // Render as bars
    const maxValue = Math.max(...dataPoints);
    let html = '<div style="height: 250px; display: flex; align-items: end; justify-content: space-between; padding: 10px 0;">';
    
    dataPoints.forEach((value, index) => {
        const height = (value / maxValue) * 200;
        html += `
            <div style="display: flex; flex-direction: column; align-items: center; height: 100%;">
                <div style="width: 30px; background: linear-gradient(to top, var(--primary), var(--success)); 
                     border-radius: 6px 6px 0 0; height: ${height}px; margin-bottom: 10px; 
                     position: relative;" title="${value} goals">
                    <div style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); 
                         color: var(--primary); font-weight: bold; font-size: 12px;">
                        ${value}
                    </div>
                </div>
                <div style="color: var(--primary-light); font-size: 12px; transform: rotate(-45deg); 
                     transform-origin: left; margin-top: 10px;">
                    ${labels[index]}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Heatmap Chart
function renderHeatmapChart() {
    const container = document.getElementById('heatmapChart');
    if (!container) return;
    
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const weeks = 4;
    const maxActivity = 10;
    
    let html = '<div class="heatmap">';
    
    // Generate random activity data
    for (let i = 0; i < weeks * 7; i++) {
        const activity = Math.floor(Math.random() * maxActivity);
        const intensity = activity / maxActivity;
        
        // Calculate color based on intensity
        const r = Math.floor(0 + (255 - 0) * intensity);
        const g = Math.floor(212 + (255 - 212) * intensity);
        const b = Math.floor(255 + (157 - 255) * intensity);
        const color = `rgb(${r}, ${g}, ${b})`;
        
        html += `
            <div class="heatmap-cell" style="background: ${color};" 
                 data-count="${activity}" 
                 title="${activity} activities">
            </div>
        `;
    }
    
    html += '</div>';
    
    // Add day labels
    html += '<div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; margin-top: 10px;">';
    days.forEach(day => {
        html += `<div style="text-align: center; color: var(--primary-light); font-size: 12px;">${day}</div>`;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

// Difficulty Analysis Chart
function renderDifficultyChart() {
    const container = document.getElementById('difficultyChart');
    if (!container) return;
    
    // Analyze goal difficulty based on points
    const difficulties = {
        'Easy (0-100 pts)': 0,
        'Medium (101-300 pts)': 0,
        'Hard (301-500 pts)': 0,
        'Epic (500+ pts)': 0
    };
    
    // Count goals by difficulty
    Object.values(appData.challenges).flat().forEach(challenge => {
        if (challenge.points <= 100) difficulties['Easy (0-100 pts)']++;
        else if (challenge.points <= 300) difficulties['Medium (101-300 pts)']++;
        else if (challenge.points <= 500) difficulties['Hard (301-500 pts)']++;
        else difficulties['Epic (500+ pts)']++;
    });
    
    // Calculate percentages
    const total = Object.values(difficulties).reduce((a, b) => a + b, 0);
    
    // Render as donut chart visualization
    let html = '<div style="display: flex; align-items: center; justify-content: center; height: 100%;">';
    html += '<div style="position: relative; width: 200px; height: 200px;">';
    
    // Create donut chart segments
    const colors = ['#00ff9d', '#00d4ff', '#ffcc00', '#ff3366'];
    let currentAngle = 0;
    let index = 0;
    
    Object.entries(difficulties).forEach(([label, count]) => {
        if (count > 0) {
            const percentage = (count / total) * 100;
            const angle = (percentage / 100) * 360;
            
            html += `
                <div style="position: absolute; width: 200px; height: 200px; 
                     clip-path: polygon(50% 50%, 
                         ${50 + 45 * Math.cos(currentAngle * Math.PI / 180)}% ${50 - 45 * Math.sin(currentAngle * Math.PI / 180)}%, 
                         ${50 + 45 * Math.cos((currentAngle + angle) * Math.PI / 180)}% ${50 - 45 * Math.sin((currentAngle + angle) * Math.PI / 180)}%);
                     background: ${colors[index]}; opacity: 0.8;">
                </div>
            `;
            
            currentAngle += angle;
            index++;
        }
    });
    
    // Center text
    html += `
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
             text-align: center; color: var(--primary);">
            <div style="font-family: 'Orbitron'; font-size: 24px; font-weight: bold;">${total}</div>
            <div style="font-size: 12px; color: var(--primary-light);">GOALS</div>
        </div>
    `;
    
    html += '</div></div>';
    
    // Add legend
    html += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px;">';
    Object.entries(difficulties).forEach(([label, count], index) => {
        html += `
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 12px; height: 12px; background: ${colors[index]}; border-radius: 2px;"></div>
                <div style="color: var(--light); font-size: 12px;">${label}</div>
                <div style="margin-left: auto; color: var(--primary); font-weight: bold;">${count}</div>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

// Update analytics stats
function updateAnalyticsStats(period) {
    // Calculate average completion time (mock data)
    const avgTime = (Math.random() * 3 + 1).toFixed(1);
    document.getElementById('avgCompletionTime').textContent = `${avgTime}h`;
    
    // Calculate success rate
    const totalGoals = appData.user.totalChallenges || 1;
    const completedGoals = appData.user.completedChallenges || 0;
    const successRate = Math.round((completedGoals / totalGoals) * 100);
    document.getElementById('successRate').textContent = `${successRate}%`;
    
    // Determine peak hours (mock data)
    const peakHours = ['6-9 AM', '10 AM-1 PM', '2-5 PM', '6-9 PM', '10 PM-1 AM'];
    document.getElementById('peakHours').textContent = peakHours[Math.floor(Math.random() * peakHours.length)];
    
    // Determine best category
    const bestCategory = appData.categories.reduce((prev, current) => 
        (prev.progress > current.progress) ? prev : current
    );
    document.getElementById('bestCategory').textContent = bestCategory.name.split(' ')[0].toUpperCase();
}

// Generate AI Insights
function generateInsights(period) {
    const container = document.getElementById('analyticsInsights');
    if (!container) return;
    
    const insights = [
        "🎯 Your Social goals have the highest completion rate (88%)",
        "📈 You're most productive on Tuesdays and Thursdays",
        "⏰ Peak activity hours: 6-9 PM (32% of completions)",
        "🌟 Adventure goals show fastest growth this month (+15%)",
        "🏆 78% success rate puts you in the top 20% of users",
        "📊 Family goals completion time decreased by 24% this week",
        "💪 You complete Hard goals 3x faster than average",
        "🎬 Entertainment goals have 92% satisfaction rate",
        "📚 Reading 30 mins daily could boost Personal Growth by 40%",
        "👥 Social goals completed with friends have 2x higher satisfaction"
    ];
    
    // Select 4 random insights
    const selectedInsights = [];
    while (selectedInsights.length < 4) {
        const insight = insights[Math.floor(Math.random() * insights.length)];
        if (!selectedInsights.includes(insight)) {
            selectedInsights.push(insight);
        }
    }
    
    container.innerHTML = '';
    selectedInsights.forEach(insight => {
        const insightElement = document.createElement('div');
        insightElement.className = 'insight-item';
        insightElement.innerHTML = `
            <div class="insight-icon" style="background: rgba(0, 212, 255, 0.2); color: var(--primary);">
                <i class="fas fa-robot"></i>
            </div>
            <div>
                <strong>${insight}</strong>
            </div>
        `;
        container.appendChild(insightElement);
    });
}

// Generate analytics report
function generateAnalyticsReport() {
    const report = `
╔════════════════════════════════════════════════════╗
║              QUANTUM ANALYTICS REPORT              ║
║              Generated: ${new Date().toLocaleDateString()}            ║
╠════════════════════════════════════════════════════╣
║                                                    ║
║  📊 OVERVIEW STATISTICS                           ║
║  • Success Rate:           ${document.getElementById('successRate').textContent.padStart(6)}   ║
║  • Avg Completion Time:    ${document.getElementById('avgCompletionTime').textContent.padStart(6)}   ║
║  • Peak Hours:             ${document.getElementById('peakHours').textContent.padStart(12)}   ║
║  • Best Category:          ${document.getElementById('bestCategory').textContent.padStart(12)}   ║
║                                                    ║
║  🎯 CATEGORY PERFORMANCE                          ║
${appData.categories.map(cat => `║  • ${cat.name.padEnd(15)} ${cat.progress}% (${cat.completed}/${cat.total})`.padEnd(50) + '║').join('\n')}
║                                                    ║
║  🏆 ACHIEVEMENTS                                 ║
║  • Total Badges:           ${appData.badges.filter(b => b.unlocked).length}/${appData.badges.length}   ║
║  • Level:                  ${appData.user.level}                    ║
║  • Total Points:           ${appData.user.points.toLocaleString()}  ║
║                                                    ║
╚════════════════════════════════════════════════════╝
    `;
    
    // Copy to clipboard
    navigator.clipboard.writeText(report).then(() => {
        showNotification('📊 ANALYTICS REPORT COPIED TO CLIPBOARD!', 'success');
    });
}






// Theme definitions
const themes = {
    cyberpunk: {
        primary: "#00d4ff",
        primaryDark: "#0099ff",
        primaryLight: "#66f0ff",
        success: "#00ff9d",
        warning: "#ffcc00",
        danger: "#ff3366",
        personal: "#cc66ff",
        social: "#ff66cc",
        background: "#000000",
        backgroundLight: "#0a0a0f",
        text: "#e6f7ff"
    },
    nature: {
        primary: "#00ff9d",
        primaryDark: "#00cc7a",
        primaryLight: "#66ffb3",
        success: "#00ff9d",
        warning: "#ffcc66",
        danger: "#ff6666",
        personal: "#66cc99",
        social: "#66ccff",
        background: "#0a2f1c",
        backgroundLight: "#1a4f2a",
        text: "#e6ffe6"
    },
    sunset: {
        primary: "#ff9966",
        primaryDark: "#ff6633",
        primaryLight: "#ffcc99",
        success: "#ffcc66",
        warning: "#ff9966",
        danger: "#ff3366",
        personal: "#ff66cc",
        social: "#ff9966",
        background: "#1a0a0f",
        backgroundLight: "#2a1a1a",
        text: "#ffe6e6"
    },
    ocean: {
        primary: "#66ccff",
        primaryDark: "#3399ff",
        primaryLight: "#99e6ff",
        success: "#00ffcc",
        warning: "#ffcc00",
        danger: "#ff6666",
        personal: "#9966ff",
        social: "#66ccff",
        background: "#0a1a2e",
        backgroundLight: "#1a2a3e",
        text: "#e6f7ff"
    },
    galaxy: {
        primary: "#cc66ff",
        primaryDark: "#9966ff",
        primaryLight: "#e699ff",
        success: "#66ffcc",
        warning: "#ffcc66",
        danger: "#ff6666",
        personal: "#cc66ff",
        social: "#ff66cc",
        background: "#1a0a2e",
        backgroundLight: "#2a1a3e",
        text: "#f0e6ff"
    },
    dark: {
        primary: "#ffffff",
        primaryDark: "#cccccc",
        primaryLight: "#ffffff",
        success: "#00ff9d",
        warning: "#ffcc00",
        danger: "#ff3366",
        personal: "#cccccc",
        social: "#999999",
        background: "#111111",
        backgroundLight: "#222222",
        text: "#ffffff"
    }
};

// Current theme
let currentTheme = 'cyberpunk';

// Change theme function
function changeTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    
    currentTheme = themeName;
    
    // Update CSS variables
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
    });
    
    // Update active theme option
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('active');
    });
    document.querySelector(`.theme-option[data-theme="${themeName}"]`).classList.add('active');
    
    // Save theme preference
    localStorage.setItem('nexusAchieveTheme', themeName);
    
    // Show notification
    showNotification(`🎨 Theme changed to ${themeName.toUpperCase()}`, 'info');
    
    // Update chart colors if analytics is open
    if (document.getElementById('analyticsSection')?.classList.contains('active')) {
        renderAnalyticsCharts();
    }
}

// Apply custom colors
function applyCustomColors() {
    const primaryColor = document.getElementById('primaryColor').value;
    const backgroundColor = document.getElementById('backgroundColor').value;
    
    const root = document.documentElement;
    root.style.setProperty('--primary', primaryColor);
    root.style.setProperty('--primary-dark', darkenColor(primaryColor, 20));
    root.style.setProperty('--primary-light', lightenColor(primaryColor, 20));
    root.style.setProperty('--background', backgroundColor);
    root.style.setProperty('--background-light', lightenColor(backgroundColor, 10));
    
    // Save custom theme
    localStorage.setItem('nexusAchieveCustomTheme', JSON.stringify({
        primary: primaryColor,
        background: backgroundColor
    }));
    
    showNotification('🎨 Custom colors applied!', 'success');
}

// Helper function to darken color
function darkenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Helper function to lighten color
function lightenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R > 255 ? 255 : R) * 0x10000 +
        (G > 255 ? 255 : G) * 0x100 +
        (B > 255 ? 255 : B)).toString(16).slice(1);
}

// Load saved theme on initialization
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('nexusAchieveTheme');
    const customTheme = localStorage.getItem('nexusAchieveCustomTheme');
    
    if (customTheme) {
        try {
            const themeData = JSON.parse(customTheme);
            applyCustomColors(themeData);
        } catch (e) {
            console.error('Error loading custom theme:', e);
        }
    } else if (savedTheme && themes[savedTheme]) {
        changeTheme(savedTheme);
    }
}



// Hide loading screen after 2.5 seconds
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 500);
    }, 2500); // Change this number to adjust duration (2500 = 2.5 seconds)
});