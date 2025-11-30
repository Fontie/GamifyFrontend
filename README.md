# 🎮 Yonda’s Quest — Gamified XR Learning Platform  
### Immersive Web + VR/AR Experience for Educators

Yonda’s Quest is an interactive web-to-XR learning platform designed to help **educators** understand, explore, and effectively use **virtual reality (VR)** and **augmented reality (AR)** technologies in education.  
This project is built using **HTML, CSS, JavaScript, and Unity (WebXR)**, creating a seamless journey from browser-based learning to immersive virtual environments.

---

## ⭐ Project Purpose

Immersive technologies like **VR, AR, and AI** are transforming education — but adoption remains slow due to accessibility, lack of guidance, and uncertainty from educators.  
This project solves that problem by offering:

- ✔ A **web-based learning hub**  
- ✔ A **VR manual** (Meta Quest 3 onboarding)  
- ✔ A **VR preparation quiz**  
- ✔ A **general knowledge multiple-choice game**  
- ✔ A **Unity WebXR overworld** connected to the website  
- ✔ A **badge & scoring system**  
- ✔ Cross-device accessibility (Web, Mobile, VR)  

The goal:  
**To guide teachers through immersive education step-by-step and increase engagement, confidence, and readiness to use XR in learning environments.**

---

## 🧭 Project Goal (Internship Objective)

To design and develop a **complete interactive learning journey** that starts in the **web interface** and transitions into **immersive XR**, demonstrating how VR/AR can enhance educational experiences.  

The project was developed to:

- Support educators in understanding immersive technology  
- Provide structured guidance and learning  
- Enable hands-on practice using XR  
- Promote accessibility through browser-based tools  
- Show real-world potential of immersive learning  
- Engage users through gamification and interactive content  

---

# 🚀 Features Overview

### 🌐 **1. Interactive Web Platform**
Built with **HTML, CSS, JavaScript**, the web interface includes:

- Responsive landing page  
- Animated hero section  
- Dynamic sliders  
- Device previews (Web, XR, Mobile)  
- Modals & overlays  
- Smooth scroll behavior  
- Integrated video backgrounds  
- Animated logo carousel  

---

### 🥽 **2. VR Manual (Meta Quest 3 Guide)**  
An interactive VR preparation article that teaches:

- How to set up Meta Quest 3 correctly  
- How to adjust room space  
- Guardian boundary setup  
- IPD lens adjustment  
- Controller basics  
- Cleaning and safety instructions  

This ensures educators are fully prepared before entering XR.

---

### ❓ **3. VR Preparation Quiz (JavaScript)**  
A 7-question multiple-choice quiz that checks if users:

- Understand VR safety  
- Know how to operate Meta Quest 3  
- Understand boundaries, IPD, recentering  
- Know how to prepare their environment  

Includes:

- Score calculation  
- LocalStorage username integration  
- Badge achievement system  
- Auto submission to backend API  
- Dynamic quiz UI and animations  

---

### 🧠 **4. Multiple-Choice Game (Unity WebXR)**  
Inside the XR environment, teachers can play a multi-choice knowledge game covering:

- Geography  
- Food  
- General facts  
- Everyday knowledge  

This demonstrates interactive learning **inside VR**.

---

### 🗺 **5. Unity WebXR Overworld (Connected via Iframe)**  
The web platform links directly to a **Unity WebXR overworld**, acting as a hub for:

- VR challenges  
- Quizzes  
- Exploration  
- Learning objects  

The website sends:

- The logged-in username  
- Score data  
- Badges  
- Game state messages  

Communication is done via **postMessage** API.

---

### 🏆 **6. Gamification System**

- Score submission to backend  
- Leaderboard  
- Hall of Fame  
- Badge rewards  
- Level progression  

Badges include:

- **Level2** — Quiz completed  
- **Level2_50** — 50% correct  
- **Level2_80** — 80% correct  
- **Level2_100** — 100% correct  

---

### 📱 **7. Full Device Compatibility**

| Platform | Supported |
|---------|-----------|
| Desktop Web | ✔ |
| Mobile Web | ✔ |
| VR Headset Browser (Quest) | ✔ |
| Unity WebXR | ✔ |

---

# 🏗 Tech Stack

### **Frontend**
- HTML5  
- CSS3 (Animations, Flexbox, Responsive Design)  
- JavaScript (DOM, Events, API, LocalStorage)  

### **XR / Unity**
- Unity WebGL  
- WebXR  
- C# (Unity scripting)  
- Game integration through iframe + postMessage  

### **Backend APIs**
- Node.js (or organization backend)  
- API Endpoints for:
  - `/api/game/load/:id`
  - `/api/score/submit`
  - `/api/badge/give`

---



