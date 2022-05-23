CREATE PROCEDURE [dbo].[spGetUserById]
	@Id INT 
AS
begin 
	SELECT * FROM Users WHERE Users.Id = @Id;
end	