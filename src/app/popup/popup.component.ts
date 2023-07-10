import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { cargaimg } from '../utils/carga-img';

export interface PopupData {
  panelClass: string;
  message: any;
  height: string;
  width: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [
    trigger('centerAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.5)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('hidden => visible', animate('50ms ease-in')),
      transition('visible => hidden', animate('50ms ease-out'))
    ])
  ]
})
export class PopupComponent implements OnInit {
  imgs: any;
  length = 0;

  isLooping: boolean = true;
  isImageVisible: boolean = true;

  img = { id: 100, url: '../../assets/decoration/loading.jpg'};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PopupData,
    private dialogRef: MatDialogRef<PopupComponent>
  ) {
    this.imgs = data.message;
    console.log(data)
  }

  ngOnInit() {
    this.length = this.imgs.length;
    this.startLoop()
  }

  toggleLoop() {
    this.isLooping = !this.isLooping;
    if (this.isLooping) {
      this.startLoop();
    }
  }

  startLoop() {
    setTimeout(() => {
      let n = 0;
      if (this.length > 0) {
        n = this.getRandomInt(this.length);
      }
      this.img = this.imgs[n];

      this.isImageVisible = !this.isImageVisible;

      if (this.isLooping) {
        this.startLoop();
      }
    }, 70);
  }

  closeDialog() {
    this.imgs = this.eliminarElemento(this.img, this.imgs);
    this.dialogRef.close({ img: this.img , imgs: this.imgs });
  }

  eliminarElemento(objeto: any, vector: any[]) {
    const nuevoVector = vector.filter(item => item !== objeto);
    vector.splice(0, vector.length, ...nuevoVector);
    return vector
  }

  
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ngAfterViewInit() {
    this.dialogRef.backdropClick().subscribe(() => {
      this.closeDialog();
    });
  }
}
