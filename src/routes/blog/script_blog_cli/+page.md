---
title: My Little CLI to Create Content for My Static Blog
subtitle: Sharing a CLI I Made to Automate Blog Post Creation for My Static Blog
date: "2023-08-01"
categories:
  - "Projects"
---

<script lang="ts">
  import ImagePost from "$lib/components/ImagePost.svelte";
  import Sidenote from "$lib/components/Sidenote.svelte";

  const imagesPath = "blog/script_blog_cli";
</script>

This blog is static. [It's made with the famous JAMStack](/blog/1), using Svelte and SvelteKit, which utilizes the folder structure to generate routes and parses markdown files to create posts. The entire site is a simple HTML static site.

I find it fantastic, and I especially love markdown, which allows me to write all my posts in this fantastic format.

I don't need a CMS; I can write my new posts directly, just like this one, and then I push the changes to the main branch. This triggers the pipeline on Netlify, which builds and deploys the HTML site.

## But I Am Lazy

I don't know if being lazy is really an advantage for a software developer <Sidenote text="Somebody once said that a lazy engineer is a good engineer because he can find solutions quickly and with less effort due to his laziness." />, but I do enjoy automating things. It feels like magic to me, and being able to make this magic happen by writing code is something truly unique.

Regarding this blog, due to its design, when I want to publish a new post or a book review, I have to go through the following steps:

1. Create a folder with the desired path name for the post.
2. Create the file `+page.md` inside this folder.
3. Write the metadata of the post within the file.
4. Import the necessary components for images, galleries, and sidenotes.

It's not a lot of work, but as I mentioned, I love automating things and I'm always looking for something to automate. The repetitiveness of the task made me think it was perfect for automation.

<ImagePost file="{imagesPath}/workchronicles_automation_meme.jpeg" alt="workchronicles comic" caption="This happend too many times. But not this time." credits="<a href='https://workchronicles.com/'>@workchronicles</a>" />

## I Created a CLI!

For this task, I decided to use Node.js. I could have used something less familiar, like Python, just for the sake of learning, but perhaps laziness got the better of me.

Moreover, I wanted something to test immediately because I had something to write, and I wanted to generate everything using my brand new CLI.

Then, my laziness took over again, and I thought:

> Maybe I can also automate the writing process of the CLI... Let's use ChatGPT!

And so, I did.

I asked ChatGPT:

> Write a script in Node.js to automate the creation of a new blog post for my static website made with Svelte. It must be a CLI and I have to answer some questions used to generate the metadata and the folder name. Then it must create the content of the file as follows (and I provided a code snippet with the component import). After the creation, the script must create and checkout a branch with the name blog\_(path_of_the_post).

After some fine-tuning and bug-fixing, this is the result.

```javascript
#!/usr/bin/env node

/**
 * CLI to generate a new book or a new post
 * Completely generated by ChatGPT lol :D
 */

const fs = require("fs-extra");
const path = require("path");
const { program } = require("commander");
const readline = require("readline");
const { Select } = require("enquirer");
const simpleGit = require("simple-git");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const categoryOptions = [
  "Thoughts",
  "Projects",
  "Weekly",
  "Learning",
  "Personal Growth",
  "Personal Life",
  "Various",
];

const bookCategoryOptions = [
  "Personal Growth",
  "Productivity",
  "Technology",
  "Arts & Entertainment",
  "Fiction",
];

program
  .version("1.0.0")
  .description("CLI for generating blog posts and books.");

program
  .command("new-post")
  .description("Create a new blog post")
  .action(() => {
    rl.question(
      "Enter the name of the post (used as the URL): ",
      (postName) => {
        rl.question("Enter the title of the post: ", (title) => {
          rl.question("Enter the subtitle of the post: ", (subtitle) => {
            rl.close();

            const prompt = new Select({
              name: "category",
              message: "Choose the category of the post:",
              choices: categoryOptions,
            });

            prompt
              .run()
              .then((category) => {
                const postDate = new Date().toISOString().slice(0, 10);

                const postDirectory = path.join(
                  __dirname,
                  "../src/routes/blog",
                  postName
                );

                const postImagesDirectory = path.join(
                  __dirname,
                  "../static/images/blog",
                  postName
                );

                const postFilePath = path.join(postDirectory, `+page.md`);

                const postContent = `
---
title: ${title}
subtitle: ${subtitle}
date: "${postDate}"
categories:
  - "${category}"
---

<script lang="ts">
  import ImagePost from "$lib/components/ImagePost.svelte"
  import Gallery from "$lib/components/Gallery.svelte"
  import Sidenote from "$lib/components/Sidenote.svelte"

  const imagesPath = "blog/${postName}"
</script>

<ImagePost file="{imagesPath}/image.jpg" alt="alt" caption="caption" credits='credits' />

<Gallery>
 <ImagePost file="{imagesPath}/image.jpg" alt="alt" caption="caption" credits='credits' gallery /> 
</Gallery>

<Sidenote text="This is a sidenote"/>
`;

                fs.ensureDirSync(postDirectory);
                fs.ensureDirSync(postImagesDirectory);
                fs.writeFileSync(postFilePath, postContent);

                console.log(`New post '${postName}' created successfully!`);

                // Create and checkout a new branch
                const git = simpleGit();
                const branchName = `blog_${postName}`;
                git.checkoutLocalBranch(branchName, () => {
                  console.log(
                    `New branch '${branchName}' created and checked out!`
                  );
                });
              })
              .catch(console.error);
          });
        });
      }
    );
  });

program
  .command("new-book")
  .description("Create a new book post")
  .action(() => {
    rl.question(
      "Enter the name of the book (used as the URL): ",
      (bookName) => {
        rl.question("Enter the title of the book: ", (title) => {
          rl.question("Enter the author of the book: ", (author) => {
            rl.question("Enter the Amazon link of the book: ", (amazonLink) => {
              const prompt = new Select({
                name: "category",
                message: "Choose the category of the book:",
                choices: bookCategoryOptions,
                type: "radio", // Use arrows to select category
              });

              prompt
                .run()
                .then((category) => {
                  rl.close();

                  const postDirectory = path.join(
                    __dirname,
                    "../src/routes/books",
                    bookName
                  );
                  const postFilePath = path.join(
                    postDirectory,
                    `${bookName}.md`
                  );

                  const bookContent = `
---
title: ${title}
author: ${author}
amazonLink: ${amazonLink}
category: ${category}
---
`;

                  fs.ensureDirSync(postDirectory);
                  fs.writeFileSync(postFilePath, bookContent);

                  console.log(`New book '${bookName}' created successfully!`);

                  // Create and checkout a new branch
                  const git = simpleGit();
                  const branchName = `book_${bookName}`;
                  git.checkoutLocalBranch(branchName, () => {
                    console.log(
                      `New branch '${branchName}' created and checked out!`
                    );
                  });
                })
                .catch(console.error);
            });
          });
        });
      }
    );
  });

program.addHelpText(
  "after",
  `
Examples:
  $ node ./scripts/blog_cli.cjs new-post
    - This command will create a new blog post, prompt for post details, and create a new branch with the post name.

  $ node ./scripts/blog_cli.cjs new-book
    - This command will create a new book post, prompt for book details, and create the book file.
`
);

program.parse(process.argv);
```

This is 90% generated by ChatGPT; I only made minor fixes and carefully avoided touching anything else, having this "showcase" post in mind.

And it works! I generated this post with the CLI, and as you can see, I can automate the generation of a book review too.

## ChatGPT and Its Role in the Workflow

[I've used ChatGPT extensively since it became available](/blog/chatgpt_posts_explained), and lately, I've found myself using it less but more effectively. I've gradually understood its limits and have fewer expectations regarding its capabilities. I mainly use it to automate writing of repetitive or boring content, or to generate something from my descriptions <Sidenote text="Example: 'Generate an array of objects with 40 entries and keys X, Y, and Z with random values.'" />, or even to help with writing tests for edge cases that I may not have considered.

ChatGPT has been very helpful at work, and while this task was slightly outside its usual boundaries, it performed quite well.

I've come to realize that ChatGPT excels at smaller tasks rather than code generation with complex logic. Nevertheless, for tasks like this one, it can be very useful.

Perhaps this little script can serve as a basis for your own post generation process for your static blog, or maybe it will remind you of something else you wanted to automate. Either way, I hope you find it useful. If you have any questions, don't hesitate to [contact me](/contact).

Ciao!