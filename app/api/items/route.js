/** 
 * @authur Lin-Hank 
 * @mail 001linhank@gmail.com
*/
export async function GET()
{
    // step.1 get access token
    const token = await getToken();

    // step.2 get data from TDX token
    if(token)
    {
        const apiData = await fetchData(token);
        return Response.json(apiData);
    }
    else
    {
        return Response.json(
            {error: 'Failed to retrieve access token'},
            {status:401}
        )
    }
    // const apiData = await fetchData(token);
    // return Response.json({apiData,{status:200});
}

async function getToken() {
    const tokenURL = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
    const Params = new URLSearchParams();
    Params.append('grant_type', 'client_credentials');
    Params.append('client_id', process.env.TDX_CLIENT_ID);
    Params.append('client_secret', process.env.TDX_CLIENT_SECRET);

    try {
        const response = await fetch(tokenURL, {
            method: 'POST',
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            body: Params,
        });

        if (response.ok) {
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data.access_token;
        } else {
            console.error("Error fetching token:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching token", error);
    }
}


async function fetchData(token) {
    const apiurl = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/Taichung?%24top=30';

    try {
        const response = await fetch(apiurl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        console.log(response);

        if (response.ok) {
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data;
        } else {
            console.error("Error fetching data with status:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching data", error);
    }
    return null;
}
