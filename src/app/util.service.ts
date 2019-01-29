import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  fileNameDialogRef: MatDialogRef<DialogComponent>;

  constructor(public dialog: MatDialog) { }

  openDialog(content:string): void {
    this.fileNameDialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      height: 'auto',
      data: { message: content }
    });

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
