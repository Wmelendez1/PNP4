// Function to display the profile modal
function showProfile(memberName) {
    // Here you would typically get the member info by memberName, possibly from an array of member objects
    // For simplicity, let's say we have a static object for example:
    var memberInfo = {
        'Kiara': {
            imgSrc: '/res/Kiara.jpg',
            name: 'About Kiara: ',
            about: "She loves to capture the beauty of nature through her lens and is an avid follower of indie music bands. Her weekends are often spent exploring the city and sketching its vibrant landscapes."
        },
        'Marvena': {
            imgSrc: '/res/Marvena.jpg',
            name: 'About Marvena: ',
            about:"Marvena is dedicated to making a positive impact on the environment. She spends her time researching sustainable practices and advocating for climate change awareness. Her hobbies include hiking in national parks and cultivating a sustainable garden at home."
        },
        'Nar': {
            imgSrc: '/res/Nar.jpg',
            name: 'About Naresh: ',
            about:"Naresh is a dynamic entrepreneur who loves exploring new cultures and cuisines. He often travels to learn about different business practices and culinary traditions. He hosts a podcast where he shares his experiences and insights on entrepreneurship and global cuisine."
        },
        'Tamika': {
            imgSrc: '/res/Tamika.jpg',
            name: 'About Tamika: ',
            about:"Tamika is a dedicated high school teacher with a love for history and literature. She participates in local community theater, bringing historical characters to life on stage. Her weekends are often spent in the tranquility of her yoga studio or engrossed in a historical novel."
        },
        'Walter': {
            imgSrc: '/res/Me.jpg',
            name: 'About Walter: ',
            about:" Walter is a skilled software engineer who enjoys problem-solving and developing new technologies. In his free time, he engages in chess tournaments and immerses himself in the world of science fiction, both through books and movies."
        },
        'Tracy': {
            imgSrc: '/res/Tracy.jpg',
            name: 'About Tracy: ',
            about:"Tracy is an innovative interior designer with a keen eye for aesthetics. She loves collecting unique art pieces and dabbling in fashion design. Her evenings are often spent enjoying live jazz music at local clubs, drawing inspiration for her creative endeavors."
        },
        'Tonnie': {
            imgSrc: '/res/Tonnie.jpg',
            name: 'About Tonnie: ',
            about:"Tonnie is a professional soccer player known for his agility and teamwork. Off the field, he coaches aspiring athletes and shares fitness tips through his blog. He unwinds by playing competitive video games with friends."
        }

        // ...other members
    };

    // Set the content of the modal
    var modal = document.getElementById('profileModal');
    document.getElementById('profileImage').src = memberInfo[memberName].imgSrc;
    document.getElementById('profileName').textContent = memberInfo[memberName].name;
    document.getElementById('profileDescription').textContent = memberInfo[memberName].about;;

    // Display the modal
    modal.style.display = "block";

    // Get the element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Also close if anywhere outside of the modal content is clicked
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}