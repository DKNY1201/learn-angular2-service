import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  onAccountAdded(account: {name: string, status: string}) {
    this.accounts.push({
      name: account.name,
      status: account.status
    });
  }

  onStatusChanged(data: {id: number, status: string}) {
    this.accounts[data.id].status = status;
  }
}
