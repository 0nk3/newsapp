import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsapiService } from "../newsapi.service";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: NewsapiService
  ) {}

  ionViewDidEnter() {
    this.apiService.getNews().subscribe((news) => {
      console.log(news);
      this.articles = news.articles;
    });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
  }
}
