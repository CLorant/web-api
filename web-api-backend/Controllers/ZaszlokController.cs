using web_api_backend.Models;
using web_api_backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace web_api_backend.Controllers;

[ApiController]
[Route("[controller]")]
public class ZaszlokController : ControllerBase
{
    public ZaszlokController()
    {
    }

   [HttpGet]
public ActionResult<List<Zaszlo>> GetAll() =>
    ZaszlokService.GetAll();

[HttpGet("{id}")]
public ActionResult<Zaszlo> Get(int id)
{
    var zaszlo = ZaszlokService.Get(id);

    if(zaszlo == null)
        return NotFound();

    return zaszlo;
}

    [HttpPost]
public IActionResult Create(Zaszlo zaszlo)
{            
    ZaszlokService.Add(zaszlo);
    return CreatedAtAction(nameof(Get), new { id = zaszlo.Id }, zaszlo);
}

    [HttpPut("{id}")]
public IActionResult Update(int id, Zaszlo zaszlo)
{
    if (id != zaszlo.Id)
        return BadRequest();
           
    var existingZaszlo = ZaszlokService.Get(id);
    if(existingZaszlo is null)
        return NotFound();
   
    ZaszlokService.Update(zaszlo);           
   
    return NoContent();
}

    [HttpDelete("{id}")]
public IActionResult Delete(int id)
{
    var zaszlo = ZaszlokService.Get(id);
   
    if (zaszlo is null)
        return NotFound();
       
    ZaszlokService.Delete(id);
   
    return NoContent();
}
}