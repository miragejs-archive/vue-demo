import { Server, Model } from "@miragejs/server";

let server = new Server({
  // seeds(server) {
  // server.create("todo", { text: "Buy groceries", isDone: false });
  // server.create("todo", { text: "Walk the dog", isDone: false });
  // server.create("todo", { text: "Do laundry", isDone: false });
  // },

  routes() {
    this.namespace = "api";
    this.timing = 1000;

    this.get("/todos", () => {
      return {
        todos: [{ id: 1, text: "Walk dog" }, { id: 2, text: "Buy milk" }]
      };
    });

    this.patch("/todos/:id", () => {
      return {};
    });

    // this.get("/todos", ({ db }) => {
    //   return { todos: db.todos };
    // });
    //
    // this.patch("/todos/:id", (schema, request) => {
    //   let todo = JSON.parse(request.requestBody).data;
    //
    //   return schema.db.todos.update(todo.id, todo);
    // });
  }
});

window.server = server;
