import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error';
import { LoggerService } from '../logger/logger.service';

export class UserController extends BaseController {
	constructor(logger: LoggerService) {
		super(logger);
		this.bindRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login }
		])
	}
	login(req: Request, res: Response, next: NextFunction) {
		//this.ok(res, 'login');
		next(new HTTPError(401, 'login error', 'login'));
	}
	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'register');
	}
}