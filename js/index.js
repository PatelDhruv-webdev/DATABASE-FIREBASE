
$(document).ready(function() {
    // Populate joke on page load
    populateJoke();

    // Bind the 'Save Joke' button click event
    $('#btnSaveJoke').click(function() {
        const joke = $('#txtStudentJoke').val();
        const punchline = $('#txtStudentPunchline').val();
        writeJoke(joke, punchline, function(error) {
            if (error) {
                console.error('Error saving joke:', error);
            } else {
                console.log('Joke saved successfully.');
                // Optionally clear the input fields after saving
            }
        });
    });
});

function populateJoke() {
    getJokeFromFirebase(function(error, data) {
        if (error) {
            console.error(error);
        } else {
            $('#txtSampleJoke').val(data.joke);
            $('#txtSamplePunchline').val(data.punchline);
        }
    });
}
