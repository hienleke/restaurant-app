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
    #
    npx prisma db seed
    ```
1.  **Step 4.**

    Start your project
    ```sh
    #
    npm run dev
    ```
1.  **Step 5.**
    Accesss to host : 3000 default 
    ```sh
    #
    npm run dev
    ```
