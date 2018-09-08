import * as firebase from 'firebase';
// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID 
};

firebase.initializeApp(config);

const database = firebase.database();
export { firebase, database as default };
// child_removed
// database.ref('expnses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// // child_changed 
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 1098,
//     createdAt: 0
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// });









// Pushing data as array-list
// database.ref('notes').push({
//     title: 'Coue',
//     body: 'T32'
// });

// const firebaseNotes = {
//     notes: {
//         adpads: {
//             title: 'My note',
//             body: 'test'
//         },
//         asdasdas: {
//             title: 'Another',
//             body: 'teo'
//         }
//     }
// }
// Fetch data and listen for changes (subscribe to changes)
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`)
// });

// setTimeout(() => {
//     database.ref('job/company').set('Google');
// }, 3000);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('job/company').set('Facebook');
// }, 3000);

// Fetch data once
/* database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(snapshot, val);
    }).catch((e) => {
        console.log('Error fetching data', e);
    });
*/
/* database.ref().set({
    name: 'Junaid Aslam',
    age: 21,
    isSingle: true,
    stressLevel: 6,
    job: {
        title: 'Software dev',
        company: 'Google'
    },
    location: {
        city: 'Barcelona',
        country: 'Spain'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed', e);
});

database.ref('age').set(22);
database.ref('attributes').set({
    height: 1.72,
    weight: 66
});
database.ref().update({
    stressLevel: 9,
    "job/company": "Amazon",
    "location/city": "Seattle"
}); */
// database.ref('isSingle').set(null);
/* database.ref()
    .remove()
    .then(() => {
        console.log('Data was removed');
    }).catch((e) => {
        console.log('Erro removing data', e)
    });
*/