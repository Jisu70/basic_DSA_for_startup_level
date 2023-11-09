const express = require('express');
const app = express();
const port = 3000; // You can choose your preferred port

// Define a route to fetch reviews
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.findAll({
      attributes: ['reviewId', 'reviewTitle', 'reviewTags'],
    });

    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
