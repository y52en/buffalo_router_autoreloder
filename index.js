const Chromy = require("chromy");

async function main() {
  const chromy = new Chromy();
  await chromy.goto("http://192.168.11.1/login.html");
  await chromy
    .evaluate(() => {
      // console.log(1);
      const $ = (str) => document.querySelector(str);
      $("input[name='nosave_Username']").value = "admin";
      $("#id_nosave_Password").value = "password";
      $("#id_login").click();
    })
    .catch((e) => console.log(e));
  await chromy.goto("http://192.168.11.1/init.html");
  await chromy.evaluate(() => {
    const $ = (str) => document.querySelector(str);
    $("#id_rebootBtn").click();
  });
  await chromy.close();
}

main();
