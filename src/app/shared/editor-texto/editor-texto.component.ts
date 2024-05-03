import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Editor} from 'ngx-editor';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editor-texto',
  templateUrl: './editor-texto.component.html',
  styleUrls: ['./editor-texto.component.css'],
})
export class EditorTextoComponent implements OnInit, OnDestroy {

  constructor(
    public dialogRef: MatDialogRef<EditorTextoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  editor!: Editor;
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm():void {
    this.dialogRef.close(true)
  }

  agregarHistoria(){
    console.log(this.editor.view.dom.innerText)
    this.onNoClick();
  }

  Atras(){
    console.log("Atrás")
    this.onConfirm();
  }
}
