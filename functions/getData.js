export const getData = async (url = '') => {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors', 
      cache: 'no-cache', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    if (!response) {
      throw new Error(response.status);
    }
    return response === undefined?null:response.json();
}