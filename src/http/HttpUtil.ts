import 'whatwg-fetch'

export default class HttpUtil {
  get(hostname :string, url :string, obj :any) {
    console.log('vai chamar fetch !!!');
    
    return fetch(`${hostname}${url}`);
  }

  post(hostname :string, url :string, obj :any) {
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(obj)
    };
    
    return fetch(`${hostname}${url}`, options);
  }
}