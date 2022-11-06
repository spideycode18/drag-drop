import {
  Component,
  VERSION,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
// import PlainDraggable from 'plain-draggable';
declare const PlainDraggable: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular ' + VERSION.major;
  text = new FormControl('');

  @ViewChild('container', { static: true })
  public container: any;

  @ViewChild('draggable', { static: true })
  public handle: any;

  public ngOnInit(): void {
    const container = this.container.nativeElement;
    const handle = this.handle.nativeElement;

    const options = {
      containment: container,
    };

    function init() {
      try {
        const draggable = new PlainDraggable(handle);
      } catch (error) {
        setTimeout(init, 200);
      }
    }
    init();

    // draggable.onDrag = function(newPosition) {
    //   if (newPosition.left > this.rect.left) {
    //     newPosition.left = this.rect.left + 48; // Move it 48px to the right forcibly.
    //   }
    // };
  }

  public ngOnDestroy(): void {}
}
