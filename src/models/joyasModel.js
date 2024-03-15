import pool from "../../db/conectionDb.js";
import format from "pg-format";

// const selectAll = async () => {
//   const querySQL = { text: "SELECT * FROM inventario" };
//   const response = await pool.query(querySQL);
//   return response.rows;
// };

const selectAll = async (limit = 10, page = 1, order_by = "id_ASC") => {
  const [attribute, direction] = order_by.split("_");
  const offset = (page - 1) * limit;
  const formatQuery = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    attribute,
    direction,
    limit,
    offset
  );
  console.log(formatQuery);
  const response = await pool.query(formatQuery);
  console.log("response", response);
  return response.rows;
};

const setHATEOAS = (joyas) => {
  const results = joyas
    .map((j) => {
      return {
        name: j.nombre,
        href: `/inventario/joyas/${j.id}`,
      };
    })
  const HATEOAS = results
  return HATEOAS;
};

export { selectAll, setHATEOAS };
