﻿using carnation_backend.Data;
using carnation_backend.Models;
using Microsoft.EntityFrameworkCore;
using carnation_backend.Exceptions;

namespace carnation_backend.Repository
{
    public class AccountRepository : IAccountRepository
    {
        private readonly DatabaseApiDbContext dbContext;

        public AccountRepository(DatabaseApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public Account? CreateAccount(Account account, Customer owner)
        {
            if (!owner.IsActive)
                  throw new CustomerNotActiveException();
            account.AccountOwner = owner;
            try
            {
                dbContext.Accounts.Add(account);
                dbContext.SaveChanges();
            } catch (Exception)
            {
                throw;
            }

            return dbContext.Accounts
                .Where(a => a.Id == account.Id)
                .Include(a => a.AccountOwner)
                .Include(a => a.Cards)
                .FirstOrDefault();
        }

        public bool DeleteAccount(Guid id)
        {
            var account = dbContext.Accounts.Find(id);
            if (account == null)
            {
                throw new AccountNotFoundException();
            }

            dbContext.Accounts.Remove(account);
            dbContext.SaveChanges();

            return true;
        }
        public IEnumerable<Account> GetByCid(int cid)
        {
            var i=  dbContext.Accounts
                .Where(a => a.AccountOwnerId==cid)
                .ToList();
            return i;
        }
        public IEnumerable<Account?> GetAllAccounts()
        {
            return dbContext.Accounts
                .Include(a => a.AccountOwner)
                .Include(a => a.Cards)
                .ToList();
        }

        public Account? GetById(Guid id)
        {
            return dbContext.Accounts
                .Where(a => a.Id == id)
                .Include(a => a.AccountOwner)
                .Include(a => a.Cards)
                .FirstOrDefault();
        }

        public Account? UpdateBalance(Guid accountId, decimal amount, TransactionType transactionType)
        {
            var account = dbContext.Accounts.Find(accountId);
            if (account == null)
            {
                throw new AccountNotFoundException();
            }

            if (transactionType == TransactionType.DEPOSIT)
            {
                account.Balance += amount;
            } else if (transactionType == TransactionType.WITHDRAW)
            {
                // todo: add a insufficient balance exception if amount deducted is less than balance
                account.Balance -= amount;
            }

            dbContext.Accounts.Update(account);

            var accoun2t = dbContext.Accounts.Find(accountId);
            return GetById(accountId);
        }
    }
}
