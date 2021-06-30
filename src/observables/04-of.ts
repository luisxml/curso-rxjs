import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of<number>(...[1,2,3,4,5,6],2,3,4,5,6);

console.log('Inicio de obs$');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin de los obs$')