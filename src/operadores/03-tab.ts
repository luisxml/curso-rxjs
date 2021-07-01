import { range } from 'rxjs';
import { tap } from 'rxjs/operators';

const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => {
        console.log('antes', x)
        return 100
    }),
    tap( val => val *10 ),
    tap({
        next: valor => console.log('Despues', valor),
        complete: () => console.log('Se termino todo')
    })
).subscribe(
    val => console.log('subs', val)
);
