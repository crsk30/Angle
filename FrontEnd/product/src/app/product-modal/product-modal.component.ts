import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
})
export class ProductModalComponent {
  modalForm: FormGroup;
  submitted = false;
  categoryOptions: string[] = ['Category 1', 'Category 2', 'Category 3']; 
  

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ProductModalComponent>) {
    this.modalForm = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      input3: [[], Validators.required],
      input4: ['', Validators.required],
      input5: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // get p() {
  //   return this.modalForm.controls;
  // }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.submitted = true;
    if(this.modalForm.invalid) return
    console.log('Saved:', this.modalForm.value);
    this.dialogRef.close();
  }
}
