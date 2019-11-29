//import { Component, EventEmitter, Output } from '@angular/core';
import {Component} from '@angular/core';
import {LoggingServiceService} from '../logging-service.service';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingServiceService],
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  
  constructor(private loggingService: LoggingServiceService,
    private accountService:AccountService){

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    /* this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    }); */
    //console.log('A server status changed, new status: ' + accountStatus);
    this.loggingService.logStatus(accountStatus);
    this.accountService.addAccount(accountName,accountStatus);
  }
}
