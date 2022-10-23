import { registerComponent } from './component';
import { registerDirectives } from './directives';
import { registerProperty } from './property';
import { registerService } from './service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const appSetup = (app: any) => {
    registerComponent(app);
    registerService(app);
    registerProperty(app);
    registerDirectives(app);
};
