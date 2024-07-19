import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { SharesComponent } from './shares/shares.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"tasks",component:TasksComponent},
    {path:"shares",component:SharesComponent}
];
