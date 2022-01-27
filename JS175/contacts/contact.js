const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const store = require("connect-loki");

const app = express();
const LokiStore = store(session);

const contactData = [
  {
    firstName: "Mike",
    lastName: "Jones",
    phoneNumber: "281-330-8004",
  },
  {
    firstName: "Jenny",
    lastName: "Keys",
    phoneNumber: "768-867-5309",
  },
  {
    firstName: "Max",
    lastName: "Entiger",
    phoneNumber: "214-748-3647",
  },
  {
    firstName: "Alicia",
    lastName: "Keys",
    phoneNumber: "515-489-4608",
  },
];

const sortContacts = (contacts) => {
  return contacts.slice().sort((contactA, contactB) => {
    if (contactA.lastName < contactB.lastName) {
      return -1;
    } else if (contactA.lastName > contactB.lastName) {
      return 1;
    } else if (contactA.firstName < contactB.firstName) {
      return -1;
    } else if (contactA.firstName > contactB.firstName) {
      return 1;
    } else {
      return 0;
    }
  });
};

app.set("views", "./views");
app.set("view engine", "pug");

const clone = object => {
  return JSON.parse(JSON.stringify(object));
};

app.use(express.static("public"));
app.use(morgan("common"));
app.use(express.urlencoded({extended:false}))

app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days in milliseconds
    path: "/",
    secure: false,
  },
  name: "launch-school-contacts-manager-session-id",
  resave: false,
  saveUninitialized: true,
  secret: "this is not very secure",
  store: new LokiStore({}),
}));

app.use((req, res, next) => {
  if (!("contactData" in req.session)) {
    req.session.contactData = clone(contactData);
  }

  next();
});

app.get("/", (req, res) => {
  app.locals.id = 'bob'
  res.redirect("/contacts");
});

app.get("/contacts/new", (req, res) => {
  res.render("new-contact");
});

app.get("/contacts", (req, res) => {
  res.render("contacts", {
    contacts: sortContacts(req.session.contactData),
  });
});

app.post("/contacts/new",
  (req, res, next) => {
    res.locals.errorMessages = [];
    next();
  },
  (req, res, next) => {
    if (req.body.firstName.length === 0) {
      res.locals.errorMessages.push("First name is required.");
    }

    next();
  },
  (req, res, next) => {
    if (req.body.lastName.length === 0) {
      res.locals.errorMessages.push("Last name is required.");
    }

    next();
  },
  (req, res, next) => {
    if (req.body.phoneNumber.length === 0) {
      res.locals.errorMessages.push("Phone number is required.");
    }

    next();
  },
  (req, res, next) => {
    if (req.body.firstName.length > 25) {
      res.locals.errorMessages.push("Name must be less than 25 characters")
    }
    if(req.body.lastName.length > 25) {
      res.locals.errorMessages.push('Last Name must be less than 25 characters')
    }
    next()
  },
  (req, res, next) => {
    if (res.locals.errorMessages.length > 0) {
      res.render("new-contact", {
        errorMessages: res.locals.errorMessages,
      });
    } else {
      next();
    }
  },
  (req, res, next) => {
    const nums = [0,1,2,3,4,5,6,7,8,9, '-'].map(ele => ele.toString())
    let valid = true;
    console.log(req.body.phoneNumber.split(''))
    req.body.phoneNumber.split('').forEach(char => {
      if(!nums.includes(char)) {
        valid = false;
      }
    })
   
    console.log(valid)

    if(req.body.phoneNumber.length != 12) {
      valid = false;
    }

    if(!valid) {
      res.locals.errorMessages.push("not valid phone number")
      res.render("new-contact", {
        errorMessages: res.locals.errorMessages,
      });
    }
    else {
      next()
    }
  },
  (req, res) => {
    req.session.contactData.push({
      firstName: req.body.firstName.trim(),
      lastName: req.body.lastName.trim(),
      phoneNumber: req.body.phoneNumber.trim(),
    });

    res.redirect("/contacts");
  }
);

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});
