//import {doSomething} from './gptFunction';
const express = require('express');
const bodyParser = require('body-parser');
const openai = require('./gptFunction');
const PORT = process.env.PORT || 3001;

const application = express();




//Used for receiving info from frontend
application.use(bodyParser.urlencoded( { extended: true }));


application.get('/api', (req, res) => {

    const text = req.body.object;

    //WE USE THE GPT MODEL HERE AND THEN RETURN THE SEND.
    //TODO: HOW CAN WE SEND THIS BACK TO THE FRONTEND AS AN OUTPUT?

    res.json({
        status: 'success',
        message: `Your name is ${text}`
    });
})

application.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

/*

UNUSED CODE
application.get('/api', (req, res) => {
    res.JSON({message: "This is a sample message"});
});


*/