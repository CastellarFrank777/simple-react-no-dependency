const env = { 
    api: 'https://dummyapi.io/data/v1',
    apiHeader: '62dafc030a8ef60f63d39c06'
  };
  
const getUsersAsync = async () =>{
    const headers = getHeaders();
    const response = await fetch(`${env.api}/user?limit=10`, {
        method: 'get',
        headers
    });

    return await response.json();
};

const getUserByIdAsync = async userId => {
    const headers = getHeaders();

    const response = await fetch(`${env.api}/user/${userId}`, {
        method: 'get',
        headers
    });

    return await response.json();
};

const getHeaders = () => {
    return { 
        "app-id": env.apiHeader, 
        'Content-Type': 'application/json'
    };
};