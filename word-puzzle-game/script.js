/**
 * CSE WORD SCRAMBLE PRO - Word Puzzle Game
 * A fully functional word puzzle game with categories, difficulty levels, 
 * performance metrics, scoring, and leaderboard functionality
 */

// ============================================
// WORD DATABASE - 100+ CSE Words Across 7 Categories
// ============================================

const WORD_DATA = {
    programming: {
        name: "Programming",
        words: [
            { word: "algorithm", question: "A step-by-step procedure used to solve computational problems.", hint: "Defines program logic", level: "medium" },
            { word: "variable", question: "A container for storing data values that can change during execution.", hint: "Named memory location", level: "easy" },
            { word: "function", question: "A reusable block of code that performs a specific task and can be called by name.", hint: "Code module", level: "easy" },
            { word: "compiler", question: "Software that translates entire source code into machine code before execution.", hint: "Translates code", level: "medium" },
            { word: "interpreter", question: "Software that executes code line by line, translating each statement as it runs.", hint: "Line-by-line execution", level: "medium" },
            { word: "syntax", question: "The set of rules that define the structure and format of a programming language.", hint: "Language rules", level: "easy" },
            { word: "boolean", question: "A data type that can only hold two values: true or false.", hint: "True/False type", level: "easy" },
            { word: "string", question: "A data type representing a sequence of characters used to store text.", hint: "Text data", level: "easy" },
            { word: "integer", question: "A whole number data type without decimal points.", hint: "Whole numbers", level: "easy" },
            { word: "array", question: "A collection of elements stored in contiguous memory locations.", hint: "List of items", level: "easy" },
            { word: "loop", question: "A control structure that repeats a block of code multiple times.", hint: "Repetition statement", level: "easy" },
            { word: "class", question: "A blueprint in object-oriented programming that defines properties and methods.", hint: "OOP blueprint", level: "medium" },
            { word: "object", question: "An instance of a class containing data (properties) and behaviors (methods).", hint: "Class instance", level: "medium" },
            { word: "method", question: "A function defined inside a class that describes the behaviors of an object.", hint: "Class function", level: "medium" },
            { word: "recursion", question: "A programming technique where a function calls itself to solve a problem.", hint: "Self-calling function", level: "hard" },
            { word: "pointer", question: "A variable that stores the memory address of another variable.", hint: "Memory address", level: "medium" }
        ]
    },
    datastructures: {
        name: "Data Structures",
        words: [
            { word: "stack", question: "A linear data structure following LIFO (Last In First Out) principle.", hint: "LIFO structure", level: "easy" },
            { word: "queue", question: "A linear data structure following FIFO (First In First Out) principle.", hint: "FIFO structure", level: "easy" },
            { word: "linkedlist", question: "A linear data structure where elements are connected by pointers.", hint: "Node connections", level: "medium" },
            { word: "binarytree", question: "A hierarchical data structure where each node has at most two children.", hint: "Two children per node", level: "medium" },
            { word: "graph", question: "A data structure consisting of vertices (nodes) connected by edges.", hint: "Nodes and edges", level: "medium" },
            { word: "heap", question: "A tree-based data structure used for efficient sorting and priority operations.", hint: "Priority structure", level: "hard" },
            { word: "hashmap", question: "A data structure that uses hash functions to map keys to values for fast lookup.", hint: "Key-value pairs", level: "medium" },
            { word: "hashtable", question: "A data structure that implements an associative array for fast data retrieval.", hint: "Fast lookup table", level: "medium" },
            { word: "binarysearch", question: "An efficient search algorithm that works on sorted arrays by dividing the search interval.", hint: "Divide and conquer search", level: "hard" },
            { word: "traversal", question: "The process of visiting all nodes in a data structure systematically.", hint: "Visit all nodes", level: "medium" },
            { word: "vertex", question: "A fundamental unit in graphs representing a node or point.", hint: "Graph node", level: "easy" },
            { word: "adjacency", question: "The relationship between nodes in a graph that are connected by an edge.", hint: "Node connection", level: "medium" },
            { word: "sorting", question: "The process of arranging data in a specific order (ascending or descending).", hint: "Order arrangement", level: "easy" },
            { word: "hashing", question: "The process of converting data into a fixed-size value for fast access.", hint: "Data to index", level: "medium" }
        ]
    },
    database: {
        name: "Database",
        words: [
            { word: "primarykey", question: "A unique identifier for each record in a database table that cannot be null.", hint: "Unique identifier", level: "medium" },
            { word: "foreignkey", question: "A field in a database table that links to the primary key of another table.", hint: "Table relationship", level: "medium" },
            { word: "normalization", question: "The process of organizing data in a database to reduce redundancy.", hint: "Reduce duplication", level: "hard" },
            { word: "transaction", question: "A sequence of database operations treated as a single unit of work.", hint: "Atomic operations", level: "medium" },
            { word: "query", question: "A request to retrieve or manipulate data from a database.", hint: "Data request", level: "easy" },
            { word: "schema", question: "The structure that defines the organization and relationships of data in a database.", hint: "Database structure", level: "medium" },
            { word: "index", question: "A data structure that improves the speed of data retrieval operations.", hint: "Speed up lookups", level: "medium" },
            { word: "aggregate", question: "Functions that perform calculations on sets of rows to return a single result.", hint: "Group calculations", level: "hard" },
            { word: "constraint", question: "A rule enforced on table data to maintain data integrity.", hint: "Data rules", level: "medium" },
            { word: "integrity", question: "The accuracy and consistency of data in a database.", hint: "Data accuracy", level: "easy" },
            { word: "redundancy", question: "The duplication of data in a database, which normalization aims to reduce.", hint: "Data duplication", level: "easy" },
            { word: "join", question: "A SQL operation that combines rows from two or more tables based on related columns.", hint: "Combine tables", level: "medium" },
            { word: "view", question: "A virtual table based on the result of a SQL query.", hint: "Virtual table", level: "medium" },
            { word: "tuple", question: "A single row in a database table, representing a single record.", hint: "Table row", level: "easy" },
            { word: "attribute", question: "A column in a database table that represents a specific property of an entity.", hint: "Table column", level: "easy" }
        ]
    },
    operatingsystems: {
        name: "Operating Systems",
        words: [
            { word: "process", question: "An executing program in memory that the operating system manages.", hint: "Running program", level: "easy" },
            { word: "thread", question: "The smallest unit of CPU execution within a process.", hint: "CPU execution unit", level: "medium" },
            { word: "kernel", question: "The core component of an OS that manages system resources and hardware.", hint: "OS core", level: "medium" },
            { word: "deadlock", question: "A situation where two or more processes wait indefinitely for resources held by each other.", hint: "Circular wait", level: "hard" },
            { word: "paging", question: "A memory management technique that uses fixed-size pages for data storage.", hint: "Fixed-size memory", level: "medium" },
            { word: "scheduling", question: "The method by which the OS allocates CPU time to processes.", hint: "CPU allocation", level: "medium" },
            { word: "synchronization", question: "The coordination of access to shared resources by multiple processes.", hint: "Resource coordination", level: "hard" },
            { word: "virtualization", question: "The creation of virtual versions of hardware resources like CPU, memory, or storage.", hint: "Virtual hardware", level: "hard" },
            { word: "contextswitch", question: "The process of saving and restoring CPU state when switching between processes.", hint: "Process switching", level: "hard" },
            { word: "filesystem", question: "The method and data structure used by an OS to organize and store files.", hint: "File organization", level: "easy" },
            { word: "bootloader", question: "A program that loads the operating system into memory when a computer starts.", hint: "OS loader", level: "medium" },
            { word: "daemon", question: "A background process that runs without user interaction.", hint: "Background process", level: "medium" },
            { word: "semaphore", question: "A synchronization primitive used to control access to shared resources.", hint: "Resource guard", level: "hard" },
            { word: "interrupt", question: "A signal that causes the CPU to stop current execution and handle a specific event.", hint: "CPU signal", level: "medium" },
            { word: "memory", question: "Hardware used to store data and programs temporarily for fast access.", hint: "Temporary storage", level: "easy" }
        ]
    },
    networking: {
        name: "Networking",
        words: [
            { word: "protocol", question: "A set of rules governing data exchange between devices in a network.", hint: "Communication rules", level: "easy" },
            { word: "bandwidth", question: "The maximum data transfer rate of a network connection.", hint: "Data transfer rate", level: "easy" },
            { word: "firewall", question: "A security system that monitors and controls incoming and outgoing network traffic.", hint: "Network security", level: "medium" },
            { word: "latency", question: "The time delay between a request and the corresponding response in a network.", hint: "Delay time", level: "medium" },
            { word: "subnet", question: "A logical subdivision of an IP network used for routing purposes.", hint: "Network division", level: "medium" },
            { word: "throughput", question: "The actual amount of data successfully transferred over a network.", hint: "Actual data transfer", level: "medium" },
            { word: "topology", question: "The arrangement of devices and connections in a computer network.", hint: "Network layout", level: "easy" },
            { word: "encryption", question: "The process of encoding data so only authorized parties can read it.", hint: "Data encoding", level: "medium" },
            { word: "router", question: "A device that forwards data between different computer networks.", hint: "Network forwarder", level: "easy" },
            { word: "switch", question: "A device that connects devices within a single network using MAC addresses.", hint: "Network connector", level: "easy" },
            { word: "gateway", question: "A device that connects two different networks and manages traffic between them.", hint: "Network bridge", level: "medium" },
            { word: "packet", question: "A unit of data transmitted over a network with addressing information.", hint: "Network data unit", level: "easy" },
            { word: "server", question: "A computer that provides services to other computers (clients) in a network.", hint: "Service provider", level: "easy" },
            { word: "client", question: "A computer or application that requests services from a server.", hint: "Service requester", level: "easy" }
        ]
    },
    softwareengineering: {
        name: "Software Engineering",
        words: [
            { word: "debugging", question: "The process of finding and fixing errors in software code.", hint: "Error fixing", level: "easy" },
            { word: "testing", question: "The process of evaluating software to identify defects and verify functionality.", hint: "Quality check", level: "easy" },
            { word: "deployment", question: "The process of making software available for use in a production environment.", hint: "Release process", level: "medium" },
            { word: "iteration", question: "A repetition of a process in software development to improve the product.", hint: "Repeated cycle", level: "easy" },
            { word: "documentation", question: "Written descriptions and explanations of software code and functionality.", hint: "Code explanations", level: "easy" },
            { word: "architecture", question: "The high-level structure and design of a software system.", hint: "System design", level: "medium" },
            { word: "requirement", question: "A specification of what a software system should do or have.", hint: "System specifications", level: "easy" },
            { word: "framework", question: "A platform providing a foundation and structure for software development.", hint: "Development platform", level: "medium" },
            { word: "repository", question: "A central location where source code and project files are stored and managed.", hint: "Code storage", level: "medium" },
            { word: "version", question: "A specific state of software at a point in its development history.", hint: "Code state", level: "easy" },
            { word: "agile", question: "A software development methodology emphasizing iterative development and collaboration.", hint: "Iterative approach", level: "medium" },
            { word: "scrum", question: "A framework for managing software projects using short development cycles called sprints.", hint: "Sprint-based method", level: "hard" },
            { word: "backend", question: "The server-side of software that handles data processing and storage.", hint: "Server-side code", level: "easy" },
            { word: "frontend", question: "The client-side of software that users interact with directly.", hint: "User interface", level: "easy" },
            { word: "api", question: "A set of protocols and tools for building software applications to communicate with each other.", hint: "Communication interface", level: "medium" }
        ]
    },
    computerfundamentals: {
        name: "Computer Fundamentals",
        words: [
            { word: "hardware", question: "The physical components of a computer system.", hint: "Physical parts", level: "easy" },
            { word: "software", question: "The programs and applications that run on a computer.", hint: "Programs", level: "easy" },
            { word: "binary", question: "A number system using only two digits (0 and 1) for computer operations.", hint: "Base-2 system", level: "easy" },
            { word: "memory", question: "The component in a computer that stores data and instructions temporarily.", hint: "Data storage", level: "easy" },
            { word: "processor", question: "The main chip in a computer that executes instructions (CPU).", hint: "Computing chip", level: "easy" },
            { word: "storage", question: "Devices used to permanently store data on a computer.", hint: "Permanent storage", level: "easy" },
            { word: "monitor", question: "An output device that displays information visually.", hint: "Display screen", level: "easy" },
            { word: "keyboard", question: "An input device used to enter text and commands into a computer.", hint: "Text input", level: "easy" },
            { word: "mouse", question: "An input device used to interact with graphical user interfaces.", hint: "Pointing device", level: "easy" },
            { word: "motherboard", question: "The main circuit board that connects all computer components.", hint: "Main circuit board", level: "medium" },
            { word: "graphics", question: "Images, videos, and visual content displayed on a computer.", hint: "Visual content", level: "easy" },
            { word: "bitwise", question: "Operations that work on individual bits within binary numbers.", hint: "Binary operations", level: "hard" },
            { word: "assembly", question: "A low-level programming language directly understood by processors.", hint: "Low-level language", level: "hard" },
            { word: "compile", question: "The process of converting source code into machine-executable code.", hint: "Code translation", level: "easy" },
            { word: "execute", question: "To run a program or instruction on a computer.", hint: "Run program", level: "easy" }
        ]
    }
};

