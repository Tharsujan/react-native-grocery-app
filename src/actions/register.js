// src/actions/handleSignup.js

export const handleSignup = async (username, email, password) => {
  try {
    const response = await fetch('http://192.168.1.27:5211/api/Auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Important for sending JSON data
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const responseBody = await response.text();
    console.log('Raw API Response:', responseBody);

    if (response.ok) {
      // Parse JSON if possible, otherwise return raw text
      try {
        return JSON.parse(responseBody);
      } catch {
        return {message: responseBody}; // Fallback for non-JSON
      }
    } else {
      throw new Error('Signup failed: ' + responseBody);
    }
  } catch (error) {
    // console.error('Signup Error:', error);
    throw error;
  }
};
