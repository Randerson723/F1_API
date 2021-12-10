const api_url =  "https://ergast.com/api/f1/2020/1/driverStandings.json";

async function getapi(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    
    
    populateRacers(data);
}

function getStanding(event){
    event.preventDefault()
    let year = document.getElementById("postSeason").value;
    let round = document.getElementById("postRound").value;
    getapi(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    
}

getapi(api_url);


function populateRacers(data) {
    let tab =
        `<tr>
            <th>Position</th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Sponser</th>
            <th>Points</th>
        </tr>`;
    console.log(data.MRData.StandingsTable.StandingsList)

    for (let r of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
        tab += `<tr>
            <td>${r.position}</td>
            <td>${r.Driver.givenName} ${r.Driver.familyName}</td>
            <td>${r.Driver.nationality}</td>
            <td>${r.Constructors[0].name}</td>
            <td>${r.points}</td>
        </tr>`
    }

    document.getElementById("populateRacers").innerHTML = tab;
    document.getElementById("populateRacers").addEventListener("mousemove", getStanding).innerHTML = CloseEvent;
    
}