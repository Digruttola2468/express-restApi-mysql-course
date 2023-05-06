import { con } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await con.query("SELECT * FROM companidb.employee;");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

export const getOneEmployes = async (req, res) => {
  try {
    const [rows] = await con.query(
      "SELECT * FROM companidb.employee WHERE id=?",
      [req.params.id]
    );

    if (rows.length <= 0)
      return res.status(404).json({ message: "Employee not found" });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

export const createEmployes = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await con.query(
      "INSERT INTO `companidb`.`employee` (`name`, `salary`) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

export const updateEmployes = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, salary } = req.body;

    const [result] = await con.query(
      "UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employeed not found" });

    const [rows] = await con.query("SELECT * FROM employee WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

export const delateEmployes = async (req, res) => {
  try {
    const [result] = await con.query(
      "DELETE FROM `companidb`.`employee` WHERE (id = ?)",
      [req.params.id]
    );

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Employee not found" });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};
