const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const url = require("url");
const querystring = require("node:querystring");
const returnPrimes = require("./files/primes.js").returnPrimes;
const showFactorial = require("./files/factorial.js").showFactorial;

const server = http.createServer(async (req, res) => {
  console.log(`server is running!`);
  try {
    const thisUrl = new URL(req.url, `http://${req.headers.host}`);
    const { pathname, searchParams } = thisUrl;

    if (pathname === "/pages") {
      const pagesData = await fs.readFile("./files/pages.html", {
        encoding: "utf8",
      });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(pagesData);
      return res.end();
    }

    if (pathname === "/pages/about") {
      const pagesData = await fs.readFile("./files/about.html", {
        encoding: "utf8",
      });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(pagesData);
      return res.end();
    }

    if (pathname === "/pages/sports") {
      const pagesData = await fs.readFile("./files/sports.html", {
        encoding: "utf8",
      });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(pagesData);
      return res.end();
    }

    if (pathname === "/files") {
      const pagesData = await fs.readFile("./files/files.html", {
        encoding: "utf8",
      });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(pagesData);
      return res.end();
    }

    if (pathname === "/files/people") {
      const pagesData = await fs.readFile("./files/people.txt", {
        encoding: "utf8",
      });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(pagesData);
      return res.end();
    }

    if (pathname === "/files/shops") {
      const pagesData = await fs.readFile("./files/shops.txt", {
        encoding: "utf8",
      });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(pagesData);
      return res.end();
    }

    if (pathname === "/contacts") {
      const pagesData = await fs.readFile("./files/contacts.json", {
        encoding: "utf8",
      });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(pagesData);
      return res.end();
    }

    if (pathname.includes("/contacts/")) {
      const personId = pathname.replace(/\/contacts\//, "");
      const pagesData = await fs.readFile("./files/contacts.json", {
        encoding: "utf8",
      });

      const parsedData = JSON.parse(pagesData);

      console.log(parsedData);
      const contactsArr = parsedData["contacts"];
      console.log(contactsArr);
      const thisContact = contactsArr.find(
        (person) => person.id == parseInt(personId)
      );

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(JSON.stringify(thisContact));
      return res.end();
    }

    if (pathname === "/comps") {
      const pagesData = await fs.readFile("./files/comps.html", {
        encoding: "utf8",
      });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(pagesData);
      return res.end();
    }

    if (pathname.includes("/comps/primes/")) {
      const givenNum = pathname.replace(/\/comps\/primes\//, "");
      const allPrimes = returnPrimes(givenNum);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(JSON.stringify(allPrimes));
      return res.end();
    }

    if (pathname.includes("/comps/factorial/")) {
      const givenNum = pathname.replace(/\/comps\/factorial\//, "");
      const thisFactorial = showFactorial(givenNum);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(JSON.stringify(thisFactorial));
      return res.end();
    }
  } catch (err) {
    console.error(err);
  }
});

server.listen(8080, () => {
  const { adress, port } = server.address();
  console.log(`Server is listening on http://localhost:8080/pages`);
});
