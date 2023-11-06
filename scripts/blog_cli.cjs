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
  .version("1.1.1")
  .description("CLI for generating blog posts, books and weekly.");

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

                const postContent = `---
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
                    `+page.md`
                  );

                  const bookContent = `---
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
                  /*
                  const git = simpleGit();
                  const branchName = `book_${bookName}`;
                  git.checkoutLocalBranch(branchName, () => {
                    console.log(
                      `New branch '${branchName}' created and checked out!`
                    );
                  });
                  */
                })
                .catch(console.error);
            });
          });
        });
      }
    );
  });

program
  .command('new-weekly')
  .description('create a new weekly post')
  .action(() => {
    rl.question('how was your moday?', (monday) => {
      rl.question('how was your thuesday?', (tuesday) => {
        rl.question('how was your wednesday?', (wednesday) => {
          rl.question('how was your thursday?', (thursday) => {
            rl.question('how was yout friday?', (friday) => {
              rl.close();

              const currentDate = new Date();
              const postDate = new Date().toISOString().slice(0, 10);

              const year = currentDate.toLocaleDateString('en', { year: '2-digit' })
              const startDate = new Date(currentDate.getFullYear(), 0, 1);
              const days = Math.floor((currentDate - startDate) /
                (24 * 60 * 60 * 1000));

              const weekNumber = Math.ceil(days / 7);

              const weeklyName = `weekly${weekNumber}${year}`

              const weeklyDirectory = path.join(
                __dirname,
                "../src/routes/blog",
                weeklyName
              );
              const weeklyFilePath = path.join(
                weeklyDirectory,
                `+page.md`
              );

              const weeklyContent = `---
title: weekly${weekNumber}${year}
subtitle: Weekly Retro
date: "${postDate}"
categories:
- "Weekly"
---

## Monday

${monday}

## Tuesday

${tuesday}

## Wednesday

${wednesday}

## Thursday

${thursday}

## Friday

${friday}

`;

              fs.ensureDirSync(weeklyDirectory);
              fs.writeFileSync(weeklyFilePath, weeklyContent);

              console.log(`New weekly post created successfully!`);
            })
          })
        })
      })
    })
  })

program.addHelpText(
  "after",
  `
              Examples:
  $ node./ scripts / blog_cli.cjs new-post
                - This command will create a new blog post, prompt for post details, and create a new branch with the post name.

  $ node./ scripts / blog_cli.cjs new-book
                - This command will create a new book post, prompt for book details, and create the book file.
  
$ node./ scripts / blog_cli.cjs new-weekly
                - This command will create a new weekly post, prompt for week days details, and create the weekly file.
`
);

program.parse(process.argv);
