import fetch from 'node-fetch';

export default async function handler(req, res) {
  const auth = process.env.NEXT_PUBLIC_PRETIX_API;
  const headers = {
    'Accept': 'application/json, text/javascript',
    'Authorization': `Token ${auth}`
  };

  try {
    const response = await fetch('https://pretix.eu/api/v1/taz-zuzalu/events/ticket/subevents/', {
      method: 'GET',
      headers
    });
    console.log(response)
    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}