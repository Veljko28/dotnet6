CREATE PROCEDURE [dbo].[spGetUserById]
	@Id INT NOT NULL
AS
begin 
	SELECT * FROM Users WHERE Users.Id = @Id;
end	