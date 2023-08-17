namespace carnation_backend.DAOs
{
    public record struct TransactionRequestDAO(Guid Aid, decimal Amount, string Type);
}
