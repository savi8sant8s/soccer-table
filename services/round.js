function roundRobin(participants, roundTrip = false) {
    let rounds = [];
    while (rounds.length != participants.length - 1) {
        if (participants.length % 2 != 0) {
            return [];
        }

        let round = [];

        for (let x = 0; x < participants.length / 2; x++) {
            let game = {};
            if (roundTrip){
                game.host = participants[participants.length - x - 1];
                game.visitor = participants[x];
            }
            else{
                game.host = participants[x];
                game.visitor = participants[participants.length - x - 1];
            }
            round.push(game);
        }
        if (roundTrip){
            rounds.push({description: `${rounds.length+participants.length}ª rodada`, games: round});
        }
        else{
            rounds.push({description: `${rounds.length+1}ª rodada`, games: round});
        }
        let [head, ...tail] = participants;
        rotateRight(tail);
        participants = [head, ...tail];
    }
    return rounds;
}

function shuffle(arr){
    return arr.sort(() => Math.random() - 0.5);
}

function chunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

function rotateRight(arr) {
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}

function toCompetitionName(type){
    return {
        1: "Pontos corridos",
        2: "Fase de grupos",
        3: "Eliminatórias"
    }[type];
}

function toStage(countGames, roundTrip){
    let stage = {
        16: "16 avos de final",
        8: "Oitavas de final",
        4: "Quartas de final",
        2: "Semifinal"
    }[countGames];
    if (roundTrip){
        stage = `${stage} - Ida e volta`;
    }
    return stage;
}

module.exports = {roundRobin, shuffle, chunks, toCompetitionName, toStage};