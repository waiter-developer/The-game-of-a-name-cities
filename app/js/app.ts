
// class User {
//     constructor(public firstName: string, private readonly lastName: string = 'Good user name') {
//         this.firstName = firstName;
//         this.lastName  = lastName;
//     }
//
//     print() {
//         console.log(`${ this.firstName } ${ this.lastName }`);
//     }
//
// }
//
// let user1: User = new User('Jow', 'Mick');
// user1.print();


class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Grid {
    public points: Point[] = [];
    public static origin: Point = { x: 0, y: 0};
}

let grid1 = new Grid()
console.log(grid1);

interface Something {
    name?: string,
    width: number,
    height: number
}

function drawSomething(rect: Something) {
    if(rect.name){
        console.log(`Name ${rect.name}`)
    }

    console.log(`${rect.height} ${rect.height}`)
}

let rect1 = {
    name: 'Rectangle1',
    width: 123,
    height: 45
}

drawSomething(rect1);