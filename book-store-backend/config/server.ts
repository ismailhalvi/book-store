import path from "path";

export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),

  url: "https://book-store-bkc3.onrender.com",

  app: {
    keys: env.array("APP_KEYS"),
  },
});