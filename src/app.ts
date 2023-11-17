import express, { Express } from 'express'
import { Server } from 'http';
import { ExeptionFilter } from './errors/exeption.filter';
import { ILogger } from './logger/logger.interface';
import { UserController } from './users/users.controller';

export class App {
	app: Express;
	server: Server;
	port: Number;
	logger: ILogger;
	userController: UserController;
	exeptionFilter: ExeptionFilter;

	constructor(logger: ILogger, userController: UserController, exeptionFilter: ExeptionFilter) {
		this.app = express();
		this.port = 8000;
		this.logger = logger;
		this.userController = userController;
		this.exeptionFilter = exeptionFilter;
	}

	useRoutes() {
		this.app.use('/users', this.userController.router);
	}

	useExeprionFilters() {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
	}
	public async init() {
		this.useRoutes();
		this.useExeprionFilters();
		this.server = this.app.listen(this.port);
		this.logger.log(`server start on http//localhost:${this.port}`);
	}
}