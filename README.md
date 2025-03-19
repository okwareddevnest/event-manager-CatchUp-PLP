# 📅 Event Manager MERN Application

A full-stack event management application built using the **MERN Stack (MongoDB, Express, React, Node.js)** with **Vite** for the frontend, **Tailwind CSS** for styling, and deployed via **Render (backend)** and **Vercel (frontend)**. The app allows users to register, log in, create, view, and delete events.

---

## 🚀 Features
- User Registration and Login with JWT Authentication
- Create, View, and Delete Events
- Protected Routes for Authenticated Users
- Responsive UI with Tailwind CSS
- Axios with global API configuration and token handling
- Deployed Backend on Render
- Deployed Frontend on Vercel with CI/CD
- Automated deploy workflow using GitHub Actions

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT
- **Frontend:** React (via Vite), Tailwind CSS, React Router, Axios
- **Deployment:** Render (backend), Vercel (frontend)
- **CI/CD:** GitHub Actions, Deploy hooks

---

## 📂 Folder Structure
```
event-manager/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── .github/workflows/
    ├── backend.yml
    └── frontend.yml
```

---

## ⚙️ Environment Variables

### ➡ Backend `.env`:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### ➡ Frontend (in Vercel or `.env` file):
```
VITE_API_BASE_URL=https://event-manager-catchup-plp.onrender.com/api
```

---

## ✅ Deployment

### 1️⃣ Backend (Render)
- Connect your GitHub repo
- Deploy the `backend` folder
- Add Environment Variables (MONGO_URI, JWT_SECRET, PORT)
- Obtain Deploy Hook URL for CI

### 2️⃣ Frontend (Vercel)
- Connect GitHub repo and select `frontend` folder
- Add `VITE_API_BASE_URL` environment variable
- Deploy and get the frontend URL

### 3️⃣ CI/CD Workflows
- **Backend Workflow:** automatically triggers build, lint, test and deploy to Render
- **Frontend Workflow:** automatically runs build check on push or PR


## ✅ GitHub Actions Workflows

### 🔹 `.github/workflows/backend.yml`
```
name: Backend CI & Deploy to Render
on:
  push:
    paths:
      - 'backend/**'
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./backend
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Trigger Render Deployment
        run: |
          curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK_URL }}
```

### 🔹 `.github/workflows/frontend.yml`
```
name: Frontend CI
on:
  push:
    paths:
      - 'frontend/**'
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./frontend
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
```

---

## ✅ Live Demo
- 🔗 **Frontend:** [Your Vercel Frontend URL](https://vercel.com/crypt/event-manager-catch-up-plp)
- 🔗 **Backend API:** [Your Render Backend URL](https://event-manager-catchup-plp.onrender.com/api)

---

## 💻 Local Development Setup
```
git clone https://github.com/okwareddevnest/event-manager-CatchUp-PLP.git
cd event-manager-CatchUp-PLP

# Setup backend
cd backend
npm install
npm run dev

# Setup frontend
cd ../frontend
npm install
npm run dev
```

> Ensure you have MongoDB running locally or use a cloud connection string.

