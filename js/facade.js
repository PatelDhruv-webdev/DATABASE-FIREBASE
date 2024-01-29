

function getJokeFromFirebase(callback) {
    // Reference to the joke data in your Firebase database
    const dbRef = firebase.database().ref();
    const jokeRef = dbRef.child("lab02/sample");

    // Fetch the joke data
    jokeRef.once('value', (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            callback(null, data);
            console.log(snapshot.val())
        } else {
            callback("No joke found", null);
        }
    }, (error) => {
        callback(error, null);
    });
}

function writeJoke(joke, punchline, callback) {
    // Reference to the path where you want to save the joke
    const dbRef = firebase.database().ref(); 

    const myJokeRef = dbRef.child("lab02/myJoke");

    // Write the joke and punchline to Firebase
    myJokeRef.set({ joke: joke, punchline: punchline }).then(() => {
        callback(null); 
    }).catch((error) => {
        callback(error); 
    });
}
