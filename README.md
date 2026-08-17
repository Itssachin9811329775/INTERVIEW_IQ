# InterviewIQ 🚀

An AI-powered interview preparation platform built with the MERN stack that helps users practice technical and HR interviews through personalized AI-generated questions, resume analysis, and intelligent feedback.

## 🌐 Live Demo

**Live:** https://interview-iq-client2.onrender.com

## 📌 Features

* AI-powered interview question generation
* Resume-based interview preparation
* Technical and HR interview simulation
* Secure Google Authentication using Firebase
* Credit-based access system
* Razorpay payment integration
* Responsive and modern user interface
* Protected routes and user management
* Real-time interview workflow
* Cloud deployment on Render

## 🛠 Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Framer Motion
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* Firebase Authentication
* Google OAuth

### Payments

* Razorpay

### Deployment

* Render

## 📂 Project Structure

```text
INTERVIEW_IQ/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── configs/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🔐 Environment Variables

### Frontend (.env)

```env
VITE_FIREBASE_APIKEY=
VITE_RAZORPAY_KEY_ID=
VITE_API_URL=
```

### Backend (.env)

```env
PORT=
MONGODB_URL=
JWT_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
FIREBASE_PROJECT_ID=
```

## 🚀 Installation

### Clone Repository

```bash
git clone <repository-url>
cd INTERVIEW_IQ
```

### Install Dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

### Run Application

Backend

```bash
npm run server
```

Frontend

```bash
npm run dev
```

## 📈 Learning Outcomes

* Full-stack MERN development
* REST API design
* Authentication & Authorization
* Payment Gateway Integration
* Cloud Deployment
* State Management
* Production Environment Configuration

## 👨‍💻 Author

Sachin Kumar

LinkedIn: Add Your Link

GitHub: Add Your Link
