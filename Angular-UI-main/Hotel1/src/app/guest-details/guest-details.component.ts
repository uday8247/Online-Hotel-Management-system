import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Guest } from '../guest';
import { ActivatedRoute } from '@angular/router';
import { GuestService } from '../guest.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  name = 'Angular';


  id: string
  guest: Guest
  constructor(private route: ActivatedRoute, private guestService: GuestService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['emailid'];

    this.guest = new Guest();
    this.guestService.getGuestById(this.id).subscribe(data => {
      this.guest = data;
    });
  }

  @ViewChild('content', { static: false }) content: ElementRef;


  public downloadPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }

}