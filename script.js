document.getElementById('disbutton').addEventListener('click', (e) => {


    let name = document.getElementById('thisname').value;

    e.preventDefault();


    //Some code I looked up online... I mean, everything that I do I have to look it up...
    fetch('http://localhost:3001/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name,}),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the backend
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    document.getElementById('tag').innerHTML = "does it work?";
});
