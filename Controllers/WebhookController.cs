using Microsoft.AspNetCore.Mvc;

namespace Website.Controllers
{
    [ApiController]
    [Route("api/webhooks")]
    public class WebhookController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Receive()
        {
            try
            {
                Request.EnableBuffering();
                
                Request.Body.Position = 0;
                using (var reader = new StreamReader(Request.Body))
                {
                    var payload = await reader.ReadToEndAsync();

                    return Ok();
                }
            }
            catch
            {
                return StatusCode(500, "Error processing webhook");
            }
        }
    }
}