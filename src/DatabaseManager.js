import * as React from 'react';

// Function to add a new item to local storage
const addPetToLocalStorage = (event) => {
    event.preventDefault();

    //localStorage.clear();

    // Get existing items from local storage
    const existingItems = JSON.parse(localStorage.getItem('pets')) || [];

    const petData = {
        petID: existingItems.length > 0 ? Math.max(...existingItems.map(item => item.petID)) + 1 : 0, //document.getElementById('petID').value,
        petName: document.getElementById('petName').value,
        species: document.getElementById('petSpecies').value,
        type: document.getElementById('petType').value,
        age: document.getElementById('petAge').value,
        picture: document.getElementById('petPicture').files[0].name,
    }

    existingItems[petData.petID] = petData;

    localStorage.setItem('pets', JSON.stringify(existingItems));

    // Retrieve items from local storage
    const storedItems = JSON.parse(localStorage.getItem('pets')) || [];
    console.log(storedItems);
};

const addPlantToLocalStorage = (event) => {
    event.preventDefault();

    // Get existing items from local storage
    const existingItems = JSON.parse(localStorage.getItem('plants')) || [];

    const plantData = {
        plantID: existingItems.length > 0 ? Math.max(...existingItems.map(item => item.plantID)) + 1 : 0,//document.getElementById('plantID').value;
        plantName: document.getElementById('plantName').value,
        nickname: document.getElementById('plantNickname').value,
        species: document.getElementById('plantSpecies').value,
        type: document.getElementById('plantType').value,
        picture: document.getElementById('plantPicture').files[0].name,
    };

    existingItems[plantData.plantID] = plantData;

    localStorage.setItem('plants', JSON.stringify(existingItems));
};

const YourComponent = () => {
    return (
        <html lang="en">
        <body>
        <form onSubmit={addPetToLocalStorage}>
            <label htmlFor="petName">Pet Name:</label>
            <input type="text" name="petName" id="petName" size="20" />

            <label htmlFor="petSpecies">Species:</label>
            <input type="text" name="petSpecies" id="petSpecies" size="20" />

            <label htmlFor="petType">Type:</label>
            <input type="text" name="petType" id="petType" size="20" />

            <label htmlFor="petAge">Age:</label>
            <input type="text" name="petAge" id="petAge" size="20" />

            <label htmlFor="petPicture">Picture:</label>
            <input accept="image/jpeg"
                   id="petPicture"
                   name="petPicture"
                   type="file" />

            <input type="submit" value="Submit" />
        </form>

        <form onSubmit={addPlantToLocalStorage}>
            <label htmlFor="plantName">Plant Name:</label>
            <input type="text" name="plantName" id="plantName" size="20" />

            <label htmlFor="plantNickname">Common Name:</label>
            <input type="text" name="plantNickname" id="plantNickname" size="20" />

            <label htmlFor="plantSpecies">Species:</label>
            <input type="text" name="plantSpecies" id="plantSpecies" size="20" />

            <label htmlFor="plantType">Type:</label>
            <input type="text" name="plantType" id="plantType" size="20" />

            <label htmlFor="plantPicture">Picture:</label>
            <input accept="image/jpeg"
                   id="plantPicture"
                   name="plantPicture"
                   type="file" />

            <input type="submit" value="Submit" />
        </form>
        </body>
        </html>
    );
};

export default YourComponent;


/*function WriteToFile(passForm) {

    var fso = CreateObject("Scripting.FileSystemObject");
    var s   = fso.CreateTextFile("<your Path>/filename.txt", True);

    var firstName = document.getElementById('firstName');
    var lastName  = document.getElementById('lastName');

    s.writeline("First Name :" + firstName);
    s.writeline("Last Name :" + lastName);

    s.writeline("-----------------------------");
    s.Close();
}

const test = () => {
    return (
        <html lang="en">
        <body>
            <form onSubmit="WriteToFile(this); return false;">
                <label htmlFor="firstName">Type your first name:</label>
                <input type="text" name="firstName" id="firstName" size="20" />

                    <label htmlFor="lastName">Type your last name:</label>
                    <input type="text" name="lastName" id="lastName" size="20" />

                        <input type="submit" value="Submit" />
            </form>
        </body>
        </html>
    );
};

// HTML
<form onSubmit="WriteToFile(this)">
    <label>Type your first name:</label>
    <input type="text" name="FirstName" id="firstName" size="20">

        <label>Type your last name: </label>
        <input type="text" name="LastName" id="lastName" size="20">

            <input type="submit" value="submit">
</form>*/
