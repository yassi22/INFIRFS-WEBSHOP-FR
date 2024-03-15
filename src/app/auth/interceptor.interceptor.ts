import { HttpInterceptorFn } from '@angular/common/http';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
 const authtoken = localStorage.getItem("auth_token") 
 
 if(authtoken != null){ 

  let newReq = req.clone({
    setHeaders: { 
        Authorization: "Bearer" + authtoken
    } 

  })
  return next(newReq)

 } else { 
  return next(req);
 }
 
};
