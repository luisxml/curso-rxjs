import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>(subs => {
    // Emitir numero random
    const intervalID = setInterval(() => {
        subs.next(Math.random());
    },1000);

    return () => clearInterval(intervalID);
});

// const subs1 = intervalo$.subscribe(random => console.log('Sub1', random));
// const subs2 = intervalo$.subscribe(random => console.log('Sub2', random));

// 1.- cateso multiple
// 2. es un observer
// 3.- Next, error, completed
const subject$ = new Subject();
intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(()=> {
    subject$.next(10);
    subject$.complete();
},3500);