// ============================================
// GAME CONFIGURATION
// ============================================

const CONFIG = {
    totalQuestions: 10,
    levels: {
        easy: { name: "Easy", timeLimit: 40, penaltyTime: 0 },
        medium: { name: "Medium", timeLimit: 30, penaltyTime: 10 },
        hard: { name: "Hard", timeLimit: 20, penaltyTime: 20 }
    },
    scoring: {
        correctAnswer: 15,
        hintPenalty: 5,
        timeBonus: 1
    },
    keyNames: {
        category: 'wordScrambleCategory',
        level: 'wordScrambleLevel',
        leaderboard: 'wordScrambleLeaderboard',
        bestScore: 'wordScrambleBestScore'
    }
};

// ============================================
// GAME STATE
// ============================================

let gameState = {
    category: null,
    level: null,
    questions: [],
    currentQuestion: 0,
    correct: 0,
    wrong: 0,
    hintsUsed: 0,
    score: 0,
    startTime: null,
    endTime: null,
    timerInterval: null,
    timeRemaining: 0,
    isActive: false,
    answerLocked: false,
    questionStartTime: null,
    questionTimes: [],
    currentLevelTimeLimit: 40
};

// ============================================
// DOM ELEMENTS
// ============================================

const elements = {
    categorySelect: document.getElementById('category'),
    levelSelect: document.getElementById('level'),
    startBtn: document.getElementById('startBtn'),
    gameArea: document.getElementById('gameArea'),
    selectionArea: document.getElementById('selectionArea'),
    questionNumber: document.getElementById('questionNumber'),
    totalQuestions: document.getElementById('totalQuestions'),
    categoryDisplay: document.getElementById('categoryDisplay'),
    levelDisplay: document.getElementById('levelDisplay'),
    timer: document.getElementById('timer'),
    timerCircle: document.getElementById('timerCircle'),
    questionText: document.getElementById('questionText'),
    scrambledWord: document.getElementById('scrambledWord'),
    hintBtn: document.getElementById('hintBtn'),
    hintText: document.getElementById('hintText'),
    answerInput: document.getElementById('answerInput'),
    submitBtn: document.getElementById('submitBtn'),
    skipBtn: document.getElementById('skipBtn'),
    feedback: document.getElementById('feedback'),
    correctAnswer: document.getElementById('correctAnswer'),
    quitBtn: document.getElementById('quitBtn'),
    resultArea: document.getElementById('resultArea'),
    finalScoreValue: document.getElementById('finalScoreValue'),
    performanceBadge: document.getElementById('performanceBadge'),
    correctCount: document.getElementById('correctCount'),
    wrongCount: document.getElementById('wrongCount'),
    totalTimeTaken: document.getElementById('totalTimeTaken'),
    accuracyPercent: document.getElementById('accuracyPercent'),
    avgTimePerQuestion: document.getElementById('avgTimePerQuestion'),
    ppmValue: document.getElementById('ppmValue'),
    penaltyTimeValue: document.getElementById('penaltyTimeValue'),
    successRateValue: document.getElementById('successRateValue'),
    playAgainBtn: document.getElementById('playAgainBtn'),
    homeBtn: document.getElementById('homeBtn'),
    leaderboardBody: document.getElementById('leaderboardBody'),
    resetLeaderboardBtn: document.getElementById('resetLeaderboardBtn'),
    leaderboardEmpty: document.getElementById('leaderboardEmpty'),
    currentScore: document.getElementById('currentScore'),
    progressFill: document.getElementById('progressFill')
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function scrambleWord(word) {
    let scrambled;
    let attempts = 0;
    do {
        scrambled = shuffleArray(word.split('')).join('');
        attempts++;
    } while (scrambled === word && attempts < 100);
    return scrambled;
}

function formatTime(seconds) {
    if (seconds < 60) return seconds + 's';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins + 'm ' + secs + 's';
}

function getRandomItems(arr, count) {
    return shuffleArray(arr).slice(0, count);
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    setupEventListeners();
    if (elements.categorySelect) {
        populateCategories();
    }
    if (elements.leaderboardBody) {
        loadLeaderboard();
    }
}

function setupEventListeners() {
    if (elements.categorySelect) {
        elements.categorySelect.addEventListener('change', updateStartButton);
    }
    if (elements.levelSelect) {
        elements.levelSelect.addEventListener('change', updateStartButton);
    }
    if (elements.startBtn) {
        elements.startBtn.addEventListener('click', startGame);
    }
    if (elements.submitBtn) {
        elements.submitBtn.addEventListener('click', submitAnswer);
    }
    if (elements.answerInput) {
        elements.answerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') submitAnswer();
        });
    }
    if (elements.hintBtn) {
        elements.hintBtn.addEventListener('click', showHint);
    }
    if (elements.skipBtn) {
        elements.skipBtn.addEventListener('click', skipQuestion);
    }
    if (elements.quitBtn) {
        elements.quitBtn.addEventListener('click', quitGame);
    }
    if (elements.playAgainBtn) {
        elements.playAgainBtn.addEventListener('click', playAgain);
    }
    if (elements.homeBtn) {
        elements.homeBtn.addEventListener('click', goHome);
    }
    if (elements.resetLeaderboardBtn) {
        elements.resetLeaderboardBtn.addEventListener('click', resetLeaderboard);
    }
}

