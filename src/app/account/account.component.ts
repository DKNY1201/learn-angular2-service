import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from "app/logging.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  @Output() changeStatus = new EventEmitter<{id: number, status: string}>();

  setStatus(newStatus: string) {
    this.changeStatus.emit({id: this.id, status: newStatus});
    this.loggingService.loggingToConsole(newStatus);
  }
}
