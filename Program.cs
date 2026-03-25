using Microsoft.AspNetCore.HttpOverrides;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddControllers();
builder.Services.AddSignalR();
builder.Services.AddSingleton<ConnectionTracker>();

var app = builder.Build();

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();

app.MapControllers();
app.MapHub<Socket>("/websocket");
app.MapStaticAssets();
app.MapRazorPages().WithStaticAssets();

app.MapFallback(async context =>
{
    context.Response.StatusCode = 404;
    context.Response.ContentType = "text/html";
    await context.Response.SendFileAsync("wwwroot/404.html");
});

app.Run();