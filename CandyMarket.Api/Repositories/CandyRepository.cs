using System;
using System.Collections.Generic;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using System.Data.SqlClient;
using Dapper;


namespace CandyMarket.Api.Repositories
{
    public class CandyRepository : ICandyRepository
    {

        string _connectionString = "Server=localhost;Database=CandyMarket;Trusted_Connection=True;";

        public IEnumerable<Candy> GetAllCandy()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var allCandy = db.Query<Candy>("Select * from Candy");

                return allCandy.AsList();
            };
        }

        public bool AddCandy(AddCandyDto newCandy)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                //check if candy exists

                //var candyCheck = @"SELECT * from Candy
                //WHERE [Name] = @name";

                // if not, add to candy repo

                // then add to UserCandy 

                var sqlQuery = @"Insert into [dbo].[Candy]
                               ([Name]
                                [Id)
                               Values(
                                 @name
                                  @id)";

                return db.Execute(sqlQuery, newCandy) == 1;
            };
        }

        public bool EatCandy(int candyIdToDelete)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sqlQuery = @"delete from Candy 
                                   where [Id] = @id";

                var parameters = new { id = candyIdToDelete };

                return db.Execute(sqlQuery, parameters) == 1;
            };
        }
    }
}