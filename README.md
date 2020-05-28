# Learning Deno v1.0.0 - Build a REST API - CRUD Article

* [x] Install Deno
* [x] Create a "Hello World"
* [x] Build a REST API article
  * [x] Setup API
    * Determine what to use for:
      * [x] Web Framework
          * https://oakserver.github.io/oak/
        * [ ] Logger
        * [x] CORS
      * [x] Environment Variables
        * https://deno.land/x/dotenv/
      * [x] MongoDB Driver
        * Latest deno_mongo does not support v1!!!
          * deno install --unstable --allow-read --allow-run -f https://deno.land/x/denon/denon.ts
  * [x] POST /article
  * [x] GET /article