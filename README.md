# Digital Clock React Application

## Overview

This is a simple **Digital Clock** built using React. It displays the current time and updates every second. The clock is styled with **Tailwind CSS** to provide a modern and responsive UI.

## Features

- 🕰️ Real-time clock updates every second
- ⏳ 12-hour format with AM/PM indication
- 🎨 Styled with **Tailwind CSS** for a clean look
- 🌙 Dark-themed UI for better readability

## Technologies Used

- **React** (useState, useEffect)
- **Tailwind CSS** (for styling)

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/digital-clock.git
   cd digital-clock
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## How It Works

- The `useState` hook is used to store the current time.
- The `useEffect` hook updates the time every **second** using `setInterval`.
- The **time is formatted** to display in a **12-hour format with AM/PM**.
- The UI is styled using **Tailwind CSS** to ensure responsiveness and a clean look.

## Folder Structure

```
📂 digital-clock
 ┣ 📂 src
 ┃ ┣ 📜 App.js  # Main entry file
 ┃ ┣ 📜 DigitalClock.js  # Clock component
 ┃ ┣ 📜 index.css  # Tailwind CSS styles
 ┃ ┗ 📜 index.js  # React entry point
 ┣ 📜 package.json
 ┣ 📜 tailwind.config.js
 ┣ 📜 README.md
 ┗ 📜 .gitignore
```

## Customization

You can modify the clock to:

- Display **24-hour format** instead of 12-hour.
- Show the **current date** below the time.
- Add a **light/dark mode switch**.

## Contributing

Feel free to **fork** this repository and submit a pull request if you have improvements! 🚀

## License

This project is licensed under the **MIT License**.

---

💡 Built with ❤️ using React & Tailwind CSS.
