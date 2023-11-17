import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  
  products: any[] = [];
  page = 1;
  scrollDistance = 2; 
  scrollUpDistance = 1; 
  modalForm: any;
  showModal = false

  constructor(private productService: ProductService,
    public dialog: MatDialog,
    ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts(this.page).subscribe((data) => {
      this.products = this.products.concat(data.products);
      console.log("products : ",this.products)
    });
  }
  onScroll() {
    this.page++;
    this.loadProducts();
  }
  openModal(): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The modal was closed');
    });
  }

  onSaveClick(): void {
    console.log('Saved:', this.modalForm.value);
  }
}
