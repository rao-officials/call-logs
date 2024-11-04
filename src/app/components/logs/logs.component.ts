import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs:any =[];
  conversation:any;

  constructor(private logService : LogService) { }

  
  ngOnInit(): void {
    this.getLogs();
  }


  getLogs(){
    this.logService.getCallLogs().subscribe((data => {
      if(data){
        this.logs = data;
        this.logs.sort((a: any, b: any) => {
          const dateA = new Date(a.createdAt).getTime();
          const dateB = new Date(b.createdAt).getTime();
          return dateB - dateA;
        });
      }
    }));
  }
  

  getConversation(conversationURL:any){
    this.logService.getConversation(conversationURL).subscribe((data)=>{
      if(data){
        console.log(data);
        var anchor = document.createElement('a')
        anchor.href = data.url;
        anchor.target = "_blank";
        anchor.click();
      }
    })
  }


  openModal(log :any){
    this.conversation = log
  }

}
