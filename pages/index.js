import Head from "next/head";
import Login from "./components/user/login";
// import Register from "./components/user/Register";
import Nav from "./components/header/Nav";
import Indexfl from "./components/body/Indexfl";

export default function Home() {
  //Name List
  // const nameList = [
  //   { name: "name1", shelf: "a" },
  //   { name: "name2", shelf: "a" },
  // ];

  return (
    <>
      <a href="http://localhost:3000">
        <img src="favicon2.jpg" alt="logo" width="100" height="100"></img>
      </a>
      <head>
        <title>Home Page</title>
        <meta name="description" content="" />
        <link rel="icon" href="favicon3.ico" />
      </head>

      <body>
        <Nav />
        <Indexfl />
      </body>
    </>
  );
}
