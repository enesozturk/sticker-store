import { PSDB } from "planetscale-node";

const PlanetScaleConnection = new PSDB("main");

const handler = async (req, res) => {
  const { method, query } = req;

  switch (method) {
    case "GET": {
      const { id } = query;
      try {
        const [rows, _] = await PlanetScaleConnection.query(
          `select count(*) as count from likes where productId = "${id}";`,
          null
        );
        res.statusCode = 200;
        return res.status(200).json(rows);
      } catch (e) {
        return res.status(500).json({ message: e.message });
      }
    }
    default:
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
