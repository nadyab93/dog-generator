function generateDog() {

    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    fetch(apiUrl)

        .then(response => {

            if (!response.ok) {

                throw new Error(`Network response was not ok: ${response.statusText}`);

            }

            return response.json();

        })

        .then(data => {

            const dogImage = document.getElementById('dogImage');

            dogImage.src = data.message;

        })

        .catch(error => console.error('Error fetching dog image:', error));

}