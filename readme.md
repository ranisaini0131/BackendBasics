=> Backend Development is the process where we write code to make our website work in the background. It involves writing code for server side and database management

=> Building Business logics or store data or shoe stored data by querying

=> Servers = Servers are softwares which serves us.
Servers can be used to host websites, databases and other applications on the internet. They provide a platform for users to access information from any location in

=> 2 componenets of Backend Developemnt:-

1. programming lang and frameworks
2. Database => MongoDB, MySQL, Postegres => ORM, ODM

Express
=> browser(desktop, mobile) and server(like express server, hum bnate h) ink beech me interaction and req, res send hota h
=> Helps in Routing
=> helps us in sending req, res
=> it continuosly listen via port
/ is a home route

Mongoose
=> Database related

=> In Backend we handles, 3 things

1. Data, which is obvious
2. File, we upload or saved it on our server or system
3. Third Party API, interaction between APIS, data fetched from other APIs

\***\*\*\*\***8These three files are always present
=> .env used for storing password and data which is hidden
=> constants stores constants like airtikcket example, only three seats are avalilable , so to make it constant we keep it here
=> index.html is entry point

=> utils used for storing resusable code, resusable functions.

=> nodemon used to restart the server automatically

**\*\*\*\***\*\***\*\*\*\***DataBase
=>what data we would get from user
=>How and what should be stored

=>MoonModeler = defined structure if data, what fields stores, how they connected
=> E-R Diagram
Eraser.io

=> naming of files
user.models.js
user.controllers.js
user.routes.js

=> In DataBase user will be users or User=> users
=>timestamp has createdAt and updateAt

=>Ref of 1 schema into another means access of 1 model into another
type: mongoose.Schema.Types.ObjectId,
ref: "User"

=>Store Images n PDF
we can store images and pdf in mongodb as buffer, but it makes mongodb heavy and mongodb is not meant for it
=> Store Image in cloudinary => It's a third party softwar

=>enum gives us choices

**\*\*\*\***\***\*\*\*\***HTTP**\*\***\*\***\*\***

=>HTTPS is Hyper Text Transfer Protocol, not encrypted

=>HTTPS is Hyper Text Transfer Protocol Secure is encrypted and seure decrypted over server or client, in between not

=> URL/URI/URN = Unified resource Locator, getting address to communicate

=>HTTP is a type of protocol to communicate. various types like- srn, srv

HTTP headers

1. As we are sending HTTP request, some data also transferred claaed meta Data(file name, size, createdat) in key-value pairs

2. req and res both has headers(metadata)

Used in-

=> Caching, authentication, state management
=>Request Headers from Client
=>Response Headers from server
=>Representation Headers tells data is which encoding. compression
=> Payload(data) Header

Most common Headers
-> Accept:application/json = this is mostly on server, represents that it accepts json type payloads(data), also accepts html/test

=>User-Agent= it tells us,konsi application se request aae h, postman , browser(safari, chrome n all)

=> Authorizations: Bearer <-token->(JWT TOKENS)

=>Content-Type: sending Images/ PDF n all

=> cookies= key-value pairs(login, logout)

=>Cache-Control = after how much time the data will expire.

\***\*\*\*\*\***CORS Type Headers
=> Access-Control-Allow-Origin : origin from where we are allowed to send request
=>Access-Control-Allow-Methods : methods that are allowed (GET, POST, PUT, DELETE)
=>Access-Control-Allow-Credentials :

\*\*\*\*Security headers
=> Cross-Origin-Embedder-Policy
=> Cross-Origin-Opener-Policy
=> Content-Security-Policy
=> X-XCS-Protection

\***\*\*\*\*\*\*\***HTTP Methods

=> Basic set of opt that can be used to interact with server

1. GET: retrieve a resource
2. HEAD: No message body(response headers only)
   3.OPTIONS: what opt are avalaible
3. TRACE: loopback test (get same data), trace proxies
4. DELETE: remove resources
5. PUT: replace the entire resource
6. PATCH: replace the particular part of resource
7. POST: interact with resource(add or create data)

**\*\*\*\***HTTP Status Code

=> 1xx = Informational
=> 2xx = Success
=> 3xx = Redirection
=> 4xx = Client Error(user mistake)
=> 5xx = Server Error(server mistake)
