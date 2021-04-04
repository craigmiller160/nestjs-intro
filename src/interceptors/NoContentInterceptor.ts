import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class NoContentInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const res = context.switchToHttp().getResponse();
		console.log('Res', res.body); // TODO delete this
		if (!res.body) {
			res.status(204);
		}
		return next.handle();
	}
}
