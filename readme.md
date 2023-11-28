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
