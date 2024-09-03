# Falling Coins Animation

This is a simple React application that simulates falling coins when you tap the screen. The coins will fill up the screen, and once they reach a certain level, additional taps will not cause more coins to fall until the number of coins on the screen decreases.

## Requirements

- Node.js (v20 or later)
- npm or yarn

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/vladengineerr/Falling-Coins.git
    cd Falling-Coins
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- Tap the screen to drop coins. The coins will fall from the top and gradually fill the screen.
- The screen will stop adding new coins once the pile reaches a certain height or the maximum number of coins is reached.

## Optimzations
- The application is optimized for mobile devices and adjusts to different screen sizes.
- The code uses react-spring for smooth animations.