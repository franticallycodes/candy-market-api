-- Create a new table called '[Candy]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Candy]', 'U') IS NOT NULL
DROP TABLE [dbo].[Candy]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Candy]
(
    [Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY DEFAULT NEWID(), -- Primary Key column
    [Name] NVARCHAR(50) NOT NULL
);
GO