export const config = {
  github: {
    login: "fatye", // github login name, not user name
    repo: "fatye.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "扉页",
    brand: "肥野",
    description: "什么都来一点",
  },
  footer: {
    copyright: "© Glink",
    copyrightUrl: "https://github.com/fatye",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
