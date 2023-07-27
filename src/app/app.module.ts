import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { AudioComponent } from './audio/audio.component';
import { DisplaysComponent } from './displays/displays.component';
import { LightningComponent } from './lightning/lightning.component';
import { RoughComponent } from './rough/rough.component';

@NgModule({
  declarations: [
    AppComponent,
    AirQualityComponent,
    TemperatureComponent,
    AudioComponent,
    DisplaysComponent,
    LightningComponent,
    RoughComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