function populateCategories() {
    if (!elements.categorySelect) return;
    elements.categorySelect.innerHTML = '<option value="">Choose a category...</option>';
    Object.keys(WORD_DATA).forEach(function(key) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = WORD_DATA[key].name;
        elements.categorySelect.appendChild(option);
    });
}

function updateStartButton() {
    if (elements.startBtn) {
        const category = elements.categorySelect ? elements.categorySelect.value : '';
        const level = elements.levelSelect ? elements.levelSelect.value : '';
        elements.startBtn.disabled = !(category && level);
    }
}

// ============================================
// GAME LOGIC
// ============================================

function startGame() {
    const category = elements.categorySelect.value;
    const level = elements.levelSelect.value;
    if (!category || !level) return;
    
    gameState.category = category;
    gameState.level = level;
    gameState.questions = generateQuestions(category, level);
    gameState.currentQuestion = 0;
    gameState.correct = 0;
    gameState.wrong = 0;
    gameState.hintsUsed = 0;
    gameState.questionTimes = [];
    gameState.startTime = Date.now();
    gameState.isActive = true;
    gameState.score = 0;
    gameState.currentLevelTimeLimit = CONFIG.levels[level].timeLimit;
    
    if (elements.currentScore) {
        elements.currentScore.textContent = '0';
    }
    if (elements.selectionArea) elements.selectionArea.style.display = 'none';
    if (elements.gameArea) elements.gameArea.style.display = 'block';
    if (elements.categoryDisplay) {
        elements.categoryDisplay.textContent = WORD_DATA[category].name;
    }
    if (elements.levelDisplay) {
        elements.levelDisplay.textContent = CONFIG.levels[level].name;
        elements.levelDisplay.className = 'difficulty-tag ' + level;
    }
    if (elements.totalQuestions) {
        elements.totalQuestions.textContent = CONFIG.totalQuestions;
    }
    loadQuestion();
}

