import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RiftComponent } from './pages/rift/rift.component';
import { ViveComponent } from './pages/vive/vive.component';
import { WmrComponent } from './pages/wmr/wmr.component';
import { GearVRComponent } from './pages/gear-vr/gear-vr.component';
import { OculusGoComponent } from './pages/oculus-go/oculus-go.component';
import { CardboardComponent } from './pages/cardboard/cardboard.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructionsComponent } from './components/instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RiftComponent,
    ViveComponent,
    WmrComponent,
    GearVRComponent,
    OculusGoComponent,
    CardboardComponent,
    ResourcesComponent,
    HeaderComponent,
    InstructionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
