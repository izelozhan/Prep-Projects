const userName = 'someName';
type UserName = typeof userName;

//typeof operator can also be very useful for quickly getting the type of function
const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane']
}
// type Settings = {
//     difficulty: string;
//     minLevel: number;
// }

type Settings = typeof settings;

function loadData(settings: Settings) {
    //...
}

loadData(settings);

//keyof //==========================================
type User = { name: string; age: number };
type UserKeys = keyof User;

let validKey: UserKeys;
validKey = 'name';
validKey = 'age';

//ex
function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];

    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value.')
    }
    return val;
}

const data = {id: 1, isStored: true, values: [1, 5, 20]}
const isStored = getProp(data, 'isStored');

const test = {name: 'test', age: 28};
const val = getProp(test, 'age');
console.log(val);


//==========================================
//Indexed Access Types

type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[]
}
type Perms = AppUser['permissions'];
type Perm = Perms[number]; //value type

//===========================================
//Mapped Types
type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

// type Results = {
//     add: number;
//     subtract: number;
// }

type Results<T> = {
    [K in keyof T]-?: number //optional
};

let mathOperations: Operations = {
    add(a: number, b: number) {
        return a + b;
    },
    subtract(a: number, b: number) {
        return a - b;
    }
}

let mathResults: Results<Operations> = {
    add: mathOperations.add(5, 4),
    subtract: mathOperations.add(5, 4),
}