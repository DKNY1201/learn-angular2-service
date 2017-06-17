import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LoggingService } from 'app/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  @Output() acountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.acountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this.loggingService.loggingToConsole(accountStatus);
  }

}
