import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationHistoryComponent } from './components/conversation-history/conversation-history.component';

const routes: Routes = [
  // { path: 'conversation', component: ConversationHistoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
