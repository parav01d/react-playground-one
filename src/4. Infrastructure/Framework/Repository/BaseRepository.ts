import "reflect-metadata"
import { stringify } from "qs";
import { map, Observable, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";

interface IAuthentifiable {
    token: string
}

export class BaseRepository {

    protected post = <B, R>(
        path: string,
        body: B,
        user?: IAuthentifiable
      ): Observable<R> => {
        return ajax
          .post(path, body, {
            ...(user ? { authorization: `Bearer ${user?.token}` } : {}),
          })
          .pipe(
            map((request) => {
              if (!request.response) throwError(() => Error(`${request.status}`));
              return request.response as R;
            })
          );
      };

    protected get = <P, R>(
        path: string,
        params: P,
        user?: IAuthentifiable
      ): Observable<R> => {
        return ajax
          .get(path + `?${stringify(params)}`, {
            ...(user ? { authorization: `Bearer ${user?.token}` } : {}),
          })
          .pipe(
            map((request) => {
              if (!request.response) throwError(() => Error(`${request.status}`));
              return request.response as R;
            })
          );
      };

      protected remove = <R>(path: string, user?: IAuthentifiable): Observable<R> => {
        return ajax
          .delete(path, {
            ...(user ? { authorization: `Bearer ${user?.token}` } : {}),
          })
          .pipe(
            map((request) => {
              if (!request.response) throwError(() => Error(`${request.status}`));
              return request.response as R;
            })
          );
      };


      protected put = <B, R>(
        path: string,
        body: B,
        user?: IAuthentifiable
      ): Observable<R> => {
        return ajax
          .put(path, body, {
            ...(user ? { authorization: `Bearer ${user?.token}` } : {}),
          })
          .pipe(
            map((request) => {
              if (!request.response) throwError(() => Error(`${request.status}`));
              return request.response as R;
            })
          );
      };
}
