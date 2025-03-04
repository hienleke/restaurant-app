# TONY LE PPOJECT TEST



## 🚀 Quick start

1.  **Step 1.**
    Change  Env file Database postgres match with your local
    ```sh
    postgresql://username:password@host:port/database?schema=schema_name
    Example in env File
    DATABASE_URL="postgresql://postgres:postgres@1234@localhost:5432/restaurantDB?schema=public"
    ```
1.  **Step 2.**
    Install package
    ```sh
    #Go in to project
    # And  then
    npm i
    ```
1.  **Step 4.**
    Init database 
    ```sh
    #init  database
    npx prisma migrate dev --name init
    #  cd  to prisma folder and seed  data for database
    cd prisma
    node seed.ts
    ```
1.  **Step 4.**

    Start your project and  access localhost:3000
    ```sh
    #
    npm run dev
    ```
