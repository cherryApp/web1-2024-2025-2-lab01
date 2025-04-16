const serverUrl = 'https://nettuts.hu/jms/cherryapp/';

export const getAll = (entity = 'products') => {
    return fetch(`${serverUrl}${entity}`)
        .then( response => response.json() );
};