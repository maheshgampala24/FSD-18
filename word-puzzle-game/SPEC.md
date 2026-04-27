# CSE Word Scramble Pro - Specification Document

## Project Overview
- **Project Name**: CSE Word Scramble Pro
- **Type**: Multi-page Browser-based Game
- **Core Functionality**: A word unscramble game with category and difficulty selection, timer system, hints, performance metrics, and leaderboard
- **Target Users**: Computer Science Engineering students learning technical vocabulary
- **Version**: 2.0 (Multi-page)

## Color Palette (Professional Green Theme)
- Dark Green: `#0F2A1D`
- Forest Green: `#375534`
- Medium Sage: `#6B9071`
- Light Sage: `#AEC3B0`
- Off White: `#E3EED4`
- Success: `#4CAF50`
- Error: `#FF4C4C`
- Warning: `#FFA500`

## File Structure
```
word-puzzle-game/
├── index.html          # Home Page
├── play.html           # Game Page
├── leaderboard.html    # Leaderboard Page
├── about.html          # About Page
├── style.css          # Global Styles
├── script.js          # Game Logic
└── SPEC.md            # This file
```

## Page Specifications

### 1. Home Page (index.html)
- Logo: "CSE Word Scramble Pro"
- Category dropdown (7 categories)
- Difficulty dropdown (Easy/Medium/Hard)
- Start Game button
- Best score display
- Navigation to all pages

### 2. Play Page (play.html)
- Category & Level selection
- 10 random questions per game
- Timer countdown (40s/30s/20s based on difficulty)
- Question display with clue
- Scrambled word display
- Hint button (shows hint, limited uses)
- Answer input field
- Submit button
- Skip button
- Feedback display (Correct/Wrong)
- Progress bar
- Result screen with all metrics

### 3. Leaderboard Page (leaderboard.html)
- Top 5 scores table
- Columns: Rank, Player, Category, Level, Score, Accuracy, PPM
- Reset button
- Empty state for no scores
- Sorted by score descending

### 4. About Page (about.html)
- Game purpose and description
- Technologies used
- Categories covered
- Performance metrics explanation
- How to play instructions
- Tips for success

## Word Categories (7 Categories, 100+ Words)
1. **Programming** (16 words) - algorithm, variable, function, compiler, etc.
2. **Data Structures** (14 words) - stack, queue, linkedlist, binarytree, etc.
3. **Database** (15 words) - primarykey, foreignkey, normalization, etc.
4. **Operating Systems** (15 words) - process, thread, kernel, deadlock, etc.
5. **Networking** (15 words) - protocol, bandwidth, firewall, latency, etc.
6. **Software Engineering** (15 words) - debugging, testing, deployment, etc.
7. **Computer Fundamentals** (15 words) - hardware, software, binary, etc.

## Difficulty Levels
- **Easy**: 40 seconds per question
- **Medium**: 30 seconds per question, 10s penalty per wrong answer
- **Hard**: 20 seconds per question, 20s penalty per wrong answer

## Game Mechanics
1. 10 random questions per game
2. Word scrambling with Fisher-Yates algorithm
3. Timer countdown per question
4. Hint system (shows hint, limited per question)
5. Answer validation (case-insensitive)
6. Auto-advance on correct answer (1s delay)
7. Game over on wrong answer or timeout (8. Skip counts as wrong answer

2s delay)
## Performance Metrics
1. **Accuracy %** = (Correct / Total Questions) × 100
2. **PPM (Pieces Per Minute)** = Correct Answers / Total Time (minutes)
3. **Penalty Time** = Total Time + (Wrong Answers × 10s)
4. **Success Rate** = (Correct / Total Attempts) × 100

## UI/UX Specification
- Glassmorphism cards with blur effect
- Soft shadows and rounded corners (14px)
- Gradient backgrounds using theme colors
- Smooth transitions (0.3s ease)
- Fade-in animations for new questions
- Shake animation for wrong answers
- Progress ring for timer
- Responsive design for mobile/tablet/desktop
- Professional green color palette

## Features Implemented
✅ 4 Separate HTML pages
✅ Category selection (7 categories)
✅ Level selection (Easy/Medium/Hard)
✅ Scrambled CSE words (100+ words)
✅ Question display with clue
✅ Hint button
✅ Timer system with warnings
✅ Random 10 questions per game
✅ Correct → next question (1s delay)
✅ Wrong → show answer (2s delay) → end game
✅ Accuracy calculation
✅ Speed-Accuracy (PPM)
✅ Time Penalty Method
✅ Success Rate
✅ Leaderboard with localStorage
✅ Professional green theme
✅ Fully responsive design
