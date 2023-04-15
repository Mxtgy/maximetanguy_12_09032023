function formatForScore(data) {

    if (!data) return [];
    let value = data.score ?? null;

    if (!value) {
        value = data.todayScore;
    }

    const score = [{
        value: value,
        angle: value * 360,
        text: value * 100 + "%",
    }];

    return score; 
}

function formatForAverageSessions(data) {

    if (!data || !data.sessions) return [];
    return data.sessions;

}

function formatForActivity(data) {

    if (!data || !data.sessions) return [];
    let sessionsArray = [];
    for (var i = 0; i < data.sessions.length; i++) {
        var currentSession = data.sessions[i];
        if (currentSession) {
            var session = {};
            session.day = i+1;
            session.kilogram = currentSession.kilogram ? currentSession.kilogram : 0;
            session.calories = currentSession.calories ? currentSession.calories : 0;
            sessionsArray.push(session);
        }
    }
    return sessionsArray;
}

function formatForPerformance(data) {

    if (!data || !data.data) return [];
    const kind = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
    };
    const performance = [];
    const dataFetched = data.data.reverse();
    for (var i = 0; i < dataFetched.length; i++) {
        var currentObject = dataFetched[i];
        for (var key in kind) {
            if (currentObject.kind.toString() === key) {
                var obj = {};
                obj.subject = kind[key];
                obj.value = currentObject.value;
                performance.push(obj);
            }
        }
    }

    return performance;
}


export { formatForScore, formatForAverageSessions, formatForActivity, formatForPerformance };