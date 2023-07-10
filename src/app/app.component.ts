import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent, PopupData } from './popup/popup.component';
import { cargaimg } from './utils/carga-img';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgs = cargaimg()

  vector = [{id: 0, url: '../assets/decoration/33.333x/2 (2).png'}, {id: 1, url: '../assets/decoration/33.333x/2 (5).png'}, {id: 2, url: '../assets/decoration/33.333x/2 (4).png'}, {id: 3, url: '../assets/decoration/33.333x/2 (9).png'}, {id: 4, url: '../assets/decoration/33.333x/2 (8).png'}, {id: 5, url: '../assets/decoration/33.333x/2 (10).png'}, {id: 6, url: '../assets/decoration/33.333x/2 (1).png'}, {id: 7, url: '../assets/decoration/33.333x/2 (6).png'}, {id: 8, url: '../assets/decoration/33.333x/2 (3).png'}, {id: 9, url: '../assets/decoration/33.333x/2 (7).png'}]


  vector2 = [{id: 10, url: '../assets/decoration/33.333x/2 (7).png'}, {id: 11, url: '../assets/decoration/33.333x/2 (4).png'}, {id: 12, url: '../assets/decoration/33.333x/2 (3).png'}, {id: 13, url: '../assets/decoration/33.333x/2 (8).png'}, {id: 14, url: '../assets/decoration/33.333x/2 (10).png'}, {id: 15, url: '../assets/decoration/33.333x/2 (1).png'}, {id: 16, url: '../assets/decoration/33.333x/2 (2).png'}, {id: 17, url: '../assets/decoration/33.333x/2 (6).png'}, {id: 18, url: '../assets/decoration/33.333x/2 (5).png'}, {id: 19, url: '../assets/decoration/33.333x/2 (9).png'}]


  vector3 = [{id: 20, url: '../assets/decoration/33.333x/2 (4).png'}, {id: 21, url: '../assets/decoration/33.333x/2 (10).png'}, {id: 22, url: '../assets/decoration/33.333x/2 (7).png'}, {id: 23, url: '../assets/decoration/33.333x/2 (8).png'}, {id: 24, url: '../assets/decoration/33.333x/2 (2).png'}, {id: 25, url: '../assets/decoration/33.333x/2 (5).png'}, {id: 26, url: '../assets/decoration/33.333x/2 (1).png'}, {id: 27, url: '../assets/decoration/33.333x/2 (3).png'}, {id: 28, url: '../assets/decoration/33.333x/2 (9).png'}, {id: 29, url: '../assets/decoration/33.333x/2 (6).png'}]


  vector4 = [{id: 30, url: '../assets/decoration/33.333x/2 (10).png'}, {id: 31, url: '../assets/decoration/33.333x/2 (1).png'}, {id: 32, url: '../assets/decoration/33.333x/2 (4).png'}, {id: 33, url: '../assets/decoration/33.333x/2 (8).png'}, {id: 34, url: '../assets/decoration/33.333x/2 (5).png'}, {id: 35, url: '../assets/decoration/33.333x/2 (9).png'}, {id: 36, url: '../assets/decoration/33.333x/2 (7).png'}, {id: 37, url: '../assets/decoration/33.333x/2 (3).png'}, {id: 38, url: '../assets/decoration/33.333x/2 (2).png'}, {id: 39, url: '../assets/decoration/33.333x/2 (6).png'}]


  vector5 = [{id: 40, url: '../assets/decoration/33.333x/2 (8).png'}, {id: 41, url: '../assets/decoration/33.333x/2 (5).png'}, {id: 42, url: '../assets/decoration/33.333x/2 (3).png'}, {id: 43, url: '../assets/decoration/33.333x/2 (2).png'}, {id: 44, url: '../assets/decoration/33.333x/2 (9).png'}, {id: 45, url: '../assets/decoration/33.333x/2 (4).png'}, {id: 46, url: '../assets/decoration/33.333x/2 (1).png'}, {id: 47, url: '../assets/decoration/33.333x/2 (6).png'}, {id: 48, url: '../assets/decoration/33.333x/2 (7).png'}, {id: 49, url: '../assets/decoration/33.333x/2 (10).png'}]


  vector6 = [{id: 50, url: '../assets/decoration/33.333x/2 (6).png'}, {id: 51, url: '../assets/decoration/33.333x/2 (1).png'}, {id: 52, url: '../assets/decoration/33.333x/2 (3).png'}, {id: 53, url: '../assets/decoration/33.333x/2 (4).png'}, {id: 54, url: '../assets/decoration/33.333x/2 (9).png'}, {id: 55, url: '../assets/decoration/33.333x/2 (2).png'}, {id: 56, url: '../assets/decoration/33.333x/2 (10).png'}, {id: 57, url: '../assets/decoration/33.333x/2 (8).png'}, {id: 58, url: '../assets/decoration/33.333x/2 (5).png'}, {id: 59, url: '../assets/decoration/33.333x/2 (7).png'}]

  vector7 = [{id: 60, url: '../assets/decoration/33.333x/2 (2).png'}, {id: 61, url: '../assets/decoration/33.333x/2 (3).png'}, {id: 62, url: '../assets/decoration/33.333x/2 (8).png'}, {id: 63, url: '../assets/decoration/33.333x/2 (7).png'}, {id: 64, url: '../assets/decoration/33.333x/2 (10).png'}, {id: 65, url: '../assets/decoration/33.333x/2 (9).png'}, {id: 66, url: '../assets/decoration/33.333x/2 (6).png'}, {id: 67, url: '../assets/decoration/33.333x/2 (1).png'}, {id: 68, url: '../assets/decoration/33.333x/2 (4).png'}, {id: 69, url: '../assets/decoration/33.333x/2 (5).png'}]
  vector8 = [{id: 70, url: '../assets/decoration/33.333x/2 (6).png'}, {id: 71, url: '../assets/decoration/33.333x/2 (5).png'}, {id: 72, url: '../assets/decoration/33.333x/2 (1).png'}, {id: 73, url: '../assets/decoration/33.333x/2 (3).png'}, {id: 74, url: '../assets/decoration/33.333x/2 (10).png'}]

  title = 'bingo-project';

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const popupData: PopupData = {
      panelClass: 'custom-dialog',
      message: this.imgs,
      width: '600px',
      height: '600px'
    };

    const dialogRef: MatDialogRef<PopupComponent> = this.dialog.open(PopupComponent, {
      data: popupData,
      width: '600px',
      height: '600px'
    });
    dialogRef.afterClosed().subscribe((value: any) => {
      this.remplazoimg(value.img)
      this.imgs = value.imgs

    });
  }

  remplazoimg(img: any) {
    if (img.id >= 0 && img.id < 10) {
      this.vector[img.id] = img;
    } else if (img.id >= 10 && img.id < 20) {
      this.vector2[img.id - 10] = img;
    } else if (img.id >= 20 && img.id < 30) {
      this.vector3[img.id - 20] = img;
    } else if (img.id >= 30 && img.id < 40) {
      this.vector4[img.id - 30] = img;
    } else if (img.id >= 40 && img.id < 50) {
      this.vector5[img.id - 40] = img;
    } else if (img.id >= 50 && img.id < 60) {
      this.vector6[img.id - 50] = img;
    } else if (img.id >= 60 && img.id < 70) {
      this.vector7[img.id - 60] = img;
    } else if (img.id >= 70 && img.id < 80) {
      this.vector8[img.id - 70] = img;
    }
  }
}
