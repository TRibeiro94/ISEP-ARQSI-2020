const Joi = require('joi');
const express = require('express');
const { response } = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
];

app.get('/', (req,res) => {
     res.send('Welcome');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req,res) =>{
    const { error } = validateCourse(req.body); //Equivalent to getting result.error
    if(error){
        return res.status(400).send(result.error.details[0].message);
    }

    /*Basic Validation.  Use 'joi' for real world applications
    if(!req.body.name || req.body.name.length < 3){
        //400 Bad Request
        res.status(400).send('Name is required and should be at least 3 characters.');
        return;
    }*/

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req,res) =>{
    //Lookup the course, If it doesn't exist, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        return res.status(404).send('The course with the given ID was not found.');
    }

    //Validate, If invalid, return 400 - Bad Request
    //Basic form of doing it
    /*const result = validateCourse(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }*/
 
    //Better way
    const { error } = validateCourse(req.body); //Equivalent to getting result.error
    if(error){
        return res.status(400).send(result.error.details[0].message);
    }
    
    course.name = req.body.name;    //Update
    res.send(course);   //Return the updated course
});

app.delete('/api/courses/:id', (req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        return res.status(404).send('The course with the given ID was not found.');
    }
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        return res.status(404).send('The course with the given ID was not found.');
    }
    res.send(course);
}); 

//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));