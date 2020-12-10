import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  selectedImage?: File;
  percintage?: number;
  // selectedImageUrl?: string;
  @Output() urlOutput: EventEmitter<string> = new EventEmitter();
  @Input() num?: string;
  url?: string;
  disabled = true;
  fileControl: FormControl;
  public files: any;
  constructor(private storage: AngularFireStorage) {
    this.fileControl = new FormControl(this.files, []);
  }

  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((file: any) => {
      this.selectedImage = file;
      // this.disabled = false;
      if (!!file) {

        this.uploadPhoto();
      }
    });

  }
  getPhoto(ev: any): void {
    // const target: HTMLInputElement = ev.target as HTMLInputElement;
    this.selectedImage = ev.target.files[0];
    this.disabled = false;
  }
  // tslint:disable-next-line: typedef
  uploadPhoto(): void {

    const nameStr = '/villas/photos/' + (Math.random().toString()).substr(2, 10) + '-' + this.selectedImage?.name;

    this.storage.upload(nameStr, this.selectedImage).snapshotChanges().pipe(
      tap((el: any) => {
        console.log(el);
        // this.percintage = `${(Math.round(el.bytesTransferred / el.totalBytes) * 100).toString()} %`;
        this.percintage = Math.round(el.bytesTransferred / el.totalBytes) * 100;
      }),
      finalize(() => {
        this.storage.ref(nameStr).getDownloadURL().subscribe((url) => {
          // this.selectedImageUrl = url;
          // console.log(url);
          this.url = url;
          this.urlOutput.emit(url);
        })
      })
    ).subscribe();
  }
}
