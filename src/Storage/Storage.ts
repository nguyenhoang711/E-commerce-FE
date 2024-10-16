const setRememberMe = (isRememberMe: string) => {
    localStorage.setItem('isRememberMe', isRememberMe);
};

const isRememberMe = () => {

    if (localStorage.getItem('isRememberMe') === null || localStorage.getItem('isRememberMe') === undefined) {
        return true;
    }

    // convert string to boolean
    return JSON.parse(localStorage.getItem('isRememberMe') || 'false');
};

const setItem = (key: string, value: string) => {
    if (isRememberMe()) {
        localStorage.setItem(key, value);
    } else {
        sessionStorage.setItem(key, value);
    }
}

const getItem = (key: string) => {
    if (isRememberMe()) {
        return localStorage.getItem(key);
    } else {
        return sessionStorage.getItem(key);
    }
}

const setToken = (token: string) => {
    setItem('token', token);
};

const getToken = () => {
    return getItem('token');
};

const setUserInfo = (userName: string, email: string, firstName: string, lastName: string, role: string, status: string) => {
    setItem('userName', userName);
    setItem('email', email);
    setItem('firstName', firstName);
    setItem('lastName', lastName);
    setItem('role', role);
    setItem('status', status);
}

const getUserInfo = () => {
    return {
        'userName': getItem('userName'),
        'email': getItem('email'),
        'firstName': getItem('firstName'),
        'lastName': getItem('lastName'),
        'role': getItem('role'),
        'status': getItem('status')
    };
}

// export
const storage = { isRememberMe, setRememberMe, setToken, getToken, setUserInfo, getUserInfo }
export default storage;