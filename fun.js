// API
const apiKey= 'RGAPI-cdbbae23-78cf-4c42-b7b7-8a942ebe4c23';
const apiURL = 'https://na1.api.riotgames.com/lol/status/v4/platform-data?api_key=' + apiKey; 
// button
const button = document.getElementById("myButton"); // stores HTMLElement into variable 'button'; gives us info on which button in fun.html 

// fetch API
button.addEventListener("click", () => {
    fetch(apiURL, {
        method: 'GET', // HTTP method
        headers: {
            /* why is the authorization not working? */
            // 'Authorization': `Bearer ${apiKey}`, // Example: Authorization header
            
            'Content-Type': 'application/json', // Specify JSON format
            'Accept': 'application/json'        // Tell the server to return JSON
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            response.headers.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            return response.json();
        })
        .then(data => {
            document.getElementById('demo').innerHTML = JSON.stringify(data, null, 2)
        })
        .catch(error => {
            console.error('Error', error);
        });
});

