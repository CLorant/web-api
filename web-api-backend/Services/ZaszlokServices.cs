using web_api_backend.Models;

namespace web_api_backend.Services;

public static class ZaszlokService
{
    static List<Zaszlo> Zaszlos { get; }
    static int nextId = 5;
    static ZaszlokService()
    {
        Zaszlos = new List<Zaszlo>
        {
            new Zaszlo { Id = 1, Name = "magyar zászló", Price = 3499, Qty = 30, Flagimg ="/img/magyar.jpg"  },
            new Zaszlo { Id = 2, Name = "német zászló", Price = 4500, Qty = 20, Flagimg = "/img/nemet.jpg" },
            new Zaszlo { Id = 3, Name = "francia zászló", Price = 5099, Qty = 15, Flagimg ="/img/francia.jpg"  },
            new Zaszlo { Id = 4, Name = "angol zászló", Price = 6500, Qty = 25, Flagimg = "/img/angol.jpg" }
        };
    }

    public static List<Zaszlo> GetAll() => Zaszlos;

    public static Zaszlo? Get(int id) => Zaszlos.FirstOrDefault(p => p.Id == id);

    public static void Add(Zaszlo zaszlo)
    {
        zaszlo.Id = nextId++;
        Zaszlos.Add(zaszlo);
    }

    public static void Delete(int id)
    {
        var zaszlo = Get(id);
        if(zaszlo is null)
            return;

        Zaszlos.Remove(zaszlo);
    }

    public static void Update(Zaszlo zaszlo)
    {
        var index = Zaszlos.FindIndex(p => p.Id == zaszlo.Id);
        if(index == -1)
            return;

        Zaszlos[index] = zaszlo;
    }
}