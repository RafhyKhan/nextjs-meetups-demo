// our-domain.com/{props.id}
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";



function MeetupDetails(props) {
    //calling componnet with prop



    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta   
                    name='description'
                    content={props.meetupData.description}
                    />
            </Head>
            <MeetupDetail 
            image= {props.meetupData.image} 
            title= {props.meetupData.title} 
            address= {props.meetupData.address} 
            description= {props.meetupData.description}
            />
        </Fragment>
    )
}


/*
METHOD:
    //will returns an object that contains all ids of dyanmic pages that will need to be pre generated
    //fallback
    //false, means if the user cant access any of the pages no support her, they will receieve a 404 error
    //true, will try gnerate a page for this id, dynamically based on the request
    //Allows you to pregenerate the msot pupolar pages, than the lesser used ones if need be

*/

export async function getStaticPaths() {


    //want to upload all details of meetups to database
    const url = "mongodb+srv://BobAllan:b5tIpzAWNw8mFonS@cluster0.gmozk8w.mongodb.net/shop?retryWrites=true&w=majority";
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray(); //({} which one, {} which fields)
        //we are fetching document objects but each only contain the id

    client.close();

    return {
        fallback: 'blocking',
        paths:  meetups.map(meetup => ({ params: { meetupId: JSON.parse(JSON.stringify(meetup._id)) }}))
    }
}



export async function getStaticProps(context) {
    //fetch data for single meetup
    //page is pre generated during the build js (all versions of this dynamic page should be generated, need versions to pre generate)


    const meetupId = context.params.meetupId;
    console.log(meetupId);  //runs on developer server side, so wont show in developer console, only in CMD



    //want to upload each entries, meetups details so when you click details you see thoose of that specific entry
    const url = "mongodb+srv://BobAllan:b5tIpzAWNw8mFonS@cluster0.gmozk8w.mongodb.net/react-meetups?retryWrites=true&w=majority";
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    //must 
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

    client.close();


    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    }
    
}

export default MeetupDetails;