const wallCoords = [];

wallCoords[16] = [1, 85, 127, 169, 211, 253, 295, 337, 379, 421, 463, 505, 547, 589, 631, 673, 715, 757, 799, 841, 883];
wallCoords[58] = [1, 169, 547, 883];
wallCoords[100] = [1, 85, 169, 253, 295, 337, 421, 463, 505, 547, 631, 715, 757, 799, 883];
wallCoords[142] = [1, 85, 253, 337, 421, 631, 757, 883];
wallCoords[184] = [1, 85, 127, 169, 211, 253, 337, 421, 505, 547, 589, 631, 673, 757, 841, 883];
wallCoords[226] = [1, 85, 169, 421, 589, 757, 841, 883];
wallCoords[268] = [1, 85, 169, 253, 295, 337, 379, 421, 463, 505, 589, 673, 715, 757, 841, 883];
wallCoords[310] = [1, 169, 589, 673, 883];
wallCoords[352] = [1, 85, 169, 211, 253, 295, 337, 379, 421, 463, 505, 547, 589, 673, 715, 757, 799, 883];
wallCoords[394] = [1, 85, 253, 589, 757, 883];
wallCoords[436] = [1, 85, 127, 169, 253, 337, 379, 421, 463, 505, 589, 631, 673, 757, 799, 841, 883];
wallCoords[478] = [1, 169, 253, 337, 589, 757, 883];
wallCoords[520] = [1, 43, 85, 127, 169, 253, 337, 421, 463, 505, 547, 589, 673, 715, 757, 799, 883];
wallCoords[562] = [1, 169, 337, 421, 673, 883];
wallCoords[604] = [1, 85, 169, 211, 253, 295, 337, 421, 505, 547, 589, 631, 673, 715, 757, 799, 883];
wallCoords[646] = [1, 85, 169, 337, 421, 505, 799, 883];
wallCoords[688] = [1, 85, 253, 337, 421, 589, 631, 715, 883];
wallCoords[730] = [1, 85, 127, 169, 211, 253, 295, 337, 421, 463, 505, 631, 673, 715, 757, 799, 841, 883];
wallCoords[772] = [1, 85, 505, 547, 841, 883];
wallCoords[814] = [1, 169, 211, 253, 295, 337, 379, 421, 547, 589, 631, 673, 715, 757, 883];
wallCoords[856] = [1, 43, 85, 127, 169, 253, 421, 463, 589, 757, 799, 883];
wallCoords[898] = [1, 337, 463, 505, 673, 799, 883];
wallCoords[940] = [1, 43, 85, 127, 169, 211, 253, 295, 337, 379, 463, 505, 547, 589, 631, 673, 715, 757, 799, 883];
wallCoords[982] = [1, 673, 799, 883];
wallCoords[1024] = [1, 85, 127, 169, 211, 253, 295, 337, 379, 421, 463, 505, 547, 589, 631, 673, 757, 799, 883];
wallCoords[1066] = [1, 85, 253, 799, 883];
wallCoords[1108] = [1, 85, 169, 253, 295, 337, 379, 463, 505, 547, 589, 631, 673, 715, 757, 799, 883];
wallCoords[1150] = [1, 85, 169, 337, 379, 463, 883];
wallCoords[1192] = [1, 85, 169, 211, 253, 379, 547, 589, 631, 673, 715, 799, 841, 883];
wallCoords[1234] = [1, 85, 169, 253, 295, 379, 421, 463, 505, 547, 715, 799, 883];
wallCoords[1276] = [1, 85, 169, 463, 631, 799, 883];
wallCoords[1318] = [1, 85, 169, 211, 253, 295, 337, 379, 463, 547, 589, 631, 715, 757, 799, 883];
wallCoords[1360] = [1, 85, 379, 463, 547, 715, 883];
wallCoords[1402] = [1, 85, 127, 169, 211, 253, 295, 379, 463, 505, 547, 631, 673, 715, 757, 799, 883];
wallCoords[1444] = [1, 85, 295, 379, 631, 883];
wallCoords[1486] = [1, 85, 169, 253, 295, 379, 421, 463, 505, 547, 589, 631, 673, 715, 799, 841, 883];
wallCoords[1528] = [1, 169, 799, 883];
wallCoords[1570] = [1, 43, 85, 127, 169, 211, 253, 295, 337, 379, 421, 463, 547, 589, 631, 715, 757, 799, 883];
wallCoords[1612] = [1, 463, 547, 631, 715, 883];
wallCoords[1654] = [1, 85, 127, 211, 253, 295, 337, 379, 463, 547, 631, 715, 757, 799, 883];
wallCoords[1696] = [1, 127, 211, 379, 463, 547, 631, 883];
wallCoords[1738] = [1, 43, 127, 211, 295, 379, 547, 631, 673, 715, 757, 799, 883];
wallCoords[1780] = [1, 127, 169, 211, 295, 337, 379, 421, 463, 505, 547, 631, 715, 799, 841, 883];
wallCoords[1822] = [1, 43, 883];
wallCoords[1864] = [1, 43, 85, 127, 169, 211, 253, 295, 337, 379, 421, 463, 505, 547, 589, 631, 673, 715, 757, 799, 883];

