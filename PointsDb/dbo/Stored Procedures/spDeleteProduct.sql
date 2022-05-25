CREATE PROCEDURE [dbo].[spDeleteProduct]
	@productId INT
AS
begin
	DELETE FROM [dbo].[Products] WHERE id = @productId;
end