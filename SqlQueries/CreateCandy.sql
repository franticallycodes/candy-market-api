-- Create a new table called '[Candy]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Candy]', 'U') IS NOT NULL
DROP TABLE [dbo].[Candy]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Candy]
(
    [Id] UNIQUEIDENTIFIER PRIMARY KEY default NEWID(),
    [Name] NVARCHAR(50) NOT NULL,
    -- Specify more columns here
);
GO

INSERT INTO Candy(Name)
VALUES ('Reeses'),
('Twix'),
('Starburst'),
('Now And Later'),
('Jawbreaker'),
('Lemon Head')