import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $(window).scroll(function () {
        if (this.scrollY > 20) {
          $('.navbar').addClass("sticky");
        } else {
          $('.navbar').removeClass("sticky");
        }
      })

      $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
      })
    })
  }

  routerScroll(rs: any) {
    switch (rs) {
      case 'home':
        document.getElementById(rs)?.scrollIntoView({ behavior: "smooth" });
        break;
      case 'about':
        document.getElementById(rs)?.scrollIntoView({ behavior: "smooth" });
        break;
      case 'skill':
        document.getElementById(rs)?.scrollIntoView({ behavior: "smooth" });
        break;
      case 'project':
        document.getElementById(rs)?.scrollIntoView({ behavior: "smooth" });
        break;
      case 'contact':
        document.getElementById(rs)?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }

}
