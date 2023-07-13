import { config } from './config';
import express, { Express } from 'express';
import { ChattyService } from './setupServer';
import databaseConnection from './setupDatabase';

class Application {
  public initialize(): void {
    this.loadConfigurations();
    databaseConnection();
    const app: Express = express();
    const server: ChattyService = new ChattyService(app);
    server.start();
  }

  private loadConfigurations(): void {
    config.validate();
  }
}

const application: Application = new Application();
application.initialize();
