import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente:', value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>(subs => {
    // Crear contador
    let contador = 0;
    setInterval(() => {
        contador++;
        // Emitir valor
        subs.next(contador);
    },1000);
});

const subs = intervalo$.subscribe(num => console.log('Num:', num));

setTimeout(()=> {
    subs.unsubscribe()
},3000);

// git
