using AutoMapper;
using carnation_backend.DAOs;
using carnation_backend.Models;

namespace carnation_backend
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CustomerRequest, Customer>();
            CreateMap<TransactionRequestDAO, Transaction>();

        }
    }
}
