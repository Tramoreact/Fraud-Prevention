// const Config = {
//   API_URL: 'https://fraud-detection-wv3z.onrender.com',
// };

// export default Config;

const Config = {
  API_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
};

export default Config;
