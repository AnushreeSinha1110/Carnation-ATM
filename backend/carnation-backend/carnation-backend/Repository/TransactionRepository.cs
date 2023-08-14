﻿using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Models.TransactionSubModel;
using Microsoft.AspNetCore.Mvc;

namespace carnation_backend.Repository
{
    public class TransactionRepository
    {
        private readonly DatabaseApiDbContext dbContext;

        public TransactionRepository(DatabaseApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public Transaction GetTransaction(Guid accId)
        {
            return dbContext.Transactions.Find(accId);
        }

        public IEnumerable<Transaction> GetAll()
        {
            return dbContext.Transactions.ToList();
        }

        public bool AddTransaction(TransactionRequestModel transaction)
        {
            var trnsc = new Transaction()
            {
                Aid = transaction.Aid,
                Amount = transaction.Amount,
                Type = transaction.Type,
            };
            dbContext.Transactions.Add(trnsc);
            return (dbContext.SaveChanges())>0;
           
        }
    }
}
