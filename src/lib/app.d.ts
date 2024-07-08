// src/lib/app.d.ts

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  interface Locals {
    pb: import('pocketbase').default
    user: import('pocketbase').default['authStore']['model']
  }

  interface Post {
    id: string;
    author: string;
    content: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    avatar: string;
    username: string;
    likes: string[];
  }

  interface User {
    id: string;
    username: string;
  }

  interface Message {
    content: string;
    role: string;
  }
}
