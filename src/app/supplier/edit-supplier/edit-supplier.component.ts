import { Component } from '@angular/core';
import { Supplier } from '../supplier';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent {
  id!: any;
  supplier!: Supplier;
  form!: FormGroup;

  constructor(
    public supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.supplierService.find(this.id).subscribe((data: Supplier)=>{
      this.supplier = data;
    }); 
       
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.supplierService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('barang');
    })
  }
}
