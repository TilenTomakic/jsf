/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Directive }                                      from '@angular/core';
import { CdkStepper, CdkStepperNext, CdkStepperPrevious } from '@angular/cdk/stepper';
import { JsfStepper }                                     from './jsf-stepper.component';

// tslint:disable:no-host-metadata-property no-inputs-metadata-property directive-class-suffix

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  selector : 'button[jsfStepperNext]',
  host     : {
    '(click)': '_stepper.next()',
    '[type]' : 'type'
  },
  inputs   : ['type'],
  providers: [{ provide: CdkStepper, useExisting: JsfStepper }]
})
export class JsfStepperNext extends CdkStepperNext {}

/** Button that moves to the previous step in a stepper workflow. */
@Directive({
  selector : 'button[jsfStepperPrevious]',
  host     : {
    '(click)': '_stepper.previous()',
    '[type]' : 'type'
  },
  inputs   : ['type'],
  providers: [{ provide: CdkStepper, useExisting: JsfStepper }]
})
export class JsfStepperPrevious extends CdkStepperPrevious {}
