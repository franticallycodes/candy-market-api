using System;
using System.Collections.Generic;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;

namespace CandyMarket.Api.Repositories
{
    public class CandyRepository : ICandyRepository
    {
        public IEnumerable<Candy> GetAllCandy()
        {
            throw new NotImplementedException();
        }

        public bool AddCandy(AddCandyDto newCandy)
        {
            throw new NotImplementedException();
        }

        public bool EatCandy(Guid candyIdToDelete)
        {
            throw new NotImplementedException();
        }
    }
}