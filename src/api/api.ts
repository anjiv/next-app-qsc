import { cache } from "react";

type Todo = {
  id: number
  title: string
  completed: boolean
};

type User = {
  id: number
  name: string
  email: string
  website: string
  address: {
    city: string
    street: string
    zipcode: string
    suite: string
  }
  company: {
    name: string
  }
};

// If don't want to cache fetch request then use AbortController signal.
export async function getTodos() {
  return fetch(`${process.env.API_URL}/todos`, {next: {tags: ["Todo"]}})
    .then(response => response.json())
    .then(data => data as Todo[]);
}

export async function getTodosTags() {
  return fetch(`${process.env.API_URL}/todos/1`, {next: {tags: ["Todo", "1"]},
  })
    .then(response => response.json())
    .then(data => data as Todo);
}

export async function getTodosRevalidate() {
  return fetch(`${process.env.API_URL}/todos/1`, {next: {revalidate: 50},
  })
    .then(response => response.json())
    .then(data => data as Todo);
}

export async function getUsers() {
  return fetch(`${process.env.API_URL}/users`, {next: {tags: ["User"]}})
    .then(response => response.json())
    .then(data => data as User[]);
}

export const getNewTodo = cache(() => {
  console.log("New todo added");
  return Promise.resolve({id: 300, title: "Testing cache", completed: false});
});
