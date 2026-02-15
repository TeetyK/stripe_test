const stripe = Stripe("...");
const placeorder = async (data) => {
  try {
    const requestData = {
      product: {
        name: "test",
        price: 200,
        quantity: 1,
      },
      information: {
        name: data.name,
        address: data.address,
      },
    };

    const response = await axios.post("http://localhost:8000/api/checkout", requestData);
    const session = response.data;

    stripe.redirectToCheckout({
      sessionId: session.id,
    });
  } catch (error) {
    console.log("error", error);
  }

  return null;
};