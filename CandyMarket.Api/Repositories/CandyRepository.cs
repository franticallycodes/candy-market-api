using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using Dapper;

namespace CandyMarket.Api.Repositories
{
    public class CandyRepository : ICandyRepository
    {
        string _connectionString = "Server=localhost;Database=CandyMarket;Trusted_Connection=True;";
        public IEnumerable<Candy> GetAllCandy()
        {
            using(var db = new SqlConnection(_connectionString))
            {
                var cmd = @"SELECT *
                            FROM Candy";
                var candy = db.Query<Candy>(cmd);
                return candy;
            }}

        public bool AddCandy(AddCandyDto newCandy)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var cmd = @"INSERT INTO [Candy]([Name])
                            VALUES(@Name)";


                return db.Execute(cmd, newCandy) == 1;
                //return db.Execute(cmd, new { Name = newCandy.Name, Type = newCandy.Type}}) == 1;
                //@"INSERT INTO [Candy]([Name], [type])
                //            VALUES(@Name, @Type)";

            }
        }

        public bool EatCandy(Guid candyIdToDelete)
        {
            throw new NotImplementedException();
        }
    }
}