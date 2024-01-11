# Family expenses control API

The project in question aims to build an API capable of providing the necessary resources for creating a fullstack application aimed at controlling family expenses.

## Overview

### The Challenge

- Build an income and expense management system for family financial control.

#### Activities:

**000**: create and model the database as shown in the image below:

<img src="/assets/model.png">

**001**: CRUD Expense Implement CRUD operations for the Expense table. In the data query operation, create various query endpoint options: By period, By Value, by Responsible, etc…

**Req 002**: CRUD Responsible Implement CRUD operations for the Responsible table. In the data query operation, if a responsible name is provided, search for part of the name. If a name is not provided, return all registered data.

**Req 003**: CRUD Expense Type Implement CRUD operations for the Expense Type table. In the data query operation, if an expense type is provided, search for part of the type. If a type is not provided, return all registered data.

**Req 004**: CRUD Establishment Implement CRUD operations for the Establishment table. In the data query operation, if an establishment name is provided, search for part of the name. If a name is not provided, return all registered data.

**Req 005**: CRUD Revenue Implement CRUD operations for the Revenue table. In the data query operation, create various query endpoint options: By period, By Value, by Responsible, etc…

**Req 006**: CRUD Revenue Type Implement CRUD operations for the Revenue Type table. In the data query operation, if a revenue type is provided, search for part of the name. If a revenue type is not provided, return all registered data.

**Req 007**: Final balance query per month Input Field: Initial Month and Final Month. Return Field: Month, Balance Perform the calculation of the sum of all expenses minus the sum of all revenues grouped by month. If the Final Month is not informed, use the current system date.

**Req 008**: Final balance query by interval Input Field: Initial Month and Final Month. Return Field: Balance Perform the calculation of the sum of all expenses minus the sum of all revenues grouped in the informed period. If the Final Month is not informed, use the current system date.

**Req 009**: Expenses query by responsible per month Input Field: id of the responsible, initial date, final date. Return Field: month, sum of expenses Perform the calculation of the sum of all expenses made by the responsible grouped by month based on the informed interval. If the Final Month is not informed, use the current system date.

**Req 010**: Expenses query by responsible by interval Input Field: id of the responsible, initial date, final date. Return Field: sum of expenses Perform the calculation of the sum of all expenses made by the responsible based on the informed interval. If the Final Month is not informed, use the current system date.

**Req 011**: Revenue query by responsible per month Input Field: id of the responsible, initial date, final date. Return Field: month, sum of revenues Perform the calculation of the sum of all expenses made by the responsible grouped by month based on the informed interval. If the Final Month is not informed, use the current system date.

**Req 012**: Revenue query by responsible by interval Input Field: id of the responsible, initial date, final date. Return Field: sum of revenues Perform the calculation of the sum of all expenses made by the responsible based on the informed interval. If the Final Month is not informed, use the current system date.

## Process

### Built with

- Node.js
- Express
- Postgres
- Prisma ORM
- Swagger
