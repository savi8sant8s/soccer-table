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

function defineConfrontations(countGroups) {
    let aux = [1, 2, 2, 1];
    let confrontations = [];

    let x = 1;
    while (x < countGroups) {
        confrontations.push(`${aux[0]}º do grupo ${x} enfrenta ${aux[1]}º do grupo ${x + 1}`);
        confrontations.push(`${aux[2]}º do grupo ${x} enfrenta ${aux[3]}º do grupo ${x + 1}`);
        x += 2;
    }
    return {
        name: toStage(countGroups, false), 
        confrontations: confrontations
    };
}

function defineEmptyConfrontations(count) {
    let arr = [];
    countStages = Math.log2(count);
    let i = count / 4;
    while (arr.length != countStages - 1) {
        let emptyConfs = [];
        for (let x = 0; x < i; x++) {
            emptyConfs.push({stage: toStage(i*2),host: "", visitor: ""});
        }
        arr.push(emptyConfs)
        i /= 2;
    }
    let reverseArr = arr.slice().reverse();
    return arr.concat([[{stage: "Final", host: "", visitor: ""}]], reverseArr);
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

module.exports = {roundRobin, shuffle, chunks, toCompetitionName, toStage, defineConfrontations, defineEmptyConfrontations};