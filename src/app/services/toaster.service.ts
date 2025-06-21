import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  toastr = inject(ToastrService);

  showToast(
    message: string,
    title: string = '',
    type: 'success' | 'error' | 'info' | 'warning' = 'success'
  ) {
    switch (type) {
      case 'success':
        this.toastr.success(message, title);
        break;
      case 'error':
        this.toastr.error(message, title);
        break;
      case 'info':
        this.toastr.info(message, title);
        break;
      case 'warning':
        this.toastr.warning(message, title);
        break;
      default:
        this.toastr.show(message, title);
    }
  }
}
