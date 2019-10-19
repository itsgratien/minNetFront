import { HttpHeaders } from '@angular/common/http';

export const headers = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: localStorage.getItem('appToken')
      })
};
