//It is a -D (dev dependency) so just for development only not for deployment
//It is a configuration file for tailwindcss

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  //searches content within these files
  theme:
  {
    extend: {},
  },
  plugins: [],
}
