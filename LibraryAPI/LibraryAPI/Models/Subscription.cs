using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace LibraryAPI.Models
{
    public partial class Subscription
    {
        public int SubscriptionId { get; set; }
        public string NameProfile { get; set; }
        public int Price { get; set; }
        public int Number { get; set; }
    }
}
