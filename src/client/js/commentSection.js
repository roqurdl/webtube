import { async } from "regenerator-runtime";

const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleSubmit = async (e) => {
  e.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  await fetch(`/api/videos/${videoId}/comment`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ text }),
  });
  textarea.value = "";
  window.location.reload();
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}
