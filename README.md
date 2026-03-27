# 🌐 Website Analyzer

> An AI-powered tool that analyzes any website URL and instantly generates a comprehensive report covering SEO, brand identity, marketing strategy, social media presence, and target audience profiling.

---

## ✨ Features

- **🔍 SEO Analysis** — Score out of 100, keyword targets, strengths, weaknesses & recommendations
- **🎨 Brand Identity** — Color palette, typography style, personality traits & tone of voice
- **📈 Marketing Strategy** — Current approach, content strategy, CTA effectiveness & growth opportunities
- **📱 Social Media Presence** — Per-platform strength scoring with actionable recommendations
- **🎯 Target Audience** — Demographics, psychographics, pain points & buying motivations

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite |
| Backend | Node.js, Express |
| AI Engine | Anthropic Claude (claude-sonnet) |
| Deployment | Vercel (frontend) + Railway (backend) |

---

## 📁 Project Structure

```
website-analyzer/
├── frontend/                  # React + Vite app
│   ├── src/
│   │   ├── components/        # ScoreRing, Tag, Section views
│   │   ├── hooks/
│   │   │   └── useAnalyzer.js # API calls + state management
│   │   ├── utils/
│   │   │   └── constants.js   # Shared config
│   │   ├── types/
│   │   │   └── analysis.js    # JSDoc type definitions
│   │   └── App.jsx
│   ├── vite.config.js
│   └── package.json
│
└── backend/                   # Express API server
    ├── src/
    │   ├── routes/
    │   │   └── analyze.js     # POST /api/analyze
    │   ├── services/
    │   │   └── claude.js      # Anthropic SDK wrapper
    │   └── middleware/
    │       ├── rateLimiter.js # 15 req / 15 min per IP
    │       └── validator.js   # URL validation
    ├── .env.example
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com/)

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/website-analyzer.git
cd website-analyzer
```

### 2. Set up the backend

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and add your key:

```env
ANTHROPIC_API_KEY=sk-ant-your-key-here
PORT=3001
FRONTEND_URL=http://localhost:5173
```

Start the server:

```bash
npm run dev
```

### 3. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔌 API Reference

### `POST /api/analyze`

**Request:**
```json
{ "url": "https://example.com" }
```

**Response:**
```json
{
  "company": "Example Corp",
  "overview": "...",
  "seo":      { "score": 72, "keywords": [...], ... },
  "brand":    { "palette": [...], ... },
  "marketing":{ "score": 65, ... },
  "social":   { "score": 58, "platforms": [...], ... },
  "audience": { "demographics": {...}, ... }
}
```

**Rate limit:** 15 requests per 15 minutes per IP.

---

## 🌍 Deployment

### Frontend → Vercel

```bash
cd frontend && npm run build
# Import repo on vercel.com
# Set env var: VITE_API_URL=https://your-backend.railway.app
```

### Backend → Railway

```bash
# Import repo on railway.app
# Set env var: ANTHROPIC_API_KEY=sk-ant-...
```

---

## 🔒 Environment Variables

| Variable | Location | Description |
|---|---|---|
| `ANTHROPIC_API_KEY` | backend | Your Anthropic API key |
| `PORT` | backend | Server port (default: 3001) |
| `FRONTEND_URL` | backend | Allowed CORS origin |
| `VITE_API_URL` | frontend | Backend base URL |

---