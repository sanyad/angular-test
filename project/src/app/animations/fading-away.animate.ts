import {animate, keyframes, query, stagger, state, style, transition, trigger} from '@angular/animations';

export const showAnimate = trigger('showAnimate', [
  transition(':enter', [
    animate('1s', keyframes([
      style({
        offset: 0,
        opacity: 0
      }),
      style({
        offset: 1,
        opacity: 1
      })
    ]))
  ])
]);

export const hiddenAnimate = trigger('hiddenAnimate', [
  transition(':leave', [
    animate('0.5s', keyframes([
      style({
        offset: 0,
        opacity: 1
      }),
      style({
        offset: 1,
        opacity: 0
      })
    ]))
  ])
]);

export const fadingAwayAnimate = trigger('fadingAwayAnimate', [
  transition(':enter', [
    animate('0.5s', keyframes([
      style({
        offset: 0,
        opacity: 0
      }),
      style({
        offset: 1,
        opacity: 1
      })
    ]))
  ]),
  transition(':leave', [
    animate('0.3s', keyframes([
      style({
        offset: 0,
        opacity: 1
      }),
      style({
        offset: 1,
        opacity: 0
      })
    ]))
  ])
]);

export const fold = trigger('fold', [
  transition(':enter',
    [style({height: 0, overflow: 'hidden'}), animate('.3s', style({height: '*'}))]),
  transition(':leave',
    [style({height: '*', overflow: 'hidden'}), animate('.3s', style({height: 0}))])
]);

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({opacity: 0}), stagger('60ms', animate('600ms ease-out', style({opacity: 1})))],
      {optional: true}
    ),
    query(':leave',
      animate('300ms', style({opacity: 0})),
      {optional: true}
    )
  ])
]);
// анимация исчезновения верху в низ.
export const foldEnd = trigger('foldEnd', [
  transition(':leave',
    [style({height: '*', overflow: 'hidden'}), animate('.3s', style({height: 0}))])
]);
// анимация появления с верху в низ.
export const foldStart = trigger('foldStart', [
  transition(':enter',
    [style({height: 0, overflow: 'hidden'}), animate('.3s', style({height: '*'}))])
]);
// анимация появления с лева.
export const enterLeave = trigger('enterLeave', [
  state('flyIn', style({transform: 'translateX(0)'})),
  transition(':enter', [
    style({transform: 'translateX(-105%)'}),
    animate('0.3s 300ms ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({transform: 'translateX(100%)'}))
  ])
]);

// анимация появления справа.
export const enterLeaveRight = trigger('enterLeaveRight', [
  state('flyIn', style({transform: 'translateX(0)'})),
  transition(':enter', [
    style({transform: 'translateX(105%)'}),
    animate('0.5s 300ms ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({transform: 'translateX(100%)'}))
  ])
]);

export const transformPanel = trigger('transformPanel', [
  state('void', style({
    transform: 'scaleY(0)',
    minWidth: '100%',
    opacity: 1,
  })),
  state('showing', style({
    opacity: 1,
    minWidth: 'calc(100% + 32px)',
    transform: 'scaleY(1)',
  })),
  state('showing-multiple', style({
    opacity: 1,
    minWidth: 'calc(100% + 64px)',
    transform: 'scaleY(1)',
  })),
  transition('void => *', animate('220ms cubic-bezier(0.1, 0, 0.2, 1)')),
  transition('* => void', animate('100ms 25ms linear', style({opacity: 1})))
]);

export const showAnimationList = trigger('showAnimationList', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('300ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);
export const startShowAnimationList = trigger('startShowAnimationList', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
  ])
]);

export const modalAppearAnimation = trigger('modalAppearAnimation', [
  state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
  state('*', style({ opacity: 1, transform: 'scale(1)' })),
  transition('void => *', animate('300ms ease-in')),
  transition('* => void', animate('300ms ease-out'))
]);
