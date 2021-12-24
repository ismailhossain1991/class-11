const team = document.querySelector('.team');
const tbody = document.querySelector('.data table tbody');

devs.map(data => {
    team.innerHTML += `
    <div class="team-item">
            <img src="${data.photo}" alt="">
            <h2>${data.name}</h2>
            <span>${data.skill}</span>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Location : ${data.location}</p>
        </div>
    
    `;
});

devs.map((data, index) => {
tbody.innerHTML += `

                <tr>
                    <td>${index+1}</td>
                    <td>${data.name}</td>
                    <td>${data.skill}</td>
                    <td>${data.age}</td>
                    <td>${data.location}</td>
                    <td><img style="width:50px; height:50px;" src="${data.photo}"</td>
                    
                </tr>
`;
});