using AutoMapper;
using carnation_backend.DAOs;
using carnation_backend.Data;
using carnation_backend.Models;
using carnation_backend.Models.TransactionSubModel;
using Microsoft.AspNetCore.Mvc;

namespace carnation_backend.Repository
{
    public class TransactionRepository : ITransactionRepository
    {
        private readonly DatabaseApiDbContext dbContext;
        private readonly IMapper _mapper;
        private readonly IAccountRepository accountRepository;

        public TransactionRepository(DatabaseApiDbContext dbContext, IMapper mapper, IAccountRepository accountRepository)
        {
            this.dbContext = dbContext;
            this._mapper = mapper;
            this.accountRepository = accountRepository;
        }
        public Transaction GetTransaction(Guid accId)
        {
            return dbContext.Transactions.Find(accId);
        }

        public IEnumerable<Transaction> GetAll()
        {
            return dbContext.Transactions.ToList();
        }

        public bool AddTransaction(TransactionRequestDAO transaction)
        {
            /*var trnsc = new Transaction()
            {
                Aid = transaction.Aid,
                Amount = transaction.Amount,
                Type = transaction.Type,
            };*/
            var trnsc = _mapper.Map<Transaction>(transaction);
            var account = dbContext.Accounts.Find(transaction.Aid);
            trnsc.Tid = Guid.NewGuid();
            trnsc.Account = account;

            accountRepository.UpdateBalance(transaction.Aid, transaction.Amount, transaction.Type);

            dbContext.Transactions.Add(trnsc);
            return (dbContext.SaveChanges())>0;
           
        }
        public bool DeleteTransaction(Guid transactionId)
        {
            var transaction = dbContext.Transactions.Find(transactionId);
            if (transaction != null)
            {
                dbContext.Transactions.Remove(transaction);
                return dbContext.SaveChanges() > 0;
            }
            return false;
        }
    }
}
