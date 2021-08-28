const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data))
}

const displayBuddy = (data) => {
    const container = document.getElementById('buddy');
    const buddies = data.results;
    for (buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}`;
        container.appendChild(p);
    }
}