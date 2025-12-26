import { httpRequest } from "./http.js";

class ChatbotClient {
  constructor({ baseUrl, adminEmail }) {
    this.baseUrl = baseUrl;
    this.adminEmail = adminEmail;
  }

  async login({ email, password }) {
    const res = await fetch(`${this.baseUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      throw new Error(`Login failed: ${res.status}`);
    }

    return res.json();
  }

  async chat({ message, userName, userEmail, userPhone }) {
    const res = await fetch(`${this.baseUrl}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        admin_email: this.adminEmail,
        message,
        user_name: userName,
        user_email: userEmail,
        user_phone: userPhone
      })
    });

    if (!res.ok) {
      throw new Error(`Chat failed: ${res.status}`);
    }

    return res.json();
  }

  async submitFeedback({ userEmail, rating, comments }) {
    const res = await fetch(`${this.baseUrl}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_email: userEmail,
        rating,
        comments
      })
    });

    if (!res.ok) {
      throw new Error(`Feedback failed: ${res.status}`);
    }

    return res.json();
  }
}

export default ChatbotClient;
