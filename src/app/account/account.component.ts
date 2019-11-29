import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingServiceService } from '../logging-service.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService:LoggingServiceService,
    private accountService:AccountService){}
  onSetTo(status: string) {
   // this.statusChanged.emit({id: this.id, newStatus: status});
   // console.log('A server status changed, new status: ' + status);
   this.loggingService.logStatus(status);
   this.accountService.updateStatus(this.id,status);
  }
}
