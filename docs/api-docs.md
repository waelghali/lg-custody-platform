LG_Custody API Documentation
 Base URL: `http://localhost:5000/api`

 ## Authentication
 - Use JWT in `Authorization: Bearer <token>` header for protected routes.
 - Obtain token via `/login` or `/register`.

 ## Endpoints

 ### Register User
 - **URL**: `POST /users/register`
 - **Body**:
   ```json
   {
     "username": "string",
     "email": "string@email.com",
     "password": "string",
     "role": "admin|user"
   }
   ```
 - **Response**:
   - `201`: `{ user: { id, username, email, role }, token }`
   - `400`: `{ error: "string" }`

 ### Login User
 - **URL**: `POST /users/login`
 - **Body**:
   ```json
   {
     "email": "string@email.com",
     "password": "string"
   }
   ```
 - **Response**:
   - `200`: `{ user: { id, username, email, role }, token }`
   - `401`: `{ error: "Invalid credentials" }`

 ### Get All Users
 - **URL**: `GET /users`
 - **Headers**: `Authorization: Bearer <token>`
 - **Response**:
   - `200`: `[ { id, username, email, role } ]`
   - `401`: `{ error: "Unauthorized" }`

 ### Get User by ID
 - **URL**: `GET /users/:id`
 - **Headers**: `Authorization: Bearer <token>`
 - **Response**:
   - `200`: `{ id, username, email, role }`
   - `404`: `{ error: "User not found" }`

 ### Update User
 - **URL**: `PUT /users/:id`
 - **Headers**: `Authorization: Bearer <token>`
 - **Body**:
   ```json
   {
     "username": "string",
     "email": "string@email.com",
     "password": "string",
     "role": "admin|user"
   }
   ```
 - **Response**:
   - `200`: `{ id, username, email, role }`
   - `404`: `{ error: "User not found" }`

 ### Delete User
 - **URL**: `DELETE /users/:id`
 - **Headers**: `Authorization: Bearer <token>`
 - **Response**:
   - `200`: `{ message: "User deleted" }`
   - `404`: `{ error: "User not found" }`

