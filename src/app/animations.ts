import { trigger, transition, style, animate } from '@angular/animations';
export let fade = trigger('fade', [
  transition('void =>*', [style({ opacity: 0 }), animate(1000)]),
]);
