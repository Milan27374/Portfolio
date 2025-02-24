window.addEventListener("load", () => {

    // eerste server test
    console.info('testing server');

    fetch("http://localhost:5000/api")
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").innerText = data.message;
        })
        .catch(error => {
            console.error("Fout bij de eerste connectie:", error);
            document.getElementById("message").innerText = "Fout bij laden van gegevens.";
        });


    // Test Database skills

    fetch("http://localhost:5000/skills")
        .then(response => response.json())
        .then(data => {
            console.log('dataRetrieved', data);
        })
        .catch(error => {
            console.error("Fout bij ophalen van skill data:", error);
            document.getElementById("message").innerText = "Fout bij laden van gegevens.";
        });

          // Test Database project

    fetch("http://localhost:5000/project")
    .then(response => response.json())
    .then(data => {
        console.log('dataRetrieved', data);
    })
    .catch(error => {
        console.error("Fout bij ophalen van project data:", error);
        document.getElementById("message").innerText = "Fout bij laden van gegevens.";
    });
        
});