function generateQuestions(category, level) {
    const categoryData = WORD_DATA[category];
    let filteredWords = categoryData.words.filter(function(w) { return w.level === level; });
    if (filteredWords.length < CONFIG.totalQuestions) {
        filteredWords = categoryData.words.slice();
    }
    const selectedWords = getRandomItems(filteredWords, CONFIG.totalQuestions);
    return selectedWords.map(function(word) {
        return {
            original: word.word,
            scrambled: scrambleWord(word.word),
            question: word.question,
            hint: word.hint,
            answered: false
        };
    });
}

function loadQuestion() {
    const question = gameState.questions[gameState.currentQuestion];
    gameState.questionStartTime = Date.now();
    gameState.answerLocked = false;
    
    if (elements.questionNumber) {
        elements.questionNumber.textContent = gameState.currentQuestion + 1;
    }
    if (elements.questionText) {
        elements.questionText.textContent = question.question;
    }
    if (elements.scrambledWord) {
        elements.scrambledWord.textContent = question.scrambled.toUpperCase().split('').join(' ');
    }
    if (elements.hintText) {
        elements.hintText.textContent = '';
        elements.hintText.style.display = 'none';
    }
    if (elements.hintBtn) {
        elements.hintBtn.disabled = false;
    }
    if (elements.answerInput) {
        elements.answerInput.value = '';
        elements.answerInput.disabled = false;
        elements.answerInput.focus();
        elements.answerInput.classList.remove('correct', 'wrong');
    }
    if (elements.submitBtn) {
        elements.submitBtn.disabled = false;
    }
    if (elements.feedback) {
        elements.feedback.textContent = '';
        elements.feedback.className = 'feedback-message';
    }
    if (elements.correctAnswer) {
        elements.correctAnswer.textContent = '';
    }
    
    // Update progress bar
    if (elements.progressFill) {
        const progress = ((gameState.currentQuestion) / CONFIG.totalQuestions) * 100;
        elements.progressFill.style.width = progress + '%';
    }
    
    startTimer();
}

