// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes, DefaultUrlSerializer, UrlTree, UrlSerializer } from '@angular/router';

import { SingerlistComponent } from './singerlist/singerlist.component';
import { DrummerlistComponent } from './drummerlist/drummerlist.component';
import { GuitaristlistComponent } from './guitaristlist/guitaristlist.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'singers',
        pathMatch: 'full'

    },
    {
        path: 'singers',
        component: SingerlistComponent,
        data: {
        }
    },
    {
        path: 'drummers',
        component: DrummerlistComponent,
        data: {
        }
    },
    {
        path: 'guitarists',
        component: GuitaristlistComponent,
        data: {
        }
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
