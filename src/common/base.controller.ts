import { LoggerService } from '../logger/logger.service';
import { Router, Response } from 'express';
import { IControllerRoute } from './route.interface';

export abstract class BaseController {
	private readonly _router: Router;
	constructor(private logger: LoggerService) {
		this._router = Router();
	}
	get router() {
		return this._router;
	}
	public send<T>(res: Response, message: T, code: number) {
		res.type('application/json');
		return res.status(code).json(message);
	}
	public ok<T>(res: Response, message: T) {
		return this.send<T>(res, message, 200);
	}
	public created(res: Response) {
		return res.sendStatus(201);
	}
	protected bindRoutes(routes: IControllerRoute[]) {
		for (const route of routes) {
			this.logger.log(`[${route.method}] ${route.path}`);
			const handler = route.func.bind(this);
			this.router[route.method](route.path, handler);
		}
	}
}