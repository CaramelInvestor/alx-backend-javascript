export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform asynchronous operation (e.g., fetch data from an API)
    // For demonstration, resolve with a mock response after a delay
    setTimeout(() => {
      const response = { data: "Mock API response" };
      resolve(response);
    }, 1000); // Resolves after 1 second (for demonstration)
  });
}