function startTimer() {
    const levelConfig = CONFIG.levels[gameState.level];
    gameState.timeRemaining = levelConfig.timeLimit;
    updateTimerDisplay();
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    gameState.timerInterval = setInterval(function() {
        gameState.timeRemaining--;
        updateTimerDisplay();
        if (gameState.timeRemaining <= 0) {
            handleTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    if (!elements.timer) return;
    elements.timer.textContent = gameState.timeRemaining;
    
    if (elements.timerCircle) {
        const circumference = 2 * Math.PI * 45;
        const progress = gameState.timeRemaining / gameState.currentLevelTimeLimit;
        const offset = circumference * (1 - progress);
        elements.timerCircle.style.strokeDashoffset = offset;
        
        elements.timerCircle.classList.remove('warning', 'danger');
        if (gameState.timeRemaining <= 5) {
            elements.timerCircle.classList.add('danger');
        } else if (gameState.timeRemaining <= 10) {
            elements.timerCircle.classList.add('warning');
        }
    }
}

function handleTimeout() {
    clearInterval(gameState.timerInterval);
    gameState.answerLocked = true;
    gameState.wrong++;
    const question = gameState.questions[gameState.currentQuestion];
    if (elements.feedback) {
        elements.feedback.textContent = "Time's up!";
        elements.feedback.className = 'feedback-message wrong';
    }
    if (elements.correctAnswer) {
        elements.correctAnswer.textContent = 'Answer: ' + question.original.toUpperCase();
    }
    if (elements.answerInput) {
        elements.answerInput.disabled = true;
    }
    if (elements.submitBtn) {
        elements.submitBtn.disabled = true;
    }
    if (elements.hintBtn) {
        elements.hintBtn.disabled = true;
    }
    setTimeout(function() {
        endGame();
    }, 2000);
}

function submitAnswer() {
    if (gameState.answerLocked) return;
    const userAnswer = elements.answerInput.value.trim().toLowerCase();
    const question = gameState.questions[gameState.currentQuestion];
    if (!userAnswer) {
        shakeInput();
        return;
    }
    const timeTaken = (Date.now() - gameState.questionStartTime) / 1000;
    gameState.questionTimes.push(timeTaken);
    if (userAnswer === question.original.toLowerCase()) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer(question);
    }
}

function handleCorrectAnswer() {
    gameState.answerLocked = true;
    gameState.correct++;
    clearInterval(gameState.timerInterval);
    const timeBonus = gameState.timeRemaining * CONFIG.scoring.timeBonus;
    const hintPenalty = gameState.hintsUsed > 0 ? CONFIG.scoring.hintPenalty : 0;
    const pointsEarned = CONFIG.scoring.correctAnswer + timeBonus - hintPenalty;
    gameState.score += pointsEarned;
    if (elements.currentScore) {
        elements.currentScore.textContent = gameState.score;
    }
    if (elements.feedback) {
        let feedbackText = 'Correct! +' + pointsEarned + ' pts';
        if (hintPenalty > 0) feedbackText += ' (-' + hintPenalty + ' hint)';
        elements.feedback.textContent = feedbackText;
        elements.feedback.className = 'feedback-message correct';
    }
    if (elements.answerInput) {
        elements.answerInput.classList.add('correct');
    }
    setTimeout(function() {
        gameState.currentQuestion++;
        if (gameState.currentQuestion >= CONFIG.totalQuestions) {
            endGame();
        } else {
            loadQuestion();
        }
    }, 1000);
}

function handleWrongAnswer(question) {
    gameState.answerLocked = true;
    gameState.wrong++;
    clearInterval(gameState.timerInterval);
    gameState.score -= 10;
    if (gameState.score < 0) gameState.score = 0;
    if (elements.currentScore) {
        elements.currentScore.textContent = gameState.score;
    }
    if (elements.feedback) {
        elements.feedback.textContent = 'Wrong! -10 pts';
        elements.feedback.className = 'feedback-message wrong';
    }
    if (elements.correctAnswer) {
        elements.correctAnswer.textContent = 'Answer: ' + question.original.toUpperCase();
    }
    if (elements.answerInput) {
        elements.answerInput.classList.add('wrong');
        elements.answerInput.disabled = true;
    }
    if (elements.submitBtn) {
        elements.submitBtn.disabled = true;
    }
    setTimeout(function() {
        endGame();
    }, 2000);
}

function showHint() {
    const question = gameState.questions[gameState.currentQuestion];
    if (elements.hintText) {
        elements.hintText.textContent = question.hint;
        elements.hintText.style.display = 'block';
    }
    if (elements.hintBtn) {
        elements.hintBtn.disabled = true;
    }
    gameState.hintsUsed++;
}

function skipQuestion() {
    const question = gameState.questions[gameState.currentQuestion];
    gameState.wrong++;
    if (elements.feedback) {
        elements.feedback.textContent = 'Skipped!';
        elements.feedback.className = 'feedback-message wrong';
    }
    if (elements.correctAnswer) {
        elements.correctAnswer.textContent = 'Answer: ' + question.original.toUpperCase();
    }
    clearInterval(gameState.timerInterval);
    setTimeout(function() {
        endGame();
    }, 1500);
}

function quitGame() {
    clearInterval(gameState.timerInterval);
    gameState.isActive = false;
    window.location.href = 'index.html';
}

function shakeInput() {
    if (elements.answerInput) {
        elements.answerInput.style.animation = 'none';
        elements.answerInput.offsetHeight;
        elements.answerInput.style.animation = 'shake 0.5s ease';
    }
}

// ============================================
// RESULT CALCULATION
// ============================================

function endGame() {
    clearInterval(gameState.timerInterval);
    gameState.endTime = Date.now();
    gameState.isActive = false;
    const totalTime = (gameState.endTime - gameState.startTime) / 1000;
    const accuracy = (gameState.correct / CONFIG.totalQuestions) * 100;
    let avgTime = 0;
    if (gameState.questionTimes.length > 0) {
        avgTime = gameState.questionTimes.reduce(function(a, b) { return a + b; }, 0) / gameState.questionTimes.length;
    }
    const totalMinutes = totalTime / 60;
    const ppm = totalMinutes > 0 ? gameState.correct / totalMinutes : 0;
    const penaltyTime = totalTime + (gameState.wrong * CONFIG.levels[gameState.level].penaltyTime);
    const successRate = (gameState.correct / (gameState.correct + gameState.wrong)) * 100;
    
    if (elements.gameArea) elements.gameArea.style.display = 'none';
    if (elements.resultArea) elements.resultArea.style.display = 'block';
    if (elements.correctCount) elements.correctCount.textContent = gameState.correct;
    if (elements.wrongCount) elements.wrongCount.textContent = gameState.wrong;
    if (elements.totalTimeTaken) elements.totalTimeTaken.textContent = formatTime(Math.round(totalTime));
    if (elements.accuracyPercent) elements.accuracyPercent.textContent = accuracy.toFixed(1);
    if (elements.avgTimePerQuestion) elements.avgTimePerQuestion.textContent = avgTime.toFixed(1) + 's';
    if (elements.ppmValue) elements.ppmValue.textContent = ppm.toFixed(2);
    if (elements.penaltyTimeValue) elements.penaltyTimeValue.textContent = formatTime(Math.round(penaltyTime));
    if (elements.successRateValue) elements.successRateValue.textContent = successRate.toFixed(1);
    
    let badge = '';
    let badgeClass = '';
    if (accuracy >= 90) {
        badge = '🏆 Excellent!';
        badgeClass = 'excellent';
    } else if (accuracy >= 70) {
        badge = '👍 Good Job!';
        badgeClass = 'good';
    } else if (accuracy >= 50) {
        badge = '📚 Keep Practicing!';
        badgeClass = 'average';
    } else {
        badge = '💪 Try Again!';
        badgeClass = 'needs-improvement';
    }
    if (elements.performanceBadge) {
        elements.performanceBadge.textContent = badge;
        elements.performanceBadge.className = 'performance-badge ' + badgeClass;
    }
    if (elements.finalScoreValue) {
        elements.finalScoreValue.textContent = gameState.score;
    }
    
    // Update best score
    const currentBest = localStorage.getItem(CONFIG.keyNames.bestScore) || 0;
    if (gameState.score > currentBest) {
        localStorage.setItem(CONFIG.keyNames.bestScore, gameState.score);
        if (elements.performanceBadge) {
            elements.performanceBadge.textContent = '🎉 New Best!';
            elements.performanceBadge.className = 'performance-badge new-best';
        }
    }
    
    saveToLeaderboard(gameState.correct, accuracy, ppm, totalTime);
}

function playAgain() {
    gameState = {
        category: null,
        level: null,
        questions: [],
        currentQuestion: 0,
        correct: 0,
        wrong: 0,
        hintsUsed: 0,
        score: 0,
        startTime: null,
        endTime: null,
        timerInterval: null,
        timeRemaining: 0,
        isActive: false,
        answerLocked: false,
        questionStartTime: null,
        questionTimes: [],
        currentLevelTimeLimit: 40
    };
    if (elements.resultArea) elements.resultArea.style.display = 'none';
    if (elements.selectionArea) elements.selectionArea.style.display = 'block';
    if (elements.categorySelect) elements.categorySelect.value = '';
    if (elements.levelSelect) elements.levelSelect.value = '';
    updateStartButton();
}

function goHome() {
    window.location.href = 'index.html';
}

// ============================================
// LEADERBOARD FUNCTIONS
// ============================================

function saveToLeaderboard(score, accuracy, ppm, time) {
    const name = localStorage.getItem('wordScramblePlayerName') || 'Player';
    const entry = {
        name: name,
        category: WORD_DATA[gameState.category].name,
        level: CONFIG.levels[gameState.level].name,
        score: score,
        points: gameState.score,
        accuracy: accuracy.toFixed(1),
        ppm: ppm.toFixed(2),
        time: formatTime(Math.round(time)),
        date: new Date().toLocaleDateString()
    };
    let leaderboard = JSON.parse(localStorage.getItem(CONFIG.keyNames.leaderboard)) || [];
    leaderboard.push(entry);
    leaderboard.sort(function(a, b) { return b.score - a.score; });
    leaderboard = leaderboard.slice(0, 10);
    localStorage.setItem(CONFIG.keyNames.leaderboard, JSON.stringify(leaderboard));
}

function loadLeaderboard() {
    if (!elements.leaderboardBody) return;
    const leaderboard = JSON.parse(localStorage.getItem(CONFIG.keyNames.leaderboard)) || [];
    if (leaderboard.length === 0) {
        if (elements.leaderboardEmpty) elements.leaderboardEmpty.style.display = 'block';
        if (elements.leaderboardBody) elements.leaderboardBody.innerHTML = '';
        return;
    }
    if (elements.leaderboardEmpty) elements.leaderboardEmpty.style.display = 'none';
    const top5 = leaderboard.slice(0, 5);
    elements.leaderboardBody.innerHTML = top5.map(function(entry, index) {
        let rankClass = 'default';
        if (index === 0) rankClass = 'gold';
        else if (index === 1) rankClass = 'silver';
        else if (index === 2) rankClass = 'bronze';
        return '<tr><td><div class="rank-cell"><span class="rank-badge ' + rankClass + '">' + (index + 1) + '</span></div></td><td>' + entry.name + '</td><td>' + entry.category + '</td><td>' + entry.level + '</td><td>' + entry.score + '</td><td>' + (entry.points || 0) + '</td><td>' + entry.accuracy + '%</td><td>' + entry.ppm + '</td></tr>';
    }).join('');
}

function resetLeaderboard() {
    if (confirm('Are you sure you want to reset the leaderboard?')) {
        localStorage.removeItem(CONFIG.keyNames.leaderboard);
        loadLeaderboard();
    }
}

// ============================================
// DOCUMENT READY
// ============================================

document.addEventListener('DOMContentLoaded', init);
