import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

  posts: any[] = [];
  newPost: any = {};
  updatePost: any = {};
  postIdToDelete: number = 0;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  addPost(): void {
    this.postService.createPost(this.newPost).subscribe(data => {
      this.posts.unshift(data);
      this.newPost = {};
    });
  }

  editPost(post: any): void {
    this.updatePost = { ...post };
  }

  updatePostData(): void {
    this.postService.updatePost(this.updatePost.id, this.updatePost).subscribe(data => {
      const index = this.posts.findIndex(post => post.id === data.id);
      this.posts[index] = data;
      this.updatePost = {};
    });
  }

  deletePost(): void {
    this.postService.deletePost(this.postIdToDelete).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== this.postIdToDelete);
      this.postIdToDelete = 0;
    });
  }

}
