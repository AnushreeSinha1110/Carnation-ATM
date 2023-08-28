using System.Runtime.Serialization;

namespace carnation_backend.Exceptions
{
    public class CustomerNotActiveException : Exception
    {
        public CustomerNotActiveException()
        {
        }

        public CustomerNotActiveException(string? message) : base(message)
        {
        }

        public CustomerNotActiveException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected CustomerNotActiveException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
