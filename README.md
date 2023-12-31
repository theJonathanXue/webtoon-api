# webtoon-api

Comparing the use of an ORM like Sequelize with writing raw SQL queries for the project:

| Aspect                           | Sequelize ORM                                                                                          | Raw SQL Queries                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| **Simplified Query Building**    | Provides a simplified way to build queries using JavaScript methods.                                   | Allows granular control over query structure and optimization.                                  |
| **Database Agnostic Operations** | Offers database-agnostic operations, facilitating easier switching between different database systems. | Requires specific query adjustments when switching between different database systems.          |
| **Model-Driven Approach**        | Promotes a model-driven approach, improving code maintainability and organization.                     | Offers a direct approach, leveraging familiarity with SQL for complex operations.               |
| **Automatic Query Generation**   | Handles automatic SQL query generation, reducing the risk of SQL injection attacks.                    | Requires manual handling and careful parameterization to prevent SQL injection vulnerabilities. |

I decided to go with a ORM over raw SQL queries due to its ease of use, model-driven approach, and built-in security features

Comparing Sequelize with Prisma for the project:

| Aspect                          | Sequelize                                                                                                                                                       | Prisma                                                                                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Maturity and Flexibility**    | A mature and widely adopted ORM with extensive community support and flexibility for managing MySQL databases.                                                  | A modern ORM providing type-safe database access with real-time data synchronization capabilities.                                                       |
| **Feature Rich**                | Offers a comprehensive set of features for managing database operations, including model definitions, associations, validations, and migrations.                | Provides real-time data synchronization and strong type safety for enhanced data management and runtime error prevention.                                |
| **Community and Documentation** | Backed by a strong and active community, offering extensive resources, tutorials, and documentation for addressing various use cases and challenges.            | Growing community support with a focus on modern data synchronization and type safety, resulting in robust documentation and learning materials.         |
| **Customization and Control**   | Provides a high level of customization and control over database operations, allowing fine-tuning and optimization of performance as per specific requirements. | Offers a declarative data modeling approach with a strong focus on type safety and efficient query building, suitable for complex data management tasks. |

I decided to go with sequalize over Prisma because of its maturity, extensive community support, and flexibility in managing MySQL databases.
