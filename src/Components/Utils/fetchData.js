async function fetchData(path) {
    const url = 'http://localhost:3000/user/' + path;
    try {
        const response = await fetch(url);
        const json = await response.json();
        if (json.data) {
            return json.data;
        }
        return false;
    } catch(err) {
        console.log(err);
    }
}

function fetchUserData(id) {
    const path = id;
    return fetchData(path);
}

async function fetchUserScore(id) {
    const path = id;
    return fetchData(path);
}

async function fetchUserActivity(id) {
    const path = id + '/activity';
    return fetchData(path);
}

async function fetchUserPerformance(id) {
    const path = id + '/performance';
    return fetchData(path);
}

async function fetchUserAverageSessions(id) {
    const path = id + '/average-sessions';
    return fetchData(path);
}

export { fetchUserData, fetchUserScore, fetchUserAverageSessions, fetchUserActivity, fetchUserPerformance };