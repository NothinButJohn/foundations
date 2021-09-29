import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FounderNavComponent } from './components/founder-nav/founder-nav.component';
import { FoundersStudioComponent } from './containers/founders-studio/founders-studio.component';
import {MaterialModule} from "../material/material.module";



@NgModule({
    declarations: [
        FounderNavComponent,
        FoundersStudioComponent
    ],
    exports: [
        FounderNavComponent,
        FoundersStudioComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class FoundersModule { }
