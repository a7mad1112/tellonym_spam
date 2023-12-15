import { Request, Response, NextFunction } from 'express';
import response from './response.js';

export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch((error: Error) =>
      res
        .status(400)
        .json(response('something went wront', undefined, error.message))
    );
