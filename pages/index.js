// our-domain/
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

//DUMMY DATA
// const DUMMY_MEETUPS = [{
//     id:'m1',
//     title: 'A First Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some address 5(1), 12345 Some City',
//     description: 'This is a first meet up'
// },{
//     id:'m2',
//     title: 'A Second Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some address 5(2), 12345 Some City',
//     description: 'This is a second meet up'
// }]



//Next>js pre-redners but only the first execution, so you must call data on the first render so you can use it FAST

function HomePage(props) {


    //We are displaying a react component that is not a page componenet on this page. Import it than utilize
    //Can still use Card/Layout function with props.children

    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name='description'
                    content='Browse a huge list of highly active React meetups!'
                />
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
    )
}

/*
METHOD:
    //job is to prepare props for this page. Can return a promise with this. It waits until your data is loaded before you render
    //you can do backend/sever side code, it will never end up on the cilent side
    //in the build prod.
    //FETCH DATA from an API here.........................
*/
export async function getStaticProps() {

    //CODE in here is Sever side!
    //want to PUSH and re-update the main page with new database entries of meetups
    const url = "mongodb+srv://BobAllan:b5tIpzAWNw8mFonS@cluster0.gmozk8w.mongodb.net/react-meetups?retryWrites=true&w=majority";
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray(); //arrays of meetups from mongoDB
    //meetups the collection is a huge array of object, each object is the entry
    client.close();

    //have to return an object here
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: JSON.parse(JSON.stringify(meetup._id))
            }))
        },
        revalidate: 1
    }

    // Had to use JSON.parse(JSON.stringify(meetup._id)) to get ID into string format
    //BUG, couldnt do meetup._id.toString(), had to do up top

}

/*PROBELMs
 Data could be outdated, when you do build, this data becomes set
        //Everytime you build app for production you have to change this pre-rendered data.
        //revalidate property, when add this property to return object of this function, unlcoks feature: Incremental Static Generation
        //revalidate: wants a number = number of second it will wait, until it regenerates again on server, if they are requests for page
        //regenerates for build, than every 10secs if requests are coming in for page
        //your data is never older than 10 seconds. Whats you data update frequency??? (once every hour, or every second)
        //Regenrated on server after deployment, so you dont have to rebuild it everytime!
*/



/*
METHOD:
    //Context Paramter: gives you .req and .res 
    //Will always on the server after deployment
    //Fetches data frm an API
    //you can do backend/sever side code, it will never end up on the cilent side SAFE!
    //RUNS for every incoming request for page
*/

/*
export async function getServerSideProps(context) {



    const req = context.req;
    const res = context.res;

    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}
*/

export default HomePage