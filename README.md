
# Performance Comparison of Laravel Eloquent ORM and NestJS with TypeORM
Performance Comparison of Laravel's Eloquent ORM and NestJS with TypeORM

# Introduction:

This project aims to compare the performance of Laravel's Eloquent ORM and NestJS with TypeORM. This is not a real-world comparison, and the actual results may vary based on different factors.



# Prerequisites
To run this project, you need to have the following software installed on your machine:

PHP \
Composer \
Node.js \
npm \
MySQL 

# Installation
1. Clone the project repository from GitHub:
```bash
    git clone https://github.com/hanselobo99/ORM-Performance-Test
```

2. Install the PHP dependencies by running the following command from the PerfomanceTestLaravel directory of the project:

```bash 
    composer install
    php artisan key:generate
```

3. Create a database and configure the .env file with the appropriate credentials.

4. Run the migration. update the database seeder depending on the number of rows needed.
```bash
    php artisan migrate --seed
```

5. Start the Laravel server by
```bash
    php artisan serve
```

6. Install the JavaScript dependencies by running the following command from the rooperfomance-test-nest-jst directory of the project:
```bash 
    yarn install
```

7. Update the app.module.ts file for the credentials in Typeorm module

8. Start the Nest server
```bash 
    yarn run start
```




