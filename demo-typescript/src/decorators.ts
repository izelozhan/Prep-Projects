//ecmascript decorators
function logger<T extends new(...args: any[]) => any>(target: T, context: ClassDecoratorContext) {
    console.log(target);
    console.log(context);

    return class extends target {
        constructor(...args: any[]) {
            super(args);
        }
    };
}

@logger
class Person {
    name = 'something';

    greet() {
        console.log(`Hi, I am` + this.name)
    }
}

//experimental decorators
function LoggerEx(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@LoggerEx('LOGGING - PERSON')
class ExPerson {
    name = 'something';

    constructor() {
        console.log('Creating person object');
    }
}

const person = new ExPerson();
