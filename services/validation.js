function checkTableParams(table){
    if (allParamsNotExists(table)){
        return {valid: false, status: "PARAMS_INVALID", msg: "Campos inválidos ou não existentes."};
    }
    else if (!new RegExp(/^([a-zA-Zà-úÀ-Ú0-9]|-|_|\s){5,50}$/).test(table.name)){
        return {valid: false, status: "NAME_INVALID", msg: "Nome de competição inválido."};
    }
    else if (!new RegExp(/^[1-3]$/).test(table.type)){
        return {valid: false, status: "TYPE_INVALID", msg: "Tipo de competição inválido."};
    }
    else if (!checkCountParticipants(table.participants, table.type)){
        return {valid: false, status: "Cparticipants_INVALID", msg: "Quantidade de participantes inválida."};
    }
    else if (!new RegExp(/^[0-1]$/).test(table.shuffle)){
        return {valid: false, status: "SHUFFLE_INVALID", msg: "Tipo de embaralhar inválido."};
    }
    else if (!new RegExp(/^[0-1]$/).test(table.roundTrip)){
        return {valid: false, status: "RTRIP_INVALID", msg: "Tipo de ida e volta inválido."};
    }
    return {valid: true, status: "ALL_PARAMS_VALID", msg: "Todos os campos válidos."};
}

function allParamsNotExists(table){
    return !("name" in table && 
           "type" in table && 
           "participants" in table &&
           "shuffle" in table &&
           "roundTrip" in table);
}

function checkCountParticipants(participants, type){
    return {
        1 : [2,4,6,8,10,12,14,16,18,20].includes(participants.length),
        2 : [4,8,16,32].includes(participants.length)
    }[type];
}

module.exports = {checkTableParams};