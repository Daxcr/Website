using Microsoft.AspNetCore.SignalR;
using System.Collections.Concurrent;

public class Socket : Hub
{
    private readonly ConnectionTracker tracker;
    private string passcode;
    public Socket(ConnectionTracker tracker)
    {
        this.tracker = tracker;
        try {
            passcode = File.ReadAllText("password.txt");
        } catch
        {
            passcode = "";
        }
    }
    public async Task SendMessage(string user, string message, string adminPasscode)
    {
        if ((user.ToLower().Trim() == "daxcr" && adminPasscode != passcode) || message.Trim() == "") return;
        await Clients.All.SendAsync("ReceiveMessage", user, message);
    }
    public override async Task OnConnectedAsync()
    {
        tracker.Add(Context.ConnectionId);
        await base.OnConnectedAsync();
    }
    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        tracker.Remove(Context.ConnectionId);
        await base.OnDisconnectedAsync(exception);
    }
}

public class ConnectionTracker
{
    public DateTime serverStart { get; } = DateTime.UtcNow;
    private readonly ConcurrentDictionary<string, bool> connections = new();

    public void Add(string connectionId) => connections[connectionId] = true;

    public void Remove(string connectionId) => connections.TryRemove(connectionId, out _);

    public int Count => connections.Count;
}