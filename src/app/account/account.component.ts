import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from "app/logging.service";
import { AccountsService } from "app/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
  }

  setStatus(newStatus: string) {
    this.accountsService.onStatusChanged(this.id, newStatus);
    this.accountsService.statusUpdated.emit(newStatus);
  }
}
