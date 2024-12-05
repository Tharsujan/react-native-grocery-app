export const handleLogin = async (email, password) => {
  try {
    const response = await fetch('http://192.168.1.27:5211/api/Auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Important for sending JSON data
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json(); // Parse the response body as JSON
    return data; // Return the API response data
  } catch (error) {
    //console.error('Login Error:', error);
    throw error; // Propagate error for further handling in the component
  }
};

export const refreshToken = async refreshToken => {
  try {
    const response = await fetch(
      'http://192.168.1.27:5211/api/Auth/refresh-token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Required for JSON data
        },
        body: JSON.stringify({
          refreshToken, // Pass the refresh token in the request body
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Refresh token failed');
    }

    const data = await response.json(); // Parse the response body as JSON
    return data; // Return the new tokens
  } catch (error) {
    console.error('Refresh Token Error:', error);
    throw error; // Propagate error for further handling
  }
};
