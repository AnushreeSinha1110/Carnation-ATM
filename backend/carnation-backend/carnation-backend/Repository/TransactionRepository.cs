﻿using AutoMapper;
using carnation_backend.DAOs;
using carnation_backend.Data;
using carnation_backend.Exceptions;
using carnation_backend.Models;
using carnation_backend.Models.TransactionSubModel;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

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
        public IEnumerable<Transaction> GetTransaction(Guid accId)
        {
            return dbContext.Transactions.Where(c => c.Aid == accId || c.ToAid==accId);
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
            try { 
            var trnsc = _mapper.Map<Transaction>(transaction);
            var account = dbContext.Accounts.Find(transaction.Aid);
            if (account == null) { return  false; }
            var cus = dbContext.Customers.Find(account.AccountOwnerId);
            if (!cus.IsActive)
                return false;
            trnsc.Tid = Guid.NewGuid();
            trnsc.Timestamp = DateTime.Now;
            trnsc.Account = account;
            if(transaction.Type==TransactionType.DEPOSIT|| transaction.Type==TransactionType.WITHDRAW)
            accountRepository.UpdateBalance(transaction.Aid, transaction.Amount, transaction.Type);
            else
            {

                var toacc = dbContext.Accounts.Find(transaction.ToAid);
                if (toacc == null)
                    return false;
                var cus2 = dbContext.Customers.Find(toacc.AccountOwnerId);
                if(!cus2.IsActive) return false;
                if (transaction.Type == TransactionType.CHEQUE)
                    trnsc.IsApproved = false;
                else
                {
                    accountRepository.UpdateBalance(transaction.Aid, transaction.Amount, TransactionType.WITHDRAW);

                    accountRepository.UpdateBalance(new Guid(transaction.ToAid.ToString()), transaction.Amount, TransactionType.DEPOSIT);
                }
            }
            dbContext.Transactions.Add(trnsc);
            return (dbContext.SaveChanges())>0;
            } catch(AccountNotFoundException ) { return false; }
            catch (Exception ex) { return false; }


        }
        public bool approveCheque(Guid transactionId)
        {
            var cheque=dbContext.Transactions.Find(transactionId);
            if(cheque==null)
                return false;
           cheque.IsApproved = true;
            accountRepository.UpdateBalance(cheque.Aid, cheque.Amount, TransactionType.WITHDRAW);

            accountRepository.UpdateBalance(new Guid(cheque.ToAid.ToString()), cheque.Amount, TransactionType.DEPOSIT);
            return dbContext.SaveChanges() > 0;
        }
        public IEnumerable<Transaction> GetCheques()
        {
            return dbContext.Transactions.Where(c=>c.Type==TransactionType.CHEQUE&&c.IsApproved==false);
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
