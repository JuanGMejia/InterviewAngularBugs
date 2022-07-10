import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MessagesComponent],
    entryComponents: [MessagesComponent]
})
export class MessagesModule { }
