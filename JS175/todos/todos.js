const express = require("express");
const morgan = require("morgan");
const todoLists = require('./lib/seed-data')
const TodoList = require('./lib/todolist')
const flash = require("express-flash");
const session = require("express-session");
const { body, validationResult } = require("express-validator");

const app = express();
const host = "localhost";
const port = 3000;

const sortedTodoLists = (lists) => {
  return lists.slice().sort((todoListA, todoListB) => {
    let isDoneA = todoListA.isDone();
    let isDoneB = todoListB.isDone();

    if (!isDoneA && isDoneB) {
      return -1;
    } else if (isDoneA && !isDoneB) {
      return 1;
    } else {
      let titleA = todoListA.title;
      let titleB = todoListB.title;

      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    }
  });
}

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(session({
  name: "launch-school-todos-session-id",
  resave: false,
  saveUninitialized: true,
  secret: "this is not very secure",
}));

app.use(flash());
app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

app.get("/", (req, res) => {
  res.render("lists", {
    todoLists: sortedTodoLists(todoLists)
  });
});

app.get("/lists/new", (req, res) => {
  res.render("new-list");
});

app.get("/lists", (req, res) => {
  res.redirect('/')
});

// Create a new todo list
app.post("/lists",
  [
    body("todoListTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The list title is required.")
      .isLength({ max: 100 })
      .withMessage("List title must be between 1 and 100 characters.")
      .custom(title => {
        let duplicate = todoLists.find(list => list.title === title);
        return duplicate === undefined;
      })
      .withMessage("List title must be unique."),
  ],
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(message => req.flash("error", message.msg));
      res.render("new-list", {
        flash: req.flash(),
        todoListTitle: req.body.todoListTitle,
      });
    } else {
      todoLists.push(new TodoList(req.body.todoListTitle));
      req.flash("success", "The todo list has been created.");
      res.redirect("/lists");
    }
  }
);

// Listener
app.listen(port, host, () => {
  console.log(`Todos is listening on port ${port} of ${host}!`);
});