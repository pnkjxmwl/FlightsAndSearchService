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

```
-Go to Src Folder  from terminal and execute the command `npx sequelize db:create`  
```

## DB Design
  - Airplane Table  
      - id  (uniquely identify airplane)
      - model_number 
      - capacity 
      - created_at  (when  was a entry created) 
      - updated_at  (when the entry was last updated)
  - Flights  
      - id 
      - airplane_id  
      - src_airport_id  
      - dest_airport_id  
      - flight_number   
      - departure    
      - arrival     
  - Airport  
      - id  
      - name  
      - city_id  
      - address  
  - City
      - id  
      - name  
  
## ER Diagram 
  Airplane --- 1 : N ---> Flights  
      - A flight belongs to an airplane but one airplane can be used  in multiple flights   
  Airport  --- 1 : N ---> Flights  
      - One airport can have many flights but a flight belongs to one airport   
  City     --- 1 : N ---> Airport   
      - A city has many airport but one airport belongs to a city    

