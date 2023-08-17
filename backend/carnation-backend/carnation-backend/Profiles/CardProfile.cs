using AutoMapper;
using carnation_backend.Models;
using carnation_backend.DAOs;

namespace carnation_backend.Profiles
{
    public class CardProfile : Profile
    {
        public CardProfile() {
            CreateMap<CreateCardDAO,Card>();
        }
    }
}
