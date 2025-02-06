document.addEventListener('DOMContentLoaded', function() {
    const bannedOperators = {
        teamA: [
            { name: "Operator 1", img: "operator1.png" },
            { name: "Operator 2", img: "operator2.png" }
        ],
        teamB: [
            { name: "Operator 3", img: "operator3.png" },
            { name: "Operator 4", img: "operator4.png" }
        ]
    };

    function updateBannedCharacters() {
        const teamAList = document.getElementById("bannedTeamA");
        const teamBList = document.getElementById("bannedTeamB");

        teamAList.innerHTML = "";
        teamBList.innerHTML = "";

        bannedOperators.teamA.forEach((op, index) => {
            let div = document.createElement("div");
            div.classList.add("banned-character");
            div.innerHTML = `<img src="${op.img}" alt="${op.name}">
                             <div class='name'>${op.name}</div>
                             <div class='banned-text'>BANNED</div>`;
            teamAList.appendChild(div);
            setTimeout(() => div.classList.add("show"), index * 300);
        });

        bannedOperators.teamB.forEach((op, index) => {
            let div = document.createElement("div");
            div.classList.add("banned-character");
            div.innerHTML = `<img src="${op.img}" alt="${op.name}">
                             <div class='name'>${op.name}</div>
                             <div class='banned-text'>BANNED</div>`;
            teamBList.appendChild(div);
            setTimeout(() => div.classList.add("show"), index * 300);
        });
    }

    updateBannedCharacters();
});