const cachedRequests = JSON.parse(localStorage.getItem('cachedRequests') || '{}');

async function get(endpoint, params) {
    const searchParams = new URLSearchParams(params);
    const endpointAndParams = `${endpoint}?${searchParams}`;
    if (cachedRequests[endpointAndParams])
        return cachedRequests[endpointAndParams];
    const response =
        await fetch(`${process.env.API_URL}${endpointAndParams}&key=${process.env.API_KEY}`);
    if (!response.ok)
        throw new Error(response.statusText);
    const data = await response.json();
    cachedRequests[endpointAndParams] = data;
    localStorage.setItem('cachedRequests', JSON.stringify(cachedRequests));
    return data;
}

export { get };
