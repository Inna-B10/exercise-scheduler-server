# Workout APP - server side

### Express + Prisma

```javascript
npm install --save-dev @trivago/prettier-plugin-sort-imports
npm install -D prettier

npm i express

npm i -D colors

npm i dotenv

npm i -D morgan nodemon

npm i prisma pg

npm i express-async-handler

npm i argon2

npm i jsonwebtoken

npm i cors
```

### TODO:

- [x] Async error handling for method (express-async-handler)
- [x] App.use notFound, errorHandler
- [x] generate token (jsonwebtoken)
- [x] user registration
- [x] user  login
- [x] exercise and workout models
- [x] exercise endpoint, create new exercise
- [x] update exercise
- [x] delete exercise
- [x] workout endpoint, create new workout
- [x] update workout
- [x] delete workout
- [x] workout log model
- [x] exercise log model
- [x] create endpoints for exercise log
- [x] exercise log:
  - [x] create new log
  - [x] get log (include if exist previous sets to compare)
  - [x] update log (time/set) 
  - [x] is exercise completed
- [ ] create endpoints for workout log
- [ ] workout log:
  - [ ] create new log
  - [ ] get log
  - [ ] update log 
 


