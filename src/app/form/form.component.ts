import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Post } from "../post";
import { format } from "url";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  newPost: Post = {
    title: "",
    thought: ""
  };
  @Output()
  submitted = new EventEmitter<Post>();
  constructor() {}
  submitPost() {
    this.submitted.emit(this.newPost);
  }
  ngOnInit() {}
}
