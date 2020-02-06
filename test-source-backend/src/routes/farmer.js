import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const farmersReturn = await req.context.models.Farmer.findAll();
  return res.send(farmersReturn);
});

router.get('/:nameOrDocument', async (req, res) => {
  const farmerReturn = await req.context.models.Farmer.findByNameOrDomument(
    req.params.nameOrDocument,
  );
  return res.send(farmerReturn);
});

export default router;
