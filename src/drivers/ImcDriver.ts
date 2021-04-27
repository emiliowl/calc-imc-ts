import HttpUtil from '../http/HttpUtil';
import Person from '../models/Person';

export default class ImcDriver {
    xhr :HttpUtil;
    getProxy :(hostname :string, url :string, obj? :any | null | undefined) => Promise<Response>

    constructor() {
        this.xhr = new HttpUtil();
        this.getProxy = new Proxy(this.xhr.get, {
          apply: function(target, thisArg, args) {
            console.log('target');
            console.log(target);
            console.log('thisArg');
            console.log(thisArg);
            console.log('args');
            console.log(args);
            console.log('chamando...');

            const p1 = args.filter((_p :any, index: number) => index === 0).reduce((prev, curr)=> curr ?? prev, "");
            const p2 = args.filter((_p :any, index: number) => index === 1).reduce((prev, curr)=> curr ?? prev, "");
            const p3 = args.filter((_p :any, index: number) => index === 2).reduce((prev, curr)=> curr ?? prev, {});

            return target(p1, p2, p3);
          }
        });
    }

    getTable() {
        return this
          .getProxy('http://localhost:8080', '/imc/table')
          .then((rawResponse :Response) => {
            return rawResponse.json();
          });
      }
    
      /**
       * 
       * @param {Person :Person} person 
       */
      async calculate(person :Person) {
        const response = await this.xhr
          .post('http://localhost:8080', '/imc/calculate', person);
    
        return await response.json();
      }
}