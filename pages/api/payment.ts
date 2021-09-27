const Craftgate = require("@craftgate/craftgate");

const craftgate = new Craftgate.Client({
  apiKey: process.env.NEXT_PUBLIC_CRAFTGATE_API_KEY,
  secretKey: process.env.NEXT_PUBLIC_CRAFTGATE_SECRET_KEY,
  baseUrl: "https://sandbox-api.craftgate.io",
});

const paymentDetails = {
  walletPrice: 0.0,
  installment: 1,
  conversationId: "456d1297-908e-4bd6-a13b-4be31a6e47d5",
  currency: Craftgate.Model.Currency.TRY,
  paymentGroup: Craftgate.Model.PaymentGroup.ListingOrSubscription,
  card: {
    cardHolderName: "Haluk Demir",
    cardNumber: "4132260000000003",
    expireYear: "2044",
    expireMonth: "07",
    cvc: "000",
  },
};

export default (req, res) => {
  const { items } = JSON.parse(req.body);

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  craftgate
    .payment()
    .createPayment({
      ...paymentDetails,
      price: totalPrice,
      paidPrice: totalPrice,
      items,
    })
    .then(function (result) {
      res.status(200).json(result);
    })
    .catch(function (err) {
      res.send(err);
    });
};
