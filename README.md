**The Project is intended to set-up a solution for micro brewey management which enables the customer to view and manage the realtime temperature variation of the loaded products.**

# Project - Test case

This full stack web application is developed to monitor the temperature fluctuations of the loaded products in the container. This allows the user to take faster decisions and get a quick glance about the realtime informaton. 

Providing the realtime information to the customer increases the transperency and reduces the impact on products. 

# Contents

- [Use cases](#use-cases)
- [Realtime product constraints and assumptions](#realtime-product-constraints-and-assumptions)
- [Application design and architecture](#application-architecture)
- [Front-End architecture](#front-fnd-architecture)
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

In realtime, I assume the application design should be as given below: 

![Realtime product architecture](https://github.com/ArunRamachandran/Micro-Brewery-Manager/blob/develop/client/src/static/ideal_application_design.png)

