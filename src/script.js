window.onload = () => {// esta funcion lo que hace es que que retiene todo el javascript hasta que el html este completamente cargado, asi no nos da error ni hay q poner el script al final del html
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

     //Pintamos un cuadrado
     //ctx.fillStyle = 'green';
     //ctx.fillRect(10, 10, 5, 5);

    // Mapa del juego
    let map = new Map(ctx);

    // Pintamos Pacman
    let actors = [
        new Pacman({ x: 200, y: 100 }, "yellow", 10),
        new Pacman({ x: 200, y: 200 }, "pink", 12),
        new Pacman({ x: 200, y: 300 }, "blue", 15),
        new Pacman({ x: 200, y: 400 }, "grey", 5),
    ];

    // GAME LOOP --> Bucle de renderizado y actualización
    setInterval(() => {
        actors.forEach(e => e.update());
        ctx.clearRect(0, 0, 500, 500);
        actors.forEach(e => { e.draw(ctx) });
    }, 100)

    document.body.addEventListener("keydown", (e) => {
        // console.log(e.key);
        actors.forEach(actor => { actor.keyboard_event(e.key) });
    })
}


