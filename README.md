# dannyspina.com

## 📝 Notion Widgets

Under `/notion` are located the notion widgets.

The currently available widgets are:

<details>
  <summary>📅 Week Info (<code>/notion/weekinfo</code>)</summary>
  Information about the current day, week, year, and quarter:

![week info screenshot](./static/images/weekinfo_widget.png)

</details>

---

## 🚀 CLI for Generating Blog Posts, Books and Weekly

This repository includes a simple Node.js CLI script that helps you generate blog posts and book posts for your static website. The script allows you to create a new blog post or book post, providing the necessary details like title, subtitle, category, author, Amazon link, and URL name.

### Usage

To use the CLI script for generating blog posts, books and weekly, you can run it directly using Node.js as follows:

```bash
node ./scripts/blog_cli.cjs new-post
```

To create a new blog post, use the new-post command. The script will guide you through a series of prompts to enter the necessary details for the blog post, such as the post title, subtitle, category, and URL name. After providing these details, the script will create a new blog post file under the 'src/routes/blog' directory with the specified content.

```bash
node ./scripts/blog_cli.cjs new-book
```

To create a new book post, use the new-book command. The script will prompt you to enter the necessary details for the book post, including the book title, author, Amazon link, category, and URL name. After providing these details, the script will create a new book post file under the 'src/routes/books' directory with the specified content.

Additionally, the script will create and checkout a new Git branch with the name 'blog*{postName}' for blog posts and 'book*{bookName}' for book posts, allowing you to work on the post separately.

```bash
node ./scripts/blog_cli.cjs new-weekly
```

To create a new weekly post, use the new-weekly command. The script will prompt you to enter the necessary details for each day of the week (from Monday to Friday). After providing these details, the script will create a new weekly post file under the 'src/routes/blog' directory with the specified content.

### Zsh alias

Add this to the `.zshrc`:

```bash
alias <your-alias>='node ~/<path-to-this-repo>/scripts/blog_cli.cjs'
```

Replace `<your-alias>` with your preferred alias and `<path-to-this-repo>` with the actual path to this repository. This will allow you to use the CLI script more conveniently.
