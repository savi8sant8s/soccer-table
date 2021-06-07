import { roundRobin, shuffle, chunks, toCompetitionName, toStage, defineConfrontations } from "../../services/round";
import { checkTableParams } from "../../services/validation";

export default async (req, res) => {
  if (req.method === "POST") {
    let tableForm = req.body;
    let checkTableForm = checkTableParams(tableForm);
    if (!checkTableForm.valid) {
      res.status(200).json({ status: checkTableForm.status, msg: checkTableForm.msg });
    }
    else {
      let response = {};
      response.timestamp = new Date().toLocaleString();
      response.status = "TABLE_GENERATED_SUCCESS";
      response.msg = "Soccer table generated with success.";
      response.competition = {
        typeId: tableForm.type,
        type: toCompetitionName(tableForm.type),
        name: tableForm.name.charAt(0).toUpperCase() + tableForm.name.toLowerCase().slice(1)
      };
      let participants = tableForm.participants;
      if (tableForm.shuffle == 1) {
        participants = shuffle(participants);
      }
      switch (tableForm.type) {
        case 1:
          let rounds = roundRobin(participants);
          if (tableForm.roundTrip == 1) {
            let secondTurn = roundRobin(tableForm.participants, true);
            rounds = rounds.concat(secondTurn);
          }
          response.countRounds = rounds.length;
          response.table = rounds;
          break;
        case 2:
          let adversaries = chunks(tableForm.participants, 2);
          response.competition.stage = toStage(adversaries.length, tableForm.roundTrip == 1);
          let eliminatory = [];
          for (let x = 0; x < adversaries.length; x++) {
            let games = { description: `${x + 1}º confronto`, confrontrations: [] };
            games.confrontrations.push({ host: adversaries[x][0], visitor: adversaries[x][1] });
            if (tableForm.roundTrip == 1) {
              games.confrontrations.push({ host: adversaries[x][1], visitor: adversaries[x][0] });
            }
            eliminatory.push(games);
          }
          response.table = eliminatory;
          break;
        case 3:
          response.countParticipants = tableForm.participants.length;
          let groups = chunks(tableForm.participants, 4);
          response.stage = defineConfrontations(groups.length);
          let roundsPerGroup = [];
          for (let x = 0; x < groups.length; x++) {
            let rounds_ = { group: groups[x], rounds: roundRobin(groups[x]) };
            if (tableForm.roundTrip == 1) {
              let secondTurn = roundRobin(groups[x], true);
              rounds_.rounds = rounds_.rounds.concat(secondTurn);
            }
            roundsPerGroup.push(rounds_);
          }
          response.table = roundsPerGroup;
          break;
      }
      res.status(200).json(response);
    }
  }
  else {
    res.status(404).end("<h1>Not found</h1>")
  }
}
