1.Initialize project and structure
2.setup dev env
3.INstall and setup express
    * add static middleware
    * add body parser
    * add routes
4. Add static resources
5. Add views folder with ready htmls
6. Add express=handlebars view engine
    * install
    * add to express
    * config extension
    * config views folder(only for src)
    * add main layout
    * add partials folder
    * fix static paths
    * fix navigation to home
    * render home page
7. Add controllers folder with home controller // controlerite bqha syvkupnost ot actions
8. Add database
    * install mongoose
    * connect database
9. Authentication
    * add user controller
    * add controller to routes
    * render login page
    * fix header navigation to login,register and logout
    * render register page
10. Add user model
    * add unique index for username
    * validate repeat password
    
11. Add user manager
    * add login and register methods(empty)
    * require in user controller
    * validate username existance
12. Modify login and register forms
13. Add login and register post actions
14. Implement user manager login and register
    * add register method
    * add login method
15. Hash password
    * install bcrypt
    * hash password
16. Login
    * Find user by username
    * Validate password with hash
17. Generate jwt token
    * install jsonwebtoken
    * promisify jsonwebtoken(optional)
    * create secret
    * generate token in manager.login
18. Return token in cookie
    * install cookie-parser
    * config cookie-parser (index.js)
    * set cookie with token
19. Logout
20. Authentication middleware
    * create base middleware
    * use middleware
    * implement auth middleware
    * attach decodedToken to request
    * handle invdalid token
21. Authorization middleware
22.Dynmaci navigation
    * add conditional in main layout
    * add to res locals
23. Error handling
    * add 404 page
    * redirect missing route to 404
    * add global error handler (optionals)