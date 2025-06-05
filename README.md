LG Custody Platform
 A treasury management system with user authentication and management.

 ## Project Structure
 - `backend/`: Node.js/Express API with Sequelize and PostgreSQL.
 - `frontend/`: React app for user interaction.
 - `docs/`: API documentation.
 - `models/`: Sequelize models (e.g., User).
 - `controllers/`: API logic.
 - `routes/`: Express routes.
 - `__tests__/`: Jest unit tests.

 ## Setup
 ### Prerequisites
 - Node.js (v22.x)
 - PostgreSQL (v16.x)
 - Git

 ### Backend Setup
 1. Navigate to `backend/`:
    ```bash
    cd backend
    ```
 2. Install dependencies:
    ```bash
    npm install
    ```
 3. Create `.env` in `backend/`:
    ```
    PORT=5000
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=lg_custody
    DB_USER=lg_custody_user
    DB_PASSWORD=lg_secure_pass_2025
    JWT_SECRET=my_jwt_secret_2025
    ```
 4. Create database:
    ```sql
    psql -U postgres
    CREATE DATABASE lg_custody;
    CREATE USER lg_custody_user WITH PASSWORD 'lg_secure_pass_2025';
    GRANT ALL PRIVILEGES ON DATABASE lg_custody TO lg_custody_user;
    \q
    ```
 5. Run backend:
    ```bash
    npm run dev
    ```

 ### Frontend Setup
 1. Navigate to `frontend/`:
    ```bash
    cd frontend
    ```
 2. Install dependencies:
    ```bash
    npm install
    ```
 3. Run frontend:
    ```bash
    npm run dev
    ```

 ## API Endpoints
 See `docs/api-docs.md` for details.

 ## Testing
 1. Run backend tests:
    ```bash
    cd backend
    npm test
    ```

 ## License
 MIT

