CREATE PROCEDURE [dbo].[spGivePoints]
	@userId INT
AS
begin
	UPDATE [dbo].[Users] SET Points = Points+5 WHERE Id = @userId;
end