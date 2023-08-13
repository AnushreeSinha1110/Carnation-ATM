namespace carnation_backend.DAOs
{
    public record struct CreateCardDAO(int CardPin, int Validity, Guid AccountId);
}
