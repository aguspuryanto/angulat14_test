import { Component } from '@angular/core';
import { Barang } from '../barang';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BarangService } from '../barang.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Router } from 'next/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id!: any;
  product!: Barang;
  form!: FormGroup;

  constructor(
    public barangService: BarangService,
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
    this.barangService.find(this.id).subscribe((data: Barang)=>{
      this.product = data;
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
    this.barangService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('barang');
    })
  }
}
