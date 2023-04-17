/**
 * Fetch the user's data
 * @param { string } path Url used for the fetch 
 * @returns { (Object|boolean) }
 */
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

/**
 * Build the path for the user's data and initialize the fetch
 * @param { string } id User Id 
 * @returns { Object | boolean}
 */
function fetchUserData(id) {
    const path = id;
    return fetchData(path);
}

/**
 * Build the path for the user's score and initialize the fetch
 * @param { string } id User Id 
 * @returns { Object | boolean}
 */
async function fetchUserScore(id) {
    const path = id;
    return fetchData(path);
}

/**
 * Build the path for the user's activity and initialize the fetch
 * @param { string } id User Id 
 * @returns { Object | boolean }
 */
async function fetchUserActivity(id) {
    const path = id + '/activity';
    return fetchData(path);
}

/**
 * Build the path for the user's performance and initialize the fetch
 * @param { string } id User Id 
 * @returns { Object | boolean }
 */
async function fetchUserPerformance(id) {
    const path = id + '/performance';
    return fetchData(path);
}

/**
 * Build the path for the user's average sessions and initialize the fetch
 * @param { string } id User Id 
 * @returns { Object | boolean }
 */
async function fetchUserAverageSessions(id) {
    const path = id + '/average-sessions';
    return fetchData(path);
}

export { fetchUserData, fetchUserScore, fetchUserAverageSessions, fetchUserActivity, fetchUserPerformance };