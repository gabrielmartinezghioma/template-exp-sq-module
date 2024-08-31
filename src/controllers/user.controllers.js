import User from '../models/User.js';

const getAll = async (req, res) => {
  try {
    const results = await User.findAll();
    return res.json(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const result = await User.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByPk(id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.destroy({ where: { id } });
    if (!result) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [affectedRows, [updatedUser]] = await User.update(req.body, {
      where: { id },
      returning: true
    });
    if (affectedRows === 0) return res.sendStatus(404);
    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export {
  getAll,
  create,
  getOne,
  remove,
  update
};
