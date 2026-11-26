
function send(command) {
  const status = document.getElementById("status");

  status.innerText = "● SENDING: " + command;

  if (window.cyberDeckSend) {
    window.cyberDeckSend(command);
  } else {
    status.innerText = "● DASHBOARD READY - PC BRIDGE OFFLINE";
    console.log("Command:", command);
  }
}

function sendCustomText() {
  const text = document.getElementById("textInput").value;

  if (!text.trim()) {
    alert("Enter some text first!");
    return;
  }

  if (text.length > 120) {
    alert("Maximum 120 characters.");
    return;
  }

  send("TYPE:" + text);
}

function openCustomURL() {
  let url = document.getElementById("urlInput").value.trim();

  if (!url) {
    alert("Enter a website URL.");
    return;
  }

  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  try {
    const parsed = new URL(url);

    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new Error("Invalid protocol");
    }

    send("URL:" + parsed.href);

  } catch {
    alert("Please enter a valid website URL.");
  }
}

function checkConnection() {
  document.getElementById("connection").innerText =
    "PC bridge connection is not configured yet.";
}
