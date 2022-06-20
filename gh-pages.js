import { publish } from "gh-pages";

publish(
  "build", // path to public directory
  {
    branch: "main",
    repo: "https://github.com/ArshdeepSahni/Notion-Board.git", // Update to point to your repository
    user: {
      name: "Arshdeep Singh", // update to use your name
      email: "arsh22sahni@gmail.com", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
