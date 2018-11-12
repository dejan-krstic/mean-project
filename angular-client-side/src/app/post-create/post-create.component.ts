import { Component } from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = '';

  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = this.enteredValue;
    // this.newPost = postInput.value;
  }
}


console.dir(new PostCreateComponent);
