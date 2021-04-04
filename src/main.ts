import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NoContentInterceptor } from './interceptors/NoContentInterceptor';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalInterceptors(new NoContentInterceptor());
	await app.listen(3000);
}
bootstrap();
