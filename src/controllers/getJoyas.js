import { selectAll, setHATEOAS } from "../models/joyasModel.js";

const getAllItems = async (req, res) => {
  try {
    const {limit, page, order_by} = req.query
    const items = await selectAll(limit, page, order_by);
    const HATEOAS = setHATEOAS(items)
    res.status(200).json(HATEOAS);
  } catch (error) {
    res.status(500).json({
      error: "No se ha podido procesar la solicitud",
    });
    console.error("No se ha podido procesar la solicitud:", error);
  }
};

export { getAllItems };
