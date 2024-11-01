import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-conversation-history',
  templateUrl: './conversation-history.component.html',
  styleUrls: ['./conversation-history.component.css']
})
export class ConversationHistoryComponent implements OnInit {
  search ='';
  tripsList = [];
  @Input() logs: any
  @Output() closeModal = new EventEmitter()
  
  constructor(private logService: LogService) { }

  ngOnInit(): void {
  }

  close(){
    this.closeModal.emit()
  }
}
