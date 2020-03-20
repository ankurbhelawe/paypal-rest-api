# Final Project
## Product Management System for Moda
____
[SwaggerHub API Spec link](https://app.swaggerhub.com/apis/modawolf/Moda/1.0.0)

https://app.swaggerhub.com/apis/modawolf/Moda/1.0.0
____

Moda is a proposed international high fashion brand, envisioned for the PayPal VAP Final Project by Ankur Bhelawe.

![Banner](images/Moda.png "Moda Banner")

### About the Product Management System

The product management system manages garments from design to manufacturing to maintaining inventories at warehouses and stores. 

It is administered by the admin, who has the sole authorisation to POST/PUT/DELETE other employees

#### Authentication and Authorisation

Provision for employees to log in is provided, along with a rate limit and token expiration.

```yaml
headers:
    X-Rate-Limit:
        description: calls per hour allowed by the user
        schema:
        type: integer
        format: int32
    X-Expires-After:
        description: date in UTC when token expires
        schema:
        type: string
        format: date-time
```
Authorisation has been provided for each path using OAuth 2.0 protocol.
```yaml
security:
    - ModaAuth:
        - 'manufacturingHubManager'
        - 'admin'
```
```yaml
securitySchemes:
    ModaAuth:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: 'http://moda.com/oauth/dialog'
          scopes:
            'admin': Grants access to admin
            'manufacturingHubManager': Grants access to manufacturing hub manager
            'fashionDesigner': Grants access to fashion designer
            'warehouseManager': Grants access to warehouse manager
            'storeManager': Grants access to store manager
            'patternMaster': Grants access to pattern master
            'unskilledLabour': Grants access to unskilled labour
            'skilledLabour': Grants access to skilled labour
```

____
### About the functioning of Moda
After consulting with Fashion Tech students, care has been taken to represent the product management process of real life international high fashion brands as accurately as possible. Moda has 
- Design Centres
- Manufacturing Hubs
- Warehouses
- Stores

worldwide. The basic product management of garments in Moda is explained below.

### 1. Design Centres

The first step is fashion designing. The fashion designers of Moda work from various design centres all around the world.

The four seasons that designs are prepared for are:
- Spring
- Summer
- Fall
- Winter

i. A fashion designer can POST/GET/PUT/DELETE the design predictions made by Pantone for a particular season of a year to the system.

ii. Based on the design predictions made by Pantone, Moda's fashion designers propose (GET/PUT/POST/DELETE) designs, which are then viewed and approved by the admin (GET/PUT) for manufacturing.

A design has many parameters such as colour, fabric type, a blueprint of the individual pieces of the garment (eg. https://drive.google.com/file/d/1T9vVXIlhOK7G7hldGh4w-sL2JKxqcGxw/view?usp=sharing), design images, composition and weave of fabric, etc.


### 2. Manufacturing Hubs

A manufacturing hub may be located in any location worldwide, such as Cuba, or Sri Lanka, etc.

It has:
- a Manager
- a Pattern Master (who arranges the individual pieces of the garment on pattern paper such that the fabric loss while cutting is less than 5%. Pattern paper eg. https://drive.google.com/file/d/1JEltn05tedFsmouiDOH22xTXcKNALQjm/view?usp=sharing)
- cutting machines
- manufacturing lines (which in turn comprise of skilled and unskilled labours, and various types of stitching machines)

i. Once a design is approved, the admin POSTS a garment request to a manufacturing hub anywhere in the world, based on the lowest cost of production, or the most available manufacturing lines, etc. A garment request has
- design details
- request details (sizes and number of units of every size)
- location of destination warehouse

ii. The Manufacturing Hub Manager can approve the request, and POST it to the list of GarmentsToProcess. This list has some additional details such as jobId, number of manufacturing lines assigned to that job and lead time (estimated time to finish).

iii. The Manufacturing process consists of these stages:
- Cutting
- Stitching
- Embroidery
- Screen Printing
- Tagging
- Pressing
- Quality Check

iv. Once the garment batch is ready, it is shipped to the destination warehouse as mentioned in the garment request by the admin.

v. The manager can GET/POST/PUT/DELETE
- the pattern master
- cutting machines
- manufacturing lines
- labours assigned to a manufacturing line
- stitching machines assigned to a manufacturing line
- the list of garments to process
- the list of garments currently in processing
- the list of garments processed

vi. The admin can GET/POST/PUT/DELETE the manager of the manufacturing hub.

### 3. Warehouses

Moda has multiple warehouses in all major countries around the world.

Each warehouse has
- a manager
- a list of stores that it manages. 
- an inventory of garment designs (with details of the number of units of each size of each garment)

i. The admin can GET/POST/PUT/DELETE warehouses.

ii. The admin can GET/POST/PUT/DELETE stores managed by each warehouse.

iii. The manager can view (GET) the details of all stores managed by the warehouse.

iv. The manager can GET/POST/PUT/DELETE items in the warehouse inventory.

v. GET (Search) functionality is provided to look up garment stock in the warehouse based on 
- id
- name
- keywords
- category (eg. shirt, skirt, coat, jacket, etc.)
- demographic (eg. boy, girl, man, woman)
- colour (eg. blue)
- composition (eg. cotton)
- size (eg. S, M, etc.)

vi. The admin can GET/POST/PUT/DELETE the manager of the warehouse.


### 4. Stores

Moda has stores in all major cities around the world.

Each store has
- a manager
- an inventory of garment designs (with details of the number of units of each size of each garment)

i. The admin can GET/POST/PUT/DELETE stores.

ii. The admin can GET/POST/PUT/DELETE the manager of the store.

iii. The manager can GET/POST/PUT/DELETE items in the store inventory based on restocking and sales in the store.

iv. GET (Search) functionality is provided to look up garment stock in the store based on 
- id
- name
- keywords
- category (eg. shirt, skirt, coat, jacket, etc.)
- demographic (eg. boy, girl, man, woman)
- colour (eg. blue)
- composition (eg. cotton)
- size (eg. S, M, etc.)


_______
Please go through the SwaggerHub API Spec for details of all functionalities and schemas. 

[SwaggerHub API Spec link](https://app.swaggerhub.com/apis/modawolf/Moda/1.0.0)

https://app.swaggerhub.com/apis/modawolf/Moda/1.0.0

Thank you.

______