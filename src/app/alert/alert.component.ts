import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit {
  alerts: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  createAlert(message: string, alertType: string, timeout: number) {
    if (!this.checkTypeOfAlert(alertType)) {
      throw "Invalid alert type";
    }

    let anAlert = {
      id: this.alerts.length,
      message: message,
      alertType: alertType,
      timeout: timeout
    }

    this.alerts.push(anAlert);

    // If timeout equals 0, do not automatically dismiss alert
    if (timeout != 0) {
      setTimeout(() => {
        var index = this.alerts.indexOf(anAlert);
        if (index > -1) {
          this.alerts.splice(index, 1);
        }
      }, anAlert.timeout);
    }
  }

  checkTypeOfAlert(type: string) {
    let typeOfAlerts = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark"]
    return typeOfAlerts.includes(type);
  }
}

