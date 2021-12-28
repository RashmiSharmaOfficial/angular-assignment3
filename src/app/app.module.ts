import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TempConverterPipe } from './temp-converter.pipe';
import { CapitalPipe } from './capital.pipe';
import { FilterStreamPipe } from './filter-stream.pipe';
import { CutomPipePipe } from './cutom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TempConverterPipe,
    CapitalPipe,
    FilterStreamPipe,
    CutomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
