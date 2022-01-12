export const settings = {
    host: ''
}

async function request(url, options) {
    try {
        const response =  await fetch(url, options);

        if(!response.ok) {
            const err = await response.json();
            throw new Error(err);
        } 

        try {
            const data = await response.json();
            return data;
        } catch(err) {
            return response;
        }

    } catch(err) {
        alert(err);
        throw err
    }
}

function getOptions(method = 'get', data) {
    const result = {
        method,
        headers: {}
    };

    const token = sessionStorage.getItem('authToken');

    if (token) {
        result.headers['X-Authorization'] = token;
    }

    if (data) {
        result.headers['Content-Type'] = 'application/json';
        result.body = JSON.stringify(data);
    }


    return result;
}

export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async  function put(url, data) {
    return await request(url, getOptions('put', data));
}
export async function del(url) {
    return await request(url, getOptions('delete'));
}


export async function login(email, password) {
    const result = await post(settings.host + '/users/login', {email, password});

    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('id', result._id);

    return result;
}

export async function register(email, password) {
    const result = await post(settings.host + '/users/register', {email, password});

    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('id', result._id);

    return result;
}

export async function logout() {
    const result = await post(settings.host + '/users/logout');

    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('id');

    return result;
}