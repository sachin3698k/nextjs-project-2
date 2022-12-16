import Head from "next/head";
import Login from "./components/user/login";
// import Register from "./components/user/Register";
import Nav from "./components/header/Nav";

export default function Home() {
  //Name List
  // const nameList = [
  //   { name: "name1", shelf: "a" },
  //   { name: "name2", shelf: "a" },
  // ];

  return (
    <>
      <h1 className="text-3xl font-bold underline">MyApp</h1>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <body>
        <Nav />
        <main className="flex flex-col  justify-center p-auto">
          {/* {nameList.map((item) => (
          <div key={item.name}>
            {item.name}
            <div>{item.shelf}</div>
          </div>
        ))} */}

          <div className="flex flex-col justify-center items-center mt-10">
            {/* <Login /> */}
            {/* <Register /> */}
          </div>

          {/*Studnet Data */}
          {/* <StudentList /> */}
        </main>
      </body>
    </>
  );
}
