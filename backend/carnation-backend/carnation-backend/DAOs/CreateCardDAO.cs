using System.ComponentModel.DataAnnotations;

namespace carnation_backend.DAOs
{
    public class CreateCardDAO
    {

        [Required(ErrorMessage = "Please enter account type.")]
        public int CardPin { get; set; }

        [Required(ErrorMessage = "Please enter validity.")]
        [Range(1,10)]
        public int Validity { get; set; }


        [Required(ErrorMessage = "Please enter accountid.")]
        public Guid AccountId { get; set; }
    }
}
