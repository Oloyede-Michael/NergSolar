# ⚡ NergSolar – Solar Energy E-commerce & Training Platform

NergSolar is a modern web application designed for selling high–quality solar-powered products and educating individuals about solar energy installation and maintenance.  
The platform allows customers to browse and purchase products like:

- Solar panels  
- Solar-powered fans  
- Solar watches  
- Inverters  
- Batteries & accessories  

Beyond sales, NergSolar also provides **certification programs**, **training**, and **professional guidance** for users interested in solar panel installation and renewable energy systems.

---

## 🚀 Features

### 🌞 **E-commerce**
- Browse solar products with clean UI  
- Responsive and mobile-friendly design  
- Add-to-cart and order flow (if included)  
- Product categories and filtering  

### 🎓 **Training & Certification**
- Courses on solar panel installation  
- Educational materials on solar systems  
- User enrollment and certification flow  

### 🛒 **User Experience**
- Beautiful dark-purple themed UI  
- Fast page rendering with React + Vite  
- Smooth animations and Tailwind styling  

### 🔐 **Backend & API**
- User authentication and management  
- RESTful API built with Express.js  
- MongoDB database for secure data storage  
- Environment variable support  
- Scalable and production-ready structure  

---

## 🛠️ Tech Stack

### **Frontend**
- **React**
- **Vite**
- **TailwindCSS**
- **Axios** for API requests

### **Backend**
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**

### **Other Tools**
- Git & GitHub  
- Render / Vercel / Railway (if deployed)  

---

## 📂 Project Structure

NergSolar/
├── client/ # React + Vite frontend
│ ├── src/
│ └── ...
├── server/ # Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
└── README.md


---

## 🔧 Installation & Setup

### Repository setup
1. **Clone the Repo**
```sh
git clone https://github.com/Oloyede-Michael/NergSolar.git
cd NergSolar

2. **Install dependencies in backend**
    ```bash
    cd nergsolar_backend
    npm install
    ```
3. **Configure environment variables**  
   Create a `.env` file with your MongoDB connection string and JWT secret:
    ```
    MONGO_URI=your_mongodb_connection_uri
    JWT_SECRET=your_secret_key
    ```
4. **Start the backend server**
    ```bash
    npm start
    ```
   The backend will run on `http://localhost:1050`.

### Frontend Setup

1. **Navigate to the frontend directory**
    ```bash
    cd ../wakamate_frontend
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Start the frontend development server**
    ```bash
    npm run dev
    ```
   The frontend will run on `http://localhost:5173`.

---

---
🚀 Deployment

Frontend can be deployed on Vercel, Netlify, or Render

Backend can be deployed on Render, Railway, or any Node server

MongoDB Atlas recommended for production


---
👨‍💻 Developer

Michael Oloyede
Full-stack Developer | React | Node.js | MongoDB

📜 License

This project is built for a client. All rights reserved.
