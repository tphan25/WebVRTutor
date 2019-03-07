import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RiftComponent } from './pages/rift/rift.component';
import { GearVRComponent } from './pages/gear-vr/gear-vr.component';
import { OculusGoComponent } from './pages/oculus-go/oculus-go.component';
import { ViveComponent } from './pages/vive/vive.component';
import { WmrComponent } from './pages/wmr/wmr.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { CardboardComponent } from './pages/cardboard/cardboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rift', component: RiftComponent },
  { path: 'gear', component: GearVRComponent },
  { path: 'oculusgo', component: OculusGoComponent },
  { path: 'vive', component: ViveComponent },
  { path: 'wmr', component: WmrComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'cardboard', component: CardboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
