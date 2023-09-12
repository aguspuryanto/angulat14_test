import { Component } from '@angular/core';
import { Supplier } from './supplier';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {

  suppliers: Supplier[] = [];
  
  constructor(public supplierService: SupplierService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.supplierService.getAll().subscribe((data: Supplier[])=>{
      this.suppliers = data;
      console.log(this.suppliers);
    })  
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.supplierService.delete(id).subscribe(res => {
         this.suppliers = this.suppliers.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
}
