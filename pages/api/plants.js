import Plant from '../../models/Plant';
import dbConnect from '../../lib/dbConnect';

export async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  await dbConnect();
  if (req.method === 'GET') {
    const plants = await Plant.find({});
    res.status(200).json({ plants });
  }
}
export default handler;
