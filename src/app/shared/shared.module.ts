import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { DialogService } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ToolbarNavigationComponent } from './components/toolbar-navigation/toolbar-navigation.component';
import { ShortenPipe } from './pipes/shorten.pipe';



@NgModule({
  declarations: [
    
    ToolbarNavigationComponent,ShortenPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToolbarModule,
    CardModule,
    ButtonModule,
  ],
  exports: [ToolbarNavigationComponent, ShortenPipe],
  
  providers: [DialogService, CurrencyPipe],
})
export class SharedModule { }
