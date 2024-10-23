const TOAST_CONFIG = {
  duration: 3000,
  style: {
    fontSize: "18px",
  },
};

const SUCCESS_STYLE = {
  color: "#000",
  background: "#1fff6c",
};

const ERROR_STYLE = {
  color: "#000",
  background: "#ff4154",
};

const showToast = (message, isSuccess = true) => {
  Toastify({
    text: message,
    ...TOAST_CONFIG,
    style: {
      ...TOAST_CONFIG.style,
      ...(isSuccess ? SUCCESS_STYLE : ERROR_STYLE),
    },
  }).showToast();
};

const showTippy = (className, content, placement = "top") => {
  tippy(className, {
    content: content,
    placement: placement,
  });
};

const discordId = "algolkk";

document.querySelector(".discord").addEventListener("click", () => {
  navigator.clipboard
    .writeText(discordId)
    .then(() => {
      showToast("Copied!");
    })
    .catch(() => {
      showToast("Failed to copy", false);
    });
});

showTippy('.me', 'Party Chicken');
showTippy('.mi', 'Misskey.io');
showTippy('.steam', 'Steam');
showTippy('.discord', 'Discord', 'bottom');
showTippy('.github', 'Github', 'bottom');
showTippy('.twitch', 'Twitch', 'bottom');
