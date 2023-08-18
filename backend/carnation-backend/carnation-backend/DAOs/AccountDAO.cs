using carnation_backend.Models;
using System.ComponentModel.DataAnnotations;

namespace carnation_backend.DAOs
{
    /*public enum AccountType
    {
        Savings,
        Current,
        Loan
    }*/
    public class AccountDAO
    {
        [Required(ErrorMessage = "Please enter account type.")]
        public AccountType AType { get; set; }
        [Required(ErrorMessage = "Please enter account owner id (customer id)")]
        public int AccountOwnerId { get; set; }
    }
}
