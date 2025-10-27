# 🌐 React Admin Dashboard

A simple and modern **React Admin Dashboard** built with:

* ⚛️ React
* 📦 Vite
* 🎨 TailwindCSS
* 🧠 React Query
* ☁️ OpenWeatherMap API integration

This project demonstrates authentication, protected routes, reusable components, API fetching, local storage persistence, and responsive UI — all in one clean starter dashboard.

---

## 🚀 Features

✅ **Login System** – (admin / admin123)
✅ **Protected Routes** – can’t access dashboard without login
✅ **Sidebar Navigation** – modern design with icons
✅ **Dashboard Overview** – users, notes, and weather in one place
✅ **Notes Manager** – add / delete / prioritize notes (localStorage)
✅ **Users Page** – sample API (JSONPlaceholder)
✅ **Analytics Summary** – simple user activity insights
✅ **Weather Widget** – live weather data
✅ **Persistent Auth** – via Context + LocalStorage
✅ **Responsive Design** – mobile-friendly layout

---

## 🖼️ Screenshots

<div align="center">

### 🏠 Dashboard Page

<img src="https://i.ibb.co/Nnd8X4hz/Screenshot-2025-10-27-231328.png" width="700" alt="Dashboard Screenshot" />

### 🔐 Login Page

<img src="https://i.ibb.co/39v7Pd4X/Screenshot-2025-10-27-231850.png" width="700" alt="Login Screenshot" />

### ☁️ Weather Widget

<img src="https://i.ibb.co/tM1mY3sm/Screenshot-2025-10-27-231353.png" width="700" alt="Weather Screenshot" />

### 🗒️ Notes Manager

<img src="https://i.ibb.co/r1PJzt5/Screenshot-2025-10-27-231716.png" width="700" alt="Notes Screenshot" />

</div>

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/HakounaMatata/react-final-project.git
   cd react-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your `.env` file**

   ```bash
   VITE_OWM_API_KEY=your_openweathermap_api_key
   ```

   👉 Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)

4. **Run the project**

   ```bash
   npm run dev
   ```

5. Open your browser:

   ```
   http://localhost:5173/
   ```

---

## 🔑 Login Credentials

```
Username: admin
Password: admin123
```

---

## 🧩 Folder Structure

```
src/
├── components/        # Reusable UI components
├── contexts/          # AuthContext & NotesContext
├── hooks/             # Custom hooks (useLocalStorage)
├── pages/             # Dashboard, Login, Weather, Notes, etc.
├── services/          # API calls (axios + JSONPlaceholder)
├── router.tsx         # React Router configuration
├── App.tsx            # Sidebar layout + protected routes
└── main.tsx           # Entry point (ReactDOM + Providers)
```

---

## 🧠 Technologies Used

| Tool / Library     | Purpose                      |
| ------------------ | ---------------------------- |
| React              | UI & logic                   |
| React Router DOM   | Routing and navigation       |
| React Query        | Data fetching & caching      |
| TailwindCSS        | Styling                      |
| Axios              | HTTP requests                |
| lucide-react       | Icons                        |
| Vite               | Fast build & dev environment |


## 📄 License

This project is open-source under the MIT License.
You’re free to use and modify it for learning or production purposes.
