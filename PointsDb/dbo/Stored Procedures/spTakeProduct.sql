CREATE PROCEDURE [dbo].[spTakeProduct]
	@productId INT
AS
begin
	UPDATE [dbo].[Products] SET Amount = Amount-1 WHERE id = @productId;
end	