const step = 42;
let wall;

let isFaceRight = true;

let pressing_button = '';

//Алгоритм движения колобка

let coords = kolobok.getBoundingClientRect();

let kolobokCoords = {
    top: coords.top,
    left: coords.left
};

document.addEventListener('keydown', e => {
    switch (e.code) {
        case 'ArrowUp': {
            if(pressing_button !== 'up') { 
                wall = false;
                if ((kolobokCoords.top == 841) && (kolobokCoords.left == 1864)) setTimeout (() => document.location = '../pages/win.html', 200 );
                kolobokCoords.top -= step;
                for (let coord of wallCoords[kolobokCoords.left]) {
                    if (kolobokCoords.top == coord) {wall = true; break;}
                }
                if (wall) kolobokCoords.top += step;
                    else kolobok.style.top = kolobokCoords.top + 'px';
            }
            pressing_button = 'up';
            break;
        }

        case 'ArrowDown': {
            if(pressing_button !== 'down') {
                wall = false;
                if ((kolobokCoords.top == 841) && (kolobokCoords.left == 1864)) setTimeout (() => document.location = '../pages/win.html', 200 );
                kolobokCoords.top += step;
                for (let coord of wallCoords[kolobokCoords.left]) {
                    if (kolobokCoords.top == coord) {wall = true; break;}
                }
                if (wall) kolobokCoords.top -= step;
                    else kolobok.style.top = kolobokCoords.top + 'px';
            }
            pressing_button = 'down';
            break;
        }

        case 'ArrowRight': {
            if(pressing_button !== 'right') {
                wall = false;
                if (!isFaceRight) {kolobok.style.transform = 'scale(1, 1)'; isFaceRight = true;}
                if ((kolobokCoords.top == 841) && (kolobokCoords.left == 1864)) setTimeout (() => document.location = '../pages/win.html', 200 );
                kolobokCoords.left += step;
                for (let coord of wallCoords[kolobokCoords.left]) {
                    if (kolobokCoords.top == coord) {wall = true; break;}
                }
                if (wall) kolobokCoords.left -= step;
                    else kolobok.style.left = kolobokCoords.left + 'px';
            }
            pressing_button = 'right';
            break;
        }

        case 'ArrowLeft': {
            if(pressing_button !== 'right') {
                wall = false;
                if (isFaceRight) {kolobok.style.transform = 'scale(-1, 1)'; isFaceRight = false;}
                if ((kolobokCoords.top == 841) && (kolobokCoords.left == 1864)) setTimeout (() => document.location = '../pages/win.html', 200 );
                kolobokCoords.left -= step;
                if (kolobokCoords.left < 0) kolobokCoords.left = 16;
                for (let coord of wallCoords[kolobokCoords.left]) {
                    if (kolobokCoords.top == coord) {wall = true; break;}
                }
                if (wall) kolobokCoords.left += step;
                    else kolobok.style.left = kolobokCoords.left + 'px';
            }
            pressing_button = 'right';
            break;
        }
    }
});

//Исключение "зажатия" клавиши и быстрого перемещения колобка

document.addEventListener('keyup', e => {
    pressing_button = '';
});

//Алгоритм движения врага

