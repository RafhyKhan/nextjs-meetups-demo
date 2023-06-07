# React-Meetups App

[Check out the App Online!](https://nextjs-meetups-demo-topaz.vercel.app/)

## Description

React Meetups uses a nextjs framework which increases library selection and 
allows the use of many helpful development functions and services.
We use a MongoDB backend and communicate with it through the MongoDB package library functions such as .collection() and .connect(). 
We use getStaticProps() and getStaticPaths() functions to increase app
performance by prioritizing the generation of the popular pages. Also are helpful when doing backend database management as it isn't client-side. Nextjs lets us have automatically generated index.html, use next/router functions which give more flexible pathway changes, server-side rendering enabling faster app executions, and backend code availability. 



## Coding-Keywords Used

| Keyword | Description of use |
| ------ | ----------- |
| next/router  | Used to make the react app muti-paged. I used Route(s) tags for the paths and useHistory for page redirects. |
| next/link    | Used lazy-loading in this app with the React Suspense tags, to increase its performance by priotizing components.  |
``` js
import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }
...
```
[Check out FULL Code](https://github.com/RafhyKhan/nextjs-meetups-demo/blob/main/components/meetups/MeetupItem.js)

---

| Keyword | Description of use |
| ------ | ----------- |
| getStaticProps() | Prepares the props and data before generating the front page(also consist of mongoDB code)|
| getStaticPaths() | Export function when using getStaticProps(), gets id's of all pre-generated pages, also gives fallback use  |

[Check out FULL code](https://github.com/RafhyKhan/nextjs-meetups-demo/blob/main/pages/%5BmeetupId%5D/index.js)

---

| Keyword | Description of use |
| ------ | ----------- |
| MongoDB    | Used the mongodb library and functions to communicate with the database |
``` js
 const url = "mongodb+srv://BobAllan:b5tIpzAWNw8mFonS@cluster0.gmozk8w.mongodb.net/react-meetups?retryWrites=true&w=majority";
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    //must 
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})
```
[Check out FULL code](https://github.com/RafhyKhan/nextjs-meetups-demo/blob/main/pages/%5BmeetupId%5D/index.js)

---

## END of ReadMe File


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
