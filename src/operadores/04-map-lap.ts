import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget vehicula diam, ac finibus odio. Nunc mattis scelerisque metus at volutpat. Vestibulum commodo erat quis sem volutpat, a consectetur est dapibus. Nunc luctus eros turpis, a consectetur libero interdum a. Sed dapibus orci quis lectus laoreet maximus. In hac habitasse platea dictumst. Donec maximus, sem vitae fringilla pretium, mauris leo iaculis nisl, sed tempus odio enim eu massa. In vestibulum odio vitae pretium lobortis. Quisque ultricies tempor leo non imperdiet. Curabitur ornare vehicula urna, id placerat lacus pulvinar at. Donec eget viverra arcu.
<br/><br/>
Duis lacinia tellus a dui imperdiet posuere. Aenean diam ex, volutpat vel iaculis ut, placerat ac tortor. Sed feugiat, lectus sit amet faucibus hendrerit, est mauris ultrices dui, ac dictum leo lectus eu tortor. Pellentesque blandit bibendum lorem, in bibendum felis aliquet in. Donec non ipsum vel urna aliquam vulputate. Sed a felis bibendum, tincidunt justo ac, blandit nulla. Vivamus volutpat est a tincidunt pulvinar. Integer ut mi nec libero bibendum gravida.
<br/><br/>
Fusce volutpat eros turpis, varius convallis sapien pellentesque maximus. Ut at libero vulputate, suscipit tellus eu, viverra dolor. Suspendisse mi augue, venenatis vel eros at, dignissim vehicula magna. Nulla id dapibus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus mi ipsum, feugiat a pulvinar quis, vulputate a lacus. Pellentesque molestie, enim eu auctor ultrices, augue eros sollicitudin velit, id tincidunt odio tellus non nisi. Praesent semper imperdiet magna, id rhoncus ex blandit sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In auctor odio sed ultrices hendrerit. Phasellus at metus non urna varius tempor. Ut ullamcorper bibendum tellus sed iaculis.
<br/><br/>
Etiam iaculis feugiat felis quis eleifend. Nunc tempor sem dui, et bibendum nunc consequat sit amet. Aenean at ipsum tortor. Duis porttitor ac nisi in ultrices. Duis non interdum massa. Morbi congue eleifend vehicula. Sed porta vehicula nisl ac sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ut velit nibh. Fusce accumsan augue orci, at vehicula diam mollis at.
<br/><br/>
Nunc vehicula nisi eros, id tincidunt erat viverra quis. Quisque et dui auctor, ultrices massa id, dignissim orci. Praesent non placerat arcu, non tincidunt justo. Sed vitae commodo purus. Aenean auctor nunc eget maximus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sit amet erat vestibulum mi tempus condimentum in vitae nunc. Aliquam ut feugiat eros.
`;

const body = document.querySelector('body');
body.append(texto);

const progresBar = document.createElement('div');
progresBar.setAttribute('class', 'progress-bar');

body.append(progresBar);

// Funcion para hacer el calculo
const calcularPorcScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100
}

// Streams
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
    map(event => calcularPorcScroll(event))
);

progress$.subscribe(porcentaje => {
    progresBar.style.width = `${porcentaje}%`;
});
// scroll$.subscribe(console.log);

