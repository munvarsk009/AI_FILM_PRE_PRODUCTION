# 🎬 AI Film Pre-Production Studio

AI Film Pre-Production Studio is a Flask-based AI application that transforms a simple story idea into a complete cinematic pre-production package. Using Large Language Models and AI image generation, the platform automatically creates professional screenplays, character profiles, sound design plans, and cinematic character artwork.

## ✨ Features

### 🎥 AI Screenplay Generation
Generate professional screenplay drafts from a story idea, including:
- Scene headings
- Action descriptions
- Character dialogue
- Visual suggestions
- Camera shot ideas
- Animation hints

### 👤 AI Character Generation
Automatically creates detailed character profiles with:
- Background story
- Personality traits
- Motivations
- Character arc
- Physical appearance
- Costume suggestions

### 🎵 AI Sound Design
Generates production-ready sound design plans:
- Background music suggestions
- Ambient sound effects
- Foley effects
- Emotional tone guidance
- Visual mood references

### 🎨 AI Character Artwork
Generate cinematic character portraits using Stability AI image generation.

### 📄 Export Options
Export generated screenplays in:
- TXT
- PDF
- DOCX

### 🎨 Modern UI
- Glassmorphism-inspired design
- Responsive layout
- Animated loading states
- Cinematic movie-themed interface

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Flask
- Python

### AI Technologies
- Ollama
- Granite 4 Micro
- Stability AI

### Document Generation
- ReportLab
- Python-Docx

---

## 📂 Project Structure

AI_FILM_PRE_PRODUCTION/

├── app.py

├── requirements.txt

├── README.md

├── templates/

│   ├── landing.html

│   ├── dashboard.html

│   ├── screenplay.html

│   ├── characters.html

│   └── sound.html

├── static/

│   ├── style.css

│   ├── script.js

│   ├── bg.jpeg

│   └── generated/

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/AI_FILM_PRE_PRODUCTION.git
cd AI_FILM_PRE_PRODUCTION
```

### Create Virtual Environment

```bash
python -m venv venv
```

Windows:

```bash
venv\Scripts\activate
```

Linux/Mac:

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Install Ollama

Download Ollama from:

https://ollama.com

Pull Granite model:

```bash
ollama pull granite4:micro
```

Start Ollama:

```bash
ollama serve
```

### Configure Stability AI

Create a `.env` file:

```env
STABILITY_API_KEY=your_api_key
STABILITY_URL=https://api.stability.ai/v2beta/stable-image/generate/sd3
```

---

## ▶️ Run the Project

```bash
python app.py
```

Open your browser:

```text
http://127.0.0.1:5000
```

---

## 🚀 How It Works

1. Enter your name.
2. Provide a story idea.
3. Generate AI content.
4. View generated screenplay.
5. Explore character profiles.
6. Generate AI character artwork.
7. Review sound design recommendations.
8. Export screenplay as TXT, PDF, or DOCX.

---

## 🔮 Future Improvements

- User Authentication
- Project History
- Database Integration
- Scene-by-Scene Image Generation
- AI Video Generation
- AWS Deployment
- Docker Support
- Multi-user Architecture
- Cloud Storage Integration
- CI/CD Pipeline

---

## 🎯 Learning Outcomes

This project demonstrates:

- Prompt Engineering
- Generative AI Integration
- Flask Development
- REST API Usage
- Image Generation APIs
- Document Generation
- Frontend Development
- Full-Stack Application Design

---

## 👨‍💻 Author

**Munvar Shaik**

Final Year Computer Science Student

Interests:
- Cloud Computing
- Artificial Intelligence
- Full Stack Development
- AWS Solutions Architecture

---

## ⭐ Support

If you found this project useful:

- Star the repository
- Fork the project
- Contribute improvements
- Share with other developers

---

### 🎬 From a single idea to a complete cinematic pre-production package — powered by AI.
