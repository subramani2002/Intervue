# Intervue - Technical Interview & Data Peer-Review Platform

Intervue is a high-performance, full-stack application designed to facilitate technical interviews and automated data validation workflows. It integrates real-time collaboration tools with custom-built automation to streamline peer reviews and data transformations.

## 🚀 Key Features

* **Real-time Collaborative Interviewing:** Integrated video, chat, and shared code editing powered by the Stream SDK.
* **Automated Peer-Review Tool:** A custom internal dashboard built to automate the review of SDTM/USDM data mappings, reducing manual oversight and increasing validation accuracy.
* **Live Code Execution:** Integrated with the Piston API to allow candidates and reviewers to execute Python and other language snippets directly within the browser.
* **Data Transformation Pipelines:** Leverages custom Python and Pandas logic to handle complex clinical trial data normalization.
* **Advanced Data Management:** Backend architecture supported by PostgreSQL for robust data integrity and schema verification.

## 🛠 Tech Stack

### Frontend
* **Framework:** React (Vite-powered)
* **Styling:** Tailwind CSS & Lucide React for modern UI/UX
* **Real-time Services:** Stream Video & Chat SDKs
* **State Management:** React Hooks and custom API wrappers for session handling

### Backend
* **Runtime:** Node.js & Express
* **Database:** PostgreSQL (verified via DBeaver)
* **Automation:** Inngest for managing background workflows and event-driven logic
* **Security:** Middleware-protected routes and environment-driven configurations

## 📂 Project Structure

* `frontend/`: React application containing the interview UI and the Stream integration.
* `backend/`: Express server managing sessions, database interactions, and real-time tokens.
* `custom_logic/`: Python scripts using Pandas for clinical data mapping and automated reviews.

## ⚙️ Setup and Installation

### Prerequisites
* Node.js (v18+)
* Python 3.x & Pandas
* PostgreSQL

### Installation Steps

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/subramani2002/intervue.git](https://github.com/subramani2002/intervue.git)
    cd intervue
    ```

2.  **Backend Configuration:**
    Navigate to the `backend` folder and install dependencies:
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file based on the environment logic in `src/lib/env.js` and add your `STREAM_API_KEY` and database credentials.

3.  **Frontend Configuration:**
    Navigate to the `frontend` folder and install dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

4.  **Launch the Application:**
    Run the development servers for both tiers:
    ```bash
    # In backend folder
    npm run dev
    
    # In frontend folder
    npm run dev
    ```

## 🧪 Usage
* **Dashboard:** Monitor active interview sessions and review peer-mapping progress.
* **Code Editor:** Use the integrated panel to write and run Python-based transformation functions.
* **Video Sessions:** Join unique session URLs to conduct live technical assessments with integrated video/audio.