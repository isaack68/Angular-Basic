
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccessDialogComponent } from './components/access-dialog/access-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selected : string = '0';
  status: Number = 1;
  text1: string = 'Start Interview';
  disabled1: boolean = true;
  disabled2: boolean = true;
  betaColor: string = 'yellow';
  seeResultsLink: string = ''
  surveyId: string = '';
  flag: boolean = true;
  newConfig: any;
  showFiller = false;
  hideSideNav = false;
  title = 'pma-app';
  mode: any = 'side';
  position: any= 'left'
  view = '';

  constructor(private router: Router, private dialog: MatDialog) {

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        email: '',
        code: ''
    };

    const dialogRef = this.dialog.open(AccessDialogComponent, dialogConfig);


  }
  

  ngOnInit(): void {
    this.openDialog();
  }
}
