# MUST READ!!

Follow these steps to set up the To-Do List application:

### 1. Clone the repository
```
git clone git@github.com:hangodek/project_ToDoList.git
```

### 2. Install dependencies
Navigate to both the client and server folders, and run the following commands in each:
```
cd client
npm install

cd server
go mod install
go mod tidy
```

### 3. Install PostgreSQL (for WSL/Linux users)
If you don’t already have PostgreSQL installed, you can do so with:
```
sudo apt-get install postgresql postgresql-contrib
```

### 4. Create the database
Log in to PostgreSQL and create a new database:
```
sudo -u postgres psql
CREATE DATABASE todolist;
```

### 5. Create the required table
In your PostgreSQL session, create the table for storing to-do items:
```
CREATE TABLE todolist (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  checked BOOLEAN DEFAULT FALSE
);
```

### 6. Start the application
Navigate to the server folder and start the backend using air:
```
air -c .air.toml
```
Then, go to the client folder and start the frontend:
```
pnpm run dev
```

### 7. Access the application
Open your browser and go to http://localhost:3000 to view the web application.

