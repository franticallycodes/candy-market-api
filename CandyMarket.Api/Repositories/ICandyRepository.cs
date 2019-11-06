using System;
using System.Collections.Generic;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;

namespace CandyMarket.Api.Repositories
{
    public interface ICandyRepository
    {
        IEnumerable<Candy> GetAllCandy();
        bool AddCandy(AddCandyDto newCandy);
        bool EatCandy(int candyIdToDelete);
    }
}