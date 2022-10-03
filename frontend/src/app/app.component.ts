import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular';

  onlineEvent!: Observable<Event>;
  offlineEvent!: Observable<Event>;
  subscriptions: Subscription[] = [];
  statusMessage!: string;
  networkstatus!: string;
  ONLINE: string = 'online';
  OFFLINE: string = 'offline';

  ngOnInit(): void {
    this.onlineEvent = fromEvent(window, this.ONLINE);
    this.offlineEvent = fromEvent(window, this.OFFLINE);

    this.subscriptions.push(
      this.onlineEvent.subscribe(e => {
        this.networkstatus = this.ONLINE;
        this.statusMessage = 'Back to online';
        const shouldShowTill = timer(5000);
        shouldShowTill.subscribe(() => {
          this.statusMessage = '';
          this.networkstatus = '';
        });
      })
    );

    this.subscriptions.push(
      this.offlineEvent.subscribe(e => {
        this.networkstatus = this.OFFLINE;
        this.statusMessage =
          'Connection lost! You are not connected to internet';
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
