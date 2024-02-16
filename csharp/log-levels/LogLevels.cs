using System;

static class LogLine
{
    private static string[] CreateSplit(string logLine, char delimiter, char optionalDelimiterEnd = '\0') => String.IsNullOrEmpty(optionalDelimiterEnd.ToString()) ? logLine.Split(delimiter) : logLine.Split(delimiter, optionalDelimiterEnd);

    // Extracting message from input string.
    public static string Message(string logLine)
    {
        char delimiter = ':';
        string[] parts = CreateSplit(logLine, delimiter);
        return parts.Length > 1 ? parts[1].Trim() : string.Empty;
    }

    // Extracting log level from input string.
    public static string LogLevel(string logLine)
    {
        char delimiterStart = '[';
        char delimiterEnd = ']';
        string[] parts = CreateSplit(logLine, delimiterStart, delimiterEnd);
        return parts.Length > 2 ? parts[1].Trim().ToLower() : string.Empty;
    }
    /* Reformat error message from "[loglevel]: message" 
    to "message (loglevel)"*/
    public static string Reformat(string logLine) => $"{Message(logLine)} ({LogLevel(logLine)})";
}
