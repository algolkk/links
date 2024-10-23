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