import { createRouter } from '@/configs/server.config';
import filesRouter from './files/files.routes';

const router = createRouter();

router.use('/files', filesRouter);

export default router;
