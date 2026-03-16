<div align="center">

# ✦ ASSESS CALC PRO ✦
**The Vanguard of Educational Assessment Tools**

[![PWA Ready](https://img.shields.io/badge/Architecture-PWA-0f172a?style=for-the-badge&logo=pwa)](https://developer.mozilla.org/)
[![Vanilla JS](https://img.shields.io/badge/Engine-Vanilla_JS-f59e0b?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/)
[![UI](https://img.shields.io/badge/UI-Glassmorphism-38bdf8?style=for-the-badge)](https://developer.mozilla.org/)

*Precision grading logic meets flagship-tier design.*

</div>

---

## ⬢ Overview

**Assess Calc Pro** is a high-performance, offline-first Progressive Web App (PWA) engineered specifically for modern educational environments. Bypassing the friction of traditional spreadsheets, this application provides a tactile, real-time calculation engine wrapped in a premium, hardware-accelerated user interface. 

Built with zero external dependencies, it guarantees absolute data privacy, instantaneous load times, and seamless offline functionality for educators operating in varying network conditions.

## ⬢ Core Architecture

### Dynamic Weightage Engine
The core algorithm adapts fluidly between academic tiers, processing raw inputs into standardized weighted scores in real-time.

* **Primary Mode:** Term 1 (30%) | Written (10%) | Project (20%) | SA-2 (40%)
* **Upper Primary Mode:** Term 1 (30%) | Written (5%) | Project (15%) | SA-2 (50%)

### State & Storage
Utilizes a highly optimized `localStorage` pipeline to preserve user-defined configurations (Max Marks constraints, active thematic modes) across sessions, ensuring the workspace is always exactly as the user left it.

### PWA & Service Workers
Equipped with an inline service worker and `manifest.json`, Assess Calc Pro achieves full installability on iOS, Android, and Desktop environments, functioning flawlessly without an active internet connection.

## ⬢ UI / UX Philosophy

The interface is built on a sophisticated **Glassmorphism** framework, utilizing deep backdrop-filters (`blur(30px) saturate(120%)`) and dynamic mesh gradients to create depth and spatial hierarchy. 

**Dual-Theme Paradigm:**
* **🌌 Obsidian (Dark Mode):** A deep, OLED-optimized interface using muted indigo and sky-blue mesh gradients to reduce eye strain during prolonged grading sessions.
* **☁️ Opal (Light Mode):** A crisp, high-contrast workspace tailored for bright classroom environments.

## ⬢ Deployment & Installation

As a Progressive Web App, installation bypasses traditional app stores for frictionless deployment:

1. Navigate to the hosted `index.html` via any modern browser.
2. Select **"Add to Home Screen"** or **"Install App"** from the browser menu.
3. Launch directly from the device app drawer as a native, standalone application.

---
# Assess Calc Pro v7.0 - "The Fluid Update"

This major update transforms Assess Calc Pro from a static utility into a premium, highly responsive Progressive Web App (PWA) tailored for continuous assessment tracking.

## ✨ New Features
* **Fluid Canvas Engine:** The background now features a dynamic, glassmorphic mesh gradient that shifts colors in real-time based on the student's *Live Performance Percentage*, aligning with OCF-SE 2025 grading standards.
* **Persistent Multi-Mode Memory:** Primary and Upper Primary modes now have independent data states. Switching between modes instantly loads the specific data for that section without losing progress.
* **Auto-Save:** Every keystroke is immediately saved to local storage. Accidental tab closures or page refreshes no longer result in lost marks.
* **Global "Clear All":** Upgraded the clear button to wipe memory globally across all modes and reset the fluid canvas to a calm, neutral state.

## 🎨 UI & Design Enhancements
* **Premium Glassmorphism:** Upgraded the main calculator panel with a heavy `40px` frosted blur and dynamic border-glow effects.
* **Frosted Sky (Light Mode):** Completely overhauled Light Theme with better contrast, removing washed-out UI elements in favor of crisp, 10% opacity pastel tints.
* **Obsidian (Dark Mode):** Refined neon glowing effects to prevent "text smudging," ensuring numbers remain razor-sharp for high-readability.
* **Error Animations:** Added a premium CSS "shake" animation and red flash when a user attempts to enter marks exceeding the maximum limit.

## 🛠️ Under the Hood & Bug Fixes
* **Network-First Service Worker:** Upgraded the PWA offline cache (`calc-pro-v7-fluid`) with a forced-reset script to guarantee users instantly receive the latest updates without getting stuck in cache loops.
* **Mathematical Safeguards:** * Clamped inputs to prevent negative mark entries.
  * Added `NaN` safety checks to prevent the live percentage engine from crashing when typing decimal points.
* **iOS Native Support:** Injected Apple mobile web-app meta tags to ensure a seamless, fullscreen native feel without the Safari address bar.
* 

<div align="center">

### 👨‍💻 Architected By

**Sahil Kumar Rout**
*Primary School Teacher & Independent Developer | Odisha, India*

*Crafting elegant software solutions for the modern classroom.*

</div>
