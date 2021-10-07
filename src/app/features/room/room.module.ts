import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomJoinComponent } from './room-join/room-join.component';


@NgModule({
  declarations: [
    RoomComponent,
    RoomCreateComponent,
    RoomJoinComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }
