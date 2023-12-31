﻿using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace carnation_backend.Models
{
    public enum TransactionType
    {
        DEPOSIT,
        WITHDRAW,
        TRANSFER,
        CHEQUE
    }

    public class Transaction
    {
        [Key]
        public Guid Tid { get; set; }

        
        public Guid Aid { get; set; }
        public Account? Account { get; set; }
        public Guid? ToAid { get; set; }

        public DateTime Timestamp { get; set; }
        public decimal Amount { get; set; }
        public TransactionType Type { get; set; }
        [DefaultValue(true)]
        public bool IsApproved { get; set; } = true;

    }
}
