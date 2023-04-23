# Welcome to Flight Service   

## Project setup   
-clone project on you local  
-Execute `npm install` on the same path as of your root directory of the project    
-Create a `.env` file in the root directory and add the following enviourment variable   
    -`PORT=3000`  
-Inside the `src/config` folder create a new file `config.json` then add the following piece of json  

```
{
  "development": {
    "username": "<YOUR DB LOGIN NAME>",
    "password": "YOUR DB PASSWORD",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
-Go to Src Folder  from terminal and execute the command `npx sequelize db:create` 