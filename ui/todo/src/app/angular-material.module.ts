import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, MatSidenavModule, MatListModule, MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatSidenavModule, MatListModule, MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatSidenavModule, MatListModule, MatInputModule
    ]
})
export class AngularMaterial { }
