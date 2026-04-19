🚀 Ragfolio: AI-Powered RAG Portfolio

Ragfolio is a modern, high-performance personal portfolio featuring an integrated AI Chatbot. It uses RAG (Retrieval-Augmented Generation) to answer questions about your professional experience using your resume as the primary knowledge source.

🌐 Live Demo

👉 Live Website:

https://ragfolio-mc08.onrender.com

👉 API Health Check:

https://ragfolio-mc08.onrender.com/api/health
🛠️ Tech Stack
Frontend: React, Vite, Tailwind CSS, Framer Motion
Backend: FastAPI (Python), Uvicorn
AI/RAG: ChromaDB, FastEmbed, Google Gemini Flash
Package Management: uv (Python), npm (Node.js)
📋 Prerequisites
Python 3.12+
uv
Node.js & npm
Gemini API Key
💻 Local Development
1. Environment Setup
GEMINI_API_KEY=your_api_key_here
VITE_API_BASE_URL=http://localhost:8000/api
2. Create Embeddings
uv run rag/create-embeddings.py
3. Run Backend
cd backend
uv run python main.py
4. Run Frontend
cd frontend
npm install
npm run dev
🌐 Deployment (Render)

This project is deployed using Render Web Service.

Configuration Used:
Runtime: Python
Build Command:
./render-build.sh
Start Command:
python -m uvicorn backend.main:app --host 0.0.0.0 --port $PORT
Environment Variables:
GEMINI_API_KEY=your_actual_key
PYTHON_VERSION=3.12.0
🏗️ Architecture
Backend routes are prefixed with /api
React frontend is served by FastAPI
RAG system uses vector search + LLM
🎯 Features
AI-powered chatbot based on your resume
Full-stack deployment
Real-time responses
Smooth UI with animations
Production-ready setup
📌 Notes
Make sure embeddings are generated before deployment
Use /api prefix for all backend requests
Render free tier may take time to wake up
🔗 Related Projects

git-lrc

🎉 Status

✅ Backend deployed
✅ AI chatbot working
✅ Full-stack integration complete
