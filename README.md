# Learning Deno v1.0.0 - Build a REST API - CRUD Article

* [x] Install Deno
* [x] Create a "Hello World"
* [ ] Build a REST API article
  * [ ] Setup API
    * Determine what to use for:
      * [x] Web Framework
          * https://oakserver.github.io/oak/
        * [ ] Logger
        * [ ] CORS
      * [ ] Environment Variables
        * https://deno.land/x/dotenv/
      * [ ] MongoDB Driver
        * Latest deno_mongo does not support v1!!!
          * deno install --unstable --allow-read --allow-run -f https://deno.land/x/denon/denon.ts
  * [ ] POST /article
    * Create article
  * [ ] GET /article