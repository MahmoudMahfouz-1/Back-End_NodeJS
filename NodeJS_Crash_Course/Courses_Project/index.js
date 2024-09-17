const express = require('express');
const coursesRouter = require('./routes/courses.route');


let app = express();
app.use(express.json());
app.use('/api/courses', coursesRouter);




app.listen(3000, ()=> {
    console.log(`Listing on port 3000`);
});