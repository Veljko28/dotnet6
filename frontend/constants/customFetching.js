
export const hostUrl = "https://localhost:7131/";


export const fetchPost = async (url, payload) => {
  
    let jwt= "";

    if (typeof window !== 'undefined') {
      jwt = localStorage.getItem('jid');
    }


    const str = JSON.stringify(payload);

    const res = await fetch(hostUrl + url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      },
      body: str,
      method: 'POST',
    }).catch((error) => {
      console.log(error);
    })

    // let success = false;

    // if (res?.statusText === 'Unauthorized') {}

    // if (success){
    //   return fetchPost(url, payload);
    // }

    return res;
}


export const fetchGet = async (url) => {

    let jwt= "";

      if (typeof window !== 'undefined') {
        jwt = localStorage.getItem('jid');
      }

  const res = await fetch(hostUrl + url,
     {
       headers: {
        'Authorization': `Bearer ${jwt}`
        },
       method: 'GET'
      })
      .catch(err => console.log('failed to fetch'));

    // let success = false;

    // if (res?.statusText === 'Unauthorized') success = await unauthorizedCheck();

    // if (success){
    //   return fetchGet(url);
    // }   

  return res;
}