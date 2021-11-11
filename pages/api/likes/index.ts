import { PSDB } from "planetscale-node";

const PlanetScaleConnection = new PSDB("main");

const handler = async (req, res) => {
  const { method, body } = req;
  const { productId } = JSON.parse(body);

  switch (method) {
    case "POST": {
      if (!productId) {
        return res.status(400).json({ message: "Missing required field(s)" });
      }

      await PlanetScaleConnection.query(
        `INSERT INTO likes (productId) VALUES ('${productId}')`,
        null
      );
      return res.status(201).json({ productId });
    }
    case "DELETE": {
      if (!productId) {
        return res.status(400).json({ message: "Missing required field(s)" });
      }

      await PlanetScaleConnection.query(
        `delete from likes where productId="${productId}" limit 1;`,
        null
      );
      return res.status(200).json({ productId });
    }
    default:
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
