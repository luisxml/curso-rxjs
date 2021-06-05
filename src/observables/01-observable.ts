import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente [Next]:', value),
    error: error => console.warn('Error [obs]', error),
    complete: () => console.info('Completado [Obs]')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
    subs.next('Hola mundo');
    subs.next('Hola');
    subs.next('Hola luis');

    // Forzar error js
    // const a = undefined;
    // a.nombre = 'Luis';

    subs.complete();
    subs.next('Fin');
});

// obs$.subscribe( 
//     valor => console.log('next',valor),
//     error => console.warn(error),
//     () => console.info('Completado')
// );

obs$.subscribe(observer);


