import { Component, OnInit } from "@angular/core";
import { Router, Routes } from "@angular/router";

@Component({
  selector: "app-new-c",
  templateUrl: "./new-c.component.html",
  styleUrls: ["./new-c.component.scss"],
})
export class NewCComponent implements OnInit {
  constructor(private _router: Router) {}
  savedetails() {
    this._router.navigateByUrl("/");
  }

  ngOnInit(): void {}
}
