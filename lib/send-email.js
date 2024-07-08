export function sendEmail(data) {
  fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      console.log(err);
    });
}
