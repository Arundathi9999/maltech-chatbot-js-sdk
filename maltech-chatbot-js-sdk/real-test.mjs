import ChatbotClient from "./src/index.js";



async function runTest() {
  console.log("🚀 Starting SDK end-to-end test...\n");

  const client = new ChatbotClient({
    baseUrl: "http://127.0.0.1:8000",
    adminEmail: "admin1@maltech.co"
  });

  console.log("✅ Client created");

  // 1. Admin login
  const loginRes = await client.login({
    email: "admin1@maltech.co",
    password: "test123"
  });
  console.log("✅ Login response:", loginRes);

  // 2. Chat
  const chatRes = await client.chat({
    message: "Hello, test message",
    userName: "SDK Tester",
    userEmail: "sdk@test.com",
    userPhone: "9999999999"
  });
  console.log("✅ Chat response:", chatRes);

  // 3. Feedback
  const feedbackRes = await client.submitFeedback({
    userEmail: "sdk@test.com",
    rating: "5",
    comments: "SDK test successful"
  });
  console.log("✅ Feedback response:", feedbackRes);

  console.log("\n🎉 SDK END-TO-END TEST PASSED");
}

runTest().catch(err => {
  console.error("❌ SDK TEST FAILED");
  console.error(err);
});

