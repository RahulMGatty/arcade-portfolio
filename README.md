# 🕹️ Gamiofile: Retro Arcade Portfolio

A high-performance, 8-bit themed developer portfolio built with React and Tailwind CSS. This project mimics a classic arcade cabinet interface, featuring interactive "cheats," retro transitions, and a custom loading architecture.

## 🚀 Technical Loadout
* **Framework:** React 18+ (Vite)
* **Styling:** Tailwind CSS
* **Animations:** Tailwind Keyframes & CSS Scanlines
* **Deployment:** **Vercel** with Automatic GitHub CD
* **Backend Integration:** EmailJS for "Comms Channel" message relay

## 🛠️ Features

### 🟡 God Mode (The "Ascension" System)
* **Konami Code Integration:** Users can input the classic code (`↑ ↑ ↓ ↓ ← → ← → B A`) to unlock the site's hidden "God Mode."
* **Dynamic Theme Engine:** Instantly transforms the entire UI from Cyber-Blue to a vibrant Gold/Yellow palette.
* **4-Second Ascension:** A dedicated, chiptune-synced loading sequence for the initial unlock.
* **1-Second System Purge:** A rapid, high-intensity red "de-ascension" loader triggered by re-entering the code.

### ⏳ Optimized Loading System
* **Navigation Loaders:** Snappy **1-second** transitions between Stages, Skills, and Contact views.
* **Global State Sync:** Loading screens are fully aware of the God Mode state, updating colors and text dynamically.

### 🖥️ Arcade Visuals
* **CRT Monitor Effect:** Custom CSS filters and scanline overlays for an authentic retro feel.
* **Idle "Game Over" Screen:** Automatic trigger after 60 seconds of inactivity to mimic an arcade cabinet in "Attract Mode."
* **SPA Routing:** Managed through a central state controller with a `vercel.json` rewrite configuration for seamless browser refreshes.

## 👾 How to Run Locally
1. **Clone the repo:**
   ```bash
   git clone https://github.com/RahulMGatty/gamiofile.git
   ```
2. **Environment Variables: Create a .env file in the root directory:**
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_id
   VITE_EMAILJS_TEMPLATE_ID=your_id
   VITE_EMAILJS_PUBLIC_KEY=your_key
   ```
3.**Start the engine:**
   ```bash
   npm run dev
   ```

### 📦 Deployment Note
* **This project is optimized for Vercel. Ensure the vercel.json file is in the root directory to handle SPA routing redirects and that all VITE_ environment variables are configured in the Vercel Dashboard settings under Settings > Environment Variables.**
