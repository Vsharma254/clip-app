import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cli-app';

  hoverONmanu($event) {
    let xy = $event.target.getBoundingClientRect();
    let list = $('#listofDiv');
    list.css('display', 'block');
    list.css('left', (xy.left + xy.width));
    list.css('top', (xy.top));
    let cont = $('#content-wrapper');
    cont.addClass('overlay');
    console.log(xy);
  }
  hoverONList1($event) {
    let xy = $('#listofDiv')[0].getBoundingClientRect();
    let list = $('#listofDiv2');
    list.css('display', 'block');
    list.css('left', (xy.left + xy.width));
    list.css('top', (xy.top));
    let list3 = $('#listofDiv3');
    list3.css('display', 'none');
  }
  hoverONList2($event) {
    let xy = $('#listofDiv2')[0].getBoundingClientRect();
    let list = $('#listofDiv3');
    list.css('display', 'block');
    list.css('left', (xy.left + xy.width));
    list.css('top', (xy.top));
  }
  secondLevelHover($event) {
    let one = $('#listofDiv');
    let two = $('#listofDiv3');
    let tree = $('#listofDiv2');

    one.css('display', 'none');
    two.css('display', 'none');
    tree.css('display', 'none');

    let cont = $('#content-wrapper');
    cont.removeClass('overlay');
  }
}
