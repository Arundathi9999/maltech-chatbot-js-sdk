(function () {
  if (window.MaltechChatbot) return;

  function createChatUI(config) {
    const btn = document.createElement("div");
    btn.id = "maltech-chatbot-btn";
    btn.innerHTML = "💬";
    btn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: ${config.primaryColor || "#2563eb"};
      color: #fff;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 999999;
    `;

    const iframe = document.createElement("iframe");
    iframe.style.cssText = `
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 360px;
      height: 520px;
      border: none;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,.2);
      display: none;
      z-index: 999999;
    `;

    iframe.src =
      config.chatUrl +
      "?botId=" +
      encodeURIComponent(config.botId || "");

    btn.onclick = () => {
      iframe.style.display =
        iframe.style.display === "none" ? "block" : "none";
    };

    document.body.appendChild(btn);
    document.body.appendChild(iframe);
  }

  window.MaltechChatbot = {
    init: function (config) {
      if (!config || !config.chatUrl) {
        console.error("MaltechChatbot: chatUrl is required");
        return;
      }
      document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", () =>
            createChatUI(config)
          )
        : createChatUI(config);
    }
  };
})();
