public class LogLevels {
    
    public static String message(String logLine) {
        return logLine.split(":")[1].stripLeading().stripTrailing();
    }

    public static String logLevel(String logLine) {
        return logLine.substring(logLine.indexOf("[")+1, logLine.indexOf("]")).stripLeading().stripTrailing().toLowerCase();
    }

    public static String reformat(String logLine) {
        return "%s (%s)".formatted(message(logLine), logLevel(logLine));
    }
}
