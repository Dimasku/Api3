using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
namespace Api2.Models
{
    public class PersonContext : DbContext

    {
        public DbSet<Person> Personas { get; set; }

        public PersonContext(): base("con") { }
    }
}