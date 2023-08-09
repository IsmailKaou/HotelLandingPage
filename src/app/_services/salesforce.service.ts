import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SalesforceService {
  constructor(private http: HttpClient) {}
  addLead(leadData: any) {
    const endpoint =
      'https://ensa-7b-dev-ed.develop.my.salesforce.com/services/apexrest/Leads/'; // Replace with the appropriate API endpoint for your Salesforce instance
    const accessToken = ''; // Replace with your Salesforce access token

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken)
      .set('Content-Type', 'application/json');

    return this.http.post(endpoint, leadData, { headers });
  }
}
