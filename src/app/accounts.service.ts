export class AccountsService {
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
  }

  onStatusChanged(id: number, status: string) {
    this.accounts[id].status = status;
  }
}