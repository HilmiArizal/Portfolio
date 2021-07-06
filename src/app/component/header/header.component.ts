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

      $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
      })
    })

  }

}
