export default (pathname) => {
  if (pathname === "/") {
    return "home";
  }
  return pathname.replace("/", "");
}