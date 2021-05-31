(function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(function (registration) {
        // 登録成功
        console.log(
          "ServiceWorker の登録に成功しました。スコープ: ",
          registration.scope
        );
      })
      .catch(function (err) {
        // 登録失敗
        console.log("ServiceWorker の登録に失敗しました。", err);
      });
  }
})();
