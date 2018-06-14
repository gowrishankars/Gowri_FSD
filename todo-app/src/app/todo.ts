export class Todo {
    id: number;
    // undefined
    title: string = '';
    // initialize a property
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
// when u will not initialize any variable then it will have a undefined value.
//