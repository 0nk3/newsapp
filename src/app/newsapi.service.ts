import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";

export const API_KEY = "a8df5689d6aa422f8fb8b80bef328af8";
@Injectable({
  providedIn: "root",
})
export class NewsapiService {
  constructor(private httpClient: HttpClient) {}

  // lets add a method to send GET requests to the TechCrunch endpoint
  getNews() {
    return this.httpClient.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
    );
  }
}
