# Job Management - Full Stack Application

A complete full-stack application that allows an admin to create, manage, and display job postings. This project features a modern frontend built with Next.js and a robust backend API built with NestJS, connected to a PostgreSQL database.

**Live Frontend URL**: [https://job-management-uqc7.vercel.app/) 

---
## ## Key Features

* **Job Listings**: Clean, responsive grid layout to display all available job postings.
* **Job Creation**: A fully functional, styled modal form for creating new job entries.
* **Client-Side Filtering**: Real-time filtering of jobs by title, location, job type, and salary range.
* **Full-Stack Connection**: The frontend is fully connected to a live backend API for data fetching and submission.
* **Database Integration**: The backend uses a PostgreSQL database for permanent data storage.
* **Production Deployments**: The frontend is deployed on Vercel and the backend/database is deployed on Render.

---
## ## Tech Stack

This project utilizes a modern, type-safe, and scalable technology stack.

#### ### Frontend
* **Framework**: Next.js
* **UI Library**: Mantine
* **Form Management**: React Hook Form
* **Language**: TypeScript
* **Deployment**: Vercel

#### ### Backend
* **Framework**: NestJS
* **Database**: PostgreSQL
* **ORM**: TypeORM
* **Language**: TypeScript
* **Deployment**: Render

---
## ## Local Development Setup

To run this project on your local machine, follow these steps.

#### ### Prerequisites
* Node.js (v18 or later)
* npm
* PostgreSQL installed and running locally
* A code editor like VS Code

#### ### 1. Clone the Repository
```bash
git clone <your-github-repo-url>
cd job-management

### 2. Backend Setup
Navigate to the backend directory:

Bash

cd job-management-backend
Install dependencies:

Bash

npm install
Create a .env file in the root of the job-management-backend folder.

Add your local database connection string to the .env file (replace with your credentials):

Code snippet

DATABASE_URL=postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/job_management
Start the backend server:

Bash

npm run start:dev
The backend will be running at http://localhost:3001.

### 3. Frontend Setup
Open a new terminal and navigate to the frontend directory:

Bash

cd job-management-frontend
Install dependencies:

Bash

npm install
Start the frontend development server:

Bash

npm run dev
The frontend will be running at http://localhost:3000. Open this URL in your browser to see the application.

## Deployment
The application is deployed using a modern CI/CD workflow.

The frontend is deployed on Vercel, which automatically builds and deploys any changes pushed to the main branch of the GitHub repository.

The backend and database are deployed on Render, which also automatically deploys changes pushed to the main branch.