function trollMove (trollname) {

    function randomizer(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    function isExit (coordTop, coordLeft) {
        if ( ((coordTop == 43) && (coordLeft == 16)) || 
            ((coordTop == 841) && (coordLeft == 1864)) ) return true;
            else return false;
    }

    function isKolobok (coordTop, coordLeft) {
        if (
            ((coordLeft == kolobokCoords.left) && (coordTop == kolobokCoords.top)) ||
            (coordLeft == kolobokCoords.left) && ((coordTop + step) == kolobokCoords.top) ||
            ((coordLeft + step) == kolobokCoords.left) && (coordTop == kolobokCoords.top) ||
            (coordLeft == kolobokCoords.left) && ((coordTop - step) == kolobokCoords.top) ||
            ((coordLeft - step) == kolobokCoords.left) && (coordTop == kolobokCoords.top)
            ) return true;
            else return false;
    }

    let id = document.getElementById(trollname.trollname);
    
    function moveUp () {
        trollname.enemyCoordTop -= step;
        id.style.top = trollname.enemyCoordTop + 'px';
    }

    function moveDown () {
        trollname.enemyCoordTop += step;
        id.style.top = trollname.enemyCoordTop + 'px';
    }

    function moveLeft () {
        if (trollname.isTrollFaceRight) {id.style.transform = 'scale(1, 1)'; trollname.isTrollFaceRight = false;}
        trollname.enemyCoordLeft -= step;
        id.style.left = trollname.enemyCoordLeft + 'px';
    }

    function moveRight () {
        if (!trollname.isTrollFaceRight) {id.style.transform = 'scale(-1, 1)'; trollname.isTrollFaceRight = true;}
        trollname.enemyCoordLeft += step;
        id.style.left = trollname.enemyCoordLeft + 'px';
    }

    function isWall (coordTop, coordLeft) {
        trollname.wall = false;
        for (let coord of wallCoords[coordLeft]) {
            if (coordTop == coord) {trollname.wall = true; break;}
        }
        if (trollname.wall) return true;
            else return false;
    }

    function isWallLeft (coordTop, coordLeft) {
        trollname.wall = false;
        switch (trollname.moveForward.name) {
            case 'moveUp': {
                for (let coord of wallCoords[coordLeft - step]) {
                    if (coordTop == coord) {trollname.wall = true; break;}
                };
                break;
            }
            case 'moveDown': {
                for (let coord of wallCoords[coordLeft + step]) {
                    if (coordTop == coord) {trollname.wall = true; break;}
                };
                break;
            }
            case 'moveLeft': {
                for (let coord of wallCoords[coordLeft]) {
                    if ( (coordTop + step) == coord) {trollname.wall = true; break;}
                };
                break;
            }
            case 'moveRight': {
                for (let coord of wallCoords[coordLeft]) {
                    if ( (coordTop - step) == coord) {trollname.wall = true; break;}
                };
                break;
            }
        }
        if (trollname.wall) return true;
            else return false;
    }

    function isWallRight (coordTop, coordLeft) {
        trollname.wall = false;
        switch (trollname.moveForward.name) {
            case 'moveUp': {
                for (let coord of wallCoords[coordLeft + step]) {
                    if (coordTop == coord) {trollname.wall = true; break;}
                };
                break;
            }
            case 'moveDown': {
                for (let coord of wallCoords[coordLeft - step]) {
                    if (coordTop == coord) {trollname.wall = true; break;}
                };
                break;
            }
            case 'moveLeft': {
                for (let coord of wallCoords[coordLeft]) {
                    if ( (coordTop - step) == coord) {trollname.wall = true; break;}
                };
                break;
            }
            case 'moveRight': {
                for (let coord of wallCoords[coordLeft]) {
                    if ( (coordTop + step) == coord) {trollname.wall = true; break;}
                };
                break;
            }
        }
        if (trollname.wall) return true;
            else return false;
    }

    function isWallAhead (coordTop, coordLeft) {
        trollname.wall = false;
        switch (trollname.moveForward.name) {
            case 'moveUp': {
                for (let coord of wallCoords[coordLeft]) {
                    if ( (coordTop - step) == coord) {trollname.wall = true; break;}
                };
                break;
            }
            case 'moveDown': {
                for (let coord of wallCoords[coordLeft]) {
                    if ( (coordTop + step) == coord) {trollname.wall = true; break;}
                };
                break;
            }
            case 'moveLeft': {
                for (let coord of wallCoords[coordLeft - step]) {
                    if (coordTop == coord) {trollname.wall = true; break;}
                };
                break;
            }
            case 'moveRight': {
                for (let coord of wallCoords[coordLeft + step]) {
                    if (coordTop == coord) {trollname.wall = true; break;}
                };
                break;
            }
        }
        if (trollname.wall) return true;
            else return false;
    }

    function turnLeft (direction) {
        switch (direction) {
            case 'moveUp': { trollname.moveForward = moveLeft; break; }
            case 'moveDown': { trollname.moveForward = moveRight; break; }
            case 'moveLeft': { trollname.moveForward = moveDown; break; }
            case 'moveRight': { trollname.moveForward = moveUp; break; }
        }
    }

    function turnRight (direction) {
        switch (direction) {
            case 'moveUp': { trollname.moveForward = moveRight; break; }
            case 'moveDown': { trollname.moveForward = moveLeft; break; }
            case 'moveLeft': { trollname.moveForward = moveUp; break; }
            case 'moveRight': { trollname.moveForward = moveDown; break; }
        }
    }

    function flipDirection () {
        switch (trollname.moveForward.name) {
            case 'moveUp': { trollname.moveForward = moveDown; break; }
            case 'moveDown': { trollname.moveForward = moveUp; break; }
            case 'moveLeft': { trollname.moveForward = moveRight; break; }
            case 'moveRight': { trollname.moveForward = moveLeft; break; }
        }
    }

    function randomTurnLeft () {
        let turn = randomizer (0, 1);
        if (turn == 1) turnLeft(trollname.moveForward.name);
        else return;
    }

    function randomTurnRight () {
        let turn = randomizer (0, 1);
        if (turn == 1) turnRight(trollname.moveForward.name);
        else return;
    }

    function pickDirection() {
        let firstStep = false;
        do {
            let direction = randomizer (0, 3);
            switch (direction) {
                case 0: {
                    if ( isWall( (trollname.enemyCoordTop - step), trollname.enemyCoordLeft) ) break;
                        else {trollname.moveForward = moveUp; firstStep = true;}
                    break;
                }
                case 1: {
                    if ( isWall( (trollname.enemyCoordTop + step), trollname.enemyCoordLeft) ) break;
                        else { trollname.moveForward = moveDown; firstStep = true; }
                    break; 
                }
                case 2: {
                    if ( isWall(trollname.enemyCoordTop, (trollname.enemyCoordLeft - step) ) ) break;
                        else { trollname.moveForward = moveLeft; firstStep = true; }
                    break;
                }
                case 3: {
                    if ( isWall(trollname.enemyCoordTop, (trollname.enemyCoordLeft + step) ) ) break;
                        else { trollname.moveForward = moveRight; firstStep = true; }
                    break;
                }
            }
        } while (!firstStep);
    }


    if (trollname.isFirstStep) { pickDirection(); trollname.isFirstStep = false; }   //выбор направления "вперед" для первого шага
    trollname.moveForward();
    if (isExit(trollname.enemyCoordTop, trollname.enemyCoordLeft)) flipDirection();
    if (isKolobok(trollname.enemyCoordTop, trollname.enemyCoordLeft)) setTimeout (() => document.location = '../pages/game_over.html', 300 );
    if (!isWallLeft(trollname.enemyCoordTop, trollname.enemyCoordLeft)) randomTurnLeft ();
        else if (!isWallRight(trollname.enemyCoordTop, trollname.enemyCoordLeft)) randomTurnRight ();
    if (isWallAhead(trollname.enemyCoordTop, trollname.enemyCoordLeft)) {
            if (!isWallLeft(trollname.enemyCoordTop, trollname.enemyCoordLeft)) turnLeft(trollname.moveForward.name);
                else if (!isWallRight(trollname.enemyCoordTop, trollname.enemyCoordLeft)) turnRight(trollname.moveForward.name);
                    else flipDirection();
    }
}

//Конструктор врага

function Enemy (enemyCoordLeft, enemyCoordTop, trollname) {
    this.enemyCoordLeft = enemyCoordLeft;
    this.enemyCoordTop = enemyCoordTop;
    this.trollname = trollname;
    this.isTrollFaceRight = false;
    this.isFirstStep = true;
    this.moveForward = function(){};
    this.wall;

    let img = document.createElement('img');
    img.id = trollname;
    img.src = '../pictures/trollface.png';
    img.style.cssText = `
    position: absolute;
    width: 40px;
    height: 40px;
    transition: left 0.8s, top 0.8s;
    `;
    img.style.left = enemyCoordLeft + 'px';
    img.style.top = enemyCoordTop + 'px';

    let container = document.getElementsByClassName('container');
    container[0].append(img);
}

window.onload = function() {
    let troll1 = new Enemy (478, 127, 'troll1');
    let troll2 = new Enemy (58, 673, 'troll2');
    let troll3 = new Enemy (772, 379, 'troll3');
    let troll4 = new Enemy (1276, 673, 'troll4');
    let troll5 = new Enemy (1822, 589, 'troll5');
    // let troll6 = new Enemy (1276, 43, 'troll6');
    // let troll7 = new Enemy (688, 547, 'troll7');
    // let troll8 = new Enemy (1528, 505, 'troll8');
    // let troll9 = new Enemy (142, 295, 'troll9');
    // let troll10 = new Enemy (1738, 169, 'troll10');
    setInterval(() => {
        trollMove(troll1);
        trollMove(troll2);
        trollMove(troll3);
        trollMove(troll4);
        trollMove(troll5);
        // trollMove(troll6);
        // trollMove(troll7);
        // trollMove(troll8);
        // trollMove(troll9);
        // trollMove(troll10);
    }, 400);
}