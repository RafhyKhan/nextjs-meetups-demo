
// /api/new-meet-up
// POST/api/new-meetup
/*
This function is to send data of new entries(meetups) to the database to be stored

*/

import { MongoClient } from "mongodb";
//to connect



async function handler (req, res, data) {

    const url = "mongodb+srv://mangoPunch:FPNOWAyZAqQ0pgoC@cluster0.qycf3er.mongodb.net/?retryWrites=true&w=majority";


    const data2 = req.body; 
    console.log("${req.method = POST}");
    //if statement of req.method === "POST" didnt work for some reason

    //req, data about incoming request
    //res, needed to send back response

    const client = await MongoClient.connect(url);
    const db = client.db();
    
    //connecting to mongodb database, string is given by website
    //YOU NEVER want to code on the cilent side, since your password is in the STRING!!! 

    const meetupsCollection = db.collection('meetups');
    //creates collection called meetups

    const result = await meetupsCollection.insertOne(data2);
    //inserts a document(object) into meetupsCOllection

    console.log(result);


    client.close();

    res.status(201).json({message: 'Meetup inserted!'});


}

export default handler;
