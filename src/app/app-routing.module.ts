import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { usuarioSinLoguear } from './guards/usuariosinlogear';
import { usuarioLogueadoGuard } from './guards/usuariologueado';
import { adminguard } from './guards/adminguard';


const routes: Routes = [
  {
    path: "login",
    canActivate: [usuarioSinLoguear],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "register",
    canActivate: [usuarioSinLoguear],
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "adminhome",
    canActivate: [usuarioLogueadoGuard, adminguard],
    loadChildren: () => import('./pages/adminhome/adminhome.module').then(m => m.AdminhomeModule)
  },
  {
    path: "crudcoins",
    canActivate: [usuarioLogueadoGuard, adminguard],
    loadChildren: () => import('./pages/crudcoins/crudcoins.module').then(m => m.CrudcoinsModule)
  },
  {
    path: "crudusers",
    canActivate: [usuarioLogueadoGuard, adminguard],
    loadChildren: () => import('./pages/crudusers/crudusers.module').then(m => m.CrudusersModule)
  },
  {
    path: "convertir",
    canActivate: [usuarioLogueadoGuard],
    loadChildren: () => import('./pages/convertir/convertir.module').then(m => m.ConvertirModule)
  },
  {
    path: "historialhome",
    canActivate: [usuarioLogueadoGuard],
    loadChildren: () => import('./pages/historialhome/historialhome.module').then(m => m.HistorialhomeModule)
  },
  {
    path: "membresias",
    loadChildren: () => import('./pages/membresias/membresias.module').then(m => m.MembresiasModule)
  },
  {
    path: "",
    redirectTo: 'convertir',
    pathMatch: "full"
  },
  {
    path: "**",
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
