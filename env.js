window.env = {
  API_URL: ''
};

window.giveBadgeToUser = async function(userName, badgeName) {
   
  const payload = {
      "user_name": userName,
      "badge_name": badgeName
    };

    try {
      const response = await fetch(window.env.API_URL + '/api/badge/give', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const message = await response.text();
        console.log('Success:', message);
      } else {
        const errorText = await response.text();
        console.error('Error:', errorText);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  }