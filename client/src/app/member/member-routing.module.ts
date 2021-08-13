import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ReservationComponent } from './reservation/reservation.component';
import {PropertiesListComponent } from './properties-list/properties-list.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
  {
        path: '',
        component: MainComponent,
    
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: 'reservations',
            component: ReservationComponent,
          },
          {
            path: 'add-property',
            component: AddPropertyComponent,
          },
          {
            path: 'properties',
            component: PropertiesListComponent,
          },
          {
            path: 'editProperty/:id',
            component: EditPropertyComponent,
          },
          {
            path: 'propertyDetails/:id',
            component: PropertyDetailsComponent,
          },
          // {
          //   path: 'admin',
          //   loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
          // },
             // {
          //   path: 'user',
          //   loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
          // },
    ],
  },
];

export const MemberRoutingModule = RouterModule.forChild(routes);

