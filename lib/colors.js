module.exports = {
  green: green,
  pink:  pink
}

function green(string) {
  return "\x1b[38;5;40m" + string + "\x1b[0m";
}

function pink(string) {
  "\x1b[0;35m" +string+ "\x1b[0m"
}
