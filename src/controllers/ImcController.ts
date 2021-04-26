import ImcDriver from '../drivers/ImcDriver';
import Person from '../models/Person';

export default class ImcController {
    imcDriver :ImcDriver | null;

    constructor() {
        this.imcDriver = null;
    }

    async prepare() :Promise<ImcController> {
        if (!this.imcDriver) {
            const { default: ImcDriver } = await import("../drivers/ImcDriver");
            this.imcDriver = new ImcDriver();
        }

        return this;
    }

    async loadTable(onSucceed: (entriesObj :any) => void) {
        const instance = await this.prepare();
        instance.imcDriver
            ?.getTable()
            .then(onSucceed)
            .catch(function (err :any) {
                console.log(err);
                alert(`Sorry, can't load the table. ${err.responseText}`);
            });
    }

    async calculate(person :Person) {
        const instance = await this.prepare();
        return instance.imcDriver?.calculate(person);
    }
}
