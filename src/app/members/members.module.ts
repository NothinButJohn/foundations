import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersNavigationComponent } from './components/members-navigation/members-navigation.component';
import { MembersHomeComponent } from './containers/members-home/members-home.component';
import {MaterialModule} from "../material/material.module";
import { MembersMessengerComponent } from './containers/members-messenger/members-messenger.component';



@NgModule({
    declarations: [
        MembersNavigationComponent,
        MembersHomeComponent,
        MembersMessengerComponent
    ],
    exports: [
        MembersNavigationComponent,
        MembersHomeComponent,
        MembersMessengerComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class MembersModule { }
