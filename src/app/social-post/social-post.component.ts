import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-social-post",
  templateUrl: "./social-post.component.html",
  styleUrls: ["./social-post.component.css"]
})
export class SocialPostComponent implements OnInit {
  posts: Post[] = [
    { title: "hello1", thought: "world!!!" },
    { title: "hello2", thought: "world!!!" },
    { title: "hello3", thought: "world!!!" }
  ];
  show: boolean = false;

  constructor() {}
  onDelete(index: number): void {
    this.posts.splice(index, 1);
  }
  onSubmit(newEntry: Post): void {
    this.posts.unshift(newEntry);
  }
  toggleForm() {
    this.show = !this.show;
  }
  ngOnInit() {}
}
