# Smart Customer Support Chatbot for E-commerce

A full-stack AI-powered web application to support e-commerce customers using a chatbot interface.

## 🧠 Features

- AI Chatbot (Microsoft Copilot Studio)
- Order Tracking
- Returns & Refunds
- Personalized Recommendations
- Admin Dashboard

## 🧱 Tech Stack

### Frontend
- React + Tailwind CSS
- Bot Framework Web Chat
- JWT Authentication

### Backend
- NestJS + TypeScript
- PostgreSQL + Prisma ORM
- Swagger for API Docs
- Docker for Dev & Deployment

### AI Integration
- Microsoft Copilot Studio
- Power Automate / API calls

## 📦 Project Structure

ecommerce-chatbot/ ├── server/ │ ├── prisma/ │ ├── src/ │ │ ├── auth/ │ │ ├── users/ │ │ ├── orders/ │ │ ├── products/ │ │ ├── prisma/ │ │ ├── app.module.ts │ │ ├── main.ts │ ├── .env │ └── Dockerfile, docker-compose.yml


## 🚀 Getting Started

1. Clone repo
2. Run `docker-compose up -d` to start PostgreSQL
3. Run `npm install` inside `server/`
4. Run NestJS app with `npm run start:dev`

## 🛡️ Security

- JWT Auth
- Role-based access (Admin/User)
- Input validation with `class-validator`


