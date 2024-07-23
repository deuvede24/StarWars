
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User, Login, AuthResponse } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  httpClient = inject(HttpClient);

  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.apiUrl}/register`, user);
  }

  login(user: Login): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.apiUrl}/login`, user).pipe(
      tap((response: AuthResponse) => {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  get currentUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
