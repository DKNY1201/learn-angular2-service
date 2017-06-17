export class LoggingService {
    loggingToConsole(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}