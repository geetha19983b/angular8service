import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }
  logStatus(status:string)
  {
    console.log('A server status changed,new status ' +
    status);
  }
}
