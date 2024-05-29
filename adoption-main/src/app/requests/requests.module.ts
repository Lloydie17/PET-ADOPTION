import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsListComponent } from './requests-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RequestsRoutingModule
    ],
    declarations: [
        RequestsListComponent
    ]
})
export class RequestsModule { }