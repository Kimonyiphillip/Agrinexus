<h1>Agrinexus</h1>
<p align="center">
  <img src="frontend/src/assets/logo.png" alt="Agrinexus Logo" width="150"/>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel"/>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#contact">Contact</a>
</p>

---

## 🌟 Project Overview

**Agrinexus** is a comprehensive agricultural web application designed to empower farmers and connect agricultural stakeholders. It bridges the gap between farmers, buyers, and market trends, providing real-time data, intelligent insights, and seamless trading opportunities.

### Key Features

- 🌿 **Product Marketplace**: Buy and sell agricultural products with ease
- 📊 **Market Price Analysis**: Real-time market data and price predictions
- 🌤️ **Weather Integration**: Hyperlocal weather forecasts and alerts
- 💡 **AI Market Insights**: Intelligent recommendations and trend analysis
- 🤖 **Smart IoT**: Real-time sensor data integration for precision farming
- 🚚 **Order Management**: Track orders from placement to delivery
- 👥 **User Authentication**: Secure login for farmers, buyers, and admins
- 📈 **Analytics Dashboard**: Visual insights into market trends and performance

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- 🐘 **PHP** ≥ 8.0
- 🗄️ **MySQL** ≥ 8.0
- 💻 **Node.js** ≥ 16.0.0
- 📦 **Composer** ≥ 2.0.0

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/agrinexus.git
cd agrinexus
```

#### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
composer install

# Copy .env.example to .env
cp .env.example .env

# Configure database in .env
# Update DB_DATABASE, DB_USERNAME, DB_PASSWORD as needed

# Run migrations
php artisan migrate

# Start development server
php artisan serve
```

The backend API will be available at `http://localhost:8000`

#### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend application will be available at `http://localhost:3000`

### Usage

Once both backend and frontend are running:

1. Open `http://localhost:3000` in your browser
2. Register a new account or log in with:
   - Email: [EMAIL_ADDRESS]`
   - Password: `password`
3. Explore the marketplace, check market prices, and place orders

---

## 📁 Project Structure

```
agrinexus/
├── frontend/                  # React TypeScript application
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API services
│   │   ├── types/             # TypeScript type definitions
│   │   └── App.tsx            # Main application component
│   └── package.json
├── backend/                   # Laravel application
│   ├── app/
│   │   ├── Http/Controllers/  # API controllers
│   │   ├── Models/            # Eloquent models
│   │   ├── Services/          # Business logic services
│   │   └── Requests/          # Form requests
│   ├── routes/                # API routes
│   ├── database/
│   │   ├── migrations/        # Database migrations
│   │   └── seeders/           # Database seeders
│   ├── public/                # Publicly accessible files
│   ├── artisan                # Laravel CLI
│   └── composer.json
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **HTTP Client**: Axios
- **Routing**: React Router
- **State Management**: React Context API + custom hooks
- **Build Tool**: Vite

### Backend
- **Framework**: Laravel 10
- **Language**: PHP 8.1+
- **Database**: MySQL 8.0
- **Authentication**: Laravel Sanctum
- **API**: RESTful API with JSON responses

### Third-Party Integrations
- **Weather API**: OpenWeatherMap (for weather data)
- **AI Analysis**: Custom implementation with trend prediction
- **IoT**: MQTT integration for sensor data

---

## 📋 API Documentation

### Authentication

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | `POST` | Register a new user |
| `/api/auth/login` | `POST` | User login |
| `/api/auth/logout` | `POST` | User logout |
| `/api/auth/user` | `GET` | Get current user |

### Products

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/products` | `GET` | Get all products |
| `/api/products/:id` | `GET` | Get product by ID |
| `/api/products` | `POST` | Create new product |
| `/api/products/:id` | `PUT` | Update product |
| `/api/products/:id` | `DELETE` | Delete product |

### Market Prices

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/market-prices` | `GET` | Get all market prices |
| `/api/market-prices/:id` | `GET` | Get market price by ID |
| `/api/market-prices` | `POST` | Add new market price |

### Weather

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/weather/:city` | `GET` | Get weather for a city |

### Orders

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/orders` | `GET` | Get all orders |
| `/api/orders/:id` | `GET` | Get order by ID |
| `/api/orders` | `POST` | Create new order |

*For complete API documentation, refer to `docs/API_CONTRACT.md`*

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch (`git checkout -b feature/AmazingFeature
    