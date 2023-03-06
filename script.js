const data = [

    {
        name: 'Tom Arnold', 
        age: 29, 
        gender: 'male', 
        status: 'Relationship', 
        location: 'London', 
        image: 'https://randomuser.me/api/portraits/men/17.jpg'
    }, 
    {
        name: 'Frances Santos', 
        age: 31, 
        gender: 'female', 
        status: 'Relationship', 
        location: 'London', 
        image: 'https://randomuser.me/api/portraits/women/27.jpg'
    }, 
    {
        name: 'Steven Bonner', 
        age: 29, 
        gender: 'male', 
        status: 'single', 
        location: 'London', 
        image: 'https://randomuser.me/api/portraits/men/0.jpg'
    }

];

// intialize iterator
const profiles = profileIterator(data); 

// Call function to get first profile loaded
changeProfile(); 

// click Event 
document.getElementById('next').addEventListener('click', changeProfile); 

function changeProfile() {

    const profile = profiles.next(); 

    if (profile.done === false) {
    document.getElementById('profileDisplay').innerHTML = ` 
    <ul class="list-group">
    <li class="list-group-item">${profile.value.name}</li>
    <li class="list-group-item">${profile.value.age}</li>
    <li class="list-group-item">${profile.value.gender}</li>
    <li class="list-group-item">${profile.value.location}</li>
    </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${profile.value.image}" alt="" srcset="">
    `      
    } else {

        window.location.reload(); 
        
    }

    document.getElementById('profileDisplay').innerHTML = ` 
    <ul class="list-group">
    <li class="list-group-item">${profile.value.name}</li>
    <li class="list-group-item">${profile.value.age}</li>
    <li class="list-group-item">${profile.value.gender}</li>
    <li class="list-group-item">${profile.value.location}</li>
    </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${profile.value.image}" alt="" srcset="">
    `    
}

// Profile iterator 
function profileIterator(profiles) {

    let nextIndex = 0; 

    return {
        next: function () {
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done: true}; 
        }
    }
}