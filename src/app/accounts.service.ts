import { Injectable, EventEmitter } from "@angular/core";

import { LoggingService } from "app/logging.service";

@Injectable()

export class AccountsService {
    constructor(private loggingService: LoggingService) {}
    accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Test Account",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];

  onAccountAdded(accountName: string, accountStatus: string) {
    this.accounts.push({name: accountName, status: accountStatus});
    this.loggingService.logAccountStatus(accountStatus);
  }

  onStatusChanged(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logAccountStatus(status);
  }

  statusUpdated = new EventEmitter<string>();
}