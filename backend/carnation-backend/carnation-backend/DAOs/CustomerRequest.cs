using System.ComponentModel.DataAnnotations;

namespace carnation_backend.DAOs
{
    public class CustomerRequest
    {

        [Required(ErrorMessage = "Please enter the name.")]
        public string name { get; set; }

        [Required(ErrorMessage = "Please enter account type.")]
        public string address { get; set; }

        [Required(ErrorMessage = "Please enter account type.")]
        [Range(0, 120)]
        public int age { get; set; }

        [Required(ErrorMessage = "Please enter the gender.")]
        public char gender { get; set; }
        public string city { get; set; }

        [StringLength(6)]
        public string pincode { get; set; }
        public string phone { get; set; }
    }
}
