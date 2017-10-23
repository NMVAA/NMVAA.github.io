import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {

  constructor() { }


  comments = commentsList;
  ngOnInit() {
  }
  newComment: Comment;

  keyDown(event: any, input: any) {
    if (event.keyCode === 13 && event.ctrlKey) {
      this.addComment(event, input);
      input.value = ""
    }
  }
  addComment(event: Event, input: any) {
    event.preventDefault();
    console.log(event);
    if (input.value) {
      this.comments.push({
        date: Date.now(),
        text: input.value
      })
      input.value = "";
    }
  }
}
export class Comment {
  name?: string;
  date: any;
  text: string;
}
let commentsList: Comment[] = [
  {
    name: "Веронка",
    date: "01 jun 2000",
    text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",

  }, {
    name: "Вероника",
    date: "01 jun 2000",
    text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",

  }, {
    name: "Вероника",
    date: "01 jun 2000",
    text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",

  }
]
