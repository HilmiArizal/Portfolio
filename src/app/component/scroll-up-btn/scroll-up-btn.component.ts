import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-scroll-up-btn',
  templateUrl: './scroll-up-btn.component.html',
  styleUrls: ['./scroll-up-btn.component.css']
})
export class ScrollUpBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $(window).scroll(function () {
        if (this.scrollY > 300) {
          $('.scroll-up-btn').addClass("show")
        } else {
          $('.scroll-up-btn').removeClass("show")

        }
      })
    })
  }

  routerScroll(rs: any) {
    document.getElementById(rs)?.scrollIntoView({ behavior: 'smooth' })
  }

}
