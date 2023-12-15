import { Request, Response } from 'express';
import userModel from '../../db/models/user.model.js';
import response from '../../utils/response.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendEmail } from '../../utils/sendEmail.js';
import { emailConfirmationTemplate } from '../../utils/EmailConfirmationForm.js';
export const signup = async (req: Request, res: Response) => {
  const { userName, email, password } = req.body;
  if (await userModel.findOne({ email })) {
    return res
      .status(409)
      .json(
        response(
          'Please try another email.',
          undefined,
          'Email already exists.'
        )
      );
  }
  const { SALT_ROUND, EMAIL_SCRET_KEY } = process.env;
  if (!SALT_ROUND) {
    return res
      .status(404)
      .json(
        response(
          'Please try again later.',
          undefined,
          'Internal environment variable not found (SALT_ROUND not found).'
        )
      );
  }
  if (!EMAIL_SCRET_KEY) {
    return res
      .status(404)
      .json(
        response(
          'Please try again later.',
          undefined,
          'Internal environment variable not found (EMAIL_SCRET_KEY not found).'
        )
      );
  }
  const hashedPassword = await bcrypt.hash(password, +SALT_ROUND);
  const token = jwt.sign(
    {
      email,
    },
    EMAIL_SCRET_KEY
  );
  await sendEmail(
    email,
    'Activate Your Tellonym_Spammer Account',
    emailConfirmationTemplate(req, token)
  );

  const user = await userModel.create({
    userName,
    email,
    password: hashedPassword,
  });
  return res.status(201).json(response('success', user));
};
