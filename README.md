# SQL Query Runner

The [SQL Query Runner](https://atlan-assessment.vercel.app/) provides the user an exhautive and robust solution to interact with SQL table. 

The user is empowered to query the table, as well as export and download the queried table in PDF, CSV, and in JSON format. Moreover, the fired queries are persisted in the local storage so refreshing the application doesn't destroy the history.

<img width="1728" alt="Screenshot 2022-07-27 at 11 36 48 AM" src="https://user-images.githubusercontent.com/32039260/181173569-8d8efd6e-fbd5-47e7-aef2-ce55e7dd877f.png">


## Project setup
### Install NPM packages
```
yarn install
```

### Environment Variables
Copy the ```.env.example``` (from the root dir) and paste it (in the root dir). Rename the copied file to ```.env``` and poopulate the variables.

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Major Frameworks and Libraries

* **[Vue.js](https://vuejs.org/), [Vuex](https://vuex.vuejs.org/), [Vuetify](https://vuetifyjs.com/en/)**: The frameworks associated with Vue.js ecosystem for building UI and web interfaces.
* **[local-storage](https://www.npmjs.com/package/local-storage)**: Simplifying operations to interact with local storage.
* **[Vue test utils](https://v1.test-utils.vuejs.org/)**: The official unit testing utility library for Vue.js.

## Web Performance

The overall load time averages to around 350 ms based on several performance tests on [Pagespeed](https://pagespeed.web.dev/).

<img width="953" alt="Screenshot 2022-07-27 at 12 13 20 PM" src="https://user-images.githubusercontent.com/32039260/181179418-d32f2599-b4c6-4686-81cf-1bbd165c6dcc.png">

## Optimizations

The performance bottleneck in the application is fetching the data that is displayed on the table, the size of which being around **215 kb**. Hence, the following steps have been taken to overcome it:

* Host the **JSON file on a server** instead of having it in the build of application. This reduced the build size quite significantly.
* Using the browser's **localStorage as a cache** for this data. This allows us to fetch the data only once, therefore, bypassing the unnecessary network calls.

Moreover, I would propose the following optimizations to further improve the application performance:

* Convert the **JSON file into CSV file**, since CSV files are much smaller than their JSON counterparts.
* **Paginate the data** into chunks by setting it up a backend application.
