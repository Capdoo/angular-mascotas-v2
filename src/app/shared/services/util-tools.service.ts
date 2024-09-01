import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class UtilToolsService {

  interval: any;
  timeLeft: number = 1;

  constructor(    private spinner: NgxSpinnerService
  ) { }

  mostrarMensaje() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  successNotif(component: string, message: string): void {
    Swal.fire({
      title: component,
      text: message,
      icon: "success",
      // showCancelButton: true,
      confirmButtonColor: "#3085d6",
      // cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar"
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  }

  errNotif(component: string, message: string): void {
    Swal.fire({
      title: component,
      text: message,
      icon: "error",
      // showCancelButton: true,
      confirmButtonColor: "#3085d6",
      // cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar"
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  }

  Timer = () => {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.spinner.show();
        clearInterval(this.interval);
        this.interval = 0;
        this.timeLeft = 1;
      }
    }, 300);
  }

  public CloseTimer = () => {
    clearInterval(this.interval);
    this.interval = 0;
    this.timeLeft = 1;
    this.spinner.hide();
  }
}
