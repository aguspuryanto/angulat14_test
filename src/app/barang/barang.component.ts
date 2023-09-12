import { Component } from '@angular/core';
import { BarangService } from './barang.service';
import { Barang } from './barang';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent {

  products: Barang[] = [];
  
  constructor(public barangService: BarangService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.barangService.getAll().subscribe((data: Barang[])=>{
      this.products = data;
      console.log(this.products);
    })  
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.barangService.delete(id).subscribe(res => {
         this.products = this.products.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
}
