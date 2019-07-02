import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {

  sending = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSend() {
    this.sending = true;

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  onClose() {
    this.closePopup();
  }

  private closePopup() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }

}
