**The Project is intended to set-up a solution for micro brewey management which enables the customer to view and manage the realtime temperature variation of the loaded products.**

# Project - Test case

This full stack web application is developed to monitor the temperature fluctuations of the loaded products in the container. This allows the user to take faster decisions and get a quick glance about the realtime informaton. 

Providing the realtime information to the customer increases the transperency and reduces the impact on products. 

# Contents

- [Use cases](#use-cases)
- [Realtime product constraints and assumptions](#realtime-product-constraints-and-assumptions)
- [Application design and architecture](#application-architecture)
- [Front-End architecture](#front-fnd-architecture)
- [Tech stack](#front-fnd-architecture)
- [Prerequisite](#prerequisite)
- [Installation process](#application-set-up)
- [Test level](#test-level)

# Use cases

The following use cases are considered within the application

- The user will be able to:
    - See list of product details at a glance
    - Dashboard with continuous temperature monitoring information
    - Notification to the user when a temperature fluctuate from the actual range

# Realtime product constraints and assumptions

- What were the questions you would ask and your own answers/assumptions?

    - Queation: How does this system work in realtime? 
        * In realtime, the user will be making ue of a tablet sized device kept within the vehicle & assuming a decent connectivity betwen the servers.

    - Question: What happened to the container once the system detects a temperature variation?
        * Assuming the system will fire an event back to the temperature controller associated within the container and it adjust the temperature required for each category of product. 

    - Assumptions: 
        - The truck contains 6 containers in total and each container has multiple boxes of unique category of beers. For eg. Container 1 contains multiple boxes of Beer 1 (Pilsner), Container 2 contains multiple boxes of Beer 2 (IPA) etc. 

# Application design and architecture

The application has been designed by keeping customer in first place, hence with very minimal number of user interaction required to operate the application. 

Assuming the customer will be in the truck while utilising the product and hence dashbaord includes Charts and color schemes to give quick overview about the realtime product - temperature information. 

## An ideal realtime product design (not implemented)
In realtime, I assume the application design should be as given below: 
    - Action triggers from temperature sensor on detection of temperature fluctuation
    - Backend server push updated information to UI using websocket and this action will be initiated only when the server receive a temperaure fluctuation information.
    - There will be a communication channel established between client and server with websocket. 

![Realtime product architecture](https://github.com/ArunRamachandran/Micro-Brewery-Manager/blob/develop/client/src/static/ideal_application_design.png)

## Current implementation and system architecture design

Here is the architecture which has been considered to develop the application within the time frame. 

![Curent product implementation - architecture](https://github.com/ArunRamachandran/Micro-Brewery-Manager/blob/develop/client/src/static/architecture.png)

- Application design & working overview: 
    - 2 different end points has been developed '/api/products/' and '/api/temperature' to fetch the list of available products from the database and to bring the temeperature details to implement the data polling.

    - The product informations including the ideal tempearure range and category details are loaded within a database. Node server will fetch the product informations and send to UI on demand ( While loading the client )

    - A Higher Order Component has been designed to implment a data polling service and which will be triggering an api 

    - The data will be graphically represnted with a bar chart to the customer with a color scheme as per the current tempearture of each ategory of product by considering the ideal temperature range. 

# Front-End architecture

The front-end module has been developed by considering the following architecture. 

![Front-End - architecture](https://github.com/ArunRamachandran/Micro-Brewery-Manager/blob/develop/client/src/static/front-end-architecture.png)

# Tech stack

- Front-End:
    - React, Redux, Router
    - Less ( Styling )
    - Webpack ( Module bundler )
    - Jest, Enzyme ( Unit testing )
    - Cypress ( integration testing )

- Backend: 
    - Node, Express

Each sections are bootstraped with my own custom configurations and no code geberators are used to initialise the project. 

# Prerequisite

Node v10.0.0
npm v5.6.0

#Installation process

Both front-end and back-end modules are decoupled and different set of dependencies has maintained for each modules. 

- Clone the project

```   
git clone git@github.com:ArunRamachandran/Micro-Brewery-Manager.git
```

## Install the project dependencies

Navigate to client/server and run

```   
npm install
```

## Run both client and server concurrently

Navigate to parent directory and run 

```   
npm start
```
