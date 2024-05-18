import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test, User } from './models';
 
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private http: HttpClient) {}
 
  getWords(type: string) {
    debugger
    if (type === 'simple') {
      return this.http.get('https://localhost:44302/api/Test/GetSimpleWords');
      //https://localhost:44302/api/Test/GetAdvancedWords
    } else {
      return this.http.get('https://localhost:44302/api/Test/GetAdvancedWords');
    }
  }
 //https://localhost:44302/api/Test/InsertTest
  saveTest(test: Test) {
    return this.http.post('https://localhost:44302/api/Test/InsertTest', test, {
      responseType: 'text',
    });
  }
 
  getAllTestsOfUser(id: number) {
    return this.http.get(
      'https://localhost:44302/api/Test/GetAllTestsOfUser/' + id
    );
  }
 
  register(newUser: User) {
    return this.http.post(
      'https://localhost:44302/api/User/CreateUser',
      newUser,
      { responseType: 'text' }
    );
  }
 
  login(email: string, pwd: string) {
    let data = new HttpParams();
    data = data.append('email', email);
    data = data.append('pass', pwd);
    return this.http.get('https://localhost:44302/api/User/LoginUser', {
      params: data,
    });
  }
 
  logOut() {
    localStorage.removeItem('user');
  }
 
  setUser(newUser: User) {
    localStorage.setItem('user', JSON.stringify(newUser));
  }
 
  getUser(): any {
    return localStorage.getItem('user');
  }
 
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}