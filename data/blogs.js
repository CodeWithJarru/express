const blogs = [
    {
        "title": "How to Create an Express.js Server with Node.js",
        "slug": "express-js-server",
        "author": "CodeWithHarry",
        "batch": "Full Stack Web Development",
        "thumbnail": "img.jpg",
        "content": `
        <p>Express.js is a powerful Node.js web application framework that helps in building APIs and web apps quickly and efficiently.</p>
        
          <h2>Step #1: Installation</h2>
          <p>Open your terminal and run the following commands to install required packages:</p>
          
          <div class="code">
            npm install express<br>
            npm install nodemon<br>
            npm install cors<br>
            npm install dotenv<br>
            npm install mongoose
          </div>
          
          <h2>Step #2: Create the Entry File</h2>
          <p>Create a file named <b>app.js</b> in your project root and add the following code:</p>
          
          <div class="code">
          const express = require('express');<br>
          const app = express();<br>
            const cors = require('cors');<br>
            const mongoose = require('mongoose');<br><br>
      
            // Middleware<br>
            app.use(cors());<br>
            app.use(express.json());<br><br>
      
            // Connect to MongoDB<br>
            mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })<br>
              .then(() => console.log('MongoDB connected'))<br>
              .catch(err => console.log(err));<br><br>
      
              // Start the server<br>
              app.listen(3000, () => {<br>
              &nbsp;&nbsp;console.log('Server is running on port 3000');<br>
            });
          </div>
      
          <p>This script sets up a basic Express server, connects it to MongoDB, and starts it on port 3000.</p>
          <p>From here, you can start adding your routes, controllers, and middleware as needed.</p>
          `
        },
      
        {
          "title": "JavaScript in One Video: Complete Guide for Beginners",
          "slug": "javascript-in-one-video",
          "author": "JarruCoder",
          "batch": "Full Stack Web Development",
          "thumbnail": "img.jpg",
          "content": `
          <p>JavaScript is the most popular scripting language for web development. Whether you're building websites, games, or full-stack applications — JavaScript is everywhere!</p>
          
          <h2>📌 What is JavaScript?</h2>
          <p>JavaScript is a lightweight, interpreted programming language used to create interactive effects within web browsers. It runs on the client-side, though it can also be used on the server-side using Node.js.</p>
          
          <h2>💡 Variables in JavaScript</h2>
          <p>We use <code>var</code>, <code>let</code>, or <code>const</code> to declare variables.</p>
      
          <div class="code">
          let name = "Jarru";<br>
            const age = 25;<br>
            var city = "Lahore";
          </div>
          
          <h2>🔄 Functions in JavaScript</h2>
          <p>Functions help you reuse code. You define it once and call it as many times as needed.</p>
      
          <div class="code">
            function greet(user) {<br>
            &nbsp;&nbsp;return "Hello, " + user;<br>
            }<br><br>
            console.log(greet("Zoe"));
            </div>
            
            <h2>📚 Arrays and Loops</h2>
            <p>Arrays store multiple values, and loops help us iterate through them.</p>
            
          <div class="code">
            const fruits = ["Apple", "Banana", "Mango"];<br>
            for (let i = 0; i < fruits.length; i++) {<br>
            &nbsp;&nbsp;console.log(fruits[i]);<br>
            }
          </div>
      
          <h2>🧱 Objects</h2>
          <p>Objects store data in key-value pairs and are widely used in JavaScript.</p>
          
          <div class="code">
          const pet = {<br>
            &nbsp;&nbsp;name: "Zoe",<br>
            &nbsp;&nbsp;type: "Dog",<br>
            &nbsp;&nbsp;age: 3<br>
            };<br><br>
            console.log(pet.name); // Output: Zoe
            </div>
            
            <h2>⚡ DOM Manipulation</h2>
            <p>JavaScript can interact with HTML using the DOM (Document Object Model).</p>
            
            <div class="code">
            document.getElementById("btn").addEventListener("click", function() {<br>
            &nbsp;&nbsp;alert("Button Clicked!");<br>
            });
            </div>
      
          <h2>🚀 Final Words</h2>
          <p>This was a quick crash course on JavaScript basics. Once you're comfortable with these concepts, you can explore advanced topics like ES6+, Promises, async/await, APIs, and frameworks like React or Vue.</p>
      
          <p>Happy coding! — <strong>JarruCoder</strong></p>
        `
      },      
      {
        "title": "Understanding Async/Await in JavaScript",
        "slug": "async-await-guide",
        "author": "TechGuru",
        "batch": "Full Stack Web Development",
        "thumbnail": "img.jpg",
        "content": `
        <p>Async/Await is a modern way to handle asynchronous operations in JavaScript. It makes asynchronous code look and behave like synchronous code, which is easier to read, write, and debug.</p>
      
          <h2>⏳ Why Async/Await?</h2>
          <p>Traditionally, JavaScript used callbacks and then Promises to handle asynchronous operations like API calls, timeouts, or file reading. But deeply nested callbacks (callback hell) and complex .then() chains made code hard to manage.</p>
      
          <h2>🧠 How Async/Await Works</h2>
          <p><strong>Async</strong> is a keyword you put before a function to turn it into a Promise.<br>
          <strong>Await</strong> pauses the execution inside an async function until the Promise is resolved or rejected.</p>
      
          <div class="code">
          async function fetchData() {<br>
            &nbsp;&nbsp;const response = await fetch("https://api.example.com/data");<br>
            &nbsp;&nbsp;const data = await response.json();<br>
            &nbsp;&nbsp;console.log(data);<br>
            }
            </div>
            
          <h2>💡 Example: With Promises vs With Async/Await</h2>
          
          <p><strong>Using Promises:</strong></p>
          <div class="code">
            fetch("https://api.example.com/data")<br>
            &nbsp;&nbsp;.then(response => response.json())<br>
            &nbsp;&nbsp;.then(data => console.log(data))<br>
            &nbsp;&nbsp;.catch(error => console.error(error));
          </div>
          
          <p><strong>Using Async/Await:</strong></p>
          <div class="code">
            async function getData() {<br>
            &nbsp;&nbsp;try {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;const res = await fetch("https://api.example.com/data");<br>
            &nbsp;&nbsp;&nbsp;&nbsp;const json = await res.json();<br>
            &nbsp;&nbsp;&nbsp;&nbsp;console.log(json);<br>
            &nbsp;&nbsp;} catch (err) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;console.error(err);<br>
            &nbsp;&nbsp;}<br>
            }
            </div>
      
          <h2>⚠️ Common Mistakes</h2>
          <ul>
            <li>Only use <code>await</code> inside <code>async</code> functions.</li>
            <li>Don’t forget to use <code>try...catch</code> for error handling.</li>
            </ul>
      
            <h2>🚀 Real Use Case: Simulate API Call</h2>
            <p>Let's simulate a fake API using <code>setTimeout</code> and use async/await on it.</p>
      
          <div class="code">
            function fakeApi() {<br>
            &nbsp;&nbsp;return new Promise(resolve => {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() => resolve("Data loaded"), 2000);<br>
            &nbsp;&nbsp;});<br>
            }<br><br>
            
            async function load() {<br>
            &nbsp;&nbsp;console.log("Loading...");<br>
            &nbsp;&nbsp;const result = await fakeApi();<br>
            &nbsp;&nbsp;console.log(result);<br>
            }<br><br>
      
            load();
            </div>
      
            <h2>📌 Conclusion</h2>
          <p>Async/Await is the preferred way to handle asynchronous code in modern JavaScript. It gives your code a cleaner, linear structure, making it easier to work with than chaining Promises or dealing with callbacks.</p>
      
          <p>Learn it once, and you'll write better asynchronous JavaScript forever.</p>
          `
        }
,      
{
    "title": "Top 10 VS Code Extensions for Developers",
    "slug": "vs-code-extensions",
    "batch": "Full Stack Web Development",
    "thumbnail": "img.jpg",
    "content": `
    <p>Visual Studio Code (VS Code) is one of the most popular code editors today, and its power lies in its rich ecosystem of extensions. Here's a curated list of the top 10 VS Code extensions that every developer should try.</p>
    
    <h2>1. 🌈 Prettier – Code Formatter</h2>
      <p>Prettier helps you maintain consistent code style by automatically formatting your code on save.</p>
      <div class="code">
        npm install --save-dev prettier
        </div>
  
        <h2>2. 🔍 ESLint</h2>
        <p>Find and fix problems in your JavaScript/TypeScript code with linting.</p>
        <div class="code">
        npm install eslint --save-dev
        </div>
        
        <h2>3. 💡 GitLens</h2>
        <p>Supercharge the built-in Git capabilities. It shows who changed what and when — directly in your code.</p>
        
        <h2>4. ⚙️ Settings Sync</h2>
        <p>Backup and sync your VS Code settings, extensions, snippets, and more across devices using GitHub.</p>
        
      <h2>5. 🧠 IntelliCode</h2>
      <p>AI-assisted development tool that recommends code completions based on best practices and usage patterns.</p>
      
      <h2>6. 🔥 Live Server</h2>
      <p>Launch a local development server with live reload support for static and dynamic pages.</p>
      
      <h2>7. 📦 Path Intellisense</h2>
      <p>Provides auto-completion for file paths in your workspace. Saves time and prevents mistakes.</p>
      
      <h2>8. 🎨 Bracket Pair Colorizer 2</h2>
      <p>Colorizes matching brackets to make nested code blocks easier to read.</p>
      
      <h2>9. 📘 Markdown All in One</h2>
      <p>Comprehensive Markdown editing experience: live preview, shortcuts, table of contents and more.</p>
  
      <h2>10. 🚀 Thunder Client (Postman Alternative)</h2>
      <p>Lightweight REST API client inside VS Code. Perfect for testing APIs without leaving the editor.</p>
  
      <h2>🎯 Bonus Tips</h2>
      <ul>
      <li>Press <code>Ctrl + Shift + X</code> to open the extensions panel.</li>
      <li>Use <code>Settings > Extensions > Auto Update</code> to keep them up-to-date.</li>
      </ul>
  
      <p>With these extensions, your productivity will skyrocket. Try them out and make your VS Code truly yours!</p>
      <p>Happy coding! — <strong>CodeMaster</strong></p>
      `,
      "author": "CodeMaster",
}
,  
{
        "title": "Node.js File System Module Explained",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla faucibus mi quis fermentum. Nulla at ante nisl. Pellentesque nec scelerisque tellus. Pellentesque nisi diam, imperdiet ut vehicula in, viverra sed sem. Donec tempus lacus suscipit purus accumsan efficitur. Maecenas at finibus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ante magna, tempor a mollis nec, egestas auctor elit. Aliquam sed egestas mauris. Pellentesque tempor nunc libero, molestie finibus elit tempor vitae. Donec egestas consequat nunc, ut sodales tortor eleifend in. Suspendisse tortor nunc, accumsan vitae sagittis eu, volutpat vitae augue. Ut non ultricies magna. In porttitor sagittis odio, sit amet luctus nibh sodales id.<br> Suspendisse potenti. Pellentesque non ante ut lorem sagittis consequat. Quisque quis erat semper urna luctus vehicula. Sed elit dui, tincidunt gravida hendrerit at, gravida a diam. Ut porttitor at elit ac aliquet. Aenean vestibulum nec arcu sit amet semper. Fusce suscipit ullamcorper lorem vitae interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer egestas consequat ex quis blandit. In interdum ante nec egestas malesuada. Donec nec sapien eu erat mollis feugiat. Fusce pellentesque magna vel faucibus vehicula. Sed luctus orci eu porttitor iaculis. Nunc sollicitudin turpis sapien, ut pellentesque diam tincidunt sed. Pellentesque ex magna, placerat at vulputate eget, tincidunt in urna. Aenean nec lacinia ipsum. Nullam nisi nunc, lobortis at mollis eget, pellentesque vulputate lacus. Sed orci augue, rutrum ac elit maximus, sollicitudin interdum velit. Aliquam tempus nibh libero, sit amet hendrerit erat malesuada eget. Pellentesque pellentesque diam at magna sodales, ac ultrices mauris hendrerit. Cras lacinia neque ac lacus imperdiet, et scelerisque leo ultricies. Duis vitae urna felis. Nulla non faucibus justo. Nunc a lectus augue. Nam ac consequat urna. Maecenas molestie scelerisque ipsum, vitae sagittis turpis venenatis in. Maecenas luctus leo a odio gravida, at rhoncus odio imperdiet. Donec sed turpis sagittis, aliquet nisl ut, pretium sapien. Duis volutpat luctus nisi, nec pharetra ipsum viverra vel. In hac habitasse platea dictumst. Nulla nec dictum orci. Mauris at lorem tempor lorem <br> ullamcorper sollicitudin non in odio. Integer ac purus sed libero hendrerit ultricies faucibus a lectus. Sed finibus, sapien mollis mattis mattis, quam tortor lobortis est, eget sollicitudin arcu mauris eu odio. Nam et consequat libero, nec mattis augue. Etiam id tristique ipsum, non feugiat mi. Curabitur at quam et nunc varius bibendum. Mauris auctor tempor eros sed posuere. Vestibulum pulvinar dictum lacus, ac pulvinar risus consectetur id. Vestibulum id sem id sem tincidunt tempus eleifend in metus. Nulla accumsan sit amet ligula et suscipit.",
        "author": "NodeNinja",
        "slug": "nodejs-fs-module",
    },
    {
        "title": "CSS Grid vs Flexbox: When to Use What",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla faucibus mi quis fermentum. Nulla at ante nisl. Pellentesque nec scelerisque tellus. Pellentesque nisi diam, imperdiet ut vehicula in, viverra sed sem. Donec tempus lacus suscipit purus accumsan efficitur. Maecenas at finibus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ante magna, tempor a mollis nec, egestas auctor elit. Aliquam sed egestas mauris. Pellentesque tempor nunc libero, molestie finibus elit tempor vitae. Donec egestas consequat nunc, ut sodales tortor eleifend in. Suspendisse tortor nunc, accumsan vitae sagittis eu, volutpat vitae augue. Ut non ultricies magna. In porttitor sagittis odio, sit amet luctus nibh sodales id.<br> Suspendisse potenti. Pellentesque non ante ut lorem sagittis consequat. Quisque quis erat semper urna luctus vehicula. Sed elit dui, tincidunt gravida hendrerit at, gravida a diam. Ut porttitor at elit ac aliquet. Aenean vestibulum nec arcu sit amet semper. Fusce suscipit ullamcorper lorem vitae interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer egestas consequat ex quis blandit. In interdum ante nec egestas malesuada. Donec nec sapien eu erat mollis feugiat. Fusce pellentesque magna vel faucibus vehicula. Sed luctus orci eu porttitor iaculis. Nunc sollicitudin turpis sapien, ut pellentesque diam tincidunt sed. Pellentesque ex magna, placerat at vulputate eget, tincidunt in urna. Aenean nec lacinia ipsum. Nullam nisi nunc, lobortis at mollis eget, pellentesque vulputate lacus. Sed orci augue, rutrum ac elit maximus, sollicitudin interdum velit. Aliquam tempus nibh libero, sit amet hendrerit erat malesuada eget. Pellentesque pellentesque diam at magna sodales, ac ultrices mauris hendrerit. Cras lacinia neque ac lacus imperdiet, et scelerisque leo ultricies. Duis vitae urna felis. Nulla non faucibus justo. Nunc a lectus augue. Nam ac consequat urna. Maecenas molestie scelerisque ipsum, vitae sagittis turpis venenatis in. Maecenas luctus leo a odio gravida, at rhoncus odio imperdiet. Donec sed turpis sagittis, aliquet nisl ut, pretium sapien. Duis volutpat luctus nisi, nec pharetra ipsum viverra vel. In hac habitasse platea dictumst. Nulla nec dictum orci. Mauris at lorem tempor lorem <br> ullamcorper sollicitudin non in odio. Integer ac purus sed libero hendrerit ultricies faucibus a lectus. Sed finibus, sapien mollis mattis mattis, quam tortor lobortis est, eget sollicitudin arcu mauris eu odio. Nam et consequat libero, nec mattis augue. Etiam id tristique ipsum, non feugiat mi. Curabitur at quam et nunc varius bibendum. Mauris auctor tempor eros sed posuere. Vestibulum pulvinar dictum lacus, ac pulvinar risus consectetur id. Vestibulum id sem id sem tincidunt tempus eleifend in metus. Nulla accumsan sit amet ligula et suscipit.",
        "author": "DesignPro",
        "slug": "css-grid-vs-flexbox",
    },
    {
        "title": "React State Management with Redux",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla faucibus mi quis fermentum. Nulla at ante nisl. Pellentesque nec scelerisque tellus. Pellentesque nisi diam, imperdiet ut vehicula in, viverra sed sem. Donec tempus lacus suscipit purus accumsan efficitur. Maecenas at finibus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ante magna, tempor a mollis nec, egestas auctor elit. Aliquam sed egestas mauris. Pellentesque tempor nunc libero, molestie finibus elit tempor vitae. Donec egestas consequat nunc, ut sodales tortor eleifend in. Suspendisse tortor nunc, accumsan vitae sagittis eu, volutpat vitae augue. Ut non ultricies magna. In porttitor sagittis odio, sit amet luctus nibh sodales id.<br> Suspendisse potenti. Pellentesque non ante ut lorem sagittis consequat. Quisque quis erat semper urna luctus vehicula. Sed elit dui, tincidunt gravida hendrerit at, gravida a diam. Ut porttitor at elit ac aliquet. Aenean vestibulum nec arcu sit amet semper. Fusce suscipit ullamcorper lorem vitae interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer egestas consequat ex quis blandit. In interdum ante nec egestas malesuada. Donec nec sapien eu erat mollis feugiat. Fusce pellentesque magna vel faucibus vehicula. Sed luctus orci eu porttitor iaculis. Nunc sollicitudin turpis sapien, ut pellentesque diam tincidunt sed. Pellentesque ex magna, placerat at vulputate eget, tincidunt in urna. Aenean nec lacinia ipsum. Nullam nisi nunc, lobortis at mollis eget, pellentesque vulputate lacus. Sed orci augue, rutrum ac elit maximus, sollicitudin interdum velit. Aliquam tempus nibh libero, sit amet hendrerit erat malesuada eget. Pellentesque pellentesque diam at magna sodales, ac ultrices mauris hendrerit. Cras lacinia neque ac lacus imperdiet, et scelerisque leo ultricies. Duis vitae urna felis. Nulla non faucibus justo. Nunc a lectus augue. Nam ac consequat urna. Maecenas molestie scelerisque ipsum, vitae sagittis turpis venenatis in. Maecenas luctus leo a odio gravida, at rhoncus odio imperdiet. Donec sed turpis sagittis, aliquet nisl ut, pretium sapien. Duis volutpat luctus nisi, nec pharetra ipsum viverra vel. In hac habitasse platea dictumst. Nulla nec dictum orci. Mauris at lorem tempor lorem <br> ullamcorper sollicitudin non in odio. Integer ac purus sed libero hendrerit ultricies faucibus a lectus. Sed finibus, sapien mollis mattis mattis, quam tortor lobortis est, eget sollicitudin arcu mauris eu odio. Nam et consequat libero, nec mattis augue. Etiam id tristique ipsum, non feugiat mi. Curabitur at quam et nunc varius bibendum. Mauris auctor tempor eros sed posuere. Vestibulum pulvinar dictum lacus, ac pulvinar risus consectetur id. Vestibulum id sem id sem tincidunt tempus eleifend in metus. Nulla accumsan sit amet ligula et suscipit.",
        "author": "ReactWizard",
        "slug": "react-redux-guide",
    },
    {
        "title": "Building RESTful APIs with Express.js",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla faucibus mi quis fermentum. Nulla at ante nisl. Pellentesque nec scelerisque tellus. Pellentesque nisi diam, imperdiet ut vehicula in, viverra sed sem. Donec tempus lacus suscipit purus accumsan efficitur. Maecenas at finibus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ante magna, tempor a mollis nec, egestas auctor elit. Aliquam sed egestas mauris. Pellentesque tempor nunc libero, molestie finibus elit tempor vitae. Donec egestas consequat nunc, ut sodales tortor eleifend in. Suspendisse tortor nunc, accumsan vitae sagittis eu, volutpat vitae augue. Ut non ultricies magna. In porttitor sagittis odio, sit amet luctus nibh sodales id.<br> Suspendisse potenti. Pellentesque non ante ut lorem sagittis consequat. Quisque quis erat semper urna luctus vehicula. Sed elit dui, tincidunt gravida hendrerit at, gravida a diam. Ut porttitor at elit ac aliquet. Aenean vestibulum nec arcu sit amet semper. Fusce suscipit ullamcorper lorem vitae interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer egestas consequat ex quis blandit. In interdum ante nec egestas malesuada. Donec nec sapien eu erat mollis feugiat. Fusce pellentesque magna vel faucibus vehicula. Sed luctus orci eu porttitor iaculis. Nunc sollicitudin turpis sapien, ut pellentesque diam tincidunt sed. Pellentesque ex magna, placerat at vulputate eget, tincidunt in urna. Aenean nec lacinia ipsum. Nullam nisi nunc, lobortis at mollis eget, pellentesque vulputate lacus. Sed orci augue, rutrum ac elit maximus, sollicitudin interdum velit. Aliquam tempus nibh libero, sit amet hendrerit erat malesuada eget. Pellentesque pellentesque diam at magna sodales, ac ultrices mauris hendrerit. Cras lacinia neque ac lacus imperdiet, et scelerisque leo ultricies. Duis vitae urna felis. Nulla non faucibus justo. Nunc a lectus augue. Nam ac consequat urna. Maecenas molestie scelerisque ipsum, vitae sagittis turpis venenatis in. Maecenas luctus leo a odio gravida, at rhoncus odio imperdiet. Donec sed turpis sagittis, aliquet nisl ut, pretium sapien. Duis volutpat luctus nisi, nec pharetra ipsum viverra vel. In hac habitasse platea dictumst. Nulla nec dictum orci. Mauris at lorem tempor lorem <br> ullamcorper sollicitudin non in odio. Integer ac purus sed libero hendrerit ultricies faucibus a lectus. Sed finibus, sapien mollis mattis mattis, quam tortor lobortis est, eget sollicitudin arcu mauris eu odio. Nam et consequat libero, nec mattis augue. Etiam id tristique ipsum, non feugiat mi. Curabitur at quam et nunc varius bibendum. Mauris auctor tempor eros sed posuere. Vestibulum pulvinar dictum lacus, ac pulvinar risus consectetur id. Vestibulum id sem id sem tincidunt tempus eleifend in metus. Nulla accumsan sit amet ligula et suscipit.",
        "author": "APIExpert",
        "slug": "restful-apis-express",
    },
    {
        "title": "Introduction to TypeScript",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla faucibus mi quis fermentum. Nulla at ante nisl. Pellentesque nec scelerisque tellus. Pellentesque nisi diam, imperdiet ut vehicula in, viverra sed sem. Donec tempus lacus suscipit purus accumsan efficitur. Maecenas at finibus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ante magna, tempor a mollis nec, egestas auctor elit. Aliquam sed egestas mauris. Pellentesque tempor nunc libero, molestie finibus elit tempor vitae. Donec egestas consequat nunc, ut sodales tortor eleifend in. Suspendisse tortor nunc, accumsan vitae sagittis eu, volutpat vitae augue. Ut non ultricies magna. In porttitor sagittis odio, sit amet luctus nibh sodales id.<br> Suspendisse potenti. Pellentesque non ante ut lorem sagittis consequat. Quisque quis erat semper urna luctus vehicula. Sed elit dui, tincidunt gravida hendrerit at, gravida a diam. Ut porttitor at elit ac aliquet. Aenean vestibulum nec arcu sit amet semper. Fusce suscipit ullamcorper lorem vitae interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer egestas consequat ex quis blandit. In interdum ante nec egestas malesuada. Donec nec sapien eu erat mollis feugiat. Fusce pellentesque magna vel faucibus vehicula. Sed luctus orci eu porttitor iaculis. Nunc sollicitudin turpis sapien, ut pellentesque diam tincidunt sed. Pellentesque ex magna, placerat at vulputate eget, tincidunt in urna. Aenean nec lacinia ipsum. Nullam nisi nunc, lobortis at mollis eget, pellentesque vulputate lacus. Sed orci augue, rutrum ac elit maximus, sollicitudin interdum velit. Aliquam tempus nibh libero, sit amet hendrerit erat malesuada eget. Pellentesque pellentesque diam at magna sodales, ac ultrices mauris hendrerit. Cras lacinia neque ac lacus imperdiet, et scelerisque leo ultricies. Duis vitae urna felis. Nulla non faucibus justo. Nunc a lectus augue. Nam ac consequat urna. Maecenas molestie scelerisque ipsum, vitae sagittis turpis venenatis in. Maecenas luctus leo a odio gravida, at rhoncus odio imperdiet. Donec sed turpis sagittis, aliquet nisl ut, pretium sapien. Duis volutpat luctus nisi, nec pharetra ipsum viverra vel. In hac habitasse platea dictumst. Nulla nec dictum orci. Mauris at lorem tempor lorem <br> ullamcorper sollicitudin non in odio. Integer ac purus sed libero hendrerit ultricies faucibus a lectus. Sed finibus, sapien mollis mattis mattis, quam tortor lobortis est, eget sollicitudin arcu mauris eu odio. Nam et consequat libero, nec mattis augue. Etiam id tristique ipsum, non feugiat mi. Curabitur at quam et nunc varius bibendum. Mauris auctor tempor eros sed posuere. Vestibulum pulvinar dictum lacus, ac pulvinar risus consectetur id. Vestibulum id sem id sem tincidunt tempus eleifend in metus. Nulla accumsan sit amet ligula et suscipit.",
        "author": "TypeScriptFan",
        "slug": "typescript-intro",
    },
    {
        "title": "Debugging JavaScript Like a Pro",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla faucibus mi quis fermentum. Nulla at ante nisl. Pellentesque nec scelerisque tellus. Pellentesque nisi diam, imperdiet ut vehicula in, viverra sed sem. Donec tempus lacus suscipit purus accumsan efficitur. Maecenas at finibus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ante magna, tempor a mollis nec, egestas auctor elit. Aliquam sed egestas mauris. Pellentesque tempor nunc libero, molestie finibus elit tempor vitae. Donec egestas consequat nunc, ut sodales tortor eleifend in. Suspendisse tortor nunc, accumsan vitae sagittis eu, volutpat vitae augue. Ut non ultricies magna. In porttitor sagittis odio, sit amet luctus nibh sodales id.<br> Suspendisse potenti. Pellentesque non ante ut lorem sagittis consequat. Quisque quis erat semper urna luctus vehicula. Sed elit dui, tincidunt gravida hendrerit at, gravida a diam. Ut porttitor at elit ac aliquet. Aenean vestibulum nec arcu sit amet semper. Fusce suscipit ullamcorper lorem vitae interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer egestas consequat ex quis blandit. In interdum ante nec egestas malesuada. Donec nec sapien eu erat mollis feugiat. Fusce pellentesque magna vel faucibus vehicula. Sed luctus orci eu porttitor iaculis. Nunc sollicitudin turpis sapien, ut pellentesque diam tincidunt sed. Pellentesque ex magna, placerat at vulputate eget, tincidunt in urna. Aenean nec lacinia ipsum. Nullam nisi nunc, lobortis at mollis eget, pellentesque vulputate lacus. Sed orci augue, rutrum ac elit maximus, sollicitudin interdum velit. Aliquam tempus nibh libero, sit amet hendrerit erat malesuada eget. Pellentesque pellentesque diam at magna sodales, ac ultrices mauris hendrerit. Cras lacinia neque ac lacus imperdiet, et scelerisque leo ultricies. Duis vitae urna felis. Nulla non faucibus justo. Nunc a lectus augue. Nam ac consequat urna. Maecenas molestie scelerisque ipsum, vitae sagittis turpis venenatis in. Maecenas luctus leo a odio gravida, at rhoncus odio imperdiet. Donec sed turpis sagittis, aliquet nisl ut, pretium sapien. Duis volutpat luctus nisi, nec pharetra ipsum viverra vel. In hac habitasse platea dictumst. Nulla nec dictum orci. Mauris at lorem tempor lorem <br> ullamcorper sollicitudin non in odio. Integer ac purus sed libero hendrerit ultricies faucibus a lectus. Sed finibus, sapien mollis mattis mattis, quam tortor lobortis est, eget sollicitudin arcu mauris eu odio. Nam et consequat libero, nec mattis augue. Etiam id tristique ipsum, non feugiat mi. Curabitur at quam et nunc varius bibendum. Mauris auctor tempor eros sed posuere. Vestibulum pulvinar dictum lacus, ac pulvinar risus consectetur id. Vestibulum id sem id sem tincidunt tempus eleifend in metus. Nulla accumsan sit amet ligula et suscipit.",
        "author": "BugHunter",
        "slug": "debugging-javascript",
    }
];

module.exports = blogs