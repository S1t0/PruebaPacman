//hay que poner el pacmanMap como un array de strings
let pacmanMap =`
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W..........................W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWW--WWW.WW.WWWWWW
WWWWWW.WW.WooooooW.WW.WWWWWW
..........WooooooW..........
WWWWWW.WW.WooooooW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W...WW................WW...W
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
`;

class Map {
    constructor(ctx) {
        this.canvasWidth = ctx.canvas.width;
        this.canvasHeight = ctx.canvas.height;
       /* for(i=0;i<pacmanMap.length;i++){
            if(pacmanMap[i]="W"){
                ctx.fillStyle = 'green';
                ctx.fillRect(0, 0, 5, 5);
            }
        }//SUPONGO QUE SE HARA RECORRIENDO EL STRING Y PINTAR POR CADA POSICION, PERO NO SOY CAPAZ */
    }
    keyboard_event() { }
    update() { }
    draw(delta, ctx) {
    }
}
