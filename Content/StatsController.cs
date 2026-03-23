using Microsoft.AspNetCore.Mvc;

public class StatsController : ControllerBase
{
    private readonly ConnectionTracker tracker;

    public StatsController(ConnectionTracker tracker)
    {
        this.tracker = tracker;
    }
    string getUptime()
    {
        TimeSpan distance = DateTime.UtcNow - tracker.serverStart;
        return $"{distance.Hours}h {distance.Minutes}m {distance.Seconds}s";
    }

    [HttpGet("api/stats")]
    public IActionResult GetStats() => Ok(new {
        connectedClients = tracker.Count,
        serverUptime = getUptime(),
        serverTime = DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")
    });
}