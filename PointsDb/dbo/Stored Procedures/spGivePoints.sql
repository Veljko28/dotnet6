CREATE PROCEDURE [dbo].[spGivePoints]
	@userId INT NOT NULL
AS
begin
	UPDATE [dbo].[Users] SET Points = Points+5 WHERE Id = @userId;
end