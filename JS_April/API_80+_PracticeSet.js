// 🔹 GET Requests:
// Joke Generator using https://official-joke-api.appspot.com/jokes/random
// → Show setup: Button click → fetch joke → show setup + punchline

// async function getData() {
//   try {
//     const res = await fetch(
//       "https://official-joke-api.appspot.com/jokes/random"
//     );
//     const data = await res.json();
//     console.log("Joke : ", data.setup);
//     document.getElementById("one").innerText = "🃏 " + data.setup;
//     document.getElementById("two").innerText = "👉 " + data.punchline;
//     console.log("Answer : ", data.punchline);
//   } catch (error) {
//     console.error("Can't fetch data ");
//   }
// }
// getData();

// Random User Generator from https://randomuser.me/api/
// → Display name, email, and picture of a random user
// async function getUser() {
//     try {
//       const res = await fetch("https://randomuser.me/api/");
//       const data = await res.json();
//       console.log(data)
//       const user = data.results[0]; // randomuser.me always gives results in array

//       document.getElementById("name").innerText = `👤 ${user.name.title} ${user.name.first} ${user.name.last}`;
//       document.getElementById("pic").src = user.picture.medium;
//     } catch (error) {
//       console.error("Failed to fetch user:", error);
//     }
//   }

// Simple Form Submission
// → Take input: title + body → POST it to above API → show response on screen

async function putData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "User Form",
        body: "Ujjwal Kumar",
      }),
    });
    const data = await response.json();
    console.log("Posted Data ", data);
  } catch (error) {
    console.error("Can't Post");
  }
}
//putData();

async function todo() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Study", 
            body: "Study JavaScript with ChatGPT"
        }),
      });
      const data = await response.json();
      console.log("Posted Data \n Task : "+ data.add + " \n Details : ",data.details);
    } catch (error) {
      console.error("Can't Post");
    }
  }
  todo();
  