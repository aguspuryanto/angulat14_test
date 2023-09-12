import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { BarangComponent } from './barang/barang.component';
import { SupplierComponent } from './supplier/supplier.component';
import { TransaksiComponent } from './transaksi/transaksi.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth'},
  { path: 'auth', component: AuthComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'barang', component: BarangComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'transaksi', component: TransaksiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
