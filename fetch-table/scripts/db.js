const serverUrl = 'https://nettuts.hu/jms/cherryapp/';

export const getAll = (entity = 'products') => {
    return fetch(`${serverUrl}${entity}`)
        .then( response => response.json() );
};

export const remove = (id = 0, entity = 'products') => {
    return fetch(`${serverUrl}${entity}/${id}`, {
        method: 'DELETE',
    })
    .then( response => response.json() );
};